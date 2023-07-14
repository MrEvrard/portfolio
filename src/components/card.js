import React from 'react';

function Card(){
    return (
        <div className="container">
            <div className="wrapper">
                <div className="banner-image"> </div>
                    <h1>Charly Evrard Nana N.</h1>
                    <p>Web Designer, <br/>
                        Digital Marketer</p>
            </div>
            <div className="button-wrapper"> 
                    <button className="btn outline">MORE DETAILS</button>
                    <button className="btn fill">MAKE DEAL</button>
            </div>
        </div>
    );
}

export default Card;