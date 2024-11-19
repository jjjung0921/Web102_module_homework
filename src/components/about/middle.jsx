import React from "react";
import BoxItem from "web102_about_module";

const Middle = () => {
    const boxs = [];
    for(let i=0; i<6; i++)
        boxs.push(<BoxItem top="false" data="Lorem ipsum dolor sit amet" index={i}/>)

    return(
        <div id="middle">
            <div id="middle_left">
                {boxs}
            </div>
            <div id="middle_right">
                7
            </div>
        </div>
    )
}

export default Middle;