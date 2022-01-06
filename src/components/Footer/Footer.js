import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the last news and trends
        </FooterSubHeading>

        <FooterSubText>You can unsubscribe at any time.</FooterSubText>

        <Form>
          <FormInput name="email" placeholder="your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle> About us</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="sign-up">Testimonials</FooterLink>
            <FooterLink to="sign-up">Carers</FooterLink>
            <FooterLink to="sign-up">Investors</FooterLink>
            <FooterLink to="sign-up">Terms of service</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="sign-up">Testimonials</FooterLink>
            <FooterLink to="sign-up">Carers</FooterLink>
            <FooterLink to="sign-up">Investors</FooterLink>
            <FooterLink to="sign-up">Terms of service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Videos </FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="sign-up">Testimonials</FooterLink>
            <FooterLink to="sign-up">Carers</FooterLink>
            <FooterLink to="sign-up">Investors</FooterLink>
            <FooterLink to="sign-up">Terms of service</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Social media</FooterLinkTitle>
            <FooterLink to="sign-up">How it works</FooterLink>
            <FooterLink to="sign-up">Testimonials</FooterLink>
            <FooterLink to="sign-up">Carers</FooterLink>
            <FooterLink to="sign-up">Investors</FooterLink>
            <FooterLink to="sign-up">Terms of service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="">
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
