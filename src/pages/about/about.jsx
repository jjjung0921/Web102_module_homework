import React from "react";
import Top from "../../components/about/top";

import "./about.scss";
import Middle from "../../components/about/middle";
import Footer from "../../components/about/footer";

const About = () => {

    return(
        <div id="about">
            <Top/>
            <Middle/>
            <Footer/>
        </div>
    )
}

export default About;