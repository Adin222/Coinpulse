import styled from "styled-components";

export const Box = styled.div`
  padding: 60px 60px;
  background: rgb(65, 70, 70);
  background: #041235;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -5px 8px rgba(0, 0, 0, 0.4);
  margin-top: 100px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  @media (max-width: 770px) {
    margin-top: 400px;
  }
  @media (max-width: 1100px) {
    margin-top: 400px;
  }
  @media (max-width: 660px) {
    margin-top: 1000px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: grey;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
