'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Calendar } from 'lucide-react'

const projects = [
  {
    id: 'cybersecurity-game',
    title: 'Cybersecurity Education Game',
    description: 'An interactive educational game designed to teach cybersecurity concepts and best practices to students and professionals.',
    tags: ['Educational Technology', 'Game Development', 'Cybersecurity', 'Python'],
    date: '2022-07-01',
    featured: true,
    image: '/images/projects/cyber-game.jpg',
    github: 'https://github.com/saishsolanki/cybersecurity-game',
    live: null,
    category: 'Education'
  },
  {
    id: 'lamp-security',
    title: 'LAMP Cloud Server Security Implementation', 
    description: 'Comprehensive security implementation for LAMP server infrastructure including vulnerability assessment and hardening.',
    tags: ['Cloud Security', 'Linux', 'Apache', 'MySQL', 'PHP', 'Wazuh'],
    date: '2023-08-01',
    featured: true,
    image: '/images/projects/lamp-security.jpg',
    github: null,
    live: null,
    category: 'Infrastructure'
  },
  {
    id: 'threat-analysis',
    title: 'Network Traffic Analysis Suite',
    description: 'Advanced network traffic analysis tools using tcpdump and tshark for security monitoring and threat detection.',
    tags: ['Network Security', 'Traffic Analysis', 'tcpdump', 'tshark', 'Python'],
    date: '2023-12-01',
    featured: true,
    image: '/images/projects/traffic-analysis.jpg',
    github: 'https://github.com/saishsolanki/traffic-analysis',
    live: null,
    category: 'Security Tools'
  },
  {
    id: 'phishing-forensics',
    title: 'Phishing Attack Forensic Analysis',
    description: 'Comprehensive forensic analysis toolkit for investigating and analyzing phishing attack scenarios.',
    tags: ['Digital Forensics', 'Phishing Analysis', 'Security Investigation', 'Python'],
    date: '2023-10-01',
    featured: false,
    image: '/images/projects/phishing-forensics.jpg',
    github: null,
    live: null,
    category: 'Forensics'
  },
  {
    id: 'security-monitoring',
    title: 'Automated Security Monitoring',
    description: 'Automated security monitoring solutions with real-time threat detection and response capabilities.',
    tags: ['Automation', 'Security Monitoring', 'SIEM', 'Python', 'Bash'],
    date: '2023-11-01',
    featured: false,
    image: '/images/projects/security-monitoring.jpg',
    github: 'https://github.com/saishsolanki/security-monitoring',
    live: null,
    category: 'Automation'
  },
  {
    id: 'vulnerability-scanner',
    title: 'Custom Vulnerability Scanner',
    description: 'Custom-built vulnerability scanner for identifying and assessing security weaknesses in web applications.',
    tags: ['Vulnerability Assessment', 'Python', 'Security Testing', 'Web Security'],
    date: '2023-06-01',
    featured: false,
    image: '/images/projects/vuln-scanner.jpg',
    github: 'https://github.com/saishsolanki/vuln-scanner',
    live: null,
    category: 'Security Tools'
  }
]

const categories = ['All', 'Education', 'Infrastructure', 'Security Tools', 'Forensics', 'Automation']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <div className="container py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
          My Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of cybersecurity projects, tools, and implementations showcasing my expertise in various security domains.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🔒</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(project.date).getFullYear()}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" asChild>
                      <Link href={project.live} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  <Button size="sm" variant="secondary" asChild>
                    <Link href={`/projects/${project.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* All Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">All Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    {project.featured && (
                      <Badge variant="default" className="text-xs">Featured</Badge>
                    )}
                  </div>
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(project.date).getFullYear()}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                {project.github && (
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.live && (
                  <Button size="sm" asChild>
                    <Link href={project.live} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                <Button size="sm" variant="secondary" asChild>
                  <Link href={`/projects/${project.id}`}>
                    Details
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}