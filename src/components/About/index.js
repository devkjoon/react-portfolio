import React from "react";
import profileImage from "../../assets/photos/highTower.png";

function About() {
    return (
        <section id="about-me" className="my-5 intro">
            <div class="flex-row">
                <h1 id="about" className="section-title primary-border">
                    About Me
                </h1>
            </div>
            <div className="flex-row">
                <div class="intro-info">
                    <div class="intro-img">
                        <img src={profileImage} style={{ width: "100%" }} alt="profile" />
                    </div>
                    <p>
                        Greetings! My name is Joon Kim and currently, I am a 24 yr old based out of Washington D.C.
                        I graduated in 2021 with a B.A. in Earth Sciences with a focus in Volcanology from University of Pennsylvania.
                        When I'm not working, I enjoy spending my time at the gym and striping pissiles on the golf course.
                        I'm excited to be here and looking forward to making advancements in my career of devloping!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About