import React from "react";
import { Link } from 'react-router-dom';
import './sub-blog-21.css';
const Thera1  =()=>{
    return(
        <div className="blog-container-sub-21">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back</Link>
            </div>
            <div className="title-blog">
                <p className="title-blog-head">
                    <b>Wounded healer - Turn your pain into healing power</b>
                </p>
                
                <div className="sub-blog">
                    <div className="sub-blog-list">
                        <ol>
                            <li>What is a Wounded healer?
                                <p>The term wounded healer refers to someone who uses their own trauma or pain to help others with similar pain. This concept appears in many psychoanalytic and counseling and psychotherapeutic texts.</p>
                                <p>However, a wounded healer is not necessarily a psychologist, but may simply be someone who is able to help others through their personal experiences. The experience of healing other people's wounds can help them deal with their own problems, thereby progressing to "closing" their own wounds.</p>
                            </li>
                            <li>Origin of wounded healer?
                                <p>Many sources point to psychiatrist and psychoanalyst Carl Jung as the one who coined the concept in his 1951 text Fundamental Questions of Psychotherapy . However, in this text, the exact concept that Jung used the term "wounded physician" with the same connotation as wounded healer, but within the scope of therapists and counselors.</p>
                                <p>What Jung essentially meant by referring to wounded physician was to illustrate that therapeutic work is a dialogical effort by the therapist with the person being treated and with himself or herself. According to Jung, counselors' pain is the tool and power they use to treat their patients.</p>
                                <p>To illustrate this concept, Jung mentioned a myth in Greek mythology about the character Chiron - a centaur with healing powers from the god Apollo and the god Artemis. After being wounded and suffering from the wound caused by Heracles' bow and arrow, Chiron turned his own pain into the motivation to heal others.</p>
                            </li>
                            <img src="/src/img/image 312.png"></img>
                            <li>Why are wounded healers so popular?
                                <p>The popularity of the term accompanies the development of modern counseling psychology. Today, we know of wounded healers in part because of the emergence of healing books.</p>
                                <p>The very existence of such a concept as wounded healer is important in many ways. For psychotherapists and counselors, a wounded healer is the recognition that everyone has trauma - including those who treat others. Therefore, counselors should not be afraid, embarrassed, or cover up their wounds, but should see it as something that connects them to the patient.</p>
                            </li>
                            <img src="/src/img/image 313.png"></img>
                            <p>For us non-counselors, wounded healers show that we can help others and help ourselves, no matter how broken we are. Here, there is a similar concept in Japanese culture called kintsugi - simply repairing broken ceramic vases, bowls, or cups using a mixture of gold, silver, and other powders. other metal to attach the fragments.</p>
                            <p>From this perspective, wounds are actually valuable experiences, something to learn from. From the rift, the hurt can completely become a pull to help us perfect ourselves, help others grow and heal.</p>
                            <li>How to use wounded healer
                                <p>A: Everytime I listen to her break-up stories, I always feel like I'm suffering my own break-up traumas again. That enables me to sympathize with her on another level.</p>
                                <p>B: I'm very sad to hear that, but at the same time I am very proud of you. You are becoming a wounded healer.</p>
                            </li>
                        </ol>
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
export default Thera1;