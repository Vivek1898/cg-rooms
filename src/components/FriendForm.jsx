import React from "react";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Form = () => {
  const [YourName, setYourName] = useState("");
  const [YourEmail, setYourEmail] = useState("");
  const [YourGender, setYourGender] = useState("");
  const [YourMobile, setYourMobile] = useState("");
  const [YourWhatsapp, setYourWhatsapp] = useState("");
  const [YourBranch, setYourBranch] = useState("");
  const [YourYear, setYourYear] = useState("");
  const [YourHobbies, setYourHobbies] = useState("");
  const [RoomateGender, setRoomateGender] = useState("");
  const [RoomateBranch, setRoomateBranch] = useState("");
  const [RoomateYear, setRoomateYear] = useState("");
  const [FoodPreference, setFoodPreference] = useState("");
  const [RentShareRaito, setRentShareRaito] = useState("");
  const [preferedState, setpreferedState] = useState("");
  const [preferedCountry, setpreferedCountry] = useState("");
  const [suggestion, setsuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      YourName,
      YourEmail,
      YourGender,
      YourMobile,
      YourWhatsapp,
      YourBranch,
      YourYear,
      YourHobbies,
      RoomateGender,
      RoomateBranch,
      RoomateYear,
      FoodPreference,
      RentShareRaito,
      preferedState,
      preferedCountry,
      suggestion,
    };
    console.log(formData);

    axios.post(process.env.REACT_ROOMMATES_API, formData).then((response) => {
      console.log(response);
    });
    toast("Congratulation " + YourName + " Registration Sucessfull");
    e.target.reset();
  };

  return (
    <div className="main">
      <section id="contact" style={{width: "100%"}}>
        <div className="contact-box">
          <div className="contact-links">
            <h2 style={{color: "rgb(225, 225, 225)"}}>FIND ROOMMATES</h2>
            <br />
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="roommate">
                <div className="form-details">
                  <div className="detail-h1">Your Detail</div>
                  
                  <div className="form-item" id="create-course-form">
                    <input
                      type="text"
                      onChange={(e) => setYourName(e.target.value)}
                      placeholder="Name"
                      required
                    />
                  </div>
                  
                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setYourEmail(e.target.value)}
                      placeholder="Gender"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setYourGender(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="number"
                      onChange={(e) => setYourMobile(e.target.value)}
                      placeholder="Mobile Number"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setYourWhatsapp(e.target.value)}
                      placeholder="WhatsApp Number"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setYourBranch(e.target.value)}
                      placeholder="Your Branch"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setYourYear(e.target.value)}
                      placeholder="College Year"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setYourHobbies(e.target.value)}
                      placeholder="Your Hobbies"
                      required
                    />
                  </div>
                </div>

                <div className="form-details">
                  <div className="detail-h1">Roommate Detail</div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setRoomateGender(e.target.value)}
                      placeholder="Roommate Gender"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setRoomateBranch(e.target.value)}
                      placeholder="Roommate Branch"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setRoomateYear(e.target.value)}
                      placeholder="Roommate Year"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setFoodPreference(e.target.value)}
                      placeholder="Food Preference"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setRentShareRaito(e.target.value)}
                      placeholder="Rent Share Ratio"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setpreferedState(e.target.value)}
                      placeholder="Preferred State"
                      required
                    />
                  </div>

                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setpreferedCountry(e.target.value)}
                      placeholder="Preferred Country"
                      required
                    />
                  </div>
                  
                  <div className="form-item">
                    <input
                      type="text"
                      onChange={(e) => setsuggestion(e.target.value)}
                      placeholder="Any Suggestion"
                      required
                    />
                  </div>
                </div>
              </div>

              <button className="submit-btn" type="submit" style={{width: "50%"}}>
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
