import React from 'react'
export const Card = ({ img, text, text2 }) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className="position-relative card col-xs-12 col-sm-5 col-lg-3 col-md-5 col-l-5 col-xl-2 d-flex justify-content-between  my-4  card__container img-fluid ">
            <div className="img-overlay"></div>
            <div className="position-absolute text-white bottom-0 start-10">
                <h3>{text}</h3>
                <h3>{text2}</h3>
            </div>
        </div>
    )
}
//