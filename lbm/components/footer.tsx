import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12 ">
      <div className="container grid gap-16 md:grid-cols-2 lg:grid-cols-3 px-20">
        {/* <div className="space-y-4 justify-center content-center">
          <div className="flex justify-center">
            <Image
              src="/logo.jpeg"
              alt="LBM Formations"
              width={120}
              height={50}
              className="h-auto w-auto bg-white rounded-md p-1"
            />
          </div>
          <p className="text-slate-300  ">
            Votre partenaire de confiance pour le développement professionnel et personnel.
          </p>
        </div> */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Nos Services</h3>
          <ul className="space-y-2 text-slate-300">
            <li>Formation Intra-entreprise</li>
            <li>Formation Inter-entreprises</li>
            <li>E-learning</li>
            <li>Formation sur mesure</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Nos Domaines</h3>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link href="/management-entreprise" className="hover:underline">
                Management d&apos;Entreprise
              </Link>
            </li>
            <li>
              <Link href="/entrepreneuriat" className="hover:underline">
                Entrepreneuriat
              </Link>
            </li>
            <li>
              <Link href="/accompagnement" className="hover:underline">
                Accompagnement
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4  justify-center">
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="space-y-3 text-slate-300 ">
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-slate-400" />
              <span>23 Rue Sadok Besaeis - Ariana - 2080</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-slate-400" />
              <span>+216 51 849 312</span>
              <span>+216 51 848 689</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-slate-400" />
              <span>lbmformation24@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-slate-800 text-center">
        <p className=" text-slate-400">© {new Date().getFullYear()} LBM Formations. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
