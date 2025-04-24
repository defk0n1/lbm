import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FormationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-slate-900 py-20">
          <div className="container relative z-10 mx-auto px-4 text-white">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Nos Formations</h1>
              <p className="mb-8 text-xl text-slate-300">
                Découvrez notre catalogue complet de formations professionnelles adaptées à vos besoins
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90"></div>
        </section>

        {/* Domains Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-12 md:gap-16 px-6">
              {/* Management d'Entreprise */}
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Management d'Entreprise"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Management d&apos;Entreprise</h2>
                  <p className="mb-6 text-slate-600">
                    Développez vos compétences en leadership, gestion d&apos;équipe, communication et prise de décision.
                    Nos formations en management vous aideront à diriger efficacement vos équipes et à atteindre vos
                    objectifs.
                  </p>
                  <ul className="mb-6 space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-slate-400" />
                      <span>Leadership et Management d&apos;Équipe</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-slate-400" />
                      <span>Gestion de Projet</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-slate-400" />
                      <span>Communication Managériale</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/management-entreprise">En savoir plus</Link>
                  </Button>
                </div>
              </div>

              {/* Entrepreneuriat */}
              <div className="grid items-center gap-8 md:grid-cols-2 md:flex-row-reverse">
                <div className="relative h-64 overflow-hidden rounded-lg md:order-2 md:h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Entrepreneuriat"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:order-1">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Entrepreneuriat</h2>
                  <p className="mb-6 text-slate-600">
                    Acquérez les compétences essentielles pour créer, développer et pérenniser votre entreprise. Nos
                    formations en entrepreneuriat vous donneront les outils nécessaires pour réussir votre projet.
                  </p>
                  <ul className="mb-6 space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-slate-400" />
                      <span>Création d&apos;Entreprise</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-slate-400" />
                      <span>Stratégie et Développement Commercial</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-slate-400" />
                      <span>Gestion Financière</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/entrepreneuriat">En savoir plus</Link>
                  </Button>
                </div>
              </div>

              {/* Accompagnement */}
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Accompagnement"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Accompagnement</h2>
                  <p className="mb-6 text-slate-600">
                    Bénéficiez d&apos;un accompagnement personnalisé pour votre développement professionnel et
                    personnel. Nos services d&apos;accompagnement vous aideront à atteindre vos objectifs.
                  </p>
                  <ul className="mb-6 space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-slate-400" />
                      <span>Coaching Professionnel</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-slate-400" />
                      <span>Mentorat Entrepreneurial</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-slate-400" />
                      <span>Bilan de Compétences</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/accompagnement">En savoir plus</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Training Section */}
        <section className="bg-slate-50 py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Modalités de Formation</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Nous proposons différentes modalités de formation pour répondre à tous vos besoins
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Formation Intra-entreprise</h3>
                <p className="text-slate-600">
                  Formations sur-mesure dédiées aux collaborateurs d&apos;une même entreprise, adaptées à vos enjeux
                  spécifiques.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Formation Inter-entreprises</h3>
                <p className="text-slate-600">
                  Formations regroupant des participants de différentes entreprises, favorisant le partage
                  d&apos;expériences.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">E-learning</h3>
                <p className="text-slate-600">
                  Formations en ligne accessibles à tout moment, permettant un apprentissage à votre rythme.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Formation sur mesure</h3>
                <p className="text-slate-600">
                  Programmes entièrement personnalisés selon vos objectifs, contraintes et culture d&apos;entreprise.
                </p>
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
      <Footer />
    </div>
  )
}
