import React from "react";
import krnImg from "../../assets/photos/krn.png";
import coinspireImg from "../../assets/photos/coinspire.png";
import weatherDashImg from "../../assets/photos/weather_dashboard.png";
import codeQuizImg from "../../assets/photos/code quiz.png";
import plannerImg from "../../assets/photos/planner.png";
import horiseonImg from "../../assets/photos/horiseon.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://pacific-sierra-02565.herokuapp.com/">
                {""}
                <img
                  src={krnImg}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Krn Project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>KRN Health and Fitness</h4>
              <p>
                KRN is a comprehensive fitness application designed to assist
                users in their fitness journey. The app caters to individuals of
                all fitness levels and provides a range of features such as
                personalized meal plans, targeted exercises, health metrics and
                more. Our team is dedicated to supporting our users every step
                of the way, and we will stop at nothing to ensure their success.
                So start your fitness journey with KRN today and reach your
                goals with ease.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://devkjoon.github.io/coinspire/">
                {""}
                <img
                  src={coinspireImg}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="coinspire project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Coinspire Cryptocurrency Project</h4>
              <p>
                CoinSpire is a front-end web application that allows users to
                live track current crypto-currency prices to assist and aid
                beginners at cryptocurrency in fast trading, accurate data for
                learning, with easy and simple UI, and users will be able to see
                only the important details. This application enhances the user
                experience with learning about crypto and trading without the
                usual complex crypto sites with overwhemling, confusing
                information that is difficult to intake.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://devkjoon.github.io/weather-dashboard/">
                {""}
                <img
                  src={weatherDashImg}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Krn Project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                Search the current and future weather conditions for multiple
                cities. This application utilizes OpenWeather API to retrieve
                weather data for cities and displays the weather consisting of
                temperature, weather condition, humidity, and wind speed of the
                current day and the five following days.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://devkjoon.github.io/code-quiz/">
                {""}
                <img
                  src={codeQuizImg}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Krn Project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>JavaScript Code Quiz</h4>
              <p>
                This project is a short 4 question knowledge test on JavaScript.
                Test is timed and scored with the ability to save your
                name/initials on the scoreboard. By creating this project, we
                are able to demonstrate our JavaScript abilities put together as
                a developer.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://devkjoon.github.io/planner/">
                {""}
                <img
                  src={plannerImg}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Krn Project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Daily Planner</h4>
              <p>
                This project is a work day planner application with the
                capabilities of past, present, and future events displaying in a
                different color for easy user interface. This short
                demonstration of using third-party apis and applying them to our
                code will allow others to see our understanding of this concept.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://devkjoon.github.io/horiseon/">
                {""}
                <img
                  src={horiseonImg}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Krn Project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Horiseon</h4>
              <p>
                This project was modified to clear up unnecessary code by
                replacing with semantic elements. By cleaning these elements up,
                the code is easily accessible to new users and anybody wanting
                to view.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
