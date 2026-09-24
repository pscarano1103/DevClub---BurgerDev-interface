import { createGlobalStyle } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

const globalStyles = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: ${(props) => props.theme.poppinsFont};
        font-weight: 400;
    }

    button, a{
        cursor: pointer;
    }
`;

export default globalStyles;
