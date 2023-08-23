import React from "react";
import { Link } from 'react-router-dom';
import './eating-disorders.css';
const EatingDisorder =()=>{
    return(
        <div className="blog-container-eating">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="blog-container-addiction">
            <div class="title-blog">
                <p class="conditions-a-z">CONDITIONS A-Z</p>
                <p class="title-blog-head">
                    <b>Eating Disorders</b>
                </p>
                <div className="addiction-para">
                    <p><b>An eating disorder</b> is a mental health condition in which the person affected experiences significant disruptions in their eating behaviors as well as in their related thoughts and emotions. People who struggle with eating disorders often become preoccupied with food and their body weight.</p>
                    <p>Additionally, eating disorders often occur together with other mental health issues like depression, anxiety, panic disorders, and obsessive compulsive disorders. Without treatment, eating disorders can cause a number of health-related problems including cardiovascular issues, gastrointestinal issues, and malnutrition. But with proper treatment, people affected by eating disorders can resume suitable eating habits and can improve their mental health.</p>
                </div>
                <div className="frequently-asked-questions">
                    <p className="frequently-para">FREQUENTLY ASKED QUESTIONS</p>
                    <div className="frequently-content">
                        <div className="content-border">
                            <p className="content-para">Could you have an eating disorder?</p>
                            <p className="content-para-text">Determining if you have an eating disorder begins with examining your thoughts and behaviors surrounding food, body image and body weight. Although there is an extensive list of warning signs, not everyone will display every symptom. If you suspect you have an eating disorder, it’s important to talk to your doctor or a mental health professional. The chance for recovery increases the sooner an eating disorder is addressed.</p>
                        </div>
                        <div className="content-border">
                            <p className="content-para">What causes eating disorders?</p>
                            <p className="content-para-text">Eating disorders are complex disorders that stem from a variety of factors including genetics, cultural ideals, environmental, psychological, and biological influences. These risk factors may also include mental health conditions like anxiety and depression along with body image issues.</p>
                        </div>
                        <div className="content-border">
                            <p className="content-para">How can you help someone with an eating disorder?</p>
                            <p className="content-para-text">To help a loved one with an eating disorder, be supportive of their recovery efforts without trying to fix, control, or counsel them. Instead, be patient and encouraging. Empower them to tackle their disordered eating and talk to a counselor or therapist.</p>
                        </div>
                        <div className="content-border">
                            <p className="content-para">Are eating disorders genetic?</p>
                            <p className="content-para-text">There is some evidence that eating disorders are heritable. In fact, in one study of twins, researchers discovered that 40% to 60% of the risk for anorexia nervosa, bulimia nervosa, and binge eating disorder arises from genetic influences. However, the development of an eating disorder is a complex process impacted by a variety of factors and not just about genetic influences.</p>
                        </div>
                    </div>
                </div>
                <div className="eating-content">
                    <div className="eating-content-list">
                        <img src="/src/img/image 166.png"></img>
                        <div className="eating-para">
                            <p>06/12/2022 </p>
                            <Link to="/blog/eating-blog-1" className="addiction-menu">
                                <p className="eating-para-head">OCD vs. Eating Disorders: What Are the Differences?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="eating-content-list">
                        <img src="/src/img/image 167.png"></img>
                        <div className="eating-para">
                            <p>11/8/2022</p>
                            <Link to="/blog/eating-blog-2" className="addiction-menu">
                                <p className="eating-para-head">Binge Eating Disorder Symptoms</p>
                            </Link>
                        </div>
                    </div>
                    <div className="eating-content-list">
                        <img src="/src/img/image 168.png"></img>
                        <div>
                            <p>21/12/2021</p>
                            <Link to="/blog/eating-blog-3" className="addiction-menu">
                                <p className="eating-para-head">Gastroparesis and Eating Disorders</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default EatingDisorder;