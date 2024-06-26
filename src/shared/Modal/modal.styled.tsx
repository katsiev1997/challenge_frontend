import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
    padding: 0 20px;
`;

export const Window = styled.div`
    background-color: white;
    border-radius: 20px;
    position: relative;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100% - 40px;
`;
