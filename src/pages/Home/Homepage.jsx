import "./homepage.scss";
import React from "react";
import CustomizedDialogs from "../../components/dialog/Dialog";

import LanguageIcon from "@mui/icons-material/Language";
import Login from "../../components/login/Login";

function Homepage() {
  return (
    <div className="homepage">
      <img
        src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjA4YmF0Y2g0LWt3YW4tMDEtZy5qcGc.jpg"
        alt="background"
        className="homepage-bg"
      ></img>
      <header>
        <LanguageIcon className="icon" />
        <h2>RISSC Bank</h2>
      </header>

      <main>
        <section>
          <h1>Welcome!</h1>
          <p>
            Managing your finances has never been easier than with our online
            banking service.
            </p>
          <p>
            Bank from anywhere, at any time, with just a few
            clicks.
          </p>

          <div className="homepage-sign-btns">
            <CustomizedDialogs title="Sign In" btn="Sign In">
              <Login />
            </CustomizedDialogs>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
