import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EntrepreneuriatPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-slate-800 py-20">
          <div className="container relative z-10 mx-auto px-4 text-white">
            <div className="grid items-center gap-5 lg:grid-cols-2">
              <div className="text-center w-fit">
                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Entrepreneuriat</h1>
                <p className="mb-8 text-xl text-slate-300">
                Acquérez les compétences essentielles pour créer, développer et pérenniser votre entreprise                </p>
                <Button size="lg" asChild>
                  <Link href="#contact">Demander un devis</Link>
                </Button>
              </div>
              <div className="relative h-64 lg:h-96">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Accompagnement"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-3xl font-bold">Nos Formations en Entrepreneuriat</h2>

              <div className="mb-12 space-y-8">
                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Création d&apos;Entreprise</h3>
                  <p className="mb-4 text-slate-600">
                    Maîtrisez toutes les étapes de la création d&apos;entreprise, de l&apos;idée initiale à la mise en
                    œuvre concrète de votre projet.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Étude de marché et validation de concept</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Business plan et prévisions financières</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Aspects juridiques et administratifs</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Stratégie et Développement Commercial</h3>
                  <p className="mb-4 text-slate-600">
                    Développez une stratégie commerciale efficace pour acquérir et fidéliser vos clients et augmenter
                    votre chiffre d&apos;affaires.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Techniques de prospection et de vente</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Marketing digital et réseaux sociaux</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Fidélisation et relation client</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Gestion Financière</h3>
                  <p className="mb-4 text-slate-600">
                    Apprenez à gérer efficacement les finances de votre entreprise pour assurer sa pérennité et sa
                    croissance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Comptabilité et fiscalité pour entrepreneurs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Gestion de trésorerie et financement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Analyse financière et tableaux de bord</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-slate-100 p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold">Prêt à vous lancer dans l&apos;entrepreneuriat ?</h3>
                <p className="mb-6 text-slate-600">
                  Contactez-nous pour discuter de vos besoins spécifiques et obtenir un programme personnalisé
                </p>
                <Button size="lg" asChild>
                  <Link href="#contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
