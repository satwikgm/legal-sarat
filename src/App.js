import React from "react";

import { Switch, Route, Redirect } from "react-router-dom"; 

import { connect } from "react-redux"; 
import { createStructuredSelector } from "reselect"; 


import { GlobalStyle } from "./global.styles"; 

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/Footer/Footer";
import EnquiriesPageContainer from "./pages/enquiries-page/enquiries-page.container";
import EnquiriesPage from "./pages/enquiries-page/enquiries-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Info from './pages/info-page/info'

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser, setTypeOfUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import {
  fetchEnquiriesStartAsync, //when the user logs in, it fetches the enquiries related to that user
  setEnquiriesToNull, //when the user logs out, it sets the state of the enquiries back to null to avoid data leaking
} from "./redux/handleData/handleData.actions";
import recordings from "./pages/recordings/recordings";
import Quiz from "./components/Quiz/Quiz";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {
      setCurrentUser,
      setTypeOfUser,
      fetchEnquiriesStartAsync,
      setEnquiriesToNull,
    } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); //if the user is not registered, create a new userRef doc
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          setTypeOfUser({
            TypeOfUser: snapShot.data().TypeOfUser,
          });

          if (snapShot.data().TypeOfUser === "Lawyer") {
            fetchEnquiriesStartAsync(snapShot.data().specialization);
          }
        });
      } else {
        setCurrentUser(userAuth);
        setEnquiriesToNull(); 
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/info" component={Info}/>
          <Route exact path="/recordings" component={recordings}/>
          <Route exact path="/games" component={Quiz}/>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" /> 
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route
            exact
            path="/mycases"
            render={() =>
              !this.props.currentUser ? (
                <Redirect to="/signin" /> 
              ) : 
              this.props.currentUser.TypeOfUser === "Lawyer" ? (
                <EnquiriesPageContainer /> 
              ) : (
                <EnquiriesPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
} 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setTypeOfUser: (TypeOfUser) => dispatch(setTypeOfUser(TypeOfUser)),
  fetchEnquiriesStartAsync: (specialization) =>
    dispatch(fetchEnquiriesStartAsync(specialization)),
  setEnquiriesToNull: () => dispatch(setEnquiriesToNull()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
