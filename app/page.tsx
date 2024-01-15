import { CarrosselBanner } from "@/components/CarrosselBanner"
import CarrosselTopicos from "@/components/CarrosselTopicos"

async function getApi(){

  const endpointEmAlta = 'https://api.themoviedb.org/3/trending/all/week?api_key=846725a8fe0da4e08b81a3637c2b71da&language=pt-BR'
  const responseEmAlta = await fetch(endpointEmAlta)
  const EmAlta = responseEmAlta.json()

  const endpointOriginais = 'https://api.themoviedb.org/3/discover/tv?api_key=846725a8fe0da4e08b81a3637c2b71da&with_networks=213'
  const responseOriginais = await fetch(endpointOriginais)
  const Originais = responseOriginais.json()

  const endpointPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=846725a8fe0da4e08b81a3637c2b71da'
  const responsePopulares = await fetch(endpointPopulares)
  const Populares = responsePopulares.json()

  console.log('populares',Populares)

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

  console.log('teste',filmes.populares.results)

  return (
    <main className="flex flex-col items-center content-center w-full">
      <div className="">
        <CarrosselBanner filmes={filmes.emAlta.results}/>
        <div id="topicos">
          <CarrosselTopicos title='Originais da Netflix'  filmes={filmes.originais.results}/>
          <CarrosselTopicos title="Populares" filmes={filmes.populares.results}/>
        </div>
      </div>
    </main>
  )
}