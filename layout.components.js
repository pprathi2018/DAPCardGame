import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gold;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  background-color: blue;
  font-size: 24px;
  font-weight: bold;
  color: gold;
  padding: 16px 0;
`;

const TextBox = styled.div`
  background-color: blue;
  color: gold;
  width: 250px;
  height: 125px;
  position: absolute;
  bottom: 0;
  text-align: middle;
  font-size: 52px;
`;

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

export { Header, Layout, TextBox, CardLayout };
