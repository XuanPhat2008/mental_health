import React from "react";
import { Link } from 'react-router-dom';
import './sub-blog-22.css';
const Thera2  =()=>{
    return(
        <div className="blog-container-sub-22">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back</Link>
            </div>
            <div className="title-blog">
                <p className="title-blog-head">
                    <b>"Spiritual therapy" with home decoration</b>
                </p>
                <div className="table-container">
                    <div className="description-blog">
                        <img src="/src/img/image 319 (1).png"></img>
                    </div>
                </div>
                <div className="sub-blog">
                    <div className="sub-blog-list">
                        <p className="sub-blog-list">I used to participate in all the groups of Beautiful Home Decor groups on Facebook, drop my heart continuously on the posts, always urging myself to one day have to decorate so beautifully, but then... let it go. Until about half a year back, everything changed.</p>
                        <p className="sub-blog-list">When the distance started, I had to work 4 walls for nearly 4 months, every time I take my eyes off the computer, look around, I feel suffocated. Therefore, I gather all my motivation and wisdom to make my home a place where I feel comfortable working.</p>
                        <p className="sub-blog-list">Did you know a house is a reflection of a person's lifestyle and nature? The space of the house is also linked to the mental state of the people living inside. I discovered this research when I was decorating for a while, then realized the "therapeutic nature" of the decor steps I did.</p>
                        <p className="sub-blog-list">Everything starts with material reduction. In the book 'The Japanese Minimalist Lifestyle', author Sasaki Fumio likened the reduction of matter to the cleansing of the mind. That said, practice is not easy. I had to leave the old thing at the door for a week before I decided I didn't need it anymore. After I threw it away, I understood Sasaki Fumio's comment.</p>
                        <p className="sub-blog-list">Next, I bought bonsai to bring nature into the room. I research on how to take care of plants, like how many times a day to water, when to sunbathe. I panic when the tree starts to drop its leaves, or happy when the tree sprouts its first sprouts. Putting all your heart into taking care of something and seeing it grow is an accomplishment to be proud of, especially for someone as clumsy as me.</p>
                        <p className="sub-blog-list">Perhaps, the most important stage is the color scheme for the room. To be safe, I stick to deep tones, from doormats, wallpaper, potted plants to storage bins. But because I couldn't find a good picture on the wall, I ordered an orange one. And even though it's not like the pictures I referenced, it's a lot nicer than I thought. Turns out, experimenting with bold colors isn't all that bad.</p>
                        <p className="sub-blog-list">In the decorating process, it is very important to consult the right models in advance, but it should not be something that puts pressure on yourself. This chair may be a little wobbly, that sticker may be slightly off-tone, and the picture may seem a bit harsh against the wall. It's okay, it can still be fixed. The therapy of decor sometimes lies in the process of editing and embellishing, not necessarily in the final result.</p>
                    </div>
                </div>
                <div>
                    <div className="comment-container">
                        <u className="comment-title">COMMENTS</u>
                        <img src="/src/img/image 69.png" className="comment-icon"/>
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
export default Thera2;