import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">My Website</h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="hover:text-primary-foreground/80 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-primary-foreground/80 transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-primary-foreground/80 transition-colors">
                Services
              </a>
              <a href="#contact" className="hover:text-primary-foreground/80 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section id="home" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Welcome to Our Website</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We provide amazing services and solutions to help your business grow and succeed in today's competitive
            market.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Get Started
          </Button>
        </section>

        {/* Features Section */}
        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Fast & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lightning-fast performance with 99.9% uptime guarantee for all our services.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>24/7 customer support from our team of experienced professionals.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Affordable Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Competitive pricing with flexible plans to suit businesses of all sizes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="text-xl font-semibold mb-4">Web Development</h4>
              <p className="text-muted-foreground mb-4">
                Custom websites and web applications built with modern technologies and best practices.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h4 className="text-xl font-semibold mb-4">Digital Marketing</h4>
              <p className="text-muted-foreground mb-4">
                Comprehensive digital marketing strategies to boost your online presence and reach.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and let's discuss how we can help you
            achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Us</Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 My Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
