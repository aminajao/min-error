import React from 'react'
import { ReactComponent as FooterLogo } from '../assets/logo.svg'

export const Footer = () => {
    return (
        <div className='mx-5 footer__container'>

            <div className="row">
                <div className="col-12 mr-5 mb-5 col-sm-12 col-md-12">
                    <FooterLogo />
                    <p>
                        min.ng is Nigeria’s #1 B2B market for made in Nigeria goods.
                        We offer a wide array of ready-to-ship and customizable products in
                        Food & Beverages, Fashion, Mechanical Parts & Fabrication Services, Auto and Transportation,
                        Health& Beauty, Furniture and ther categories
                    </p>
                </div>
                <div className="row col">

                    <div className="col">
                        <h4 className="mb-4">About Us</h4>
                        <ul className="list-group ">
                            <li className="list-group-item borderless">Our Mission</li>
                            <li className="list-group-item">Our Vision</li>
                            <li className="list-group-item">Who we are</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4 className="mb-4">Our Partners</h4>
                        <ul className="list-group ">
                            <li className="list-group-item">Partners</li>
                            <li className="list-group-item">Premium</li>
                            <li className="list-group-item">Partners</li>
                            <li className="list-group-item">Logistics</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4 className="mb-4">Our Services</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Trade Finance</li>
                            <li className="list-group-item">Marketing</li>
                            <li className="list-group-item">Services</li>
                            <li className="list-group-item">Business</li>
                            <li className="list-group-item">Verification</li>
                            <li className="list-group-item">Inventory</li>
                            <li className="list-group-item">Subscription</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4 className="mb-4">Sell on min.ng</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Create store</li>
                            <li className="list-group-item">Manage</li>
                            <li className="list-group-item">Inventory</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4 className="mb-4">Contact us</h4>
                        <ul className="list-group">
                            <li className="list-group-item">info@min.ng</li>
                            <li className="list-group-item">09090000452</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
