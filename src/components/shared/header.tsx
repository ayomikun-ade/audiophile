import React from "react";

const Header = ({ heading }: { heading: string }) => {
  return (
    <header className="bg-black text-white">
      <div className="py-[98px] text-center px-6">
        <h2>{heading}</h2>
      </div>
    </header>
  );
};

export default Header;
