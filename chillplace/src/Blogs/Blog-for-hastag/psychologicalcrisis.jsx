import React from "react";
import { Link } from 'react-router-dom';
const PsychologicalcrisisHas =()=>{
    return(
        <div className="blog-container-genZ">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="title-blog-head">
                    <b>#Psychologicalcrisis</b>
                </p>
            </div>
            <div className="genZ-content">
                <div className="genZ-content-list">
                    <img src="/src/img/image 289.png"></img>
                    <div className="genZ-para">
                        <Link to="/blog/psy-1-more" className="addiction-menu">
                            <p className="genZ-para-head">Crisis of choice: Make the best move in the moment</p>
                        </Link>
                    </div>
                </div>
                <div className="genZ-content-list">
                    <img src="/src/img/image 290.png"></img>
                    <div className="genZ-para">
                        <Link to="/blog/psy-2-more" className="addiction-menu">
                            <p className="genZ-para-head">Suffering to become more resilient?</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PsychologicalcrisisHas;