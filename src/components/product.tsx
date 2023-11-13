import React from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import Link, { type LinkProps } from 'next/link'
import { tw } from '@/utils/tw-merge'

type ProductProps = LinkProps &
  React.HtmlHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode
  }

type ImageProps = NextImageProps

interface InfoProps extends React.ComponentProps<'div'> {
  productName: string
  productPrice: number
}

export function Product({ href, className, children, ...props }: ProductProps) {
  return (
    <Link
      href={href}
      className={tw(
        'relative group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-baseline',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

function Image({ src, alt, width, height, ...props }: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className="group-hover:scale-105 transition-transform duration-500"
      width={width}
      height={height}
      quality={100}
      priority
      {...props}
    />
  )
}

function Info({ productName, productPrice, className }: InfoProps) {
  return (
    <div
      className={tw(
        'absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280x] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5',
        className,
      )}
    >
      <span className="text-sm truncate">{productName}</span>
      <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
        R$ {productPrice}
      </span>
    </div>
  )
}

Product.displayName = 'Product'
Product.Image = Image
Product.Info = Info
