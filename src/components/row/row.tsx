import {MovieType, RequestsEnum, RowTitlesEnum} from "../../types";
import {useEffect, useState} from "react";
import axios from "../../services/axios.ts";
import {requests} from "../../services/request.ts";
import './row.css'

type Props = {
    title: RowTitlesEnum
    fetchUrl: RequestsEnum
    isLarge?: boolean
};

const BASE_URL = 'https://image.tmdb.org/t/p/original/'
export function Row({title, fetchUrl, isLarge = false}: Props) {
    const [movies, setMovies] = useState<Array<MovieType>>([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests[fetchUrl]);
            setMovies(request.data.results)
        }
        fetchData().catch(err => err);
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2 className='row__title'>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie =>
                    (isLarge && movie.poster_path || !isLarge && movie.backdrop_path)
                    && (
                        <div key={movie.id}>
                            <img className={`row__poster ${isLarge ? 'row__posterLarge' : ''} `} src={`${BASE_URL}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}