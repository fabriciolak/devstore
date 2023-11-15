import { api } from '@/data/api'
import { ProductType } from '@/data/types/product'
import { env } from '@/env'
import { ImageResponse } from 'next/server'
import { zinc } from 'tailwindcss/colors'

export const runtime = 'edge'

export const alt = 'About Acme'
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
        <img
          src={productImageURL}
          alt={product.description}
          style={{ width: '720px' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '480px',
            padding: '0 32px',
          }}
        >
          <h1 style={{ fontSize: 64, fontWeight: 700, color: zinc[100] }}>
            {product.title}
          </h1>
          <span style={{ fontSize: 24, fontWeight: 500, color: zinc[300] }}>
            {product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
          <span
            style={{
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
  )
}
