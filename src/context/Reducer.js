export const Reducer = (state, action) => {
  switch (action.type) {
    //to add events when clicking the card
    case "ADD":
      return { ...state, selected: [...state.selected, action.payload] };
    //to remove events when clicking the remove button
    case "REMOVE":
      return {
        ...state,
        selected: state.selected.filter((x) => x.id !== action.payload.id),
      };
    //filter check box from the events component
    case "BY_PAST_EVENTS":
      return { ...state, byPastEvents: !state.byPastEvents };
    default:
      return state;
  }
};
