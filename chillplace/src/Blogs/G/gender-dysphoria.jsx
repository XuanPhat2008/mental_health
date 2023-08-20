import React from "react";
import { Link } from 'react-router-dom';
import './gender-dysphoria.css';
const GenderDysphoria =()=>{
    return(
        <div className="blog-container-gender">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="conditions-a-z">CONDITIONS A-Z</p>
                <p className="title-blog-head">
                    <b>What Is Gender Dysphoria?</b>
                </p>
                <div className="define-para">
                    <p><b>Gender dysphoria</b> refers to feelings of distress and discomfort that a person experiences when their assigned gender does not match their gender identity. People who experience gender dysphoria may feel uncomfortable with and distressed over the conflict between the sexual characteristics of their physical body and how they feel and think about themselves.</p>
                </div>
                <div className="table-container">
                    <div className="table-of-contents-14">
                        <b className="table-of-contents-head">Table of contents</b>
                        <ul className="table-of-contents-list">
                            <li className="table-items">Symptoms</li>
                            <li className="table-items">Diagnosis</li>
                            <li className="table-items">Treatment</li>
                            <li className="table-items">Challenges</li>
                            <li className="table-items">How to Cope</li>
                            <li className="table-items">Important Terms to Know</li>
                        </ul>
                    </div>
                    <div className="description-blog">
                        <p>They may also experience feelings of distress or discomfort over the traditional gender roles expected of their assigned gender.</p>
                        <p>The effects of gender dysphoria can differ from one person to the next. For some people, these feelings of conflict may affect their self-image and behavior. A person with gender dysphoria may cope with discomfort by altering their gender expression, gender representation, or gender assignment from their gender assigned at birth. They may also make adjustments to their physical appearance.</p>
                        <p>Children who experience gender dysphoria may express their wish to be the opposite gender and insist on toys, hairstyles, and clothing typically associated with the opposite gender.</p>
                        <p>Not everyone who has gender dysphoria identifies as transgender, but many people diagnosed with gender dysphoria do identify as transgender, gender fluid, or gender non-conforming.</p>
                    </div>
                </div>
                <div className="gender-blog">
                    <div className="gender-blog-list"></div>
                    <div className="gender-blog-list"></div>
                    <div className="gender-blog-list"></div>
                    <div className="gender-blog-list"></div>
                    <div className="gender-blog-list"></div>
                    <div className="gender-blog-list"></div>
                </div>
                <div>
                    <div className="comment-container">
                        <u className="comment-title">COMMENTS</u>
                        <img src="../src/img/image 69.png" className="comment-icon"/>
                    </div>
                    <div className="comment-chat">
                        <p><b className="comment-user"><i>Reader_xuanphatcalemkemchuoi:</i></b> mình đã biết và chia sẻ đến web nhiều điều hay, bổ ích !!</p>
                        <p><b className="comment-user"><i>Reader_nguoitinhmuadongk23:</i></b> mình đã đã và làm theo blog này và thấy hiệu quả, blog tuyệt vời quá.</p>
                    </div>               
                </div>
            </div>
        </div>
    );
};
export default GenderDysphoria;