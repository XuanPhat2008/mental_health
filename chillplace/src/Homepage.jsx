import React from "react";
import emailjs from 'emailjs-com';
import "./Homepage.css"; // Import your CSS file for styling

const HomePage = () => {
    emailjs.init("mbAi0HjYgB-fc48dB");
    const sendMail = (event) => {
        event.preventDefault();
        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        const serviceID = "service_9yvzwqk";
        const templateID = "template_83kdtk7";

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message sent successfully!!")
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="wrapper-hp">
            <section className="homepage" id="home">
                <div className="content">
                    <div className="text">
                        <h1>XPT-Mental Health</h1>
                        <p>
                            "Unlock Your Potential, Embrace Mental Health."<br /></p>
                    </div>
                    <a href="#services">Our Services</a>
                </div>
            </section>
            <section className="services" id="services">
                <h2>Our Services</h2>
                <p>Explore our wide range mental health services.</p>
                <ul className="cards">
                    <li className="card">
                        <a href="\quizz">
                            <img src="./src/img/service3.jpg" alt="img" />
                            <h3>Quiz</h3>
                            <p>Quiz is designed to help you assess your mental health and identify any areas where you may need to make changes. It is not a substitute for professional diagnosis, but it can be a helpful tool for starting a conversation with your doctor or therapist.</p>
                        </a>
                    </li>
                    <li className="card">
                        <a href="\blog">
                            <img src="./src/img/service1.jpg" alt="img" />
                            <h3>Blog</h3>
                            <p>Mental Health Blog is a blog for everyone who is struggling with their mental health. Whether you are diagnosed with a mental illness or not, we all have mental health, and it is important to take care of it.</p>
                        </a>
                    </li>
                    <li className="card">
                        <img src="./src/img/service5.jpg" alt="img" />
                        <h3>Online therapy</h3>
                        <p>Online therapy is a virtual therapist that can help you with a variety of mental health issues, including anxiety, depression, stress, and more. It is powered by artificial intelligence and is available 24/7 to provide support and advice.</p>
                    </li>
                    <li className="card">
                        <a href="\musics">
                            <img src="./src/img/service2.jpg" alt="img" />
                            <h3>Music</h3>
                            <p>Music playlist is a collection of songs that can be used to help improve mental health. The songs on the playlist can be chosen based on their lyrics, tempo, or overall mood.</p>
                        </a>
                    </li>
                    <li className="card">
                        <a href="\podcasts">
                            <img src="./src/img/service6.jpg" alt="img" />
                            <h3>Podcast</h3>
                            <p>Podcast is a weekly podcast that explores the world of mental health. We talk to experts, share personal stories, and provide tips and resources to help you take care of your mental health. We believe that mental health is important for everyone, and we want to make it easier to talk about. Our podcast is a safe space to learn about mental health, to share your experiences, and to find support.</p>
                        </a>
                    </li>
                    <li className="card">
                        <a href="\movies">
                            <img src="./src/img/service4.jpg" alt="img" />
                            <h3>TV shows</h3>
                            <p>TV shows can be a valuable resource for people who are struggling with their mental health. They can provide a realistic and relatable portrayal of what it's like to live with a mental illness, and they can help to destigmatize mental illness by showing that it is a common and treatable condition.</p>
                        </a>
                    </li>
                </ul>
            </section>

            <section className="portfolio" id="portfolio">
                <h2>Our Quizzes</h2>
                <p>Take a look at some of our specials quizes</p>
                <ul className="cards">
                    <li className="card">
                        <img src="./src/img/inextro.jpg" alt="img" />
                        <h3>Are you and Extrovert or Introvert ?</h3>
                        <p>The "Are You an Extrovert or Introvert?" quiz is a self-assessment tool that can help you to understand your personality type. The quiz consists of a series of questions about your preferences for social interaction, activities, and energy levels. Your answers will be scored to determine whether you are an extrovert or an introvert.</p>
                    </li>
                    <li className="card">
                        <img src="./src/img/worry.jpg" alt="img" />
                        <h3>Do you worry Too Much ?</h3>
                        <p>The "Do You Stress and Worry Too Much?" quiz is a self-assessment tool that can help you to understand if you are a worrier and to what degree. The quiz consists of a series of questions about your thoughts, feelings, and behaviors related to worry. Your answers will be scored to give you an overall rating of your worry level.</p>
                    </li>
                    <li className="card">
                        <img src="./src/img/smart.png" alt="img" />
                        <h3>What type of Smart are you ?</h3>
                        <p>The "What Type of Smart Are You?" quiz is a self-assessment tool that can help you to understand your different intelligences. The quiz consists of a series of questions about your abilities in different areas, such as math, language, music, and spatial reasoning. Your answers will be scored to identify your strongest intelligences.</p>
                    </li>
                    <li className="card">
                        <img src="./src/img/inteimo.png" alt="img" />
                        <h3>Are you Emotionally Intelligent ?</h3>
                        <p>The "How Emotionally Intelligent Are You?" quiz is a self-assessment tool that can help you to understand your emotional intelligence (EQ). EQ is the ability to understand, interpret, and manage your emotions, as well as those of other people. It is a key skill for success in personal and professional life.</p>
                    </li>
                    <li className="card">
                        <img src="./src/img/leadership.png" alt="img" />
                        <h3>What is your Leadership style ?</h3>
                        <p>The "What is your leadership style?" - quiz is a self-assessment tool that can help you to understand your natural tendencies as a leader. The quiz consists of a series of questions about your approach to leadership, your values, and your communication style. Your answers will be scored to identify your dominant leadership style.</p>
                    </li>
                    <li className="card">
                        <img src="./src/img/mentalh.png" alt="img" />
                        <h3>Mental Health Quiz</h3>
                        <p>The "How is your mental health ?" - quiz is a self-assessment tool that can help you to understand your current mental health status. The quiz consists of a series of questions about your thoughts, feelings, and behaviors. Your answers will be scored to give you an overall rating of your mental health.</p>
                    </li>
                </ul>
            </section>

            <section className="about" id="about">
                <h2>About Us</h2>
                <p>Discover our story in providing camping services.</p>
                <div className="row company-info">
                    <h3>Our Story</h3>
                    <p>We have always been passionate about mental health. We've seen firsthand the impact that mental health problems can have on people's lives, and we believe that everyone deserves to have access to quality mental health care. A few months ago, we decided to create a website about mental health. We wanted to create a resource that would provide people with accurate and up-to-date information about mental health conditions, symptoms, and treatments. We also wanted to connect people with mental health professionals and support groups in their area. <br />
                        We started by doing a lot of research on mental health. We read books, articles, and websites. We also talked to mental health professionals and people who have experienced mental health problems. Once we had a good understanding of mental health, we started building the website. We wanted the website to be easy to use and navigate. We also wanted to make sure that the information was accurate and up-to-date. We worked on the website for a few months, and finally, it was ready to launch. We were so excited to share it with the world! The website has been up and running for a few days now, and it has helped a lot of people. People have told us that the website has helped them to learn about mental health, find resources, and connect with others who understand. <br />
                        We're so glad that we created this website. We believe that it is making a positive difference in the lives of people who are struggling with mental health problems.</p>
                </div>
                <div className="row mission-vision">
                    <h3>Our Mission</h3>
                    <p>Our mission is to provide comprehensive and accurate information about mental health. We want to make it easy for people to learn about mental health, find resources, and connect with others who understand. We believe that everyone deserves to have access to quality mental health care, and we are committed to making that happen.</p>
                    <h3>Our Vision</h3>
                    <p>Our vision is to create a website that provides comprehensive and accurate information about mental health. We want to make it easy for people to learn about mental health, find resources, and connect with others who understand. We believe that everyone deserves to have access to quality mental health care, and we are committed to making that happen.</p>
                </div>
                <div className="row team">
                    <h3>Our Team</h3>
                    <ul>
                        <li>Phan Xuân Phát - Leader and Hacker</li>
                        <li>Trần Quang Trường - Hacker</li>
                        <li>Phạm Đăng Khoa - Hipster</li>
                        <li>Vũ Anh Thư - Hipster</li>
                    </ul>
                </div>
            </section>

            <section className="contact" id="contact">
                <h2>Contact Us</h2>
                <p>Reach out to us for any inquiries or feedback.</p>
                <div className="row">
                    <div className="col information">
                        <div className="contact-details">
                            <p><i className="fas fa-map-marker-alt"></i> District 5, Ho Chi Minh city, Viet Nam</p>
                            <p><i className="fas fa-envelope"></i> xptmentalhealth@gmail.com</p>
                            <p><i className="fas fa-phone"></i> (+84) 0777718408</p>
                            <p><i className="fas fa-clock"></i> Monday - Friday: 9:00 AM - 5:00 PM</p>
                            <p><i className="fas fa-clock"></i> Saturday: 10:00 AM - 3:00 PM</p>
                            <p><i className="fas fa-clock"></i> Sunday: Closed</p>
                            <p><i className="fa-brands fa-facebook"></i> XPT - Mental Health</p>
                        </div>
                    </div>
                    <div className="col form">
                        <form>
                            <input type="text" placeholder="Name*" id="name" required />
                            <input type="email" placeholder="Email*" id="email" required />
                            <textarea placeholder="Message*" id="message" required></textarea>
                            <button id="submit" type="submit" onClick={sendMail}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
