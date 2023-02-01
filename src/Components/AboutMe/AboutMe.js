import React from "react";
import styled from "styled-components";
import media from "../../media";
import {
  SectionWrapper,
  Title,
  Header,
  TitleNumber,
} from "../WorkSection/WorkSection";
import profilepic from "../../assets/profilepic.png";

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
  flex-direction: row;
  justify-content: space-between;
  `};
`;

const AboutTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.tablet`
    width: 55%;
  `};
`;

const Text = styled.p`
  font-size: 1.25rem;
  margin: 0 0 1rem;
`;

const ProfilePicWrap = styled.div`
  width: 100%;
  display: flex;
  ${media.tablet`
    width: 40%;
  `};
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  --color: ${({ theme }) => theme.primaryHover};
  --border: 5px;
  --offset: 10px;
  --gap: 5px;

  --_c: var(--color) var(--border), #0000 0 calc(100% - var(--border)),
    var(--color) 0;
  --_o: calc(3 * var(--offset));
  padding: calc(var(--gap) + var(--border))
    calc(var(--gap) + var(--border) + var(--offset))
    calc(var(--gap) + var(--border) + var(--offset))
    calc(var(--gap) + var(--border));
  background: linear-gradient(var(--_c)) var(--_o) var(--_o),
    linear-gradient(90deg, var(--_c)) var(--_o) var(--_o);
  background-size: calc(100% - var(--_o)) calc(100% - var(--_o));
  background-repeat: no-repeat;
  transition: 0.5s;
  &:hover {
    background-position: 0px 0px;
    background-size: calc(100% - var(--offset)) calc(100% - var(--offset));
    filter: grayscale(0);
  }
  ${media.tablet`
    width: 300px;
    height: 300px;
  `}
`;

const AboutMe = () => {
  return (
    <SectionWrapper>
      <Header>
        <Title>
          <TitleNumber>01.</TitleNumber>About Me
        </Title>
      </Header>
      <AboutContent>
        <AboutTextWrap>
          <Text>
            Hello! I'm Andrew Spivey, a Developer based in Oakland, CA with the
            drive and expertise to bring value to your company.
          </Text>
          <Text>
            My passion for software development blossomed while completing{" "}
            <a
              style={{ color: "#66FCF1", textDecoration: "none" }}
              href={
                "https://generalassemb.ly/education/software-engineering-immersive?ga_campaign=immersive-remote&ga_variation=sei-tile"
              }
              target="_blank"
            >
              General Assembly's Software Engineering Immersive Bootcamp
            </a>{" "}
            in 2020. There, I developed a comprehensive foundation in
            programming, learned the fundamental skills to build full-stack web
            applications on the job, and most importantly, fell in love with
            creating software.
          </Text>
          <Text>
            Since then, I've done work for/with{" "}
            <a
              style={{ color: "#66FCF1", textDecoration: "none" }}
              href={"https://royalambulance.com"}
              target="_blank"
            >
              Royal Ambulance
            </a>
            ,{" "}
            <a
              style={{ color: "#66FCF1", textDecoration: "none" }}
              href={"https://eastbayrecorders.com"}
              target="_blank"
            >
              East Bay Recorders
            </a>
            , and most recently,{" "}
            <a
              style={{ color: "#66FCF1", textDecoration: "none" }}
              href={
                "https://bitwiseindustries.com/services/custom-development/"
              }
              target="_blank"
            >
              Bitwise Industries
            </a>
            . At Bitwise, I worked across the stack of client projects as a
            valued asset of a professional development team.
          </Text>
          <Text>
            With a background as a former college Quarterback and EMT, I bring a
            strong work ethic and a passion for making a difference to my work
            as a developer. I'm always eager to take on new challenges, expand
            my skills, and collaborate with others to build innovative
            solutions.
          </Text>
        </AboutTextWrap>
        <ProfilePicWrap>
          <StyledImage src={profilepic} alt="profile_pic" />
        </ProfilePicWrap>
      </AboutContent>
    </SectionWrapper>
  );
};

export default AboutMe;
