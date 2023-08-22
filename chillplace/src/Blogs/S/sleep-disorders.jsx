import React from "react";
import { Link } from 'react-router-dom';
import './sleep-disorder.css';
const SleepDisorder  =()=>{
    return(
        <div className="blog-container-sleep">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="conditions-a-z">CONDITIONS A-Z</p>
                <p className="title-blog-head">
                    <b>Sleep Disorders: Types, Causes, Symptoms, and Treatment</b>
                </p>
                <div className="define-para">
                    <p><b>Sleep disorders,</b> also known as sleep-wake disorders, are conditions that can affect the amount, timing, or quality of your sleep, causing you to feel tired in the daytime and have difficulty functioning as a result.</p>
                </div>
                <div className="table-container">
                    <div className="description-blog">
                        <p>Millions of Americans aren’t getting enough sleep and 50 to 70 million Americans have one or more sleep disorders. If you or a loved one haven’t been sleeping well, it’s important to visit a healthcare provider for an evaluation.</p>
                        <p>Not getting enough sleep can also affect your academic or work performance, interpersonal relationships, and safety. A 2019 study notes that sleep disorders can have a serious impact on your quality of life.</p>
                        <p>This article explores the types, causes, symptoms, diagnosis, and treatment of sleep disorders.</p>
                    </div>
                </div>
                <div className="sleep-blog">
                    <div className="sleep-blog-list">
                        <b className="sleep-blog-list">Types of Sleep Disorders</b>
                        <p className="sleep-blog-list">While there are over 80 types of sleep disorders, these are some of the most common ones:
                            <ul>
                                <li className="sleep-blog-list">Insomnia: is the most common type of sleep disorder. It is characterized by difficulty with falling asleep and staying asleep.</li>
                                <li className="sleep-blog-list">Sleep apnea: This is a breathing disorder wherein the person stops breathing for 10 seconds or more while they’re sleeping.</li>
                                <li className="sleep-blog-list">Hypersomnia: is a condition that is characterized by an inability to stay awake during the day. Narcolepsy is a type of hypersomnia.</li>
                                <li className="sleep-blog-list">Parasomnia: is characterized by unusual behaviors such as eating, walking, or talking while sleeping, falling asleep, or waking up.</li>
                                <li className="sleep-blog-list">Restless leg syndrome (RLS): This condition is characterized by a prickling or tingling sensation in the legs that is accompanied by a strong urge to move them.</li>
                                <li className="sleep-blog-list">Circadian rhythm disorders: These conditions are characterized by problems with the sleep-wake cycle, due to which the person is unable to go to sleep and wake up at the appropriate time.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="sleep-blog-list">
                        <b className="sleep-blog-list">Symptoms of Sleep Disorders</b>
                        <p className="sleep-blog-list">The symptoms you experience can vary depending on the type of sleep disorder you have. These are some common symptoms of sleep disorders:
                            <ul>
                                <li className="sleep-blog-list">Taking over half an hour to fall asleep every night</li>
                                <li className="sleep-blog-list">Waking up several times every night and having trouble going back to sleep</li>
                                <li className="sleep-blog-list">Waking up too early in the morning</li>
                                <li className="sleep-blog-list">Having difficulty moving when you first wake up</li>
                                <li className="sleep-blog-list">Often feeling sleepy in the day or frequently taking naps</li>
                                <li className="sleep-blog-list">Falling asleep at the wrong times in the day</li>
                                <li className="sleep-blog-list">Snoring loudly, gasping, snorting, making choking sounds, talking, or not breathing for short periods of time while sleeping</li>
                                <li className="sleep-blog-list">Experiencing creeping, crawling, or tingling feelings in your arms or legs that get better with movement or massage, particularly while trying to fall asleep</li>
                                <li className="sleep-blog-list">Frequently jerking your arms or legs while sleeping</li>
                                <li className="sleep-blog-list">Having vivid, dream-like experiences while falling asleep or lightly dozing</li>
                                <li className="sleep-blog-list">Experiencing sudden muscle weakness when you’re angry, scared, or laughing</li>
                            </ul>
                        </p>
                    </div>
                    <div className="sleep-blog-list">
                        <b className="sleep-blog-list">Causes of Sleep Disorders</b>
                        <p className="sleep-blog-list">Sleep disorders can be caused by various factors that affect your body’s circadian rhythm, such as:
                            <ul>
                                <li className="sleep-blog-list">Physical conditions, such as ulcers</li>
                                <li className="sleep-blog-list">Medical conditions, such as asthma</li>
                                <li className="sleep-blog-list">Psychiatric conditions, such as depression or anxiety</li>
                                <li className="sleep-blog-list">Genetic factors, as narcolepsy is genetic</li>
                                <li className="sleep-blog-list">Substances, such as alcohol</li>
                                <li className="sleep-blog-list">Stimulants, such as caffeine</li>
                                <li className="sleep-blog-list">Medications, since some drugs can hamper sleep</li>
                                <li className="sleep-blog-list">Irregular schedules, which can interfere with the body’s biological clock</li>
                                <li className="sleep-blog-list">Aging, since people spend less time in deep sleep as they get older</li>
                            </ul>
                        </p>
                    </div>
                    <div className="sleep-blog-list">
                        <b className="sleep-blog-list">Diagnosing Sleep Disorders</b>
                        <p className="sleep-blog-list">A healthcare provider such as a sleep specialist can diagnose a sleep disorder by:
                            <ul>
                                <li className="sleep-blog-list">Reviewing your medical history</li>
                                <li className="sleep-blog-list">Inquiring about your symptoms and sleep difficulties</li>
                                <li className="sleep-blog-list">Asking you to maintain a sleep diary to record your sleep habits</li>
                                <li className="sleep-blog-list">Performing a physical exam</li>
                                <li className="sleep-blog-list">Performing a polysomnogram (sleep study) that monitors certain biological data while you’re sleeping. The data may include your brain waves, eye movements, heart rate, blood pressure, or breathing rate. Some sleep studies also check whether you can stay alert during the day or how quickly you fall asleep while napping in the daytime.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="sleep-blog-list">
                        <b className="sleep-blog-list">Treating Sleep Disorders</b>
                        <p className="sleep-blog-list">Treatment for sleeping disorders can vary depending on the type of disorder you have. These are some of the treatment options for sleeping disorders:
                            <ul>
                                <li className="sleep-blog-list">Good sleep hygiene</li>
                                <li className="sleep-blog-list">A cool, dark, and quiet sleeping environment</li>
                                <li className="sleep-blog-list">An active lifestyle and a healthy, balanced diet</li>
                                <li className="sleep-blog-list">Bright light therapy in the morning to reset your circadian rhythm</li>
                                <li className="sleep-blog-list">Relaxation exercises to reduce stress</li>
                                <li className="sleep-blog-list">Cognitive behavioral therapy to challenge stressful thought patterns</li>
                                <li className="sleep-blog-list">Continuous positive airway pressure (CPAP) machine to treat sleep apnea</li>
                                <li className="sleep-blog-list">Medicines, such as sleeping pills, which are generally prescribed for short periods of time</li>
                                <li className="sleep-blog-list">Natural supplements, such as melatonin, which are also generally recommended for short-term use</li>
                            </ul>
                        </p>
                    </div>
                    <div className="sleep-blog-list">
                        <b className="sleep-blog-list">A Word From Verywell</b>
                        <p className="sleep-blog-list">Not getting a good night’s sleep can leave most people tired, irritable, and cranky. Not sleeping well for several days on end can have more serious consequences as it can affect your physical and mental health, work, relationships, and ability to function.</p>
                        <p className="sleep-blog-list">If you suspect you or a loved one might have a sleeping disorder, it’s important to visit a healthcare provider for a diagnosis and treatment. Your primary care provider can refer you to a sleep specialist, if needed. There are treatment options that can help.</p>
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
export default SleepDisorder;