import React from "react";
import { Link } from 'react-router-dom';
import './genZ-&-peer-pressure.css';
const PeerPressure =()=>{
    return(
        <div className="blog-container-genZ">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="conditions-a-z">CONDITIONS A-Z</p>
                <p className="title-blog-head">
                    <b>GenZ & Peer Pressure</b>
                </p>
            </div>
            <div className="genZ-content">
                <div className="genZ-content-list">
                    <img src="/src/img/image 59.png"></img>
                    <div className="genZ-para">
                        <p>May 20, 2023 </p>
                        <p className="genZ-para-head">What Is Overthinking, and How Do I Stop Overthinking Everything?</p>
                    </div>
                </div>
                <div className="genZ-content-list">
                    <img src="/src/img/image 60.png"></img>
                    <div className="genZ-para">
                        <p>May 20, 2023 </p>
                        <p className="genZ-para-head">How to Handle Peer Pressure ?</p>
                    </div>
                </div>
                <div className="genZ-content-list">
                    <img src="/src/img/image 68.png"></img>
                    <div>
                        <p>May 20, 2023</p>
                        <p className="genZ-para-head">How to Handle Peer Pressure ?</p>
                    </div>
                </div>
                <div className="genZ-content-list">
                    <img src="/src/img/image 65.png"></img>
                    <div>
                        <p>May 20, 2023</p>
                        <p className="genZ-para-head">What Are the Pros and Cons of Video Games ? How we can stop it ?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PeerPressure;