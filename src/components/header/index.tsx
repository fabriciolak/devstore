import Link from 'next/link'
import Image from 'next/image'
import { Cart } from './cart'
import { Search } from './search'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-zinc-50">
          Devstore
        </Link>

        <Search />
      </div>

      <nav className="flex items-center gap-4">
        <Cart />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/fabriciolak.png"
            alt="fabriciolak"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full"
          />
        </Link>
      </nav>
    </header>
  )
}
