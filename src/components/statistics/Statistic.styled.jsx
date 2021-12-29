import styled from 'styled-components';

export const ContainerStatistic = styled.section`
 
 margin-bottom: 30px;
 width: 300px;
 text-align: center;
box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 4px 4px 4px 4px;
    background-color: gold;
    
`

export const Title = styled.h2`
font-weight: 700;
`

export const StatisList = styled.ul`
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: flex-start;

/* padding-left: 0; */
padding: 10px 20px;
`

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    width: 150px;
    background-color: ${props => getRandomHexColor()};
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}