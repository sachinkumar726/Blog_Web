import React from "react";
import logoImage from '../assets/Images/Logo.webp'; // Correct import

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logoImage} alt="Blog Logo" style={{ width }} /> {/* Use the imported image */}
    </div>
  );
}

export default Logo;
