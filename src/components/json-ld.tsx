import Script from 'next/script'

interface JsonLdProps {
  data: object
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Saish Solanki',
  url: 'https://saishsolanki.github.io',
  image: 'https://saishsolanki.github.io/images/My Pic.jpg',
  jobTitle: 'Cybersecurity Professional',
  description: 'IT Security Coordinator and Network Security Specialist with expertise in vulnerability assessment and security architecture.',
  knowsAbout: [
    'Cybersecurity',
    'Network Security',
    'Penetration Testing',
    'Vulnerability Assessment',
    'Security Architecture',
    'Incident Response',
    'Risk Management',
    'Security Monitoring'
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Georgian College'
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Goa College of Engineering'
  },
  sameAs: [
    'https://github.com/saishsolanki',
    'https://linkedin.com/in/saishsolanki'
  ],
  email: 'contact@saishsolanki.dev',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Ontario',
    addressCountry: 'Canada'
  }
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Saish Solanki Portfolio',
  url: 'https://saishsolanki.github.io',
  description: 'Professional portfolio and blog of Saish Solanki, a cybersecurity professional specializing in network security and vulnerability assessment.',
  author: {
    '@type': 'Person',
    name: 'Saish Solanki'
  },
  inLanguage: 'en-US'
}