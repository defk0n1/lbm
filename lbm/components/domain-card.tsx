import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface DomainCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

export default function DomainCard({ title, description, imageSrc, href }: DomainCardProps) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-1/6 pb-4">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={href}>En savoir plus</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
