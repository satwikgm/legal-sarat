import styled /*css*/ from "styled-components";
import { Link } from "react-router-dom"; //to use costum components, just import it and put as (prop)


import { ReactComponent as Logo } from "../../assets/YL.svg";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  //any child inside this component is separeted with as much space as possible
  justify-content: space-between;
  //pushes a margin 25px down to anything below the header
  margin-bottom: 25px;
`;

export const LogoImg = styled(Logo)`
  height: auto;
  width: 90px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  //flex-end means the most right side of the component
  justify-content: flex-end;
`;

/*
export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
*/

export const OptionLink = styled(Link)`
  //a little padding to leave a space between the options
  padding: 10px 15px;
  cursor: pointer;
`;
