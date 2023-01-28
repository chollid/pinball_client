import React, { useState } from "react";
import styles from "@src/styles/Home.module.css";
import Button from "@src/components/Button";
import axios from "axios";

const Input = ({ setPinballLocationData, handleScrollToList }) => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [load, setLoad] = useState(false);

  const showPosition = async (position) => {
    await setLat(position.coords.latitude);
    await setLong(position.coords.longitude);
    setLoad(false);
  };

  const getLocation = () => {
    setLoad(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert(
        "Woops! Geolocation is not supported by this browser. Try entering in your latitude and longitude manually."
      );
    }
  };

  const handleNearMe = () => {
    getLocation();
  };

  const url = "https://pinballmap.com/api/v1/locations/closest_by_lat_lon.json";

  const handleSearch = () => {
    if (lat === "" || long === "") {
      alert("Please enter a latitude and longitude");
      return;
    } else {
      axios
        .get(url, {
          params: { lat: lat, lon: long, send_all_within_distance: "50" },
        })
        .then((response) => {
          const pinballLocationData = response.data.locations;
          setPinballLocationData(pinballLocationData);
        });
      }
  };

  return (
    <div className={styles.latLongInputContainer}>
      <div className={styles.latLabelContainer}>
        <label className={styles.labelEl} htmlFor="lat">
          Latitude
        </label>
      </div>
      <input
        className={styles.latInput}
        type="text"
        placeholder="Latitude"
        name="latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <div className={styles.longLabelContainer}>
        <label className={styles.labelEl} htmlFor="lat">
          Longitude
        </label>
      </div>
      <input
        className={styles.longInput}
        type="text"
        placeholder="Longitude"
        value={long}
        name="longitude"
        onChange={(e) => setLong(e.target.value)}
      />
      <div style={{ marginTop: "40px" }}>
        {load ? (
          <div>Loading...</div>
        ) : (
          <Button
            onclick={handleNearMe}
            style={styles.nearMeButton}
            children="Near Me"
          />
        )}
      </div>
      <div className={styles.searchContainer}>
        <Button
          onclick={handleSearch}
          style={styles.search}
          children="Search"
        />
      </div>
      <div className={styles.scrollText}>
        <button onClick={() =>  handleScrollToList()} className={styles.scrollButton}>Scroll ↓</button>
      </div>
    </div>
  );
};

export default Input;
