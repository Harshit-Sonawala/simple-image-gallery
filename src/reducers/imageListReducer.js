import { IMAGE_LIST_FROM_API_CHANGED } from "../actions/ActionTypes";

var initialState = {
  image_list: ['test'],
  favorite_list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_LIST_FROM_API_CHANGED:
      return { ...state, images_list: action.payload };
    default:
      return state;
  }
}