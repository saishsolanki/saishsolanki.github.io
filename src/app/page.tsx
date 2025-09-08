'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center space-y-8"
        >
          <motion.div
            variants={fadeIn}
            className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20"
          >
            <Image
              src="/images/My Pic.jpg"
              alt="Saish Solanki"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Saish Solanki
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Cybersecurity Professional | IT Security Coordinator | Network Security Specialist
            </p>
          </motion.div>

          <motion.p
            variants={fadeIn}
            className="text-lg leading-relaxed max-w-3xl text-muted-foreground"
          >
            Hello there! I&apos;m a passionate cybersecurity professional dedicated to protecting digital assets and infrastructure. 
            My expertise spans network security, vulnerability assessment, and security architecture.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="flex items-center space-x-6"
          >
            <Link
              href="https://github.com/saishsolanki"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/saishsolanki"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:contact@saishsolanki.dev"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container py-24 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Security Expertise</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 p-6 border rounded-lg"
            >
              <h3 className="text-xl font-semibold">Network Security</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Network Traffic Analysis</li>
                <li>Firewall Configuration</li>
                <li>Intrusion Detection Systems</li>
                <li>VPN Implementation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 p-6 border rounded-lg"
            >
              <h3 className="text-xl font-semibold">Vulnerability Assessment</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Penetration Testing</li>
                <li>Security Audits</li>
                <li>Risk Analysis</li>
                <li>Compliance Assessment</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 p-6 border rounded-lg"
            >
              <h3 className="text-xl font-semibold">Security Architecture</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Security Framework Design</li>
                <li>SIEM Implementation</li>
                <li>Identity Management</li>
                <li>Incident Response</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to secure your digital infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s discuss how I can help protect your organization&apos;s assets and implement robust security measures.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}