import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pagebackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;
const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pagebackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SplashScree = (props) => {
  const changeTheme = () => {
    if (props.theme === "dark") {
      props.setTheme("light");
    } else {
      props.setTheme("light");
    }
  };
  const icons =
    props.theme === "dark" ? <CgSun size={40} /> : <HiMoon size={40} />;
  return (
    <Page>
      <Container>
        <Toggle onClick={changeTheme}>{icons}</Toggle>
      </Container>
    </Page>
  );
};
