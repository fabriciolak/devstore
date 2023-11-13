import React from 'react'
import { Product } from '@/components/product'
import { api } from '@/data/api'
import { ProductType } from '@/data/types/product'

async function getFeaturedProduct(): Promise<ProductType[]> {
  const response = await api('/product/featured', {
    next: {
      revalidate: 60 * 60 * 1, // 1 hour
    },
  })
  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightdProduct, ...products] = await getFeaturedProduct()

  return (
    <div className="grid max-h-[780px] grid-cols-9 grid-rows-6 gap-6">
      <Product href={`/product/${highlightdProduct.slug}`}>
        <Product.Image
          src={highlightdProduct.image}
          alt={highlightdProduct.title}
          width={920}
          height={920}
        />

        <Product.Info
          productName={highlightdProduct.title}
          productPrice={highlightdProduct.price}
        />
      </Product>

      {products.map((product) => {
        return (
          <Product
            className="col-span-3 row-span-3"
            href={`/product/${product.slug}`}
            key={product.id}
          >
            <Product.Image
              src={product.image}
              alt={product.title}
              width={920}
              height={920}
            />

            <Product.Info
              productName={product.title}
              productPrice={product.price}
              className="bottom-10 right-10"
            />
          </Product>
        )
      })}
    </div>
  )
}
