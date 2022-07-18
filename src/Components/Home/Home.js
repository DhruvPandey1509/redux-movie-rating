import React, { useEffect } from 'react'
import { MovieListing } from "../index"
import axios from 'axios'
import './Home.scss'
import { APIKey } from '../../common/api/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const baseUrl = "http://www.omdbapi.com"
  const dispatch = useDispatch();
  const movieText = "Avengers";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios
        .get(`${baseUrl}?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err : ", err)
        });
      dispatch(addMovies(response.data));
    };

    fetchMovies()
  }, [])

  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  )
}

export default Home