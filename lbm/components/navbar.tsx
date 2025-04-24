import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-around">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="LBM Formations" width={80} height={34}  />
        </Link>
        <nav className="hidden md:flex gap-20 font-semibold">
          <Link href="/" className="text-m hover:underline underline-offset-4">
            Accueil
          </Link>
          <Link href="/formations" className="text-m hover:underline underline-offset-4">
            Formations
          </Link>
          <Link href="#contact" className="text-m hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex justify-center mb-6 mt-4">
              <Image src="/logo.jpeg" alt="LBM Formations" width={80} height={34} className="h-auto w-auto" />
            </div>
            <nav className="flex flex-col gap-4 px-3 font-bold">
              <Link href="/" className="text-sm  hover:underline underline-offset-4">
                Accueil
              </Link>
              <Link href="/formations" className="text-sm  hover:underline underline-offset-4">
                Formations
              </Link>
              <Link href="#contact" className="text-sm  hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
