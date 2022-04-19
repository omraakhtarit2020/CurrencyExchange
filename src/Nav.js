import React from 'react'
import { FcCurrencyExchange } from "react-icons/fc";
const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Currency Exchange</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <FcCurrencyExchange/>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Source Code</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://omraakhtarit2020.github.io/portfolioOmra/" target="_blank">Developer</a>
          </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav