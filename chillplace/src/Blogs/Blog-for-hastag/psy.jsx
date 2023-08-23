import React from "react";
import { Link } from 'react-router-dom';
const PsyHas =()=>{
    return(
        <div className="blog-container-genZ">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="title-blog-head">
                    <b>#Psychology</b>
                </p>
            </div>
            <div className="genZ-content">
                <div className="genZ-content-list">
                    <img src="/src/img/image 303.png"></img>
                    <div className="genZ-para">
                        <Link to="/blog/psy-1" className="addiction-menu">
                            <p className="genZ-para-head">Hindsight bias - Did you really foresee the results from the start?</p>
                        </Link>
                    </div>
                </div>
                <div className="genZ-content-list">
                    <img src="/src/img/image 306.png"></img>
                    <div className="genZ-para">
                        <Link to="/blog/psy-2" className="addiction-menu">
                            <p className="genZ-para-head">Why do we always find the way back shorter than the way out?</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PsyHas;