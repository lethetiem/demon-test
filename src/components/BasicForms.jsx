import "./basicForms.css";
const BasicForms = () => {
  return (
    <div className="containers">
      <div className="cta-box">
        <form className="cta cta-form--sing-in" name="login">
          <div>
            <label htmlFor="log-in">Login</label>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="example@kyanon.digital"
              name="email"
              required
            ></input>
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="******"
              name="password"
              required
            ></input>
          </div>

          <div className="post">
            <div className="password-checkbox">
              <input
                id="check-box"
                type="checkbox"
                name="check-box"
              ></input>
              <label htmlFor="show-password">Show password</label>
            </div>

            <button className="btn btn--form">Sign in</button>
          </div>
        </form>

        <form className="cta cta-form--profile" name="update-profile">
          <div>
            <label htmlFor="profile">Profile</label>
          </div>
          <div>
            <label htmlFor="full-name">Full name:</label>
            <input id="full-name" type="text" name="full-name" required></input>
          </div>

          <div>
            <label htmlFor="day-of-bird">Day Of Birth:</label>
            <input
              id="day-of-bird"
              type="text"
              name="day-of-bird"
              required
            ></input>
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" required></input>
          </div>

          <div>
            <label htmlFor="phone-number">Phone number:</label>
            <input
              id="phone-number"
              type="text"
              name="phone-number"
              required
            ></input>
          </div>

          <div className="post">
            <button className="btn btn--update">Update</button>
            <button className="btn btn--cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicForms;
