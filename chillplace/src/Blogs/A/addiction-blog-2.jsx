import React from "react";
import { Link } from 'react-router-dom';
import './sub-blog-2.css';
const AddictionBlog2 =()=>{
    return(
        <div className="blog-container-sub-2">
            <div className="Back-button">
                <box-icon name='chevron-left'></box-icon>
                <Link to="/blog/addiction" className="back-link">Back to Addiction</Link>
            </div>
            <div className="title-blog">
                <p className="conditions-a-z">04/12/2022</p>
                <p className="title-blog-head">
                    <b>Young people addicted to social networks</b>
                </p>
                <div className="table-container">
                    <div className="description-blog">
                        <p>In recent years, social networking platforms such as Facebook, TikTok, Youtube ... are considered by many young people as a daily "food and drink". Besides the positive benefits, the abuse of social networks is causing many young people to become addicted to the virtual world, leading to unpredictable consequences.</p>
                    </div>
                </div>
                <div className="sub-blog">
                    <div className="sub-blog-list">
                        <b className="sub-blog-list">Addicted to the virtual world</b>
                        <p className="sub-blog-list">Just under 3 months of summer vacation, Tran Thuy Linh from Hop Tien commune (Dong Hung) is a 7th grader who has eye problems due to spending too much time using social networks on mobile devices. Linh shared: I love watching content on Facebook and TikTok because it is very diverse and attractive. Many entertainment programs or hot news of the day are also updated on social networks, just need to surf the phone to catch it. The first time I used the phone 3-5 hours/day, my eyes were often dry and tired. After that, the eyes gradually became blurred and could not see as far as before.</p>
                        <p className="sub-blog-list">Witnessing her daughter's eyesight decline, Hoang Thi Dinh, Linh's mother, was extremely worried. Dinh said: Both parents work all day, do not have much time to manage their children's time using social networks. It wasn't until our children had to wear glasses to improve their eyesight that we were fully aware of the harmful effects of this.</p>
                        <p className="sub-blog-list">According to a preliminary survey by UNICEF, 1 in 3 internet users is under 18 years old and 71% of 15-24 year olds are online, which shows that this age group is the most connected worldwide. Survey results of the Department of Children (Ministry of Labor - Invalids and Social Affairs) show that in the first three months of 2022, 89% of children access and use the internet, of which 87% use the internet daily. . In addition to the time spent studying, the average child spends 5-7 hours a day on social networks. The above statistics are ringing alarm bells about the problem of social network addiction of young people.</p>
                        <p className="sub-blog-list">It is not difficult to see images of young people holding phones to surf social networks anytime, anywhere. According to experts, the fact that young people always keep their phones in sight is influenced by the psychological syndrome of fomo (fear). They are always afraid of missing out on interesting and interesting things in life that others experience. People with this syndrome will often "eat on the bed" on all social networking sites, anxious and restless when away from the phone even for a short time. Therefore, the amount of time spent in the virtual world also gradually increases exponentially.</p>
                        <p className="sub-blog-list">Mr. Nguyen Hoang Ha, Deputy Director of the Center for Vocational Education - Continuing Education in Dong Hung district said: The percentage of students who have smartphones and use social networks at school is very high. The frequent access of children to social networks not only affects their health and learning, but also contains unpredictable psycho-physiological dangers.</p>
                    </div>
                    <div className="sub-blog-list">
                        <b className="sub-blog-list">Social media culture deviation</b>
                        <p className="sub-blog-list">In schools, social media is becoming the new "bullying space". As long as you are not alert enough, you can easily become a victim at the touch of a button. By hiding behind an unidentified social media account, bullies can hurt their opponents with disparaging, harsh language. This can cause mental disorders, affect the health and learning of young people. It is estimated that more than 13% of adolescents aged 10-19 years old living with a mental disorder are diagnosed according to the definition of the World Health Organization (WHO), of which 86 million are in the group 15. - 19 years old and 80 million children in the group of 10-14 years old.</p>
                        <p className="sub-blog-list">The development of social networks also led to a series of hot "jobs" born on this platform such as KOLs, gamer, streamer - influential people, loved by many young people. And funny stories have happened such as "cyber gangsters" praised and called teachers by young people, taking money from their parents to support online idols, despite defending the wrong of "" idol" creates wars of words in cyberspace. The uncontrollable mushrooming of young idols makes the cyberspace extremely chaotic.</p>
                        <p className="sub-blog-list">The concept of "Food reviewer" (people who share culinary experiences, reviews about food, drinks, and restaurants on different social networking platforms) is no longer strange to young people when it has been and is becoming a "fishing rod" for many people. However, there are also a lot of commercial, quality review content "upper gold lower bran". Many reviewers are said to have no mind, lack of knowledge, ready to criticize to attract views; There are also reviewers who only praise because they have received money from the shop. The transformation of this profession is causing many shop and restaurant owners to endure the pressure. Some shops even fell into a state of turmoil and sluggishness because they were underestimated according to the personal opinion of a certain "Food reviewer". Since when did just a few sentences on social media become a measure for a good restaurant?</p>
                        <p className="sub-blog-list">There are still many painful problems related to young people and social networks. The main cause comes from the selfish way of thinking, apathetic lifestyle and ignorance of a part of young people. In addition, the coordination between family, school and society in education to form personality and orient the life value system for young people is not really close. Each social network user needs to be aware of their responsibilities and self-regulate their behavior in order to create a civilized cyberspace. From there, the useless, bullshit content as well as the behavior that deviates from moral standards and violates fine customs and traditions can be gradually eliminated.</p>
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
export default AddictionBlog2;