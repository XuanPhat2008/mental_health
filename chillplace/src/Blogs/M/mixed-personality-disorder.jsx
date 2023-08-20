import React from "react";
import { Link } from 'react-router-dom';
const MixedPersonality  =()=>{
    return(
        <div className="blog-container-anxiety">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="conditions-a-z">CONDITIONS A-Z</p>
                <p className="title-blog-head">
                    <b>What Is Antisocial Personality Disorder (ASPD)?</b>
                </p>
                <div className="define-para">
                    <p><b>Antisocial personality disorder (ASPD)</b> is a condition characterized by a lack of empathy and regard for other people.</p>
                </div>
                <div className="table-container">
                    <div className="table-of-contents-3">
                        <b className="table-of-contents-head">Table of contents</b>
                        <ul className="table-of-contents-list">
                            <li className="table-items">Symptoms</li>
                            <li className="table-items">Diagnosis</li>
                            <li className="table-items">Causes</li>
                            <li className="table-items">Treatments</li>
                            <li className="table-items">Coping</li>
                        </ul>
                    </div>
                    <div className="description-blog">
                        <p>People with antisocial personality disorder have little or no regard for right or wrong. They antagonize and often act insensitively or in an unfeeling manner. Individuals with this disorder may lie, engage in aggressive or violent behavior, and participate in criminal activity.</p>
                        <p>Psychopathy is associated with antisocial personality disorder. However, research has shown that not every person with ASPD is a psychopath. Approximately one-third of people with antisocial personality disorder meet the criteria for psychopathy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MixedPersonality ;