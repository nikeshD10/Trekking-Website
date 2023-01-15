import React, { useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LuggageIcon from "@mui/icons-material/Luggage";
import "./Home.css";
import Carousle from "../../assets/Home.gif";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>

      <img src={Carousle} alt="home carousle" />

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city"> Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here....." />
              <LocationOnIcon className="locationIcon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date"> Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <FilterAltIcon className="filterIcon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <LuggageIcon className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
