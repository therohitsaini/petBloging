import styled, { keyframes } from "styled-components";


const Animation_ = keyframes`
from {
    opacity: 0.5;
  transform: translateX(-400);
}
to{
    opacity: 1;
  transform: translateX(0);
    
}
`;

export const Animation_Wrapper = styled.div`

height: 100%;
width: 100%;
animation: ${Animation_} 3s forwards ;

`;
