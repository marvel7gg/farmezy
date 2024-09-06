'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Farmezy Hero Image"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2 mt-8 md:mt-0 md:ml-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#4A4A4A] mb-4">
                Empowering Farmers with Direct Access to the Market
              </h1>
              <p className="text-xl text-[#4A4A4A] mb-6">
                Harness our tools to connect, sell, and thrive in today&apos;s competitive market.
              </p>
              <div className="flex space-x-4">
                <Link href="/products">
                  <motion.button 
                    className="bg-white text-[#4A4A4A] border border-[#4A4A4A] px-6 py-2 rounded hover:bg-[#4A4A4A] hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    BUY
                  </motion.button>
                </Link>
                <motion.button 
                  className="bg-white text-[#4A4A4A] border border-[#4A4A4A] px-6 py-2 rounded hover:bg-[#4A4A4A] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SELL
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section 
          className="bg-[#F5F5F5] py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A] mb-4">YieldShare</h2>
            <p className="text-xl text-[#4A4A4A] mb-2">Stability for both farmers and traders.</p>
            <p className="text-xl text-[#4A4A4A] mb-2">Seamless transactions without intermediaries.</p>
            <p className="text-xl text-[#4A4A4A] mb-6">Strengthening relationships within the agricultural community.</p>
            <motion.button 
              className="bg-white text-[#4A4A4A] border border-[#4A4A4A] px-6 py-2 rounded hover:bg-[#4A4A4A] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button>
          </div>
        </motion.section>
      </main>

      <NewsletterSignup />

      <Footer />
    </div>
  )
}