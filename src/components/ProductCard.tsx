'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#4A4A4A] mb-2">{name}</h3>
        <p className="text-[#4A4A4A] mb-4">${price.toFixed(2)}</p>
        <Link
          href={`/products/${id}`}
          className="bg-white text-[#4A4A4A] border border-[#4A4A4A] px-4 py-2 rounded hover:bg-[#4A4A4A] hover:text-white transition-colors inline-block"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}