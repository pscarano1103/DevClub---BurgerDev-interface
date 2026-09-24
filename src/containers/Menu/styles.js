import styled from 'styled-components';
import BannerHamburger from '../../assets/banner-cardapio.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${Background}');
  background-size: cover;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;
  width: 100%;

  position: relative;

  background: url('${BannerHamburger}') no-repeat;
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;
  background-position: center;

  h1 {
    font-family: ${(props) => props.theme.roadRageFont};
    font-size: 80px;
    line-height: 65px;
    color: ${(props) => props.theme.white};
    position: absolute;
    right: 20%;
    top: 30%;

    span {
      display: block;
      color: ${(props) => props.theme.white};
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.$isActiveCatergory
      ? (props) => props.theme.purple
      : (props) => props.theme.darkGray};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveCatergory && `3px solid ${(props) => props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;

export const BackButtton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${(props) => props.theme.darkGray};
  text-transform: uppercase;
  margin-top: 10px;

  &:hover {
    color: ${(props) => props.theme.purple};
  }
`;
