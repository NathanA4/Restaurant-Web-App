import React from "react";
import image from "../../constants/image";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="mainAboutUs">
    <div className="box">
      <img
        src={image.BreadBasket}
        alt="BreadBasket"
        height="375"
        width="375"
        className="breadBasket"
      />
      <p className="start_about">About Sabrosa</p>
      <p className="description">
        Sabrosa is a bakery that specializes in breads, pastries, and desserts.
        Along with that, fresh coffee is also served. The ingredients that come
        Sabrosa are of high quality, which guarantees the best taste possible!
        Whether you prefer piping-hot, freshly baked bread or have a sweet
        tooth, Sabrosa is right around the corner to help satisfy your needs!
      </p>

      <p className="origins">
        Sabrosa's origins lie in the city of Toronto, Ontario. Come on and drop
        by to indulge in our tasty selections by either calling to make a
        reservation or by making one online on this website!
      </p>
      <p className="locations">
        Can't come to our location in Toronto? No problem! Our other bakery is
        located in the City of Oshawa!
      </p>
    </div>
    <div className="boxTwo">
      <img
        src={image.RollingPin}
        alt="RollingPin"
        height="250"
        width="250"
        className="rollingPin"
      />
      <p className="start_about">How it all started</p>
      <p className="background">
        During the fall season in October 2023, this bakery was created after
        the owners were laid off from their full-time jobs. This is when they
        decided to turn their skills in baking into creating this restaurant!
        The owners also have web programming experience, and this website
        displays their hard-earned efforts to make this website as user-friendly
        and aesthetic as possible!
      </p>
    </div>
    <p className="toronto">Location & Hours: Toronto Location</p>
    <div className="mOne">
      <iframe
        className="mapOne"
        title="locationTwo"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2690643595374!2d-79.38963172423907!3d43.64257005311879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1700954266753!5m2!1sen!2sca"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <p className="addressOne">Sabrosa</p>
      <p className="addressOne">290 Bremner Blvd</p>
      <p className="addressOne">Toronto, Ontario</p>
      <p className="addressOne">M5V 3L9</p>
      <p className="hrsOne">Monday: 8:00 am - 10:00 pm</p>
      <p className="hrsOne">Tuesday: 8:00 am - 10:00 pm</p>
      <p className="hrsOne">Wednesday: 8:00 am - 10:00 pm</p>
      <p className="hrsOne">Thursday: 8:00 am - 10:00 pm</p>
      <p className="hrsOne">Friday: 8:00 am - 10:00 pm</p>
      <p className="hrsOne">Saturday: 8:00 am - 10:00 pm</p>
      <p className="hrsOne">Sunday: 7:00 am - 6:00 pm</p>
    </div>
    <p className="oshawa">Location & Hours: Oshawa Location</p>
    <div className="mTwo">
      <iframe
        className="mapTwo"
        title="locationOne"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.340247063315!2d-78.8821888242257!3d43.89021933706956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d013ca358ef%3A0x7e115fe00af7ce02!2sOshawa%20Centre!5e0!3m2!1sen!2sca!4v1700954818833!5m2!1sen!2sca"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <p className="addressTwo">Sabrosa</p>
      <p className="addressTwo">419 King St W</p>
      <p className="addressTwo">Oshawa, Ontario</p>
      <p className="addressTwo">L1J 2K5</p>
      <p className="hrsTwo">Monday: 7:00 am - 9:00 pm</p>
      <p className="hrsTwo">Tuesday: 7:00 am - 9:00 pm</p>
      <p className="hrsTwo">Wednesday: 7:00 am - 9:00 pm</p>
      <p className="hrsTwo">Thursday: 7:00 am - 9:00 pm</p>
      <p className="hrsTwo">Friday: 7:00 am - 9:00 pm</p>
      <p className="hrsTwo">Saturday: 9:00 am - 5:00 pm</p>
      <p className="hrsTwo">Sunday: 9:00 am - 5:00 pm</p>
    </div>
  </div>
);
export default AboutUs;
