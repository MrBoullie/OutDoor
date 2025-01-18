import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPeopleGroup} from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  const [hoveredCards, setHoveredCards] = useState([false, false]);

  const handleMouseEnter = (index) => {
    const updatedHoverState = [...hoveredCards];
    updatedHoverState[index] = true;
    setHoveredCards(updatedHoverState);
  };

  const handleMouseLeave = (index) => {
    const updatedHoverState = [...hoveredCards];
    updatedHoverState[index] = false;
    setHoveredCards(updatedHoverState);
  };

  const getCardStyle = (isHovered) => ({
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.3s ease, height 0.3s ease",
    boxShadow: isHovered
      ? "0px 4px 15px rgba(0, 0, 0, 0.2)"
      : "0px 2px 10px rgba(0, 0, 0, 0.1)",
  });

  return (
    <>
      <h2 className="fw-bold"
        style={{
          fontSize: "2em",
          color: "#467a6b",
          marginTop: "7vh",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        About Us
      </h2>
      <div className="align-items-center justify-content-center gap-5 mx-auto row col-12 mt-5 flex-wrap mx-lg-0">
        <div
          className="shadow rounded  p-5 col-lg-5 col-md-10"
          style={getCardStyle(hoveredCards[0])}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          <h2 className="text-center mb-3 fw-bold">
          <FontAwesomeIcon icon={faBook} /> Our Story
          </h2>
          <p className="mb-4 fs-5 fw-medium text-center">
            Outdoor Adventure Gear Co. was born out of a love for the great
            outdoors and a desire to connect people with nature. From humble
            beginnings, we have grown into a trusted destination for adventure
            enthusiasts around the world.
          </p>
          <ul className="list-unstyled" style={{color:"#777"}}>
            <li>
              <i className="fas fa-check-circle"></i> Founded in 2024 with
              passion and purpose
            </li>
            <li>
              <i className="fas fa-users"></i> Over 100,000 adventurers served
            </li>
            <li>
              <i className="fas fa-star"></i> Rated #1 in customer satisfaction
            </li>
          </ul>
        </div>

        <div
          className="shadow rounded  p-5 col-lg-5 col-md-10"
          style={getCardStyle(hoveredCards[1])}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          <h2 className="text-center mb-3 fw-bold">
          <FontAwesomeIcon icon={faPeopleGroup} /> Meet Our Team
          </h2>
          <p className="mb-4 fs-5 fw-medium text-center" style={{ minHeight: "125px" }}>
            We are a group of outdoor enthusiasts, innovators, and dreamers
            committed to bringing you top-quality gear and exceptional service.
          </p>
          <ul className="list-unstyled" style={{color:"#777"}}>
            <li>
              <strong>Hussein Shams:</strong> <i className="fas fa-cogs"></i>{" "}
              Visionary CEO and Founder
            </li>
            <li>
              <strong>Sajed Wazneh:</strong>{" "}
               Operations Expert and
              Problem-Solver
            </li>
            <li>
              <strong>Mohammad Khazaal:</strong>{" "}
              <i className="fas fa-laptop-code"></i> Tech Wizard and Lead
              Developer
            </li>
            <li>
              <strong>Zahraa Sharifeh:</strong>{" "}
              <i className="fas fa-bullhorn"></i> Creative Marketing Guru
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
