import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Get In Touch for Cybersecurity Solutions',
  description: 'Contact Saish Solanki for cybersecurity consulting, security assessments, or to discuss your organization\'s digital security needs.',
  openGraph: {
    title: 'Contact Saish Solanki - Cybersecurity Professional',
    description: 'Get in touch for cybersecurity consulting, security assessments, and digital infrastructure protection services.',
  },
}

export default function ContactPage() {
  return (
    <div className="container py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss cybersecurity solutions or have questions about my services? 
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Let&apos;s Connect</h2>
            <p className="text-muted-foreground mb-8">
              I&apos;m always interested in discussing new opportunities, cybersecurity challenges, 
              and how I can help secure your digital infrastructure.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">contact@saishsolanki.dev</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">Available upon request</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">Ontario, Canada</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24 hours during business days.
                For urgent security matters, please indicate the priority in your subject line.
              </p>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <p className="text-muted-foreground mb-6">
              Contact form will be available soon. For now, please reach out via email or LinkedIn.
            </p>
            <div className="space-y-4">
              <Button className="w-full" asChild>
                <a href="mailto:contact@saishsolanki.dev">Send Email</a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://linkedin.com/in/saishsolanki" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Connect</h2>
          <p className="text-muted-foreground mb-6">
            Prefer a different communication method? You can also find me on these platforms:
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/saishsolanki" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/saishsolanki" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}