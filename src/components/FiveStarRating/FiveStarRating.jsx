//import s from "./style.module.css"
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({}){
        const rating = 4.5;
        //Declarer un tableau d'etoiles(jsx) vide

        const startLIst = []

        //stocker dans une variable le nombre d'etoile pleine
        const startFillCount = Math.floor(rating);

        //stocker dans une variable si oui ou non il y'a une demi etoile
        const hasStarHalf = rating - startFillCount >= 0.5;
        //stokcer dans une variable le nombre d'etoile vide
        const emptyStarCount = 5 - startFillCount - (hasStarHalf ? 1:0);
        //pusher dans le tableau les etoiles pleine
            console.log(startFillCount, hasStarHalf, emptyStarCount);
        //pusher dans le tableau les démi étoiles (s'il y'en a)
        for(let i = 1; i<= startFillCount; i++){
            startLIst.push(<StarFill key={"star-fil" + i} />)
        }
        //pusher dans le tableau les etoiles vides
        if(hasStarHalf){
            startLIst.push(<StarHalf key={"star-half"} />);
        }
        for(let i = 1; i<= emptyStarCount; i++){
            startLIst.push(<StarEmpty key={"star-empty" + i} />)
        }
    return(<>
        <div>
            {startLIst}
        </div>
    </>);
}