import React from 'react'
import { InfoSection, Pricing } from "../../components";

import { homeObjFour, homeObjOne, homeObjTree, homeObjTwo } from './Data'
const Home = () => {
    return (
      <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjTree} />
        <Pricing />
        <InfoSection {...homeObjFour} />
      </>
    );
}

export default Home
