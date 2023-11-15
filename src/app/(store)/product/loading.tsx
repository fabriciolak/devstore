import { Skeleton } from '@/components/skeleton'

export default function ProductLoading() {
  return (
    <div className="grid max-h-[780px] grid-cols-3">
      <Skeleton className="col-span-2 h-[780px]" />

      <div className="h-[780px] px-12">
        <div className="h-full flex flex-col items-center justify-center">
          <Skeleton className="w-full h-9" />
          <Skeleton className="w-full h-4 mt-2" />
          <div className="w-full flex items-center gap-3 mt-8">
            <Skeleton className="inline-block w-40 h-11 rounded-full" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="w-full mt-8">
            <Skeleton className="w-full h-4" />
            <div className="flex gap-2 mt-2">
              <Skeleton className="inline-block w-14 h-11 rounded-full" />
              <Skeleton className="inline-block w-14 h-11 rounded-full" />
              <Skeleton className="inline-block w-14 h-11 rounded-full" />
            </div>
          </div>

          <Skeleton className="inline-block w-full h-12 rounded-full mt-8" />
        </div>
      </div>
    </div>
  )
}
