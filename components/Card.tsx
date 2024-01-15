import { movie } from "@/type/movie";

type CardType = {
    url: string
}

const baseImgUrl = "https://image.tmdb.org/t/p/original/"; 


export default function Card({url} : CardType){

    return(
        <div className="h-[600px] w-full bg-gradient-to-r from-cyan-500 to-blue-500 z-100">
            <img className="z-1" src={baseImgUrl + url} alt="" />
        </div>
    )
}