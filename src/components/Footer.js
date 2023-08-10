import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

export const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Me</Heading>
            <FooterLink href="#">Adin Custovic</FooterLink>
            <FooterLink href="#">adincustovic121@gmail.com</FooterLink>
            <FooterLink href="#">+387 62 663 082</FooterLink>
            <FooterLink href="#">Sarajevo</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink
              href="https://www.linkedin.com/in/adin-čustović-86ab75272/"
              target="blank"
            >
              <i className="fab fa-linkedin-f">
                <span style={{ marginLeft: "10px" }}>Linkedin</span>
              </i>
            </FooterLink>
            <FooterLink href="https://github.com/Adin222" target="blank">
              <i className="fab fa-github">
                <span style={{ marginLeft: "10px" }}>GitHub</span>
              </i>
            </FooterLink>
            <FooterLink
              href="https://www.instagram.com/adin.custovic_7/?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=IwAR1XVAHo6O3mogitStQnK8lNmKTNF4Z6BekpQfscZPahKX7kOY_WaKGvMEg"
              target="blank"
            >
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
