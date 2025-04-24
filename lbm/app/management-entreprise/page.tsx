import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ManagementEntreprisePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-slate-800 py-20">
          <div className="container relative z-10 mx-auto px-4 text-white">
            <div className="grid items-center gap-2 lg:grid-cols-2">
              <div className="text-center w-fit">
                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Management d&apos;Entreprise</h1>
                <p className="mb-8 text-xl text-slate-300">
                Développez vos compétences en leadership et en gestion d&apos;équipe pour mener votre entreprise vers
                le succès </p>           
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
              <h2 className="mb-8 text-3xl font-bold">Nos Formations en Management d&apos;Entreprise</h2>

              <div className="mb-12 space-y-8">
                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Leadership et Management d&apos;Équipe</h3>
                  <p className="mb-4 text-slate-600">
                    Apprenez à diriger efficacement votre équipe, à déléguer et à motiver vos collaborateurs pour
                    atteindre vos objectifs communs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Styles de leadership et leur application</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Techniques de motivation et d&apos;engagement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Gestion des conflits et résolution de problèmes</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Gestion de Projet</h3>
                  <p className="mb-4 text-slate-600">
                    Maîtrisez les méthodologies et outils de gestion de projet pour mener à bien vos initiatives dans
                    les délais et le budget impartis.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Méthodologies agiles et traditionnelles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Planification et suivi de projet</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Gestion des risques et des parties prenantes</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Communication Managériale</h3>
                  <p className="mb-4 text-slate-600">
                    Développez vos compétences en communication pour transmettre efficacement votre vision, donner du
                    feedback et gérer les situations difficiles.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Communication assertive et bienveillante</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Techniques de feedback constructif</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Conduite de réunions efficaces</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-slate-100 p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold">Intéressé par nos formations en Management ?</h3>
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
