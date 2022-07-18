import React, { useState } from 'react'
import user from '../../images/user.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Header.scss'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if(term==="") return alert("Please Enter search Term")
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          Movie App
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler} >
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header