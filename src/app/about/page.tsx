import type { Metadata } from 'next'
import { AboutContent } from '@/components/about-content'

export const metadata: Metadata = {
  title: 'About - Professional Background & Expertise',
  description: 'Learn about Saish Solanki\'s cybersecurity journey, technical skills, professional experience, and certifications in network security and vulnerability assessment.',
  openGraph: {
    title: 'About Saish Solanki - Cybersecurity Professional',
    description: 'Professional background, technical expertise, and cybersecurity experience of Saish Solanki.',
  },
}

export default function AboutPage() {
  return <AboutContent />
}