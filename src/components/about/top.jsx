import React from "react";
import BoxItem from "web102_about_module";

const Top = () => {
  return (
    <div id="top">
      <div className="topLeft">
        <BoxItem data="Global Business, Lorem ipsum dolor sit amet" top="true"/>
      </div>
      <div className="topRight">
        <BoxItem type="image" data="/assets/right1.png" />
        <BoxItem type="image" data="/assets/right2.png" />
      </div>
    </div>
  );
};

export default Top;
