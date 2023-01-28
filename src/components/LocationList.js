import React, { useState } from "react";
import styles from "@src/styles/Home.module.css";
import uuid from "react-uuid";
import Button from "@src/components/Button";

const LocationList = ({
  pinballLocationData,
  pinballListRef,
  handleScrollTop,
}) => {
  return (
    <div className={styles.listWrapper}>
      {pinballLocationData.length > 0 && (
        <div className={styles.locationFound} ref={pinballListRef}>
          <h5>{`${23} locations found!`}</h5>
        </div>
      )}
      {pinballLocationData?.map((location) => {
        return (
          <ul key={uuid()} className={styles.listContainer}>
            <div className={styles.listOuter}>
              <div className={styles.listTop}>
                <h3>{location.name}</h3>
              </div>
              <div className={styles.listBottom}>
                <h3>{`${location.street} - ${location.city}, ${location.state}`}</h3>
                <div>
                  <p>{`Distance: ${Math.trunc(
                    Number(location.distance)
                  )} Miles`}</p>
                </div>
              </div>
            </div>
          </ul>
        );
      })}
      {pinballLocationData.length > 0 && (
        <Button
          onclick={handleScrollTop}
          style={styles.toTopButton}
          children="Back to Top"
        />
      )}
    </div>
  );
};

export default LocationList;
