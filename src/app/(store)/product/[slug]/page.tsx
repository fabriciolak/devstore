import Image from 'next/image'
import { Metadata } from 'next'
import { api } from '@/data/api'
import { ProductType } from '@/data/types/product'
import { AddToCartButton } from '@/components/add-to-cart-button'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<ProductType> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60 * 1, // 1 hour
    },
  })

  const product = await response.json()

  return product
}

export async function generateStaticParams() {
  const response = await api('/products/featured')
  const produtcs: ProductType[] = await response.json()

  return produtcs.map((product) => {
    return {
      slug: product.slug,
    }
  })
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export default async function Product({ params }: ProductProps) {
  const product = await getProduct(params.slug)

  const priceWithCurrency = product.price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  })

  const installmentPrice = (product.price / 12).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div className="relative grid max-h-[780px] grid-cols-3">
      <div className="col-span-2 overflow-hidden flex items-baseline justify-center">
        <Image
          src={product.image}
          alt={product.title}
          className="object-cover"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 hover:bg-violet-600 px-5 py-2.5 font-semibold">
            {priceWithCurrency}
          </span>
          <span className="text-sm text-zinc-400">
            Em até 12x de {installmentPrice} sem juros
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold ">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 hover:border-zinc-600 bg-zinc-800 hover:bg-zinc-900 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 hover:border-zinc-600 bg-zinc-800 hover:bg-zinc-900 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 hover:border-zinc-600 bg-zinc-800 hover:bg-zinc-900 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 hover:border-zinc-600 bg-zinc-800 hover:bg-zinc-900 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <AddToCartButton productId={product.id} />
      </div>
    </div>
  )
}
