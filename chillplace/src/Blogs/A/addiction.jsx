import React from "react";
import { Link } from 'react-router-dom';
import "./addiction.css";
const Addiction =()=>{
    return(
        <div className="blog-container-addiction">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div class="title-blog">
                <p class="conditions-a-z">CONDITIONS A-Z</p>
                <p class="title-blog-head">
                    <b>Addiction</b>
                </p>
                <div className="addiction-para">
                    <p><b>An addictions</b> a disorder characterized by the compulsive use of a rewarding substance or activity despite experiencing 
                        adverse consequences. This complex condition is influenced by a person’s genes and their environment and is often considered a brain disease.</p>
                    <p>
                        In the past, addiction was thought to only encompass substance abuse, but the definition has been expanded to include activities like gambling 
                        as well as gaming and shopping. It’s also important to note that addiction is about the underlying neurology of the brain 
                        and not about the outward behaviors. With appropriate treatment, people with addictions can go on to live happy, healthy lives.</p>
                </div>
                <div className="frequently-asked-questions">
                    <p className="frequently-para">FREQUENTLY ASKED QUESTIONS</p>
                    <div className="frequently-content">
                        <div className="content-border">
                            <p className="content-para">Is addiction a disease?</p>
                            <p className="content-para-text">Addiction is a treatable, chronic disease that affects the brain’s reward, motivation, memory, and related circuitry. Once the brain’s 
                                reward system has been impacted by the addictive substance or activity, it can trigger a behavioral and biological response that promotes 
                                repeated engagement in the addictive behavior despite harmful consequences.</p>
                        </div>
                        <div className="content-border">
                            <p className="content-para">What causes addiction?</p>
                            <p className="content-para-text">People engage in potentially addictive activities to feel pleasure, and over time, the reinforcing effect of these activities may change
                             brain chemistry to create an unconscious drive to continue the behavior. Multiple factors influence this process, including genetics, diet, mental health, past traumas, pain,
                              stress, and stage of life.</p>
                        </div>
                        <div className="content-border">
                            <p className="content-para">How can you break an addiction?</p>
                            <p className="content-para-text">The first step in overcoming addiction is to desire change and avoid the people, places and things which promote the addiction. Support groups, 
                            mentors, and 12 step programs provide help, while counselors, recovery centers, and physicians provide expertise and medication to treat cravings and the effects of withdrawal. 
                            Eating healthy and getting exercise also play an important role in recovery.</p>
                        </div>
                        <div className="content-border">
                            <p className="content-para">Is addiction genetic?</p>
                            <p className="content-para-text">A person's genetics account for about half of their risk for developing an addiction. The impact of genetics is influenced by an interaction between
                             a person's environment, diet, and biology. Alcoholism, like other addictions, tends to run in families, and members of those families are at increased risk for developing alcoholism.</p>
                        </div>
                    </div>
                </div>
                <div className="addiction-content">
                    <div className="addiction-content-list">
                        <img src="/src/img/image 16.png"></img>
                        <div className="addiction-main">
                            <p>16/9/2022</p>
                            <Link to="/blog/addiction-blog-1" className="addiction-menu">                            
                                <p className="addiction-main-head">Children "addicted" to social networks: Incalculable consequences</p>
                            </Link>
                        </div>
                    </div>
                    <div className="addiction-content-list">
                        <img src="/src/img/image 17.png"></img>
                        <div className="addiction-main">
                            <p>04/12/2022</p>
                            <Link to="/blog/addiction-blog-2" className="addiction-menu">
                                <p className="addiction-main-head">Young people addicted to social networks</p>
                            </Link>
                        </div>
                    </div>
                    <div className="addiction-content-list">
                        <img src="/src/img/image 18.png"></img>
                        <div className="addiction-main">
                            <p>18/3/2023</p>
                            <Link to="/blog/addiction-blog-3" className="addiction-menu">
                                <p className="addiction-main-head">Is It Possible to Have a YouTube Addiction?</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Addiction;