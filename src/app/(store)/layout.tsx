import React from 'react'
import { Header } from '../components/Header'

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      
      {children}
    </div>
  )
}