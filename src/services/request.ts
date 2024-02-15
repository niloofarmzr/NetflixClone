import {RequestsEnum} from "../types";

const API_KEY = 'apiKey'

// export const getMovies = (): Promise<AxiosResponse> => {
//     return axios.get(`/movie/550?api_key=${API_KEY}`)
// }

export const requests = {
    [RequestsEnum.FetchTrending]: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    [RequestsEnum.FetchNetflixOriginals]: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    [RequestsEnum.FetchTopRated]: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    [RequestsEnum.FetchActionMovies]: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    [RequestsEnum.FetchComedyMovies]: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    [RequestsEnum.FetchHorrorMovies]: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    [RequestsEnum.FetchRomanceMovies]: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    [RequestsEnum.FetchDocumentries]: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}