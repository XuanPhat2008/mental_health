import React from "react";
import { Link } from 'react-router-dom';
import './sub-blog-14.css';
const GenZ2  =()=>{
    return(
    <div className="blog-container-sub-14">
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
                    <img src="/src/img/image 280.png"></img>
                    <p>These days, a teen's typical day involves a considerable amount of technology use. Young people use social media to reach out to friends, make new ones, get updated on social events, entertainment, and while away time.</p>
                    <p>However, it's long been said that social media is harmful to teen mental health. The claim is not unfounded. But is it right to say social media use is entirely harmful for teens?</p>
                </div>
            </div>
            <div className="sub-blog">
                <div className="sub-blog-list">
                    <b className="sub-blog-list">Being Online Can Help Teens Cope Better with Stress</b>
                    <p className="sub-blog-list">New research reveals that teens in low socioeconomic settings who spend a moderate amount of time online when stressed recover much faster than those who spend too much time online or avoid it entirely.</p>
                    <p className="sub-blog-list">The key here is striking the right balance between the time spent online and offline. Instead of avoiding or overusing social media, teens can benefit mentally when they stay online moderately.</p>
                    <p className="sub-blog-list">While people advise teens to spend as little time as possible online, that may prove not to be the best for them. Technology and social media have come to stay, and asking young people to avoid it is a wild goose chase.</p>
                    <p className="sub-blog-list">Teens are smart, and they can and should be allowed to use technology to their advantage. Key again being "striking the right balance."</p>
                </div>
                <div className="sub-blog-list">
                    <b className="sub-blog-list">The Research</b>
                    <p className="sub-blog-list">Lead author Kathryn Modecki aimed to determine how adolescents in disadvantaged settings with insufficient local support would fare if availed with online engagement. So the researchers gave iPhones to over 200 teens living in low socioeconomic settings. They then asked these participants to use the phones at varying rates and give reports five times a day on their usage, stressors, and emotions.</p>
                    <p className="sub-blog-list">The results showed that teens who engaged online moderately after a stressful situation bounced back faster than those who didn't use technology at all or used it particularly as a coping mechanism. Moderate online coping also helped reduce negative emotions.</p>
                    <p className="sub-blog-list">According to the research, it's clear that engaging online to seek emotional support after being faced with stressors can help teens find relief.</p>
                    <p className="sub-blog-list">So rather than avoid technology altogether, teens who cannot readily find mental support in their immediate environment can look for it online. Chatting and video calling friends, even talking with strangers, indeed can positively influence mental health.</p>
                </div>
                <div className="sub-blog-list">
                    <b className="sub-blog-list">The Bottom Line</b>
                    <p className="sub-blog-list">According to the researchers, the online space serves not just as a short-term distraction for young people but a place they can get support and information on the issues they face.</p>
                </div>
                <div className="sub-blog-list">
                    <b className="sub-blog-list">Some Healthy Social Media Use for Teens</b>
                    <p className="sub-blog-list">To protect your mental health and get the best of social media as a teenager, do the following:
                        <ul>
                            <li className="sub-blog-list">Follow mental support pages/groups</li>
                            <li className="sub-blog-list">Follow people who support diversity</li>
                            <li className="sub-blog-list">Join groups and pages created for your interests, such as sports, games, art, etc.</li>
                            <li className="sub-blog-list">Join groups where members can share their stories and others can offer support and opinions.</li>
                            <li className="sub-blog-list">Remember that the online space should complement your social life and not replace it. Do not make it your world, the only place you feel safe.</li>
                            <li className="sub-blog-list">Take breaks to interact with the outside world.</li>
                        </ul>
                    </p>
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
export default GenZ2;