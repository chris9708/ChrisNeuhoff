import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Chris Neuhoff</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a cybersecurity researcher</HighlightAlt> based in South Africa.
      </p>
      <p>
        My focus is on fortifying digital landscapes and <br />
        developing secure web applications to combat real-world threats.
      </p>
    </AboutWrapper>
  );
};

export default About;
