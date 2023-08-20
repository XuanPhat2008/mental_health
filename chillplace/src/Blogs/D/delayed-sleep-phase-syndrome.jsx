import React from "react";
import { Link } from 'react-router-dom';
import './delayed-sleep.css';
const DelayedSleepSyndrome =()=>{
    return(
        <div className="blog-container-delayed-sleep">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="conditions-a-z">CONDITIONS A-Z</p>
                <p className="title-blog-head">
                    <b>What Is Delayed Sleep Phase Syndrome?</b>
                </p>
                <div className="define-para">
                    <p><b>Delayed sleep phase syndrome (DSPS)</b> is a circadian rhythm sleep disorder that can cause your sleep-time and wake-time to be much later than most people’s.</p>
                </div>
                <div className="table-container">
                    <div className="table-of-contents-13">
                        <b className="table-of-contents-head">Table of contents</b>
                        <ul className="table-of-contents-list">
                            <li className="table-items">Symptoms</li>
                            <li className="table-items">Impact</li>
                            <li className="table-items">Causes</li>
                            <li className="table-items">Diagnosis</li>
                            <li className="table-items">Treatment</li>
                        </ul>
                    </div>
                    <div className="description-blog">
                        <p>Are you more of a night owl than a morning person? Do you have trouble falling asleep until late? Is waking up early a struggle? Are early morning classes, meetings, or activities hard for you? If so, you may have delayed sleep phase syndrome.</p>
                        <p>This condition occurs due to a delay in the timing of your internal body clock, or circadian rhythm, compared to traditional sleep and wake timings.</p>
                        <p>Delayed sleep phase syndrome typically emerges during puberty and affects teenagers, although it can sometimes persist into adulthood as well. If you think you may have this condition, you’re not alone. It is estimated that it affects up to 16% of adolescents and 3% of adults.</p>
                        <p>This article explores the symptoms, causes, impact, diagnosis, and treatment of delayed sleep phase syndrome.</p>
                    </div>
                </div>
                <div className="delayed-sleep-blog">
                    <div className="delayed-sleep-blog-list">
                        <b className="delayed-sleep-blog-list">Symptoms of Delayed Sleep Phase Syndrome</b>
                        <p className="delayed-sleep-blog-list">These are some of the symptoms of delayed sleep phase syndrome:
                            <ul>
                                <li className="delayed-sleep-blog-list">Difficulty falling asleep at bedtime: You may have trouble falling asleep before 1 a.m. Even if you go to bed every night at a reasonable time every night, you may have trouble falling asleep for hours. You may find yourself passing time by reading, watching television, talking on the phone, listening to music, scrolling through social media, or playing games.</li>
                                <li className="delayed-sleep-blog-list">Difficulty waking up early: Not being able to sleep on time can make it very hard for you to wake up early because you haven’t gotten enough sleep. Adhering to a typical 9 a.m. to 5 p.m. schedule can feel like a struggle.</li>
                                <li className="delayed-sleep-blog-list">Excessive daytime sleepiness: If you’ve woken up early and haven’t gotten as much sleep as you need, you will likely feel extremely tired and sleepy during the day. You may even find yourself dozing off at school or work.</li>
                                <li className="delayed-sleep-blog-list">Refreshing sleep on holidays: By contrast, you will probably find yourself feeling much better on days that you’re allowed to sleep in, on weekends or holidays for instance, because you’ve gotten adequate sleep. Your natural wake time may be late in the morning or well past noon.</li>
                            </ul>
                        </p>
                        <p className="delayed-sleep-blog-list">These physical symptoms can have unpleasant consequences. For instance, not being able to wake up on time can cause you to get into trouble with your parents, school authorities, and employers. Furthermore, sleeping in until late morning or afternoon can cause people to mistakenly assume that you’re lazy or useless without understanding that this is something beyond your control.</p>
                    </div>
                    <div className="delayed-sleep-blog-list">
                        <b className="delayed-sleep-blog-list">Impact of Delayed Sleep Phase Syndrome</b>
                        <p className="delayed-sleep-blog-list">Delayed sleep phase syndrome can lead to chronic sleep deprivation, which can impact your health and your quality of life in many ways.</p>
                        <p className="delayed-sleep-blog-list"><i>Impact on Physical Health</i></p>
                        <p className="delayed-sleep-blog-list">Sleep deprivation can take a toll on your physical health and raise your risk of developing health conditions such as:
                            <ul>
                                <li className="delayed-sleep-blog-list">High blood pressure</li>
                                <li className="delayed-sleep-blog-list">Heart disease</li>
                                <li className="delayed-sleep-blog-list">Stroke</li>
                                <li className="delayed-sleep-blog-list">Diabetes</li>
                                <li className="delayed-sleep-blog-list">Obesity</li>
                                <li className="delayed-sleep-blog-list">Kidney disease</li>
                            </ul>
                        </p>
                        <p className="delayed-sleep-blog-list">Sleep deprivation can also raise your risk of injuries, or even death, due to falls, workplace accidents, or car crashes.</p>
                        <p className="delayed-sleep-blog-list"><i>Impact on Mental Health</i></p>
                        <p className="delayed-sleep-blog-list">Not getting enough sleep can also affect your mental health and lead to symptoms such as:
                            <ul>
                                <li className="delayed-sleep-blog-list">Irritability</li>
                                <li className="delayed-sleep-blog-list">Frustration</li>
                                <li className="delayed-sleep-blog-list">Lack of concentration</li>
                                <li className="delayed-sleep-blog-list">Inability to focus</li>
                                <li className="delayed-sleep-blog-list">Indecision</li>
                                <li className="delayed-sleep-blog-list">Difficulty with learning</li>
                                <li className="delayed-sleep-blog-list">Poor decision-making</li>
                                <li className="delayed-sleep-blog-list">Procrastination</li>
                                <li className="delayed-sleep-blog-list">Slow reaction times</li>
                                <li className="delayed-sleep-blog-list">Inability to judge others’ reactions and emotions</li>
                                <li className="delayed-sleep-blog-list">Anxiety in social or professional settings</li>
                                <li className="delayed-sleep-blog-list">Severe stress</li>
                                <li className="delayed-sleep-blog-list">Depression</li>
                                <li className="delayed-sleep-blog-list">Suicidal thoughts</li>
                                <li className="delayed-sleep-blog-list">Tendency to use medications or substances</li>
                            </ul>
                        </p>
                        <p className="delayed-sleep-blog-list">A 2018 review notes that there is a significant link between delayed sleep phase syndrome and mental health conditions—up to 70% of people with delayed sleep phase syndrome have a psychiatric disorder, such as depression or bipolar disorder.</p>
                        <p className="delayed-sleep-blog-list"><i>Impact on Quality of Life</i></p>
                        <p className="delayed-sleep-blog-list">Symptoms of delayed sleep phase syndrome, such as sleep deprivation, daytime sleepiness, and chronic fatigue, can make it difficult for you to function and cause you to experience negative consequences such as:
                            <ul>
                                <li className="delayed-sleep-blog-list">Frequent lateness or non-attendance at school/work</li>
                                <li className="delayed-sleep-blog-list">Poor academic or work performance</li>
                                <li className="delayed-sleep-blog-list">Higher chances of dropping out of school or getting laid off from work</li>
                                <li className="delayed-sleep-blog-list">Higher chances of academic or professional failure</li>
                                <li className="delayed-sleep-blog-list">Disruptions to your family and social life</li>
                                <li className="delayed-sleep-blog-list">Strained personal relationships</li>
                            </ul>
                        </p>
                        <p className="delayed-sleep-blog-list">A 2014 review notes that someone who had delayed sleep phase syndrome as a teenager may still experience negative consequences well into adulthood, even if they don’t have the condition anymore.</p>
                    </div>
                    <div className="delayed-sleep-blog-list">
                        <b className="delayed-sleep-blog-list">Causes of Delayed Sleep Phase Syndrome</b>
                        <p className="delayed-sleep-blog-list">These are some of the potential causes of delayed sleep phase syndrome:
                            <ul>
                                <li className="delayed-sleep-blog-list">Hormonal imbalance: Hormones such as melatonin and cortisol help maintain your sleep-wake cycle by promoting sleepiness and wakefulness respectively. An imbalance in these hormones can lead to delayed sleep phase syndrome.</li>
                                <li className="delayed-sleep-blog-list">Genetics: Delayed sleep phase syndrome may be hereditary, so you may be more likely to have it if someone in your immediate family has it.</li>
                                <li className="delayed-sleep-blog-list">Puberty: Your circadian rhythm, also known as your internal body clock, changes when you reach puberty. While it's normal for it to get slightly delayed, a significant delay, often due to fluctuations in your melatonin levels, can lead to delayed sleep phase syndrome. During your teenage years, your social life may also keep you awake at night.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="delayed-sleep-blog-list">
                        <b className="delayed-sleep-blog-list">Diagnosing Delayed Sleep Phase Syndrome</b>
                        <p className="delayed-sleep-blog-list">If you suspect you or a loved one may have delayed sleep phase syndrome, you should see a sleep specialist. Your primary care provider can provide a referral if you need it.</p>
                        <p className="delayed-sleep-blog-list">The diagnostic process may involve the following steps:
                            <ul>
                                <li className="delayed-sleep-blog-list">Clinical interview: Your healthcare provider will inquire about your medical history, symptoms, and lifestyle. They will need to understand your natural sleeping pattern and how it’s affecting your ability to function.</li>
                                <li className="delayed-sleep-blog-list">Physical exam: A physical exam can help your healthcare provider rule out other conditions that may explain your symptoms.</li>
                                <li className="delayed-sleep-blog-list">Actigraphy: An actigraph is a small wearable device containing motion sensors that can measure your sleep-wake cycles. Your healthcare provider may ask you to wear one for up to two weeks.</li>
                                <li className="delayed-sleep-blog-list">Sleep study: A sleep study can help monitor parameters such as your heart rate, brain waves, breathing, oxygen levels, and eye and leg movements, while you’re asleep.</li>
                                <li className="delayed-sleep-blog-list">Hormone tests: Your doctor may also perform other tests to check the levels of hormones like melatonin and cortisol in your saliva.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="delayed-sleep-blog-list">
                        <b className="delayed-sleep-blog-list">Treating Delayed Sleep Phase Syndrome</b>
                        <p className="delayed-sleep-blog-list">These are some treatment and coping strategies for delayed sleep phase syndrome:
                            <ul>
                                <li className="delayed-sleep-blog-list">Chronotherapy: Chronotherapy is a behavioral technique that involves gradually shifting your sleep time and wake-time by making your sleep time slightly earlier each day, until you achieve a more traditional sleep-wake schedule.</li>
                                <li className="delayed-sleep-blog-list">Medications and supplements: Medications like sleeping pills and supplements like melatonin can help you fall asleep at your desired sleep time. Your healthcare provider will tell you what time you should take them and for how long.</li>
                                <li className="delayed-sleep-blog-list">Light therapy: The body clock is synced to the availability of light because we are biologically programmed to be active during the day when it’s light outside and sleep at night when it’s dark. Exposing yourself to bright light in the morning (via natural sunlight, a light box, or a light therapy lamp) can help reset your internal clock, so it's more in sync with your external environment.</li>
                                <li className="delayed-sleep-blog-list">Sleep diary: Maintaining a sleep diary can help you track your sleep patterns and symptoms, so you can accurately report them to your healthcare provider.</li>
                                <li className="delayed-sleep-blog-list">Sleep hygiene: Practicing healthy sleep hygiene habits can help promote better sleep timing and quality. Maintain a cool, dark, and quiet sleeping environment and stick to a consistent sleep-wake routine. Try to avoid electronic screens before bed and steer clear of caffeine in the evening.</li>
                                <li className="delayed-sleep-blog-list">Support: If you’re experiencing any cognitive, emotional, or behavioral symptoms due to the condition or lack of sleep, it may be helpful to visit a mental healthcare provider. They can also help you cope with other negative consequences linked to the condition, such as poor academic/work performance and strained family relationships.</li>
                            </ul>
                        </p>
                        <p className="delayed-sleep-blog-list">Delayed sleep phase disorder can make it hard for you to get enough sleep on most days, which can affect your health, safety, and well-being. Taking steps to treat the condition and reset your body clock can help improve your health, your performance at work/school, and your social and family life.</p>
                    </div>
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
export default DelayedSleepSyndrome;