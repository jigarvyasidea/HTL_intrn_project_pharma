import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import banner1 from '../img/pp.jpeg'
import banner2 from '../img/zinc.jpeg'
import banner3 from '../img/icon.jpg'
class Corosel extends Component{
    render(){
        return(
            <Carousel className="carosuel" id="home">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="First"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second"
                    />

                   </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Third"
                    />

                </Carousel.Item>
            </Carousel>

        );
    }
}


export default Corosel;