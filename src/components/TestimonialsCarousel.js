import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARAS IMPORTS
import avatar1 from "../images/avtaar/avtaar1.png";
import avatar2 from "../images/avtaar/avtaar2.png";
import avatar3 from "../images/avtaar/avtaar3.png";

const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <>
                <img src={avatar1} alt='John Doe 1'></img>
                <div className='myCarousel'>
                    <h3>John Doe 1</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt='John Doe 2'></img>
                <div className='myCarousel'>
                    <h3>John Doe 2</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt='John Doe 3'></img>
                <div className='myCarousel'>
                    <h3>John Doe 3</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
            </>
        </Carousel>
    );
}

export default TestimonialsCarousel;
