import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import EnquiryComponent from "../../components/make-enquiry-Client/make-enquiry-Client.component";
import SearchEnquiry from "../../components/search-enquiries-Lawyer/search-enquiries-Lawyer.component";

class EnquiriesPage extends React.Component {

  render() {
    const { currentUser} = this.props;
    return (
      <div>
        {`${currentUser.TypeOfUser}` === "Client" ? ( 
            <EnquiryComponent />
        ) : (
          <SearchEnquiry/>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(EnquiriesPage);
