'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { movie } from "@/type/movie"
import CardCartaz from "./CardCartaz"

type CarouselType ={
    filmes: movie[]
    title?: string
}

export default function CarrosselTopicos({filmes, title} : CarouselType) {

    console.log("aquiii",filmes)

  return (
    <>
      <h1>{title && title}</h1>
      <Carousel className="w-full relative">
        <CarouselContent className="-ml-1"> 
          {filmes.map((filme, index)=>(
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/12 ml-3" key={index}>
                  <CardCartaz  url={filme.poster_path}/>
              </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 h-44 rounded-none opacity-30 hover:opacity-80" />
        <CarouselNext className="absolute right-0 h-44 rounded-none opacity-30 hover:opacity-80"/>
      </Carousel>
    </>
  )
}