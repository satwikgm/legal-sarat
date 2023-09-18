import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCollections, selectCollectionsAll } from "../../redux/handleData/handleData.selectors";
import {
  Header1,
  Header2,
} from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.styles";
import { HomePageContainer } from "../../pages/homepage/homepage.styles";

import { Grid } from "@material-ui/core";
import Cards from "../cards/cards.components";
import Directory from "../directory/directory.component";
import { SearchBox } from "../search-box/search-box.components";

class SearchEnquiry extends React.Component {
  state = {
    enquiries: [],
    title: "",
    searchField: "",
  };

  componentDidMount(){
      const {enquiries, enquiriesAll} = this.props;
      var maximumLength = 0;
      var maximumLength2 = 0;
      var temporaryArray = [];
      while (enquiries.length > maximumLength) { 
        temporaryArray[maximumLength] = enquiries[maximumLength]
        maximumLength++;
      }
      while (enquiriesAll.length > maximumLength2){ //keep populating the temporary array from where it stopped on the last loop
        temporaryArray[maximumLength] = enquiriesAll[maximumLength2];
        maximumLength++;
        maximumLength2++;
      }
      this.setState({enquiries: temporaryArray});  
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { currentUser} = this.props;
    const {searchField, enquiries } = this.state;
    const filteredEnquiries = enquiries.filter((enquiry) =>
      enquiry.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <HomePageContainer>
        <Header1> Solve a Client's enquiry </Header1>
        <Directory whatSteps="lawyer" /> {/* "whatSteps" was a way to inform Redux that I want the images related to Lawyer */}
        <Header2> Enquiries tagged with your specialization </Header2>
        <SearchBox
          placeholder="Search by title"
          handleChange={this.handleChange}
        />
        <Grid container spacing={2} justifyContent="center">
          {filteredEnquiries.length ? ( //if the cartItems array has a length greater than 0, show the items
            filteredEnquiries.map((enquiry) => (
              <Grid item key={enquiry.id}>
                <Cards
                  title={enquiry.title}
                  specialization={enquiry.specialization}
                  contactInfo={enquiry.currentUser.email}
                  enquiry={enquiry.enquiry}
                />
              </Grid>
            ))
          ) : (
            <p>
              There is no enquiry tagged with "
              {currentUser.specialization.toUpperCase()}" at the moment
            </p>
          )}
        </Grid>
      </HomePageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  enquiries: selectCollections,
  enquiriesAll: selectCollectionsAll,
});

export default connect(mapStateToProps)(SearchEnquiry);
