import React from 'react'

import {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const Form = () => {
  const [YourName, setYourName] = useState('');
  const [YourEmail, setYourEmail] = useState('');
  const [YourGender, setYourGender] = useState('');
  const [YourMobile, setYourMobile] = useState('');
  const [YourWhatsapp, setYourWhatsapp] = useState('');
 
  const [YourBranch, setYourBranch] = useState('');
  const [YourYear, setYourYear] = useState('');
  const [YourHobbies, setYourHobbies] = useState('');
  const [RoomateGender, setRoomateGender] = useState('');
  const [RoomateBranch, setRoomateBranch] = useState('');
  const [RoomateYear, setRoomateYear] = useState('');
  const [FoodPreference, setFoodPreference] = useState('');
  const [RentShareRaito, setRentShareRaito] = useState('');
  const [preferedState, setpreferedState] = useState('');
  const [preferedCountry, setpreferedCountry] = useState('');
  const [suggestion, setsuggestion] = useState('');



  const handleSubmit = (e)=> {
    e.preventDefault();
    
  
const  formData = { YourName  ,
                    YourEmail ,
                    YourGender ,
                    YourMobile ,
                    YourWhatsapp ,
                    YourBranch ,
                    YourYear ,
                    YourHobbies ,
                    RoomateGender  ,
                    RoomateBranch  ,
                    RoomateYear  ,
                    FoodPreference ,
                    RentShareRaito   ,
                    preferedState   ,
                    preferedCountry   ,
                    suggestion  ,   

};
console.log(formData);

 axios.post(process.env.REACT_ROOMATES_API,formData)
 .then((response)=>{
   console.log(response);
 });
 toast("Congratulation " +YourName+ " Registration Sucessfull")
 e.target.reset();

}

  return (
    <div>
      <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>FIND ROOM-MATES</h2>
      <br/>
      <h3>ENTER DETAILS</h3>
    </div>
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-item" id='create-course-form'>
        <label>Your Name:</label>
          <input type="text" onChange={(e) => setYourName(e.target.value)}  required/>
         
        </div>
        <div className="form-item">
          <label>Your Email:</label>
          <input type="text" onChange={(e) => setYourEmail(e.target.value)}  required/>
         
        </div>
        <div className="form-item">
        <label>Your Gender:</label>
          <input type="text" onChange={(e) => setYourGender (e.target.value)}  required/>
         
        </div>
        <div className="form-item">
        <label>Your Mobile:</label>
          <input type="number" onChange={(e) => setYourMobile (e.target.value)}  required/>
         
        </div>
        <div className="form-item">
        <label>Your Whatsapp:</label>
          <input type="text" onChange={(e) => setYourWhatsapp  (e.target.value)}  required/>
         
        </div>
        <div className="form-item">
        <label>Your Branch:</label>
          <input type="text" onChange={(e) => setYourBranch (e.target.value)} required/>
          
        </div>
        <div className="form-item">
        <label>Your Year:</label>
          <input type="text" onChange={(e) => setYourYear (e.target.value)}  required/>
          
        </div>

        <div className="form-item">
        <label>Your Hobbies:</label>
          <input type="text" onChange={(e) => setYourHobbies  (e.target.value)}  required/>
          
        </div>
        <div className="form-item">
        <label>Roomate Gender:</label>
          <input type="text" onChange={(e) => setRoomateGender  (e.target.value)}  required/>
          
        </div>
        <div className="form-item">
        <label>Roomate Branch:</label>
          <input type="text" onChange={(e) => setRoomateBranch  (e.target.value)}  required/>
          
        </div>
        <div className="form-item">
        <label>Roomate Year:</label>
          <input type="text" onChange={(e) => setRoomateYear  (e.target.value)}  required/>
          
        </div>
        <div className="form-item">
        <label>Food Preference:</label>
          <input type="text" onChange={(e) => setFoodPreference  (e.target.value)}  required/>
          
        </div>
        <div className="form-item">
        <label>Rent Share Raito:</label>
          <input type="text" onChange={(e) => setRentShareRaito  (e.target.value)}  required/>
          
        </div>
        <div className="form-item">
        <label>Prefered State:</label>
          <input type="text" onChange={(e) => setpreferedState  (e.target.value)}  required/>
          
        </div>
        <div className="form-item">
        <label>Prefered Country:</label>
          <input type="text" onChange={(e) => setpreferedCountry  (e.target.value)}  required/>
          
        </div>
        <div className="form-item">
        <label>Any Suggestion:</label>
          <input type="text" onChange={(e) => setsuggestion  (e.target.value)}  required/>
          
        </div>

        <button className="submit-btn" type='submit' >Register</button>  
      </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default Form;