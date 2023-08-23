import React from "react";
import { Link } from 'react-router-dom';
import './sub-blog-15.css';
const Psy1  =()=>{
    return(
        <div className="blog-container-sub-15">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back</Link>
            </div>
            <div className="title-blog">
                <p className="title-blog-head">
                    <b>Hindsight bias - Did you really foresee the results from the start?</b>
                </p>
                <div className="table-container">
                    <div className="description-blog">
                        <img src="/src/img/image 303.png"></img>
                        <p>You have just completed a test, but when you check the results, your answer is different from your classmates. The two spent an entire session debating who was right. When the results are returned, that person is you. And you can't help but be pleased because you think you already know too much.</p>
                        <p>Have you ever faced a similar situation where the perception of the event changed as soon as the outcome was known? Have you ever felt like you had the ability to predict the future?</p>
                        <p>This phenomenon is called the divine command of hindsight, or roughly understood as the mentality of "See, know right away!"</p>
                        <p>What is hindsight bias?</p>
                        <p>Hindsight bias describes the tendency of a person to overestimate his or her ability to predict a situation. When they look back on the past, they believe they can easily see all the signs and events that led to the present outcome. But in reality, when they are in the game, it is difficult for them to see them.</p>
                        <p>A prime example of this phenomenon is the fact that we often "slap the thigh" thinking that we know the outcome of a football game, just after the game is over. But if we were asked to predict in the middle of a match, we wouldn't be so sure.</p>
                        <p>The key to hindsight bias is that we come up with a logical explanation for ourselves based on a sequence of past events and known outcomes.</p>
                    </div>
                </div>
                <div className="sub-blog">
                    <div className="sub-blog-list">
                        <b className="sub-blog-list">Why do we believe we know the outcome in advance?</b>
                        <p className="sub-blog-list">Highsight bias occurs when new information about a past event changes our view of that event. According to psychologists Neal Roese and Kathleen Vohs, this phenomenon can be explained in three ways:</p>
                        <p className="sub-blog-list"><i>Cognitive</i></p>
                        <p className="sub-blog-list">We tend to distort our memories of past events under the influence of confirmation bias . This is the tendency to seek information to reinforce one's thoughts and beliefs.</p>
                        <p className="sub-blog-list">Selectively, we only remember information that confirms that we already know the outcome. For example, the mistakes and disadvantages of the losing team in the ball game. We do this to create a “reasonable” story with known information. In this case the outcome of the match.</p>
                        <p className="sub-blog-list"><i>Metacognitive</i></p>
                        <p className="sub-blog-list">Metacognition is used to refer to thinking about one's own thoughts. When we find that we can easily explain (current thinking) what happened (previous thinking), we often assume that we anticipate things. This is due to the confusion between “understandable” and “predictable”.</p>
                        <p className="sub-blog-list">For example, we may find the ending of a friend's breakup "understandable" because the two often quarreled before. But in this situation we often believe that we have known about this for a long time. However, understanding a past event does not mean certainty about future outcomes.</p>
                        <p className="sub-blog-list"><i>Motivational</i></p>
                        <p className="sub-blog-list">Research shows that the desire to maintain a positive self-image is the driving force behind human behavior.</p>
                        <p className="sub-blog-list">We feel good (if not “superior”) when we pretend we know ahead. And this motivates us to treat the unpredictable as something we “foresee” after it happens.</p>
                        <p className="sub-blog-list">To make it easier to imagine, you can remember the smug feeling you felt when you found yourself correctly guessing the outcome of your best friend's breakup. People generally like the feeling that “the world is a predictable place”.</p>
                    </div>
                    <div className="sub-blog-list">
                        <b className="sub-blog-list">What effects can Hindsight bias cause and how can it be avoided?</b>
                        <p className="sub-blog-list">The reason this phenomenon is considered a bias is because we create our own logical explanations to match the results we already know. And this explanation is not based on the original nature of things.</p>
                        <p className="sub-blog-list">Fabricating false explanations of the past makes us lose our ability to learn and adapt to future decisions.</p>
                        <p className="sub-blog-list">For example, when stock investors avoid returning to the market after a stock drop, even though the market has warmed up. Now, mistakenly thinking that they already knew the outcome (the stock fell) in the first place will prevent them from looking back and finding out what really happened.</p>
                        <p className="sub-blog-list">To avoid "the fortuneteller seeing the elephant", you can refer to the advice of two researchers Roese and Vohs about this phenomenon:
                            <ul>
                                <li className="sub-blog-list">Interpret events in a multidimensional way: When reassessing an event, think about every possible outcome (even if it didn't). By reviewing all the possible outcomes, you will find that nothing is as certain or predictable as you think.</li>
                                <li className="sub-blog-list">Record the facts: Include your past decisions and related predictions. Similar to a diary, but these will be details about your decision and what led to it. Taking notes will prevent your brain from ignoring the wrong guesses and only focusing on the times when you say "hit".</li>
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
export default Psy1;