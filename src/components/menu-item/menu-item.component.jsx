import React from "react";
import { withRouter } from "react-router-dom"; //by using it, we will have access to history

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from "./menu-item.styles";

const MenuItem = ({title, imageUrl, Subtitle,  history, linkUrl}) => ( 
  

  <MenuItemContainer  
  onClick={() => history.push(`${linkUrl}`)}> 
  <BackgroundImageContainer className="background-image" imageUrl= {imageUrl} />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle> 
      <ContentSubtitle>{`${Subtitle}`}</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>

);
export default withRouter(MenuItem);