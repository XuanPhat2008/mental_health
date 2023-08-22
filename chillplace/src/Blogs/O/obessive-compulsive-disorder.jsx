import React from "react";
import { Link } from 'react-router-dom';
import './obessive-compulsive.css';
const ObessiveCompulsive  =()=>{
    return(
        <div className="blog-container-obessive">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div class="title-blog">
                <p class="conditions-a-z">CONDITIONS A-Z</p>
                <p class="title-blog-head">
                    <b>Obsessive-Compulsive Disorder</b>
                </p>
                <div className="addiction-para">
                    <p><b>Obsessive-compulsive disorder (OCD)</b> is a mental health condition that involves experiencing recurring thoughts (obsessions) that may then lead to repetitive behaviors (compulsions). An estimated 2.3% of U.S. adults experience OCD at some point in their lives and the condition tends to be more common in women than in men.</p>
                </div>
                <div className="frequently-asked-questions">
                    <p className="frequently-para">FREQUENTLY ASKED QUESTIONS</p>
                    <div className="frequently-content">
                        <div className="content-border">
                            <p className="content-para">What causes OCD?</p>
                            <p className="content-para-text">The exact causes of OCD are not completely understood, but a combination of factors likely play a role. Research suggests that increased activity in certain areas of the brain is linked to a higher risk for OCD. Environmental factors including sudden life changes, relationship troubles, abuse, illness, and stress may also contribute to the onset of the condition.</p>
                        </div>
                        <div className="content-border">
                            <p className="content-para">How is OCD treated?</p>
                            <p className="content-para-text">OCD is typically treated with medication and psychotherapy. Psychotherapy may focus on changing the underlying thoughts that contribute to the disorder (through cognitive behavioral therapy), or exposing people to things they fear in order to gradually reduce the response (through exposure and response prevention therapy).</p>
                        </div>
                        <div className="content-border">
                            <p className="content-para">Is OCD genetic?</p>
                            <p className="content-para-text">Research suggests that genetics may cause people to have a predisposition to OCD, but that does not mean that there is an "OCD gene." Instead, certain groups of genes may increase vulnerability. While a person might have a genetic predisposition to OCD, it is the interaction of these genes and environmental variables that likely triggers the onset of the condition.</p>
                        </div>
                        <div className="content-border">
                            <p className="content-para">Is OCD considered an anxiety disorder?</p>
                            <p className="content-para-text">OCD shares similarities with some anxiety disorders, but there are important distinctions between the types of disorders. In the earlier version of the Diagnostic and Statistical Manual (DSM), OCD was classed with anxiety disorders. In the 2013 publication of the DSM-5, OCD was separated into its own unique category called "Obsessive-Compulsive and Related Disorders."</p>
                        </div>
                        <div className="content-border">
                            <p className="content-para">What are the types of OCD?</p>
                            <p className="content-para-text">While the DSM-5 does not list specific subtypes, research suggests that OCD can present in a few different forms that are distinguished by the type of symptoms involved. Common types of OCD include those that are centered on hoarding, ordering/symmetry, contamination/cleaning, checking, and obsessive thoughts without compulsions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ObessiveCompulsive ;