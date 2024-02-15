export enum RequestsEnum {
    FetchTrending = 'fetchTrending',
    FetchNetflixOriginals = 'fetchNetflixOriginals',
    FetchTopRated = 'fetchTopRated',
    FetchActionMovies = 'fetchActionMovies',
    FetchComedyMovies = 'fetchComedyMovies',
    FetchHorrorMovies = 'fetchHorrorMovies',
    FetchRomanceMovies = 'fetchRomanceMovies',
    FetchDocumentries = 'fetchDocumentries',
}


export enum RowTitlesEnum {
    NetflixOriginals = 'NETFLIX ORIGINALS',
    TrendingNow = 'TRENDING NOW',
    TopRated = 'TOP RATED',
    ActionMovies = 'ACTION MOVIES',
    HorrorMovies = 'HORROR MOVIES',
    ComedyMovies = 'COMEDY MOVIES',
    RomanceMovies = 'ROMANCE MOVIES',
    Documentries = 'DOCUMENTRIES',
}

export type MovieType = {
    backdrop_path: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: 'string'
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

export type User = {
    uid: string
    email: string
    phoneNumber: number | null
    photoURL: string | null
    [key: string]: any
}