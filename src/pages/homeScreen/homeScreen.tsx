import "./homeScreen.css"
import {Banner} from "../../components/banner/banner.tsx";
import {Row} from "../../components/row/row.tsx";
import {RequestsEnum, RowTitlesEnum} from "../../types";
import {Navbar} from "../../components/navbar/navbar.tsx";

export function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Navbar/>
            <Banner/>
            <Row title={RowTitlesEnum.NetflixOriginals} fetchUrl={RequestsEnum.FetchNetflixOriginals} isLarge/>
            <Row title={RowTitlesEnum.TopRated} fetchUrl={RequestsEnum.FetchTopRated} />
            <Row title={RowTitlesEnum.TrendingNow} fetchUrl={RequestsEnum.FetchTrending} />
            <Row title={RowTitlesEnum.ActionMovies} fetchUrl={RequestsEnum.FetchActionMovies} />
            <Row title={RowTitlesEnum.ComedyMovies} fetchUrl={RequestsEnum.FetchComedyMovies} />
            <Row title={RowTitlesEnum.HorrorMovies} fetchUrl={RequestsEnum.FetchHorrorMovies} />
            <Row title={RowTitlesEnum.RomanceMovies} fetchUrl={RequestsEnum.FetchRomanceMovies} />
            <Row title={RowTitlesEnum.Documentries} fetchUrl={RequestsEnum.FetchDocumentries} />
        </div>
    );
}