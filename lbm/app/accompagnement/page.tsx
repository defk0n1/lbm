import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AccompagnementPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-slate-800 py-20">
          <div className="container relative z-10 mx-auto px-4 text-white">
            <div className="grid items-center gap-5 lg:grid-cols-2">
              <div className="text-center w-fit">
                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Accompagnement</h1>
                <p className="mb-8 text-xl text-slate-300">
                  Bénéficiez d&apos;un accompagnement personnalisé pour votre développement professionnel et personnel
                </p>
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
              <h2 className="mb-8 text-3xl font-bold">Nos Services d&apos;Accompagnement</h2>

              <div className="mb-12 space-y-8">
                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Coaching Professionnel</h3>
                  <p className="mb-4 text-slate-600">
                    Un accompagnement individuel pour vous aider à atteindre vos objectifs professionnels et à surmonter
                    les obstacles.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Définition d&apos;objectifs clairs et réalisables</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Développement des compétences de leadership</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Gestion du stress et équilibre vie professionnelle/personnelle</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Mentorat Entrepreneurial</h3>
                  <p className="mb-4 text-slate-600">
                    Bénéficiez de l&apos;expérience d&apos;entrepreneurs confirmés pour vous guider dans le
                    développement de votre entreprise.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Conseils stratégiques personnalisés</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Partage d&apos;expérience et de réseau</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Suivi régulier et ajustement des objectifs</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Bilan de Compétences</h3>
                  <p className="mb-4 text-slate-600">
                    Faites le point sur vos compétences, motivations et aspirations pour définir un projet professionnel
                    cohérent.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Analyse approfondie de votre parcours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Identification de vos points forts et axes d&apos;amélioration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Élaboration d&apos;un plan d&apos;action concret</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-slate-100 p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold">Besoin d&apos;un accompagnement personnalisé ?</h3>
                <p className="mb-6 text-slate-600">
                  Contactez-nous pour discuter de vos besoins spécifiques et obtenir un programme sur mesure
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
