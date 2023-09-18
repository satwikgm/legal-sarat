import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectDirectoryClient,
  selectDirectoryLawyer,
} from "../../redux/directory/directory.selectors";
import { DirectoryMenuContainer } from "./directory.styles";

import MenuItem from "../menu-item/menu-item.component";
const Directory = ({ clientSteps, lawyerSteps, whatSteps }) => (
  <DirectoryMenuContainer>
    {`${whatSteps}` === "lawyer" 
      ? lawyerSteps.map(({ title, imageUrl, id, linkUrl, Subtitle }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            Subtitle={Subtitle}
            linkUrl={linkUrl}
          />
        ))
      : 
        clientSteps.map(({ title, imageUrl, id, linkUrl, Subtitle }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            Subtitle={Subtitle}
            linkUrl={linkUrl}
          />
        ))
      }
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  clientSteps: selectDirectoryClient,
  lawyerSteps: selectDirectoryLawyer,
});

export default connect(mapStateToProps)(Directory);
