import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
//Function from firebase used to sign in or out in the app
import { auth } from "../../firebase/firebase.utils";

import { HeaderContainer, OptionsContainer, OptionLink, LogoImg } from "./header.styles";

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <Link to="/">
      {/* <LogoImg /> */}
      LegalSarathi
    </Link>

    <Link to="/info">Explore laws</Link>

    <OptionsContainer>
      {currentUser ? ( //gives the user the option to sign out in case he/she is sign in already
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">
          SIGN IN / REGISTER
        </OptionLink>
      )}
      {/* <OptionLink to="/signin">
        CONTACT
      </OptionLink> */}
      {currentUser ? ( //if user is logged in, gives the option to access the enquiries page
        <OptionLink to="/mycases">
          ENQUIRIES
        </OptionLink>
      ) : null}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(Header);
