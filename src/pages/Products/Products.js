import React from "react";
import { InfoSection, Pricing } from "../../components";

import { homeObjFour, homeObjTree, homeObjTwo } from "./Data";
const Home = () => {
  return (
    <>
    
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjTree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
