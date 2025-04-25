

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"


const Landing = () => {
  return (
      <section className="bg-blue-50 overflow-hidden max-h-screen">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
              <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                  <div className="absolute z-1 bottom-0 right-0 hidden lg:block">
                      <img className="object-contain w-auto h-48" src="curved-lines.png" alt="" />
                  </div>
                  <div className="relative px-4 pt-14 pb-16 text-center align-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                      <h1 className="text-xl font-bold text-black sm:text-6xl xl:text-6xl">
                          Formez-vous pour l'avenir <br />
                          avec LBM Formations
                      </h1>
                      <p className="mx-auto mt-4 mb-8 max-w-2xl text-xl text-black">Des formations professionnelles adaptées à vos besoins pour développer vos compétences et celles de vos équipes</p>
                      <div className="flex flex-wrap justify-center gap-4">
                          <Button size="lg" asChild>
                              <Link href="#services">Découvrir nos services</Link>
                          </Button>
                          <Button
                              size="lg"
                              variant="outline"
                              className="bg-transparent text-black hover:bg-white hover:text-slate-900"
                              asChild
                          >
                              <Link href="#contact">Nous contacter</Link>
                          </Button>
                      </div>

                  </div>


                  {/* <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                      <img className="w-32 h-32 md:w-40 md:h-40" src="/logo-transparent-bg.png" alt="" />
                  </div> */}
              </div>

              <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                  <div className="absolute inset-0">
                      <Image src="/meeting-stock.jpg" alt="LBM Formations" fill={true} />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              </div>
          </div>
      </section>
  )
}

export default Landing