import FavMovList from "./FavMovList";
import { useEffect, useState } from 'react';

export default function FavList() {
    const [moviesArr, setMoviesArr] = useState([])
    const sendReq = async () => {
        const serverURL = "https://movies-library-a3cr5d0sx-abdullahshaghnoba.vercel.app/getMovies";
        const res = await fetch(serverURL);
        const Data = await res.json();
        setMoviesArr(Data)
    }
    
    const setNewArr = (Arr) => {
        setMoviesArr(Arr)
     }
     const setDELETEDArr = (Arr) => {
        setMoviesArr(Arr)
     }

    useEffect(() => {

        sendReq();
    }, [])

    return (
        <div>
            <FavMovList setNewArr={setNewArr} setDELETEDArr={setDELETEDArr} fetchRes={moviesArr} />
        </div>
    )
}
// /getMovies