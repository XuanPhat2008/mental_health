import React, { useState } from "react";
import "./PodCast.css"; // Import your CSS file for styling

const PodCast = () => {
  const LinkToMusic = [
    "https://open.spotify.com/episode/1siGzuEli3U7DUiQz2uvff?si=3ebd3b7960284c89",
    "https://open.spotify.com/show/2kH3ec1ljTia7VmwYsm8Xt?si=a9fdd4423dcf4c5e",
    "https://open.spotify.com/show/3E8WE4UaaFu0XmWn1hE4Z1?si=c732e7c3ee0d4fd2",
    "https://open.spotify.com/episode/68KZm2X13lUMl2dNpr7MVV?si=7b047cb6f8084016",
    "https://open.spotify.com/episode/6jpysSoS7iSd3SylIhKxXB?si=w0glQM0VRly4bJpsMw4ukw",
    "https://open.spotify.com/show/3XS5Pa9M1RHV6GMZfPFQLy?si=eeb68b3545d24b85",
    "https://open.spotify.com/episode/5hE3eM3dN6z1zlPmaTsLsK?si=1a5aa4f2175d45d8",
    "https://open.spotify.com/show/41arjde1lCIaz5njTtdqlW?si=44bb060c2f334e22"
  ];

  const [isPopupOpen, setPopupOpen] = useState(false); // Initialize popup state
  const [popupSrc, setPopupSrc] = useState(""); // Initialize popup source link

  const openPopup = (src) => {
    setPopupSrc(src);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const openLink = (index) => {
    window.open(LinkToMusic[index], "_blank");
  };

  return (
    <div className="podwrap">
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod1.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Regret</h1>
            <p class="info-pod">The best of all possible podcasts, Leibniz would say. Putting big ideas in dialogue  with the everyday, Overthink offers accessible and fresh takes on philosophy from enthusiastic experts. Hosted by professors Ellie Anderson (Pomona College) and David M. Pena-Guzman (San Francisco State University).</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/episode/1siGzuEli3U7DUiQz2uvff?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod2.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Mental Health</h1>
            <p class="info-pod">Teaching you how to look after your mental health one week at a time, with practical tips you can apply immediately. Writer/host Jeremy Godwin draws on quality research and his own experience of learning to live with anxiety/ depression to help you build your mental health awareness and find tools that actually work. So, Let’s Talk About Mental Health... because the more we talk about it, the easier it get.</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openLink(1)}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod3.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Speaking of Psychology</h1>
            <p class="info-pod">“Speaking of Psychology” is an audio podcast series highlighting some of the latest, most important and relavant psychological research being conducted today. Producted by the American Psychological Association, these podcasts will help listeners apply the science of psychology to their everyday lives.</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/show/3E8WE4UaaFu0XmWn1hE4Z1?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod4.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Feel your feelings</h1>
            <p class="info-pod">Why do i avoid bad feeling? why is that a bad thing to do? how can i become a mindful observer of my emotions? let’s talk about it.</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/episode/68KZm2X13lUMl2dNpr7MVV?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod5.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Motivation Daily</h1>
            <p class="info-pod">Motivation Daily is for anyone looking for motivation, inspiration and encouraging words and advice to help you on your journey in life. Produced by Motiversity, this podcast features only the greatest motivational speeches, spoken by the best speakers in the world.</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/episode/6jpysSoS7iSd3SylIhKxXB?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod6.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Mental Health Matters</h1>
            <p class="info-pod">Talking mental health with psychologist Dr.Mark Burton. Each week we talk about different topics of mental health. Tune in each Thursday!</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/show/3XS5Pa9M1RHV6GMZfPFQLy?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod7.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">The Healing Podcast</h1>
            <p class="info-pod">Hi gorgeous. Welcome to my poddie. I am your host Raquelle and I LOVE sharing my stories with you when it comes to healing. I am well known with being a highly sensitive person, ADHD and having anxiety
              This podcast is a safe place for all of you who are looking to flourish into your highest vibing self. I’m here to guide you as much as I can and will always share real and raw stories without a filter</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/episode/5hE3eM3dN6z1zlPmaTsLsK?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod9.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">The Introvert, Dear Podcast</h1>
            <p class="info-pod">The Introvert, Dear Podcast is devoted to helping introverts live more peaceful, meaningful lives. More...</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/show/7xlZGuaVgDlUM6n5tCE3ly?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod10.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">The Extroverts Are Out to Get Me</h1>
            <p class="info-pod">Hosts Tequila, the Introvert and Khalia, the extrovert, discuss different social behavior topics.</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/show/4DvDaCWyGs3LtDNfqe7GDL?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod11.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">A Happy Ambivert</h1>
            <p class="info-pod">Thanks to the cool combination of being the only child of a conservative Viet family plus a healthy dose of social anxiety, Phuong (or P, as she prefers to be called in this podcast), talks to herself quite a lot. More...</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/show/4fEU4L0pv2OzdoIVMRrvwI?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod13.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Human Behaviour, Psychology and Mental Health with Adzfitness</h1>
            <p class="info-pod">The show for all things related to your mind, health and happiness!
              The aim of this podcast is to bring you the same concepts that have seen those working with Adam over the years achieve fulfilment and happiness in all areas of life. More...</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/show/5OxS22g73N0MkS470rfbiq?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod14.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Smart People Podcast</h1>
            <p class="info-pod">Smart People Podcast is a biweekly, interview-based podcast that features today's most well respected thought leaders engaging in authentic, insightful conversation for the benefit of the listener. More ...</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/show/0TSWSj7e7vCzglDkZdPTOY?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod15.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">The Leadership Pod</h1>
            <p class="info-pod">The Leadership Pod is the podcast for emerging leaders who want to build their visibility and influence so they can unlock their leadership potential. More ...</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/show/4TqhF8brvcZGzkuRYBsJ4K?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod17.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">Let's Get Emotionally Intelligent</h1>
            <p class="info-pod">Emotional Intelligence Doctor, LLC presents Let's Get Emotionally Intelligent Podcast. If you’re looking for a podcast providing quick, practical emotionally intelligent inspiration to empower you to FEEL Better, THINK Better, and LIVE Better, you've come to the mindful place. More...</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/show/54HjJqOl1Nv2JY9mejjjLd?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />
      <div className="product-pod">
        <div className="product-img-pod">
          <img src="src/img/pod18.jpg" alt="" />
        </div>
        <div className="product-listing-pod">
          <div class="content-pod">
            <h1 class="name-pod">being okay with your life constantly changing</h1>
            <p class="info-pod">Change is uncomfortable but if life is change, then how do you come to terms and learn to accept the growing pains? In this episode, we talk about our experience with constant change, reverting back to old habits, and learning to deal with growing pains.</p>
            <div class="btn-and-rating-box-pod">
              <div class="rating-pod">
              </div>
              <button class="btn-pod" onClick={() => openPopup("https://open.spotify.com/embed/show/1xxFg2YQAByj5YbwPkG2rP/video?utm_source=generator")}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="gap" />


      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-pod">
          <div className="popup-content-pod">
            <iframe
              src={popupSrc}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PodCast;
