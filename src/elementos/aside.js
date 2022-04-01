import styled from 'styled-components';

const Menu = styled.div`
    width: 100%;
    height: 220px;
    background-color: #fff;
    margin-bottom: 30px;
`;
const Titulo = styled.div`
    padding: 15px 10px 10px 10px;
    font-weight: 600;
    text-align: center;
`;
const Lista = styled.ul`
    padding: 0px 10px 10px 10px;
    height: 125px;
    width: 140px;
    overflow: auto;
`;
const ListaLi = styled.li`
    color: #09A4DD;
    text-decoration: none;
    font-size: 14px;
    border-bottom: dashed 1px #000;
    padding: 5px 0px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        background-color: #f2f2f2;
    }
`;

export {Menu, Titulo, Lista, ListaLi}