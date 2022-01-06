import React from "react";
import { InfoSection } from "../../components";

import {  homeObjTree,  } from "./Data";
const Home = () => {
  return (
    <>
      
      <InfoSection {...homeObjTree} />
    </>
  );
};

export default Home;
