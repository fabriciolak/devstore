import React from 'react'
import { Product } from '@/app/components/product'

export default async function Home() {
  return (
    <div className="grid max-h-[780px] grid-cols-9 grid-rows-6 gap-6">
      <Product href="/">
        <Product.Image
          src="/camiseta-dowhile-2022.png"
          alt="camiseta-dowhile-2022"
          width={920}
          height={920}
        />

        <Product.Info productName="Camiseta Dowhile 2022" productPrice={89} />
      </Product>

      <Product className="col-span-3 row-span-3" href="/">
        <Product.Image
          src="/moletom-ia-p-devs.png"
          alt="moletom-ia-p-devs"
          width={920}
          height={920}
        />

        <Product.Info
          productName="Camiseta Dowhile 2022"
          productPrice={129}
          className="bottom-10 right-10"
        />
      </Product>

      <Product className="col-span-3 row-span-3" href="/">
        <Product.Image
          src="/moletom-never-stop-learning.png"
          alt="moletom-never-stop-learning"
          width={920}
          height={920}
        />

        <Product.Info
          productName="Camiseta Dowhile 2022"
          productPrice={129}
          className="bottom-10 right-10"
        />
      </Product>
    </div>
  )
}
