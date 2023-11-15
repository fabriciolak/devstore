import { tw } from '@/utils/tw-merge'

type SkeletonProps = React.ComponentProps<'div'>

export function Skeleton({ className, children, ...props }: SkeletonProps) {
  return (
    <div
      className={tw('bg-zinc-50/10 animate-pulse rounded-md', className)}
      {...props}
    >
      {children}
    </div>
  )
}
