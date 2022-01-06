import React from "react";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  PricingCardCost,
  PricingCardFeature,
  PricingCardFeatures,
  PricingCardIcon,
  PricingCardInfo,
  PricingCardLength,
  PricingCardPlan,
  PricingContainer,
  PricingHeading,
  PricingSection,
  PricingWrapper,
  PrincingCard,
} from "./Pricing.elements";
import { GiRock } from "react-icons/gi";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Service</PricingHeading>
          <PricingContainer>
            <PrincingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>100 Budjet</PricingCardFeature>
                  <PricingCardFeature>
                    Retargeting analytics{" "}
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PrincingCard>

            <PrincingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>100 Budjet</PricingCardFeature>
                  <PricingCardFeature>
                    Retargeting analytics{" "}
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PrincingCard>

            <PrincingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>100 Budjet</PricingCardFeature>
                  <PricingCardFeature>
                    Retargeting analytics{" "}
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PrincingCard>

            
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
