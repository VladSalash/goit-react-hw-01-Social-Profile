import styled from '@emotion/styled'



export const StnStatistics = styled.section`
background-color: ${props => props.theme.colors.backgroundStnStatistics};
display:grid;
grid-auto-rows: minmax(50px,auto);
box-shadow: 4px 4px 4px 8px #757575;
`;

export const TitleHeader = styled.h2`
margin:0;
padding: 20px 0 20px 0 ;
display:grid;
text-align:center;
`;

export const StatList = styled.ul`
margin:0;
padding:0;
list-style:none;
width: 500px;
display:grid;
grid-template-columns:  1fr 1fr 1fr 1fr 1fr ;
text-align:center;
`;

export const Item = styled.li`

display:grid;
grid-template-columns: (2);
grid-auto-rows: minmax(30px,auto);
box-shadow: 4px 4px 4px 4px #757575;
`;

export const Label = styled.span`
font-size: 16px;
color: #f6f6f6;
font-weight: 400;
`;

export const Percentage = styled.span`
font-size: 25px;
color: #f6f6f6;
font-weight: 900;
`;

