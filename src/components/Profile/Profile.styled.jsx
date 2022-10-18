import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
padding-top: 60px;
padding-bottom:100px;
margin:auto;
justify-content:center;
align-items:center;
text-align:center;
`;

export const DescriptionContainer = styled.div`
background-color: ${props => props.theme.colors.white};
padding-top: 60px;
width:500px;
margin: 0 auto;
text-align:center;
justify-content: center;
align-items:center;
box-shadow: 4px 4px 4px 8px #757575;
`;

export const AvatarImg = styled.img`
background-color: ${props => props.theme.colors.accent};
border-radius: ${props => props.theme.radii.round};
width: 50%;
`;

export const Name = styled.p`
margin:0;
padding-top:25px;
font-size: ${props => props.theme.fontSizes.xl}px;
font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Tag = styled.p`
margin:0;
padding-top:20px;
font-size: ${props => props.theme.fontSizes.l}px;
`;

export const Location = styled.p`
margin:0;
padding-top:20px;
padding-bottom:50px;
font-size: ${props => props.theme.fontSizes.l}px;
`;

export const ListStats = styled.ul`
background-color: ${props => props.theme.colors.backgroundStats};
list-style: none;
padding:0 ;
margin: 0 auto;
width:500px;
justify-content: center;
display:grid;
 grid-template-columns: 1fr 1fr 1fr;
 box-shadow: 4px 4px 4px 8px #757575;
`;

export const ItemStats = styled.li`
padding-top: 15px;
padding-bottom: 15px;
display:grid;
grid-template-columns: (2);
grid-auto-rows: minmax(30px,auto);
box-shadow: 2px 2px 0px #757575
`;

export const Label = styled.span`
font-size: ${props => props.theme.fontSizes.m}px;
font-weight: 400;
`;

export const Quantity = styled.span`
font-size: 20px;
font-weight: 900;
border: 1px solid shadow 2px 2px 0px #757575
`;






