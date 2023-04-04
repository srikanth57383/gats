import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title, color }) => {
  return (
    <div className="py-md-5 py-2">
      <h2 className={`section-title ${color}`}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
