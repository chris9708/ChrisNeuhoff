import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc (Hons) in Computer science",
    desc: "North-West University | 2022 ~ 2023",
  },
  {
    title: "B.Sc in Computer science",
    desc: "North-West University | 2019 - 2021",
  },
  {
    title: "Certified Ethical Hacker Certification",
    desc: "C|EH | 2017",
  },
];

export default Education;
