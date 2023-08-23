import React from "react";
import { Link } from 'react-router-dom';
const TheraphyhealingHas =()=>{
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
                    <img src="/src/img/image 311.png"></img>
                    <div className="genZ-para">
                        <Link to="/blog/thera-1" className="addiction-menu">
                            <p className="genZ-para-head">Wounded healer - Turn your pain into healing power</p>
                        </Link>
                    </div>
                </div>
                <div className="genZ-content-list">
                    <img src="/src/img/image 319.png"></img>
                    <div className="genZ-para">
                        <Link to="/blog/thera-2" className="addiction-menu">
                            <p className="genZ-para-head">"Spiritual therapy" with home decoration</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TheraphyhealingHas;