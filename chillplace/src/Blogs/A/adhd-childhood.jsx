import React from "react";
import "./adhd-childhood.css";
import { Link } from 'react-router-dom';
const ADHDChildhood = ()=>{
    return(
        <div className="blog-container-adhd">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
            <div className="title-blog">
                <p className="conditions-a-z">CONDITIONS A-Z</p>
                <p className="title-blog-head">
                    <b>ADHD in Children: Symptoms and Treatment</b>
                </p>
                <div className="define-para">
                    <p><b>ADHD</b> is one of the most common neurodevelopmental disorders of childhood. 
                    It is usually first diagnosed in childhood and often lasts into adulthood. Children 
                    with ADHD may have trouble paying attention, controlling impulsive behaviors (may act without thinking about what the result will be),
                    or be overly active.</p>
                </div>
                <div className="table-container">
                    <div className="table-of-contents-1">
                        <b className="table-of-contents-head">Table of contents</b>
                        <ul className="table-of-contents-list">
                            <li className="table-items">Characteristics of ADHD</li>
                            <li className="table-items">ADHD Evaluation</li>
                            <li className="table-items">Treatment Options</li>
                            <li className="table-items">Parenting Strategies</li>
                            <li className="table-items">School Strategies</li>
                        </ul>
                    </div>
                    <div className="description-blog">
                        <p>A short attention span and high energy level don't necessarily mean your child has ADHD—there are many reasons why kids may be hyper or 
                            have trouble concentrating. However, some kids struggle more than others to sit still and pay attention, and it causes problems for them
                            in their daily lives if it is not accommodated properly.</p>
                        <p>If you have a child who seems to bounce off the walls or who can’t focus long enough to get work done, it’s wise to be curious about the possibility of ADHD.</p>
                    </div>
                </div>
                <img src="../src/img/adhd.png" className="adhd-bg" alt=" "/>
                <div className="adhd-blog">
                    <div className="adhd-blog-list">
                        <b>Characteristics of ADHD</b>
                        <p>Just like adults, children may present with one of three types of ADHD:</p>
                        <ul className="adhd-blog-list">
                            <li>Predominantly inattentive presentation: Children with the inattentive presentation of ADHD struggle to focus and stay on task. They may appear to be daydreaming
                                often, and they may struggle to stay organized.</li>
                            <li>Predominantly hyperactive/impulsive presentation: Kids with the hyperactive presentation are impulsive and can’t sit still. They often squirm and fidget in their
                                chairs and seem to have endless energy.</li>
                            <li>Combined presentation: The combined presentation causes impairment in attention as well as hyperactivity.</li>
                        </ul>
                        <p className="adhd-blog-list">To meet the criteria for a diagnosis of ADHD, symptoms must interfere with a child’s daily life in some form. For example, an inattentive child may struggle to understand 
                            homework assignments because they weren't paying attention in class. Or a hyperactive child may have difficulty finishing their classwork because high energy levels make it hard to sit still.</p>
                        <p className="adhd-blog-list">ADHD may be diagnosed as early as preschool. By definition, characteristics must be present prior to the age of 12 years.</p>
                    </div>
                    <div className="adhd-blog-list">
                        <b className="adhd-blog-list">ADHD Is a Form of Neurodivergence</b>
                        <p className="adhd-blog-list">It is important to understand that ADHD is a form of neurodivergence. While it is recognized as a disability, this is due to the fact that the neurotypical society in which we live does not appropriately accommodate ADHD characteristics.</p>
                        <p className="adhd-blog-list">While people with ADHD experience challenges because society is neurotypical-centric, ADHD brains possess many strengths.</p>
                        <p className="adhd-blog-list">Folks who have ADHD need accommodations for the disabilities from their traits and get the support they need to utilize their strengths most effectively.</p>
                        <p className="adhd-blog-list">Kids with ADHD may respond in certain ways because of poor accommodations, unmet needs, communication problems, and trauma responses. By better understanding their child's neurotypes, strengths, and needs, parents can provide better support to help their kids flourish.</p>
                    </div>
                    <div className="adhd-blog-list">
                        <b className="adhd-blog-list">ADHD Evaluation</b>
                        <p className="adhd-blog-list">If you or your child's teacher suspects your child may have ADHD, it's important to seek an evaluation if accommodations are needed. Early intervention may potentially prevent the emergence of further distress and trauma for the child.</p>
                        <p className="adhd-blog-list">There isn’t a specific lab test that is used to diagnose ADHD. Instead, a pediatrician or mental health professional can evaluate a child’s traits and determine if the criteria are met. Several methods are often used to obtain information about a child’s behavior.</p>
                        <p>It is important to note that these approaches take a traditional medical approach that sees ADHD as a condition that requires treatment. These assessments focus on viewing ADHD characteristics from the lens of a neurotypical perspective.
                            <ul className="adhd-blog-list">
                                <li className="adhd-blog-list">Teacher report forms collect information from teachers about a child's behavior and attention span in the school setting. Reports from teachers can be instrumental in determining how much difficulty a child has staying on task and remaining seated compared to their peers. Feedback about a child’s peer interactions can also be helpful as some children with ADHD struggle to maintain friendships.</li>
                                <li className="adhd-blog-list">Parent report forms are used to rate a child’s behavior in the home. A mental health professional may inquire about a child’s ability to follow directions, play quietly, or wait for their turn in the conversation.</li>
                                <li className="adhd-blog-list">Parent and child interviews will help the clinician learn more about your child's development and family history.</li>
                            </ul>
                        </p>
                        <p className="adhd-blog-list">While these tools are commonly used, consider seeking an evaluation from a neurodiversity-affirming mental health practitioner. A provider who has an understanding of ADHD or who has lived experience as an individual with ADHD can provide affirming support without pathologizing the characteristics of ADHD</p>
                    </div>
                    <div className="adhd-blog-list">
                        <b className="adhd-blog-list">What to Bring</b>
                        <p className="adhd-blog-list">You may also be asked to bring the following items with you to the evaluation:
                            <ul className="adhd-blog-list">
                                <li className="adhd-blog-list">Your child's medical records, your contact information, and contact information for your child's pediatrician</li>
                                <li className="adhd-blog-list">Names and contact information for teachers and any other adults involved in a supervisory role with your child, such as in after-school programs</li>
                                <li className="adhd-blog-list">Any prior testing results such as IQ testing, achievement tests, personality assessments, and any previous ADHD evaluations, as well as the contact information for and names of the professionals who conducted them</li>
                                <li className="adhd-blog-list">Report cards and notes from your child's school</li>
                                <li className="adhd-blog-list">Individualized education plans (IEPs), if applicable</li>
                                <li className="adhd-blog-list">Insurance information</li>
                            </ul>
                        </p>
                        <p className="adhd-blog-list">Any adult in a supervisory role to your child may also be asked to fill out forms, which you should bring with you to the evaluation if asked. You may be asked to provide your doctor with written consent to contact these individuals as well.</p>
                    </div>
                    <div className="adhd-blog-list">
                        <b className="adhd-blog-list">Supporting Children With ADHD</b>
                        <p className="adhd-blog-list">Sometimes parents are hesitant to discuss concerns about ADHD because they fear children will be put on medication with terrible side effects. The good news is there are several different types of medications (such as Concerta, Clonidine, and Strattera) available for ADHD.</p>
                        <p className="adhd-blog-list">There are also many other types of support that don’t involve medication.3 Parent support can be very effective. This involves helping parents learn more about neurodiversity and how to accommodate their child's brain and traits.</p>
                        <p className="adhd-blog-list">School accommodations can also be helpful for your child.4 Sometimes, simple strategies—such as having a child sit near the front of the classroom to reduce distractions—can be beneficial.</p>
                        <p className="adhd-blog-list">A school psychologist or mental health professional may be able to make suggestions to assist teachers in providing a child with a learning environment that can reduce symptoms of ADHD</p>
                    </div>
                    <div className="adhd-blog-list">
                        <b className="adhd-blog-list">Parenting Strategies</b>
                        <p className="adhd-blog-list">Raising a child with ADHD can be stressful. Because society does not accommodate ADHD, parents often have to put in more effort to get school accommodations for their children. Parenting a child with a different neurotype can also create stress when parents don't have the information they need about how to best support their child.</p>
                        <p className="adhd-blog-list">Children with ADHD also tend to have higher rates of accidental injuries.They might get injured from falls off furniture after climbing, falling, or jumping out of windows or off decks, unbuckling restraints and standing up in the car or stroller, or even accidentally drinking poison, resulting in more emergency room visits.</p>
                        <p className="adhd-blog-list">They often require constant supervision and more structure than other children. Here are a few behavior modification strategies that are often taught in parent support programs:
                            <ul className="adhd-blog-list">
                                <li className="adhd-blog-list">Provide positive attention. Positive playtime reduces attention-seeking behavior. Positive attention helps parents create healthier relationships with kids, and a stronger bond means that kids are more likely to respond to praise.6</li>
                                <li className="adhd-blog-list">Give effective instructions. Gain your child’s full attention before giving directions. This can look different for each child. Ask them what helps them focus and follow directions and accommodate their neurotype. Some examples include writing down detailed instructions, showing them how to do the task, body-doubling, and flexible scheduling.</li>
                                <li className="adhd-blog-list">Praise your child's effort. Catch your child being good and point it out. Praise can promote secure attachment with your child, and frequent and specific feedback is important.</li>
                                <li className="adhd-blog-list">Establish rewards. Reward systems can be a great way to help kids with ADHD stay on track. Establish a few target behaviors, such as staying at the table during a meal or using gentle touches with a pet.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="adhd-blog-list">
                        <b className="adhd-blog-list">Strategies for School</b>
                        <p className="adhd-blog-list">According to the Centers for Disease Control and Prevention (CDC), it's important for parents, teachers, and healthcare providers to work together to help the child succeed in school.Here are some other tools that could be helpful:
                            <ul className="adhd-blog-list">
                                <li className="adhd-blog-list">Accommodations: Extra time to complete tests or having a seat placed in a quiet area can increase a child's chances of success.</li>
                                <li className="adhd-blog-list">A behavior management plan that carries between home and school: A child may receive points or tokens from their teacher that can be exchanged for privileges at home, such as watching TV or using a computer.</li>
                                <li className="adhd-blog-list">Structure in the home: A consistent homework time (with scheduled breaks) and a homework area that accommodates their ADHD brain can help your child get their work done.7 This may include fidgets, visual timers, game-ifying tasks and homework, or other things that are unique to each child.</li>
                            </ul>
                        </p>
                        <p className="adhd-blog-list">It may also be helpful to create checklists that remind them of what they should pack in their backpack each day. Then, they'll require fewer reminders from you to be responsible.</p>
                        <p className="adhd-blog-list">Your child's teacher, guidance counselor, and therapist may be able to assist you in developing the best plan to help your child succeed academically.</p>
                    </div>
                    <div className="adhd-blog-list">
                        <b className="adhd-blog-list">A Word From Verywell</b>
                        <p className="adhd-blog-list">ADHD does not need to be "cured" or "fixed. Instead, it is important that it is accommodated and supported. If parents and children have enough affirming and accepting information about ADHD, they can work together for the child to thrive.</p>
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
export default ADHDChildhood;