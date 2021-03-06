import styled from "styled-components";

export const Box = styled.div`
  padding: 34px 60px;
  background-color: #ececec;
  position: absolute;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  display: flex;
  font-size: 18px;
  color: black;
`;
