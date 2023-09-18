import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import SelectSpecialization from "../select-option/select-option.component";
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles.jsx";
import { ButtonsBarContainer } from "../sign-in/sign-in.styles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTypeOfUser } from "../../redux/user/user.selectors";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TypeOfUser: "",
      license: "",
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      specialization: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault(); 
    const { displayName, email, password, confirmPassword, license, specialization } =
      this.state;
    const {TypeOfUser} = this.props;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try { 
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );  

      if (TypeOfUser === "Lawyer") { 
        await createUserProfileDocument(user, { displayName, license, specialization, TypeOfUser });
      } else { 
        await createUserProfileDocument(user, { displayName, TypeOfUser });
      }
      this.setState({
        specialization: "",
        license: "",
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Account registered successfuly");
    } catch (error) {

      alert("Sorry, something went wrong! " + error.message);
      console.error(error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCallBack = (callBack) => {
    this.setState({specialization: callBack})
  }

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      license,
    } = this.state;


    return (
      <SignUpContainer>
        <SignUpTitle> I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          {`${this.props.TypeOfUser}` === "Lawyer" ? ( //if user choose to register as a Lawyer, it must include a Professional License
            <div>
              <SelectSpecialization callBack={this.handleCallBack} />
              <FormInput
                type="text"
                name="license"
                value={license}
                onChange={this.handleChange}
                label="Professional License"
                required
              />
            </div>
          ) : null /* Otherwise don't need to render anything */}
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign up</CustomButton>
            {`${this.props.TypeOfUser}` === "Client" ? ( 
              <CustomButton
                type="button"
                onClick={signInWithGoogle}
                isGoogleSignIn
              >
                Sign up with Google
              </CustomButton>
            ) : null}
          </ButtonsBarContainer>
        </form>
      </SignUpContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  TypeOfUser: selectTypeOfUser,
});

export default connect(mapStateToProps)(SignUp);
