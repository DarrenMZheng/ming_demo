import React, {useState} from "react";


const HeaderComponent = () => {
  let selectMenu = window.location.hash.split("/")[1]
    ? window.location.hash.split("/")[1]
    : "homePage";

  const handleMenuClick = e => {
    if (e.key === "exit") {
      sessionStorage.removeItem("access_token");
      window.location.hash = "login";
    }
  };

  return (
    <header>
      <h2>Pinnacle</h2>
      <div>
        <span className="icons icon-home2"></span>
        <span>HSBC</span>
      </div>
    </header>
  );
};

export default HeaderComponent;
