import { Product } from '@/components/product'
import { api } from '@/data/api'
import { ProductType } from '@/data/types/product'
import { redirect } from 'next/navigation'

async function getProduct(query: string): Promise<ProductType[]> {
  const response = await api(`/product/search?q=${query}`, {
    next: {
      revalidate: 60 * 60 * 1, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export default async function Search({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const query = searchParams.q

  if (!query) {
    redirect('/')
  }

  const products = await getProduct(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-small">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product, i) => {
          return (
            <div key={product.id}>
              <Product href={`/product/${product.slug}`}>
                <Product.Image
                  src={product.image}
                  alt={product.title}
                  width={920}
                  height={920}
                />

                <Product.Info
                  productName={product.title}
                  productPrice={product.price}
                />
              </Product>
            </div>
          )
        })}
      </div>
    </div>
  )
}
