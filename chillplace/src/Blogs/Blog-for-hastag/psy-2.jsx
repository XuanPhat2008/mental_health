import React from "react";
import { Link } from 'react-router-dom';
import './sub-blog-16.css';
const Psy2  =()=>{
    return(
        <div className="blog-container-sub-16">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog" className="back-link">Back</Link>
            </div>
            <div className="title-blog">
                <p className="title-blog-head">
                    <b>Why do we always find the way back shorter than the way out?</b>
                </p>
                <div className="table-container">
                    <div className="description-blog">
                        <img src="/src/img/image 306.png"></img>
                        <p>The return trip effect is the name given to this phenomenon by psychologists. The popular belief in the past was that, on the return trip, we are used to the scenery and direction on the road, so it takes less time than when going.</p>
                        <p>However, there have been studies showing that this effect occurs even with passengers traveling by plane - a vehicle in which we do not see the outside scenery. So how does the brain "shorten the way back" in these cases?</p>
                    </div>
                </div>
                <div className="sub-blog">
                    <div className="sub-blog-list">
                        <b className="sub-blog-list">We miscalculate the travel time when recalling the distance</b>
                        <p className="sub-blog-list">To find out the correlation between familiarity and return, the team from Tilburg University (Netherlands) conducted two experiments as follows:</p>
                        <p className="sub-blog-list">In the first experiment, 69 people took a round-trip bus ride to the fair. On this path there are some waypoints (such as buildings, checkpoints). After returning, they had to compare the distance traveled and return, and rate their familiarity with the waypoints on the way back.</p>
                        <p className="sub-blog-list">As a result, they all found the way back was shorter than the way out. Regression analysis also showed that their recognition of the reference points did not affect the above perception.</p>
                        <p className="sub-blog-list">In the second experiment, 93 students cycled to the fair, then divided into 2 small groups. One pedal back by the old road, one pedal back by another road of the same length. All three distances took 35 minutes to go, but both groups estimated the distance to take 44 minutes and the return trip to take 37 minutes.</p>
                        <p className="sub-blog-list">The results of both experiments showed that the familiar factor did not affect the return effect. The real cause may be that we miscalculated the distance when recalling.</p>
                        <p className="sub-blog-list">According to research by Nicholas Bisson , the brain keeps track of time using two separate systems. A system that records the number of times a neuron is activated in a given period of time. The other system uses language to recall an experience for how long it lasted.</p>
                        <p className="sub-blog-list">Participants seemed to have misjudged the travel time when recalling the distance. They "overcalculate" the time and distance more than they actually do. In the return period, they perceive the time in accordance with reality. As a result, they mistakenly think the distance is longer than the return distance, even though the two distances are inherently the same length.</p>
                        <p className="sub-blog-list">The team also found that the more misjudged the distance traveled, the more pronounced the return effect. On the contrary, we will be less affected if we know the exact length and time of travel required. This is the reason this effect usually doesn't appear on the daily commute to work/school.</p>
                    </div>
                    <div className="sub-blog-list">
                        <b className="sub-blog-list">Distance goes slower when we focus on time</b>
                        <p className="sub-blog-list">According to neuroscientist Muireann Irish, time seems to stretch when we're waiting for something. This is because we actively pay attention to the time in the process of waiting.</p>
                        <p className="sub-blog-list">Similarly, when moving to an appointment, going on a business trip or on vacation, we often pay attention to the time because we know when we have to be at the destination and are waiting for the appointment / vacation to take place. This inadvertently makes the distance go longer.</p>
                        <p className="sub-blog-list">This is especially true if we are traveling by train or plane. Since there's not much to do in these environments, it's easy to get bored. As a result, we turn our full attention to the time and subconsciously check the clock frequently.</p>
                        <p className="sub-blog-list">When an appointment or vacation is over, time concerns disappear and there's less pressure to be at home. Because we no longer pay attention to the time, we feel that the way back is shortened even though the actual length does not change.</p>
                    </div>
                    <div className="sub-blog-list">
                        <b className="sub-blog-list">There are still exceptions</b>
                        <p className="sub-blog-list">The return effect does not always appear, although it is still new routes. In a round trip marathon, it will take you longer to run back than run away, because your fitness is now weakened.</p>
                        <p className="sub-blog-list">Another case is when your destination is not very pleasant, such as going to the doctor. Because of the mentality of wanting to finish the examination early to take the burden off your head, you no longer pay attention to the time on the trip. This makes you no longer feel that your return leg is shorter than your departure.</p>
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
export default Psy2;