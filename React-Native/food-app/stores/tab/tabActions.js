export const SET_SLECTED_TAB = "SET_SELECTED_TAB";

export const setSelectedTabSuccess = (selectedTab) => ({
  type: SET_SLECTED_TAB,
  payload: { selectedTab },
});

export function setSelectedTab(selectedTab) {
  return (dispatch) => {
    dispatch(setSelectedTabSuccess(selectedTab));
  };
}
