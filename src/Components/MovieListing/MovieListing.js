import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import { MovieCard } from '../index'
import './MovieListing.scss'
import Slider from "react-slick";
import { Settings } from "./../../common/settings"

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    let renderMovies = ""
    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, idx) => (
            <MovieCard key={idx} data={movie} />
        ))
    ) : (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    );
    let renderShows = ""
    const shows = useSelector(getAllShows);
    renderShows = shows.Response === "True" ? (
        shows.Search.map((show, idx) => (
            <MovieCard key={idx} data={show} />
        ))
    ) : (
        <div className="shows-error">
            <h3>{shows.Error}</h3>
        </div>
    );

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...Settings}>
                        {renderMovies}
                    </Slider>
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="show-container">
                    <Slider {...Settings}>
                        {renderShows}
                    </Slider></div>
            </div>
        </div>
    )
}

export default MovieListing