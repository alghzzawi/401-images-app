import React, {useState} from "react";
import ImageCard from "./ImageCard";
import nature1 from './assets/1.jpg'
import nature2 from './assets/2.jpg'
import nature3 from './assets/3.jpg'

function Parent (){
    let [totalOfLike, setTotalOfLike] = useState(0);

    const incrementTotalLikes = () => {
        setTotalOfLike(totalOfLike+1)
    }


    return(
        <>
            <h1>Images </h1>
            <h2>Total of Like: {totalOfLike} </h2>
            
            <ImageCard
                title='nature1'
                img={nature1}
                increment={incrementTotalLikes}
            />
            <ImageCard
                title='nature2'
                img={nature2}
                increment={incrementTotalLikes}
            />
            <ImageCard
                title='nature3'
                img={nature3}
                increment={incrementTotalLikes}
            />
        </>
    )
}
export default Parent;