import './banner.css'
import {useEffect, useState} from "react";
import axios from "../../services/axios.ts";
import {requests} from "../../services/request.ts";
import {MovieType, RequestsEnum} from "../../types";

export function Banner() {
    const [movie, setMovie ] = useState<MovieType>()

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(requests[RequestsEnum.FetchNetflixOriginals])
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchData().catch(err => err)
    }, []);

    const truncate = (string: string, numberOfChars: number): string => {
        return string.length > numberOfChars ? string.substring(0, numberOfChars - 1) + '...' : string;
    }

    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview && truncate(movie.overview, 150)}

                </h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    );
}