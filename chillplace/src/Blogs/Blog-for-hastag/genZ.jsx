import React from "react";
import { Link } from 'react-router-dom';
const GenZHas =()=>{
    return(
        <div className="blog-container-genZ">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="title-blog-head">
                    <b>#Gen-z</b>
                </p>
            </div>
            <div className="genZ-content">
                <div className="genZ-content-list">
                    <img src="/src/img/image 283.png"></img>
                    <div className="genZ-para">
                        <Link to="/blog/genZ-1" className="addiction-menu">
                            <p className="genZ-para-head">Social Media and Teen Mental Health</p>
                        </Link>
                    </div>
                </div>
                <div className="genZ-content-list">
                    <img src="/src/img/image 280.png"></img>
                    <div className="genZ-para">
                        <Link to="/blog/genZ-2" className="addiction-menu">
                            <p className="genZ-para-head">Social media may help teens cope with stress</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GenZHas;