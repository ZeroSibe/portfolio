import React from "react";

export default function SkillCard({ skill }) {
  const { name, icon, imgIcon } = skill;
  return (
    <div>
      {imgIcon && (
        <img
          src={imgIcon}
          alt={name}
          style={{ width: "40px", height: "40px" }}
        />
      )}
    </div>
  );
}
