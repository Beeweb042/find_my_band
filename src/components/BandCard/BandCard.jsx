import React, { useEffect, useRef } from "react";
import YouTubeIcon from "./YouTubeIcon";
import HeartIcon from "./HeartIcon";

function BandCard(props) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    function handleMouseMove(event) {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      const rotateX = (-y / rect.height) * 24;
      const rotateY = (x / rect.width) * 24;

      card.style.transform = `
        perspective(500px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale3d(1.05, 1.05, 1.05)
        `;
    }

    card.addEventListener("mousemove", handleMouseMove);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="
      bg-linear-to-b/shorter from-pink-500 to-purple-700
      bg-[length:200%_200%]                          
      flex flex-col gap-2.5
      rounded-3xl p-6
      text-2xl
      shadow-md shadow-purple-900
      transition-transform duration-500 ease-[cubic-bezier(0.03,0.98,0.52,0.99)]

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
