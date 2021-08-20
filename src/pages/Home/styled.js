import styled from 'styled-components';

export const homeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    border-radius: .25rem 0 0 .25rem;

    &: focus,
    &: active{
        outline: none;
        box-shadow: none; 
    }
`;
export const Button = styled.button`
    height: 1.75rem;
    border: 1px solid #000;
    border-radius: 0 .25rem .25rem 0;
    color: #fff;
    background: #000;

    &:hover{
        background: #ccc;
        border: none;
        color: #000;
    }
`;
export const errorMsg = styled.span`
    display: block;
    font-size: 0.56rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;
