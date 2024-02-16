const initialState = {
  playlist: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
