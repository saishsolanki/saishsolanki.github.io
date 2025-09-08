'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

const skills = [
  'Network Security',
  'Penetration Testing', 
  'Vulnerability Assessment',
  'Security Architecture',
  'SIEM Implementation',
  'Incident Response',
  'Risk Management',
  'Compliance (ISO 27001, NIST)',
  'Threat Analysis',
  'Security Auditing',
  'Firewall Configuration',
  'VPN Implementation'
]

const certifications = [
  'Certified Ethical Hacker (CEH)',
  'CompTIA Security+',
  'CISSP Associate',
  'GCIH (GIAC Certified Incident Handler)',
  'AWS Security Specialty'
]

const experience = [
  {
    title: 'IT Security Coordinator',
    company: 'Georgian College',
    period: 'Aug 2023 - Present',
    description: 'Leading security initiatives and coordinating security measures across the organization.',
    achievements: [
      'Implemented comprehensive security monitoring solutions',
      'Conducted advanced network traffic analysis using tcpdump and tshark',
      'Performed forensic analysis of phishing attack scenarios',
      'Developed automated security monitoring solutions'
    ]
  },
  {
    title: 'Security Analyst',
    company: 'Previous Organization', 
    period: 'Jan 2022 - Jul 2023',
    description: 'Responsible for identifying and mitigating security vulnerabilities.',
    achievements: [
      'Identified and remediated 69 security vulnerabilities in LAMP server infrastructure',
      'Integrated Wazuh security monitoring systems',
      'Implemented hardened server configurations',
      'Created detailed threat analysis reports'
    ]
  }
]

export default function AboutPage() {
  return (
    <div className="container py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about cybersecurity with expertise in protecting digital assets and infrastructure
          </p>
        </div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-12 lg:grid-cols-2 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I&apos;m Saish Solanki, a dedicated cybersecurity professional with a passion for 
                protecting digital assets and infrastructure. My journey in cybersecurity began during 
                my studies at Goa College of Engineering, where I developed a cybersecurity education 
                game that sparked my interest in this field.
              </p>
              <p>
                With hands-on experience in security coordination and a strong foundation in IT systems, 
                I specialize in implementing robust security measures, conducting vulnerability assessments, 
                and maintaining data integrity across complex systems.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest security threats 
                and mitigation strategies. My approach combines technical expertise with strategic 
                thinking to create comprehensive security solutions.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/My Pic.jpg"
              alt="Saish Solanki"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                className="border rounded-lg p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                className="border rounded-lg p-4 text-center"
              >
                <p className="font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}