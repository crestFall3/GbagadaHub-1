import React from "react";

// fixed animation
export const Section = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export const SectionView = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

