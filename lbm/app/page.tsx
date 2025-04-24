import Link from "next/link"
import { Users, Building, Laptop, Settings, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import DomainCard from "@/components/domain-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ImageSlideshow from "@/components/image-slideshow"

export default function Home() {
  // Images pour le diaporama
  const slideshowImages = [
    {
      src: "/placeholder.svg?height=500&width=1000",
      alt: "Formation en entreprise",
    },
    {
      src: "/placeholder.svg?height=500&width=1000",
      alt: "Atelier pratique",
    },
    {
      src: "/placeholder.svg?height=500&width=1000",
      alt: "Séminaire",
    },
    {
      src: "/placeholder.svg?height=500&width=1000",
      alt: "Coaching individuel",
    },
    {
      src: "/placeholder.svg?height=500&width=1000",
      alt: "Conférence",
    },
    {
      src: "/placeholder.svg?height=500&width=1000",
      alt: "Formation de groupe",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-slate-900 py-20 md:py-28">
          <div className="container relative z-10 mx-auto px-4 text-center text-white  w-1/2">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Formez-vous pour l&apos;avenir avec LBM Formations
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-300">
              Des formations professionnelles adaptées à vos besoins pour développer vos compétences et celles de vos
              équipes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#services">Découvrir nos services</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="#contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Nos Services de Formation</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Nous proposons différentes modalités de formation pour répondre à tous vos besoins
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mx-8">
              <ServiceCard
                title="Formation Intra-entreprise"
                description="Formations sur-mesure dédiées aux collaborateurs d'une même entreprise, adaptées à vos enjeux spécifiques."
                icon={<Building className="h-6 w-6 text-slate-700" />}
              />
              <ServiceCard
                title="Formation Inter-entreprises"
                description="Formations regroupant des participants de différentes entreprises, favorisant le partage d'expériences."
                icon={<Users className="h-6 w-6 text-slate-700" />}
              />
              <ServiceCard
                title="E-learning"
                description="Formations en ligne accessibles à tout moment, permettant un apprentissage à votre rythme."
                icon={<Laptop className="h-6 w-6 text-slate-700" />}
              />
              <ServiceCard
                title="Formation sur mesure"
                description="Programmes entièrement personnalisés selon vos objectifs, contraintes et culture d'entreprise."
                icon={<Settings className="h-6 w-6 text-slate-700" />}
              />
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Nos Domaines d&apos;Expertise</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Découvrez nos différents domaines de formation pour développer vos compétences
              </p>
            </div>
            <div className="grid gap-12 mx-8 md:grid-cols-3">
              <DomainCard
                title="Management d'Entreprise"
                description="Développez vos compétences en leadership, gestion d'équipe, communication et prise de décision."
                imageSrc="/placeholder.svg?height=300&width=500"
                href="/management-entreprise"
              />
              <DomainCard
                title="Entrepreneuriat"
                description="Acquérez les compétences essentielles pour créer, développer et pérenniser votre entreprise."
                imageSrc="/placeholder.svg?height=300&width=500"
                href="/entrepreneuriat"
              />
              <DomainCard
                title="Accompagnement"
                description="Bénéficiez d'un accompagnement personnalisé pour votre développement professionnel et personnel."
                imageSrc="/placeholder.svg?height=300&width=500"
                href="/accompagnement"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Notre Galerie</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Découvrez nos formations et événements en images
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <ImageSlideshow images={slideshowImages} autoPlayInterval={5000} />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Témoignages de Clients</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Découvrez ce que nos clients disent de nos formations
              </p>
            </div>
            <div className="grid gap-12 mx-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-slate-600">
                  "La formation en management d'équipe a transformé ma façon de diriger. Les outils pratiques et les
                  conseils personnalisés m'ont permis d'améliorer considérablement la cohésion et la performance de mon
                  équipe."
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Sophie Martin" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">Sophie Martin</p>
                    <p className="text-sm text-slate-500">Directrice des Opérations, Entreprise XYZ</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-slate-600">
                  "L'accompagnement entrepreneurial de LBM Formations a été déterminant dans le lancement de ma startup.
                  Leur expertise et leur soutien m'ont aidé à éviter de nombreux pièges et à structurer efficacement mon
                  projet."
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Thomas Dubois" />
                    <AvatarFallback>TD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">Thomas Dubois</p>
                    <p className="text-sm text-slate-500">Fondateur, Startup Innovante</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-slate-600">
                  "Le programme de formation sur mesure développé pour notre entreprise a parfaitement répondu à nos
                  besoins spécifiques. Les formateurs sont experts dans leur domaine et la pédagogie est excellente."
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Marie Leroy" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">Marie Leroy</p>
                    <p className="text-sm text-slate-500">DRH, Groupe International</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Prêt à développer vos compétences ?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins en formation
            </p>
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link href="#contact">Demander un devis gratuit</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
