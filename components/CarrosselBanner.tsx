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
import CardBanner from "./CardBanner"

type CarouselType ={
    filmes: movie[]
}

export function CarrosselBanner({filmes} : CarouselType) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="{}"> 
        {filmes.map((filme, index)=>(
            <CarouselItem key={index}>
                <CardBanner url={filme.backdrop_path}/>
            </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 h-44 rounded-none opacity-30 hover:opacity-80" />
      <CarouselNext className="absolute right-0 h-44 rounded-none opacity-30 hover:opacity-80"/>
    </Carousel>
  )
}