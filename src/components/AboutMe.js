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
                        My name is shivam choudhary .
                        I am an experienced Nodejs developer
                        with impressive front-end
                        coding skills currently working in Experiom.
                        Previously Nodejs trainee at
                        Mobcoder.I am an IT graduate from AKTU with a passion for software engineering and web design. I have a few hobbies like drawing, reading books,playing football etc.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
