import React from "react";
import "./Contact.css";

const Contact = () => (
  <div>
    <form className="contactForm">
      <div className="row">
        <div className="column">
          <label className="feedbackLabel" for="feedback">
            Feedback
          </label>
          <select className="feedback" name="feedback">
            <option value="inquiry">General Inquiry</option>
            <option value="concern">Food Quality Concern</option>
            <option value="employee">Employee Concern</option>
            <option value="store">Store appearance</option>
            <option value="order">Fundraising order</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="column">
          <label className="nameLabel" for="name">
            Name
          </label>
          <input className="name" name="name" type="text"></input>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label className="bakeryLabel" for="bakery">
            Store/Bakery
          </label>
          <input className="storeBakery" name="bakery" type="text"></input>
        </div>
        <div className="column">
          <label className="emailLabel" for="email">
            Email
          </label>
          <input className="email" name="email" type="text"></input>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label className="phoneLabel" for="phone">
            Phone
          </label>
          <input
            className="phone"
            name="phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="XXX-XXX-XXXX"
          ></input>
        </div>
        <div className="column">
          <label className="commentsLabel" for="comments">
            Comments
          </label>
          <input className="comments" name="comments" type="comments"></input>
        </div>
      </div>
      <div className="column">
        <input className="submit" type="submit" value="SUBMIT"></input>
      </div>
    </form>
  </div>
);

export default Contact;
