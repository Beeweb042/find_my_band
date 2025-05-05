import React from "react";
import "./BandCard.css";
import YouTubeIcon from "./YouTubeIcon";
import HeartIcon from "./HeartIcon";

function BandCard(props) {
  // This component receives a `band` object via props and displays:
  // - the band name
  // - the country of origin
  // - a clickable YouTube icon linking to a track
  // - a heart icon to favorite (logic to be added later)

  return (
      <div>
        <h3>{props.band.name}</h3>
        <p>Pays : {props.band.country}</p>

        {/* YouTubeIcon is wrapped in an <a> tag to make it clickable */}
        <a
          href={props.band.youTubeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon />
        </a>

        {/* Static Heart icon for now (no click logic yet) */}
        <HeartIcon />
      </div>
  );
};

export default BandCard;
