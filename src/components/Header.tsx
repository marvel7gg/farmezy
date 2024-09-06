'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isSignInPage = pathname === '/signin'
  const isAboutPage = pathname === '/about'
  const isCartPage = pathname === '/cart'

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ease-in-out ${
        isScrolled ? 'shadow-md' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-[#4A4A4A]">
          FARMEZY
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {!isSignInPage && (
            <Link href="/signin" className="text-lg text-[#4A4A4A] hover:underline">
              Sign in
            </Link>
          )}
          <Link href="/products" className="text-lg text-[#4A4A4A] hover:underline">
            Browse Products
          </Link>
          {!isAboutPage && (
            <Link href="/about" className="text-lg text-[#4A4A4A] hover:underline">
              About us
            </Link>
          )}
          {!isCartPage && (
            <Link href="/cart" className="text-[#4A4A4A]">
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </Link>
          )}
        </nav>
        <button
          className="md:hidden text-[#4A4A4A] z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      {/* Search bar */}
      {!isSignInPage && (
        <div className="container mx-auto px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A4A4A]"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-white z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-20 flex flex-col space-y-6">
              {!isSignInPage && (
                <Link href="/signin" className="text-2xl text-[#4A4A4A] hover:underline">
                  Sign in
                </Link>
              )}
              <Link href="/products" className="text-2xl text-[#4A4A4A] hover:underline">
                Browse Products
              </Link>
              {!isAboutPage && (
                <Link href="/about" className="text-2xl text-[#4A4A4A] hover:underline">
                  About us
                </Link>
              )}
              {!isCartPage && (
                <Link href="/cart" className="text-2xl text-[#4A4A4A] hover:underline">
                  Cart
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}