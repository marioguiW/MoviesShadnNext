import { CarouselPlugin } from "@/components/Carrossel"
import OriginaisNetflix from "@/components/OriginaisNetflix"

async function getApi(){

  const endpointEmAlta = 'https://api.themoviedb.org/3/trending/all/week?api_key=846725a8fe0da4e08b81a3637c2b71da&language=pt-BR'
  const responseEmAlta = await fetch(endpointEmAlta)
  const EmAlta = responseEmAlta.json()

  const endpointOriginais = 'https://api.themoviedb.org/3/discover/tv?api_key=846725a8fe0da4e08b81a3637c2b71da&with_networks=213'
  const responseOriginais = await fetch(endpointOriginais)
  const Originais = responseOriginais.json()

  const endpointPopulares = 'https://api.themoviedb.org/3//move/top_rated?api_key=846725a8fe0da4e08b81a3637c2b71da&language=pt-BR'
  const responsePopulares = await fetch(endpointPopulares)
  const Populares = responsePopulares.json()

  return {
    emAlta: await EmAlta,
    originais: await Originais,
    populares: await Populares
  }

}

type movie = {
  adult: boolean,
  backdrop_path: string,
  id: number,
  name: string,
  original_language: string,
  original_name: string,
  overview: string,
  poster_path: string,
  media_type: string,
  genre_ids: number[],
  popularity: number,
  first_air_date: string,
  vote_average: number,
  vote_count: number,
  origin_country: string[]
}

type product = {
  id: number,
  nome: string
}

export default async function Home() {

  const responseApi = await getApi()

  const filmes = responseApi
  console.log(filmes)



  console.log("filme", filmes.emAlta)


  return (
    <main className="flex flex-col items-center content-center w-full">
      <div className="">
        <CarouselPlugin filmes={filmes.emAlta.results}/>
        <OriginaisNetflix filmes={filmes.originais.results}/>
      </div>
    </main>
  )
}