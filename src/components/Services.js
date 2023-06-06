import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id="services" className='services'>
            <h1 className='py-5'> my services </h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className="icons" icon={faDesktop} size='2x' />
                            </div>
                            <h3>NodeJs Apps</h3>
                            <p>I approach each project individually and always focus on the result.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className="icons" icon={faFileCode} size='2x' />
                            </div>
                            <h3>Web Development</h3>
                            <p>I approach each project individually and always focus on the result.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className="icons" icon={faFacebookF} size='2x' />
                            </div>
                            <h3>React Apps</h3>
                            <p>I approach each project individually and always focus on the result.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'>
                                <FontAwesomeIcon className="icons" icon={faGoogle} size='2x' />
                            </div>
                            <h3>Automation Testing</h3>
                            <p>I approach each project individually and always focus on the result.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
