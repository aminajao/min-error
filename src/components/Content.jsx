import React from 'react'
import Illustration from '../assets/illustration.svg'

export const Content = () => {
    return (
        <div className="text-center mb-5 mt-5">
            <img src={Illustration} alt="" className="img-fluid" />
            <p>
                We are unable to complete your request at the moment... please try again later. <br />
                You can also report this issue to our customer support for immediate resolution.
            </p>
            <button type="button" className="mt-2 report btn text-white py-3 px-5 rounded-start">Report This Issue</button>
        </div>
    )
}