import React from "react";
import './updateProfile.css'
import '../index.css'

const UpdateProfile = () => {
  return <div>
    <form className="cta cta-form--profile" name="update-profile">
          <div>
            <label className="profile-label" htmlFor="profile">Profile</label>
          </div>
          <div>
            <label className="text-color--profile" htmlFor="full-name">Full name:</label>
            <input id="full-name" type="text" name="full-name" required></input>
          </div>

          <div>
            <label className="text-color--profile" htmlFor="day-of-bird">Day Of Birth:</label>
            <input
              id="day-of-bird"
              type="text"
              name="day-of-bird"
              required
            ></input>
          </div>

          <div>
            <label className="text-color--profile" htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" required></input>
          </div>

          <div>
            <label className="text-color--profile" htmlFor="phone-number">Phone:</label>
            <input
              id="phone-number"
              type="tel" maxLength={10}
              name="phone-number"
              required
            ></input>
          </div>

          <div className="btn-profile">
            <button className="btn btn--update">Update</button>
            <button className="btn btn--cancel">Cancel</button>
          </div>
        </form>
  </div>
}

export default UpdateProfile;