import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { compose } from "redux";

import { selectIsEnquiriesLoaded } from "../../redux/handleData/handleData.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import EnquiriesPage from "./enquiries-page.component";


const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsEnquiriesLoaded(state) 
});


const EnquiriesPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(EnquiriesPage);

export default EnquiriesPageContainer;