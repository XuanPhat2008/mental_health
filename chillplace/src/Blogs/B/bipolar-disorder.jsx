import React from "react";
import { Link } from 'react-router-dom';
import './bipolar-disorder.css';''
const BipolarDisorder =()=>{
    return(
        <div className="blog-container-bipolar-disorder">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="conditions-a-z">CONDITIONS A-Z</p>
                <p className="title-blog-head">
                    <b>What Is Bipolar Disorder?</b>
                </p>
                <div className="define-para">
                    <p><b>Bipolar disorder</b> is a mental health condition defined by periods (better known as episodes) of extreme mood disturbances. Bipolar disorder affects a person's mood, thoughts, and behavior. It is a chronic condition, meaning that it is lifelong. Symptoms can be managed, however, with proper treatment.</p>
                </div>
                <div className="table-container">
                    <div className="table-of-contents-6">
                        <b className="table-of-contents-head">Table of contents</b>
                        <ul className="table-of-contents-list">
                            <li className="table-items">Symptoms</li>
                            <li className="table-items">Causes</li>
                            <li className="table-items">Diagnosis</li>
                            <li className="table-items">Treatments</li>
                            <li className="table-items">Coping</li>
                            <li className="table-items">Bipolar Disorder in Children</li>
                        </ul>
                        <div className="description-blog">
                            <p>There are two main types of bipolar disorders: bipolar I and bipolar II. According to the Diagnostic and Statistical Manual of Mental Disorders, bipolar I disorder involves episodes of severe mania and often depression. Bipolar II disorder involves a less severe form of mania called hypomania.</p>
                        </div>
                    </div>
                    <img src="/src/img/image 24.png" className="bipolar-img"></img>
                </div>
                <div className="bipolar-blog">
                    <div className="bipolar-blog-list">
                        <h1 className="bipolar-blog-list">Symptoms</h1>
                        <p className="bipoplar-blog-list">Despite the major difference when it comes to mania in the two types of bipolar disorder, there are quite a few similarities in symptoms.</p>
                        <p><i className="bipolar-blog-list">Depressive Episodes</i></p>
                        <p className="bipoplar-blog-list">In bipolar I disorder, a major depressive episode (one or more) usually occurs, but it is not required. Bipolar II disorder involves one or more major depressive episodes. Both disorders may include periods of euthymia, which is a term used to describe emotionally stable periods.</p>
                        <p>Common symptoms that occur in a major depressive episode include:
                            <ul>
                                <li className="bipolar-blog-list">Insomnia or hypersomnia</li>
                                <li className="bipolar-blog-list">Unexplained or uncontrollable crying</li>
                                <li className="bipolar-blog-list">Severe fatigue</li>
                                <li className="bipolar-blog-list">Loss of interest in things the patient enjoys during euthymia</li>
                                <li className="bipolar-blog-list">Recurring thoughts of death or suicide</li>
                            </ul>
                        </p>
                        <b className="bipolar-blog-list">Mania</b>
                        <p>Manic episodes last at least seven days. An individual experiencing a manic episode may experience:
                            <ul>
                                <li className="bipolar-blog-list">A marked increase in energy</li>
                                <li className="bipolar-blog-list">Feelings of euphoria</li>
                                <li className="bipolar-blog-list">Hallucinations or delusions</li>
                                <li className="bipolar-blog-list">Increased sexual desire</li>
                                <li className="bipolar-blog-list">Less need for sleep</li>
                            </ul>
                        </p>
                        <p className="bipolar-blog-list">During a manic episode, individuals may engage in reckless behavior—for example, risky sexual behavior, excessive spending, or impulsive decision-making.</p>
                        <p className="bipolar-blog-list">Sometimes people assume a "manic episode" means someone turns into a "maniac." That's not true. It's also important to note that experiencing mania does not automatically mean a person will become violent or dangerous.</p>
                        <b className="bipolar-blog-list">Hypomania</b>
                        <p className="bipolar-blog-list">An individual experiencing a hypomanic episode may experience similar symptoms to those of a manic episode, but their functioning won't be markedly impaired. Many individuals who experience hypomania associated with bipolar II enjoy the increased energy and decreased need for sleep.</p>
                        <p className="bipolar-blog-list">An episode of hypomania does not escalate to a point that a person needs hospitalization, which may happen with a person experiencing mania—especially if they are becoming a danger to others and/or themselves.</p>
                    </div>
                    <div className="bipolar-blog-list">
                        <h1 className="bipolar-blog-list">Causes</h1>
                        <p className="bipolar-blog-list">While the exact cause of bipolar disorder remains unclear, genetics is believed to play a major role. This is evidenced, in part, by studies of twins in which one or both had a bipolar I diagnosis. In 40% of identical twins (those with identical gene sets), both twins were found to have bipolar disorder compared to less than 10% of fraternal twins (who don't share all of the same genes).</p>
                        <p className="bipolar-blog-list">Other contributing factors include abnormalities in a person’s brain circuitry, irregularities in neurotransmitters, and environmental factors such as childhood trauma or abuse.</p>
                    </div>
                    <div className="bipolar-blog-list">
                        <h1 className="bipolar-blog-list">Diagnosis</h1>
                        <p className="bipolar-blog-list">When diagnosing bipolar disorder (regardless of the type), a mental health clinician must rule out other illnesses such as schizoaffective disorder, schizophrenia, delusional disorder, schizophreniform disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorder that may share similar symptoms.</p>
                        <p className="bipolar-blog-list">Bipolar disorder cannot be diagnosed like other illnesses where a blood test, X-ray, or physical exam can provide a definitive diagnosis. The diagnosis is based on a set of criteria that a person must meet in order to be considered bipolar.</p>
                        <p className="bipolar-blog-list">An informed diagnosis would likely include specific tests to exclude other physical contributions to the bipolar symptoms. This may involve a drug screen, imaging tests (CT scan or MRI of the brain), electroencephalogram (EEG), and a full battery of diagnostic blood tests. A doctor will also ask you questions, and you should do your best to work closely with a healthcare team to confirm a diagnosis and find the right treatment plan for you.</p>
                    </div>
                    <div className="bipolar-blog-list">
                        <h1 className="bipolar-blog-list">Treatment</h1>
                        <p className="bipolar-blog-list">Treatment of bipolar I disorder is highly individualized and based on the types and severity of symptoms a person is experiencing.</p>
                        <p>Mood stabilizers are the core of the treatment process, and other agents are often used, such as:
                            <ul>
                                <li className="bipolar-blog-list">A mood stabilizer, such as lithium</li>
                                <li className="bipolar-blog-list">Anticonvulsants to stabilize mood swings</li>
                                <li className="bipolar-blog-list">Antipsychotics to control psychotic symptoms such as delusions ​and hallucinations, as well as the newer atypical antipsychotics, which have mood-stabilizing properties of their own</li>
                                <li className="bipolar-blog-list">Antidepressants (less commonly prescribed as they can trigger a manic episode)</li>
                            </ul>
                        </p>
                        <p className="bipolar-blog-list">In more severe cases, electroconvulsive therapy (ECT) may be used to help relieve mania or severe depression.</p>
                        <b className="bipolar-blog-list">Both Types Should Be Properly Treated</b>
                        <p className="bipolar-blog-list">Since hypomania that occurs in bipolar II is less severe than the mania that occurs in bipolar I disorder, bipolar II is often described as "milder" than bipolar I—but this is not completely accurate. Certainly, people with bipolar I can have more serious symptoms during mania, but hypomania is still a serious condition that can have life-changing consequences and therefore, should be properly addressed.</p>
                        <p className="bipolar-blog-list">In addition, research suggests that bipolar II disorder is dominated by longer and more severe episodes of depression. In fact, over time, people with bipolar II become less likely to return to full functioning between episodes.</p>
                        <p className="bipolar-blog-list">Proper treatment should be pursued for all types of bipolar disorders, and you should work closely with your healthcare team to figure out the best treatment for you.</p>
                    </div>
                    <div className="bipolar-blog-list">
                        <h1 className="bipolar-blog-list">Coping</h1>
                        <p className="bipolar-blog-list">As with many mental health conditions, bipolar disorder is associated with a certain stigma in society, which may make coping with the condition more difficult for you or a loved one. Know that stigma very often develops because of lack of knowledge.</p>
                        <p className="bipolar-blog-list">Whether or not someone with bipolar faces stigma directly, know that the best way to cope with the condition is to connect with others who are experiencing it and get professional help. You can also fight stigma to help you cope better, and learn more about your rights.</p>
                        <b className="bipolar-blog-list">Bipolar Disorder in Children</b>
                        <p className="bipolar-blog-list">Bipolar disorder can occur in kids of any age. It's important for parents and caregivers to be aware of the unique signs—they should pay attention to a child's functioning, feelings, and any family history of the disorder. With a timely diagnosis, a treatment plan for symptom management can be better established.</p>
                        <b className="bipolar-blog-list">A Word From Verywell</b>
                        <p className="bipolar-blog-list">Bipolar disorder is a complex disorder. If you are worried that you or a loved one has symptoms of a bipolar episode, seek medical attention for a proper evaluation.</p>
                        <p className="bipolar-blog-list">Although bipolar disorder is not curable, it is treatable. With the right medication and support, symptoms can be managed to the point where quality of life isn't drastically affected.</p>
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
export default BipolarDisorder;