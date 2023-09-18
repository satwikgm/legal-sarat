import { createSelector } from "reselect";

const selectHandleData = (state) => state.data;
export const selectCollections = createSelector(
    [selectHandleData],
    data => data.enquiries
  );
export const selectCollectionsAll = createSelector(
  [selectHandleData],
  data => data.enquiriesAll
);

export const selectIsEnquiriesFetching = createSelector(
  [selectHandleData],
  data => data.isFetching
);

export const selectIsEnquiriesLoaded = createSelector(
  [selectHandleData],
  data => !!data.enquiries 
)
