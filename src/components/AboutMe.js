import React from 'react';
import author from "../myimg.jpg";

const AboutMe = () => {
    return (
        <div id="about" className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img' src={author} alt='author...' />
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='about-heading'>about me</h1>
                    <p>
                        Hello everyone this is about me !!
                        Hello everyone this is about me !!
                        Hello everyone this is about me !!
                        Hello everyone this is about me !!
                        Hello everyone this is about me !!
                        Hello everyone this is about me !!
                        Hello everyone this is about me !!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
