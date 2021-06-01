import React from 'react'

export const Hero = () => {
    return (
        <div className="hero-container container-fluid text-white text-center p-5 mx-auto">
            <h1>Nigeria’s Biggest B2B ECommerce Platform</h1>
            <p>One stop site for connecting businesses through ecommerce</p>
            <div className="d-flex  p-3 flex-col">
                <button type="button" className="sell__btn fw-bold py-3 px-5 btn btn-primary bg-white me-3 rounded-start">Sell on min</button>
                <input type="search" className="form-control" placeholder="Search by product name or category" aria-label="Search" aria-describedby="basic-addon1" />
                <button type="button" className="search btn text-white py-3 px-5 rounded-start">Search</button>
            </div>
        </div>
    )
}

