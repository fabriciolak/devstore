import { api } from '@/data/api'
import { ProductType } from '@/data/types/product'
import { env } from '@/env'
import { ImageResponse } from 'next/server'
import { zinc, violet } from 'tailwindcss/colors'

export const runtime = 'edge'

export const alt = 'Dev Store | Compre já'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProduct(slug: string): Promise<ProductType> {
  const response = await api(`/product/${slug}`, {
    next: {
      revalidate: 60 * 60 * 1, // 1 hour
    },
  })
  const product = await response.json()

  return product
}

export default async function Image({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_BASE_URL).toString()

  const interBold = fetch(
    new URL('@/fonts/Inter-Bold.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())

  const interMedium = fetch(
    new URL('@/fonts/Inter-Medium.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '720px',
            justifyContent: 'center',
          }}
        >
          <img
            src={productImageURL}
            alt={product.description}
            style={{ width: '120%', marginTop: 64 }}
          />
        </div>

        <div
          style={{
            width: '480px',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 32px',
          }}
        >
          <div
            style={{
              width: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: violet[500],
              padding: '8px',
              borderRadius: '8px',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter Medium',
                fontSize: 24,
                fontWeight: 500,
                color: zinc[300],
              }}
            >
              Compre já
            </span>
          </div>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: zinc[100],
            }}
          >
            {product.title}
          </h1>
          <span
            style={{
              fontFamily: 'Inter Medium',
              fontSize: 24,
              fontWeight: 500,
              color: zinc[300],
            }}
          >
            {product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span
            style={{
              fontFamily: 'Inter Medium',
              fontSize: 16,
              fontWeight: 500,
              color: zinc[400],
              marginTop: '8px',
            }}
          >
            {product.description}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter Bold',
          data: await interBold,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'Inter Medium',
          data: await interMedium,
          style: 'normal',
          weight: 500,
        },
      ],
    },
  )
}
