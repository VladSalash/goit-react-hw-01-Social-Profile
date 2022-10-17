import styled from '@emotion/styled'

export const FrList = styled.ul`
padding:0;
padding:50px 0 50px 0;
list-style: none;
width:350px;
/* background-color:#f2f4f7; */
display:grid;
/* grid-auto-rows: minmax(50px,auto); */
/* grid-template-columns: 1fr  ; */
grid-gap: 1em;
`;

export const Item = styled.li`
display:grid;
grid-template-columns: 50px  100px 100px;
grid-template-rows: 100px;
/* grid-auto-rows: minmax(30px,auto); */
background-color:#f2f4f7;
box-shadow: 4px 4px 4px 4px #757575;
border-radius: 5px 5px 5px 5px;

`;

export const Status = styled.span`
margin:auto ;
width:20px;
height:20px;
border-radius: 10px 10px 10px 10px;

`;

export const AvatarImg = styled.img`
margin:auto ;
width:80px;

`;

export const Name = styled.p`
margin:auto ;
font-size: 25px;
font-weight: 500;
`;

