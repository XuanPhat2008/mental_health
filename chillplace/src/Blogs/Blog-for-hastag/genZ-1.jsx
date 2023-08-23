import React from "react";
import { Link } from 'react-router-dom';
import './sub-blog-13.css';
const GenZ1  =()=>{
    return(
        <div className="blog-container-sub-13">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back</Link>
            </div>
            <div className="title-blog">
                <p className="title-blog-head">
                    <b>Social Media and Teen Mental Health</b>
                </p>
                <div className="table-container">
                    <div className="description-blog">
                        <img src="/src/img/image 283.png"></img>
                        <p>Many youths suffering from mental illness are exposed to triggers when they hop on social media. From the cyberbullying to the show-offs and peer pressure, it can be hard for depressed and anxious teens to cope. Furthermore, even healthy youths can become vulnerable to mental health problems due to continous exposure to the pressure on social media.</p>
                        <p>Peer influence is high online indeed. Most youths engage in negative comparisons with what they have accomplished and some put too much emphasis on physical appearances. This leads to depression for many young people.</p>
                    </div>
                </div>
                <div className="sub-blog">
                    <div className="sub-blog-list">
                        <b className="sub-blog-list">What are the negative impacts of social media on youths' mental health?</b>
                        <p className="sub-blog-list">Adolescents are vulnerable to mental illness because of the high risk they face on social media platforms. They are exposed to content that displays risky behaviors like drugs, smoking, and drinking. Some teens also experience feelings of anxiety and inadequacy when they see their mates flaunting wealth and gorgeous appearances on the gram. As a result, there is a high risk of suicide and distress among teens.</p>
                        <p className="sub-blog-list">It's also common to find some people preying on other teenagers with predisposed conditions and vulnerabilities and talking down on them.</p>
                    </div>
                    <div className="sub-blog-list">
                        <b className="sub-blog-list">Does social media cause depression?</b>
                        <p className="sub-blog-list">It's hard to say that social media causes depression. But what we do know is that extensive social media usage can harm teens by exposing them to experiences and content that can trigger depression, anxiety, and suicidal thoughts. The experiences that most youths go through specifically on social media have become a major influence on their mental health. In fact, there has been an increase in adolescent depression and suicidal behaviour over the last two decades that coincide with the advent of social media.</p>
                        <p className="sub-blog-list">So can we say that social media is bad for teens? Not exactly. In fact, social media may help young people cope better with stress. It's all about optimizing your usage, using social media moderately.</p>
                        <p className="sub-blog-list">Social media was created to make it easy for people to bond and communicate. Many young people resort to their screens when they need entertainment and information. With many more youths having access to smart devices, it has become the major way to communicate with others from all over the world. This can be beneficial, as people get access to money-making opportunities online.</p>
                        <p className="sub-blog-list">One research discovered that teens who used social media more than 2 hours a day were much more likely to report poor mental health outcomes like distress and suicidal thoughts. This shows that if you can keep your social media usage moderate, you can reduce its negative impact on your mental health.</p>
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
export default GenZ1;