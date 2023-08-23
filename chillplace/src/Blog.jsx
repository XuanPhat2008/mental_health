import React from "react";
import { Link } from 'react-router-dom';
import "./Blog.css";
const Blog = () =>{
    return(
        <div className="blog-container">
            <h className="blog-title">Blog</h>
            <ul>
                <h className="blog-head">A</h>
                <li className="blog-li">
                    <Link to="/blog/addiction" className="blog-li linking">Addiction</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/adhd-childhood" className="blog-li linking">ADHD,Childhood</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/adjustment-disorder" className="blog-li linking">Adjustment Disorder</Link></li>
                <li className="blog-li">
                    <Link to="/blog/antisocial-personality-disorder" className="blog-li linking">Antisocial Personality Disorder</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/anxiety" className="blog-li linking">Anxiety</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">B</h>
                <li className="blog-li">
                    <Link to="/blog/bulimia" className="blog-li linking">Bulimia</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/body-dysmorphic-disorder" className="blog-li linking">Body Dysmorphic Disorder</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/bipolar-disorder" className="blog-li linking">Bipolar Disorder</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">C</h>
                <li className="blog-li">
                    <Link to="/blog/caffeine-addiction" className="blog-li linking">Caffeine Addiction</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/clinical-psychology" className="blog-li linking">Clinical Psychology</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/cognitive-behavioral-therapy" className="blog-li linking">Cognitive Behavioral Therapy</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">D</h>
                <li className="blog-li">
                    <Link to="/blog/drug-addiction" className="blog-li linking">Drug Addiction</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/depression-childhood" className="blog-li linking">Depression, Childhood</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/delayed-sleep-phase-syndrome" className="blog-li linking">Delayed Sleep Phase Syndrome</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">E</h>
                <li className="blog-li">
                    <Link to="/blog/eating-disorders" className="blog-li linking">Eating Disorders</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">G</h>
                <li className="blog-li">
                    <Link to="/blog/genZ-&-peer-pressure" className="blog-li linking">Gen Z & Peer Pressure</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/gender-dysphoria" className="blog-li linking">Gender Dysphoria</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">I</h>
                <li className="blog-li">
                    <Link to="/blog/intellectual-disability" className="blog-li linking">Intellectual Disability</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">L</h>
                <li className="blog-li">
                    <Link to="/blog/loneliness" className="blog-li linking">Loneliness</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">M</h>
                <li className="blog-li">
                    <Link to="/blog/mixed-personality-disorder" className="blog-li linking">Mixed Personality Disorder</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/mood-disorders" className="blog-li linking">Mood Disorders</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">N</h>
                <li className="blog-li">
                    <Link to="/blog/night-eating-syndrome" className="blog-li linking">Night Eating Syndrome</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/non-24-hour-sleep-wake-disorder" className="blog-li linking">Non-24-Hour Sleep-Wake Disoreder</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">O</h>
                <li className="blog-li">
                    <Link to="/blog/obessive-compulsive-disorder" className="blog-li linking">Obsessive-Compulsive Disorder</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">S</h>
                <li className="blog-li">
                    <Link to="/blog/sex-addiction" className="blog-li linking">Sex Addiction</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/sleep-disorders" className="blog-li linking">Sleep Disorders</Link>
                </li>
                <li className="blog-li">
                    <Link to="/blog/social-anxiety-disorder" className="blog-li linking">Social Anxiety Disorder</Link>
                </li>
            </ul>
            <ul>
                <h className="blog-head">T</h>
                <li className="blog-li">
                    <Link to="/blog/technology-addiction" className="blog-li linking">Technology Addiction</Link>
                </li>
            </ul>
        </div>
    );
};
export default Blog;
/*Path to each bllog
*/