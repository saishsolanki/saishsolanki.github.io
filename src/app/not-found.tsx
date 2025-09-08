'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center min-h-[60vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-9xl font-bold text-primary/20"
        >
          404
        </motion.div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Don&apos;t worry, let&apos;s get you back on track.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8"
        >
          <p className="text-sm text-muted-foreground">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <Button variant="link" size="sm" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="link" size="sm" asChild>
              <Link href="/projects">Projects</Link>
            </Button>
            <Button variant="link" size="sm" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="link" size="sm" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}