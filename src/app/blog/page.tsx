'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

// Mock blog posts - in a real app these would come from Contentlayer
const blogPosts = [
  {
    id: 'security-monitoring-best-practices',
    title: 'Security Monitoring Best Practices for Small Businesses',
    excerpt: 'Learn essential security monitoring strategies that small businesses can implement to protect their digital assets without breaking the budget.',
    date: '2023-12-15',
    readTime: '8 min read',
    tags: ['Security Monitoring', 'Small Business', 'Best Practices'],
    published: true
  },
  {
    id: 'phishing-attack-prevention',
    title: 'How to Identify and Prevent Phishing Attacks in 2024',
    excerpt: 'A comprehensive guide to recognizing modern phishing techniques and implementing effective prevention strategies in your organization.',
    date: '2023-12-01',
    readTime: '12 min read',
    tags: ['Phishing', 'Email Security', 'Awareness Training'],
    published: true
  },
  {
    id: 'network-traffic-analysis',
    title: 'Advanced Network Traffic Analysis with Open Source Tools',
    excerpt: 'Deep dive into network traffic analysis using tcpdump, Wireshark, and other open-source tools for security professionals.',
    date: '2023-11-20',
    readTime: '15 min read',
    tags: ['Network Security', 'Traffic Analysis', 'Open Source'],
    published: true
  },
  {
    id: 'incident-response-playbook',
    title: 'Building an Effective Incident Response Playbook',
    excerpt: 'Step-by-step guide to creating and maintaining an incident response playbook that works when seconds count.',
    date: '2023-11-05',
    readTime: '10 min read',
    tags: ['Incident Response', 'Playbook', 'Security Operations'],
    published: true
  },
  {
    id: 'vulnerability-assessment-automation',
    title: 'Automating Vulnerability Assessments with Python',
    excerpt: 'Learn how to build automated vulnerability assessment tools using Python and integrate them into your security workflow.',
    date: '2023-10-22',
    readTime: '18 min read',
    tags: ['Automation', 'Python', 'Vulnerability Assessment'],
    published: true
  }
]

export default function BlogPage() {
  return (
    <div className="container py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
          Security Insights
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on cybersecurity, threat analysis, and best practices 
          for protecting digital infrastructure.
        </p>
      </motion.div>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="border rounded-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-8xl opacity-20">📚</div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="default">Featured</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(blogPosts[0].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {blogPosts[0].tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button asChild>
                <Link href={`/blog/${blogPosts[0].id}`}>
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Blog Posts Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/blog/${post.id}`}>
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 text-center p-8 border rounded-lg bg-muted/30"
      >
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Get notified when I publish new cybersecurity insights and tutorials.
        </p>
        <Button asChild>
          <Link href="/contact">
            Subscribe to Updates
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}