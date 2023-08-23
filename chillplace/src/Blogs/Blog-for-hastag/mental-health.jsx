import React from "react";
import { Link } from 'react-router-dom';
const MentalhealthHas =()=>{
    return(
        <div className="blog-container-genZ">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="title-blog-head">
                    <b>#Mentalhealth</b>
                </p>
            </div>
            <div className="genZ-content">
                <div className="genZ-content-list">
                    <img src="/src/img/image 286.png"></img>
                    <div className="genZ-para">
                        <Link to="/blog/mental-1" className="addiction-menu">
                            <p className="genZ-para-head">Don’t Kill Yourself — My Daily To-Do List</p>
                        </Link>
                    </div>
                </div>
                <div className="genZ-content-list">
                    <img src="/src/img/image 287.png"></img>
                    <div className="genZ-para">
                        <Link to="/blog/mental-2" className="addiction-menu">
                            <p className="genZ-para-head">Why Haven’t You Killed Yourself Already?</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MentalhealthHas;