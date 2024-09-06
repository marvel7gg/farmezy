'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import ProductList from '@/components/ProductList'

const products = [
  { id: '1', name: 'Organic Apples', price: 2.99, image: '/placeholder.svg?height=200&width=300' },
  { id: '2', name: 'Fresh Milk', price: 3.49, image: '/placeholder.svg?height=200&width=300' },
  { id: '3', name: 'Free-Range Eggs', price: 4.99, image: '/placeholder.svg?height=200&width=300' },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <motion.div 
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-[#4A4A4A] mb-8">Our Products</h1>
          <ProductList products={products} />
        </motion.div>
      </main>
      <footer className="bg-white py-4">
        <div className="container mx-auto px-4 text-center text-[#4A4A4A]">
          All Rights Reserved
        </div>
      </footer>
    </div>
  )
}