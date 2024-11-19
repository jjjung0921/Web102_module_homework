import React from "react";

const basic_style = {
    display: "inline-block",
    lineHeight: "40px",
    margin: "0 5px",
    fontSize: "13px",
};

export const element = (props) => {
    const style = {...basic_style};
    style.color = props.index%2===0?"black":"orange";
    return(
        <li style={style}>{props.data}</li>
    )
}

export default element;