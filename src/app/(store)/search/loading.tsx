import React from 'react'
import { Skeleton } from '@/components/skeleton'
import { CurrentSearch } from './current-search'

export default function StoreLoading() {
  return (
    <div className="flex flex-col gap-4">
      <React.Suspense fallback={<Skeleton className="h-4 w-64" />}>
        <CurrentSearch />
      </React.Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[496px] w-full" />
        <Skeleton className="h-[496px] w-full" />
        <Skeleton className="h-[496px] w-full" />
        <Skeleton className="h-[496px] w-full" />
        <Skeleton className="h-[496px] w-full" />
        <Skeleton className="h-[496px] w-full" />
      </div>
    </div>
  )
}
