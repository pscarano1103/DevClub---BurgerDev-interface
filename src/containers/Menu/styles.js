import styled from "styled-components";
import BannerHamburger from '../../assets/banner-cardapio.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 480px;
    width: 100%;

    position: relative;

    background: url('${BannerHamburger}') no-repeat;
    background-color: #1f1f1f;
    background-size: cover;
    background-position: center;

    h1{
        font-family: 'Road Rage', sans-serif ;
        font-size: 80px;
        line-height: 65px;
        color: #fff;
        position: absolute;
        right: 20%;
        top: 30%;

        span{
            display: block;
            color: #fff;
            font-size: 20px;
            font-weight: 400;
        }
    }
`;

export const CategoriesMenu = styled.div``;

export const ProductsContainer = styled.div``;

