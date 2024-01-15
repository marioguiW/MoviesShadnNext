import { movie } from "@/type/movie";

type CardType = {
    url: string
}

const baseImgUrl = "https://image.tmdb.org/t/p/original/"; 


export default function CardCartaz({url} : CardType){

    return(
        <div className="w-full">
            <img className="z-1" src={baseImgUrl + url} alt="" />
        </div>
    )
}