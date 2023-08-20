import React, { useState } from "react";
import "./ProductCard.css"; // Import your CSS file for styling

const ProductCard = () => {
  const [isPopupOpen, setPopupOpen] = useState(false); // Initialize popup state
  const [popupSrc, setPopupSrc] = useState(""); // Initialize popup source link

  const openPopup = (src) => {
    setPopupSrc(src);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="prodcard">
      <div className="container-pc">
        <div className="header-pc">
          <h1>Music</h1>
        </div>

        <div className="products">
          {/* Your product items */}
          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m1.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>Healing</h3>
              <span>3 hr 2 mn</span>
            </div>
            <p>Altheavu - 51 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/53eixYVfvpnzKdFsBw2rJL?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m2.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>Piano ~~</h3>
              <span>34 mn 24 sc</span>
            </div>
            <p>Altheavu - 9 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/album/6ird8EIdzbPlJRKpMkK9oh?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m3.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>Nhạc Thiền - Tĩnh tâm - An Nhiên</h3>
              <span>2 hr 40 mn</span>
            </div>
            <p>VPROD Publishing - 2021 - 8 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/album/7mAKMhCn9BLWp24PgmOuv4?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m4.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>DREamlike HeAven</h3>
              <span>13 hr 31 mn</span>
            </div>
            <p>Althevu - 364 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/0VphEW6S0RDIVTz7pl16Ro?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m5.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>Chill Out Jazz</h3>
              <span>6 hr</span>
            </div>
            <p>Swinging jazz for relaxing and unwinding</p>
            <p>Spotify - 52,529 likes - 100 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/37i9dQZF1DXdk2DZvqpqJY?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m6.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>lush lofi</h3>
              <span>19 hr 27 mn</span>
            </div>
            <p>The chillest instrumental lofi beats, certified lush</p>
            <p>Spotify - 1,014,470 likes - 521 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/37i9dQZF1DXc8kgYqQLMfH?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m7.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>chill lofi study beats</h3>
              <span>22 hr 34 mn</span>
            </div>
            <p>
              The perfect study beats. Find your focus, crush your productivity
            </p>
            <p>Spotify - 1,206,890 - 607 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m8.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>Peaceful Guitar</h3>
              <span>11 hr 18 mn</span>
            </div>
            <p>Unwind to these calm classNameical guitar pieces</p>
            <p>Spotify - 1,979,842 - 280 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/37i9dQZF1DX0jgyAiPl8Af?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m9.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>Lofi sleep</h3>
              <span>about 14 hr</span>
            </div>
            <p>Instrumental beats for a restful night's sleep.</p>
            <p>Spotify - 255,675 - 391 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/37i9dQZF1DX2PQDq3PdrHQ?utm_source=generator&theme=0")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m10.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>INTROvert </h3>
              <span> 57 min 31 sec</span>
            </div>
            <p>Altheavu - 17 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/5OetEAmbc4K3jd0iV7QFYr?utm_source=generator&theme=0")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m11.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>EXTROVERT</h3>
              <span>about 1 hr 45 min</span>
            </div>
            <p>Altheavu - 29 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/3mtmBeCF7viruewRjkmJa9?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m14.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>AMBIVERT</h3>
              <span>about 17 hr</span>
            </div>
            <p>Altheavu - 336 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/2HMwjhSjhu79Gn1ZxdBGgm?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m15.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>LEAdership</h3>
              <span>about 4 hr 30 min</span>
            </div>
            <p>Altheavu - 64 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/1r2qBYpq4Ru3hmxYMXQLGC?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m12.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>Fresh Finds Pop</h3>
              <span>about 5 hr 30 min</span>
            </div>
            <p>Spotify - 114 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/37i9dQZF1DX3u9TSHqpdJC?utm_source=generator")}></button>
            </div>
          </div>

          <div className="product">
            <div className="image-pc">
              <img src="./src/img/m13.jpg" alt="" />
            </div>
            <div className="namePrice">
              <h3>Stress Relief</h3>
              <span>about 13 hr</span>
            </div>
            <p>Altheavu - 266 songs</p>
            <div className="gap"></div>
            <div className="bay">
              <button onClick={() => openPopup("https://open.spotify.com/embed/playlist/7b5LEXWOLAi3MeDfwClfeO?utm_source=generator")}></button>
            </div>
          </div>

        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-pc">
          <div className="popup-content-pc">
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

export default ProductCard;
