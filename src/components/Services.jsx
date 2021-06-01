import React from 'react'
import { Card } from './Card'
import Photo1 from "../assets/photo-1.png"
import Photo2 from "../assets/photo-2.png"
import Photo3 from "../assets/photo-3.png"
import Photo4 from "../assets/photo-4.png"

export const Services = () => {
    return (
        <div className="container-fluid  mx-auto">
            <h3 className="">Our services</h3>
            <div className="container">
                <div className="row d-flex justify-content-between " id="center">
                    <Card img={Photo2} text='Trade' text2='Finance'/>
                    <Card img={Photo4} text='Marketing' text2='Service'/>
                    <Card img={Photo3} text='Inventory' text2='Service'/>
                    <Card img={Photo1} text='Business' text2='Verification'/>
                </div>
            </div>

            <div className="d-flex my-5 container flex-col">
                <button type="button" className="sell__btn fw-bold py-3 px-5 btn btn-primary bg-white me-3 rounded-start">Join our newsletter</button>
                <input type="search" className="form-control" placeholder="Type your email here" aria-label="Search" aria-describedby="basic-addon1" />
                <button type="button" className="subscribe btn text-white py-3 px-5 rounded-start">Join now</button>
            </div>
        </div>
    )
}

