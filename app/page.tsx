
async function getApi(){

  const endpoint = 'https://api.themoviedb.org/3/trending/all/week?api_key=846725a8fe0da4e08b81a3637c2b71da&language=pt-BR'
  
  const response = await fetch(endpoint)

  return response.json()

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

  const filmes = responseApi.results

  const baseImgUrl = "https://image.tmdb.org/t/p/original/"; 

  console.log("filme", filmes)


  return (
    <main className="">
      {filmes.map((filme : movie) => (
        <div>
          <h1>{filme.name}</h1>
          <img className="w-1/4" src={baseImgUrl+filme.poster_path} alt="" />
        </div>
      ))}
    </main>
  )
}