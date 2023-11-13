import Image from 'next/image'

interface pageProps {
  params: {
    slug: string
  }
}

export default function Product({ params }: pageProps) {
  return (
    <div className="relative grid max-h-[780px] grid-cols-3">
      <div className="col-span-2 overflow-hidden flex items-baseline">
        <Image
          src="/moletom-never-stop-learning.png"
          alt={params.slug}
          className=""
          width={1019}
          height={1019}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Camiseta Dowhile 2022
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Camiseta fabricada com 100% de algodão.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 hover:bg-violet-600 px-5 py-2.5 font-semibold">
            69
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de R$ 10,75
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

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 font-semibold text-white"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
