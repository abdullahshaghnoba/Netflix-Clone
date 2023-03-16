// Fetch data using the endpoint (‘/trending’) that you created in Lab12.

// Render MovieList component.
import { useEffect, useState } from 'react';
import MovieList from './MovieList'

export default function Home (){

    const [moviesArr, setMoviesArr] = useState([])
    const sendReq = async ()=>{
        const serverURL = `${process.env.REACT_APP_serverURL}trending`;
        const res = await fetch(serverURL);
        const Data = await res.json();
        setMoviesArr(Data)
    }
    useEffect(()=>{

        sendReq();
    },[])

    return (
        <div style = {{backgroundColor: 'gray'}}>


            <MovieList fetchRes={moviesArr}/>
        </div>
    )
}