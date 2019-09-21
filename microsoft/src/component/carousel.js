import React from 'react';
import './microsoft.css';

class Carousel extends React.Component {
    render () {
        return(
            <div id="carouselExampleControls" class="carousel slide m-5" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="slide_1.png" className="d-block w-100 carousel_img"  alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="slide_2.png" className="d-block w-100 carousel_img"  alt="..."></img>
                    </div>
                    
                    <div class="carousel-item">
                        <img src="slide_3.jpg" className="d-block w-100 carousel_img" alt="..."></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );

    }
s}
export default Carousel;