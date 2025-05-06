import React from "react";
import YouTubeIcon from "./YouTubeIcon";
import HeartIcon from "./HeartIcon";

function BandCard(props) {
  // This component receives a `band` object via props and displays:
  // - the band name
  // - the country of origin
  // - a clickable YouTube icon linking to a track
  // - a heart icon to favorite (logic to be added later)

  return (
    <div
      className="
      bg-gradient-to-r from-pink-500 to-purple-800
      w-2/3                          
      flex flex-col gap-2.5
      rounded-3xl p-6
      text-2xl
      shadow-md shadow-purple-900
      "
    >
      <h3
        className="
        text-white uppercase font-extrabold
        "
      >
        🎸 {props.band.name}
      </h3>

      <p className="text-gray-800">🌐 Pays : {props.band.country}</p>

      {/* YouTubeIcon is wrapped in an <a> tag to make it clickable */}
      <a href={props.band.youTubeUrl} target="_blank">
        <YouTubeIcon />
      </a>

      {/* Static Heart icon for now (no click logic yet) */}
      <a>
        <HeartIcon />
      </a>
    </div>
  );
}

export default BandCard;
