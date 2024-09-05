import React from "react";
import { assets } from "./assets/assets";
import { useState } from "react";
import "./ADFO.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ADFO = () => {
  useGSAP(() => {
    gsap.from(".devices", {
      x: 50,
      duration: 3,
      opacity: 0,
    });
    gsap.from(".devices2", {
      y: 50,
      duration: 3,
      delay: 2,
      opacity: 0,
    });
    gsap.from(".devices3", {
      x: 50,
      duration: 5,
      opacity: 0,
    });
    // gsap.to(".mall", {
    //   x: 50,
    //   duration: 5,
    //   //   opacity: 0,
    // });
    // gsap.to(".building", {
    //   x: -50,
    //   duration: 5,
    //   //   opacity: 0,
    // });
  });
  const [menu, setMenu] = useState("home");
  return (
    <div>
      <div className="navbar">
        <img className="logo" src={assets.logo} alt="not found" />
        <ul className="navbar-menu">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Track Progress
          </li>
          <li
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            DashBoard
          </li>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Apply for NOC
          </li>
        </ul>
        <div className="navbar-right">
          {/* <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          
        </div> */}
          <button>Sign in</button>
        </div>
      </div>
      <div>
        <hr />
        <p className="para">
          In a fire station, IoT devices can greatly enhance operational
          efficiency, safety, and communication.
        </p>
        <div className="row">
          <div className="column">
            <p className="devices">
              <b>In Emergency Alert Systems</b> <br /> Smart Alarms: Automated
              systems that can send alerts to firefighters' devices or systems
              when an alarm is triggered, providing real-time updates.
            </p>
          </div>
          <div className="column">
            <p className="devices2">
              <b> In Vehicles</b> <br /> Maintenance Monitoring: Sensors that
              monitor vehicle conditions, such as oil levels and tire pressure,
              to schedule maintenance and prevent breakdowns.
            </p>
          </div>
          <div className="column">
            <p className="devices">
              <b>In Building Management</b> <br /> IoT devices to monitor and
              control energy usage, including lighting and heating, to reduce
              operational costs.
            </p>
          </div>
          <div className="column">
            <p className="devices2">
              <b>In Health and Safety </b> <br /> Monitors for firefighters’
              vital signs, such as heart rate and body temperature, to detect
              signs of distress and ensure safety during operations.
            </p>
          </div>
          <div className="column">
            <p className="devices">
              <b> In Water Management</b> <br /> IoT sensors to monitor the
              status and pressure of fire hydrants, ensuring they are functional
              and accessible when needed.
            </p>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="infra">
          Infrastructure under Assistant Divisional Fire Officer
        </p>
        <img className="mall" src={assets.Db_mall} alt="not found" />
        {/* <img
          className="mall"
          src={assets.commercial_building}
          alt="not found"
        /> */}
        <img className="mall" src={assets.hospital} alt="not found" />
        <img
          className="mall"
          src={assets.residential_building}
          alt="not found"
        />
      </div>
      <br />
      <hr />
      <div className="infra1"> Devices installed</div>
      <img className="mall3" src={assets.fire_sprinkler} alt="not found" />
      <p className="para2"> Fire Sprinkler</p>
      <img className="mall3" src={assets.lpg} alt="not found" />
      <p className="para2"> LPG leakage detector</p>
      <img className="mall2" src={assets.voc} alt="not found" />
      <p className="para3"> VOC detector device</p>
      <img className="mall2" src={assets.gas_detector} alt="not found" />
      <p className="para2"> Gas Detector</p>
    </div>
  );
};

export default ADFO;
