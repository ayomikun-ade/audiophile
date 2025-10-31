import React from "react";
import { Button } from "./ui/button";

const DesignTest = () => {
  return (
    <>
      <div className="p-10 brand-width mx-auto">
        <div className="flex gap-4 my-10">
          <Button>Hello World</Button>
          <Button variant={"outline"}>Hello World</Button>
          <Button variant={"secondary"}>Hello World</Button>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <h5>Lorem ipsum dolor sit amet.</h5>
        <h6>Lorem ipsum dolor sit amet.</h6>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, eos.
        </p>
        <p className="brand-overline">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </>
  );
};

export default DesignTest;
