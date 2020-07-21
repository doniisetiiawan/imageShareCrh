/* eslint-disable no-case-declarations */
const initialState = {
  images: null,
  userImages: null,
  error: null,
  user: {
    id: 78261,
    name: 'Sharer1',
    pic:
      'https://cdn.pixabay.com/photo/2015/07/20/12/53/man-852762_960_720.jpg',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return {
        ...state,
        images: [],
        fetchingImages: true,
        error: null,
      };
    case 'FETCH_IMAGES_SUCCESS':
      return {
        ...state,
        fetchingImages: false,
        images: action.images,
        error: null,
      };
    case 'FETCH_IMAGES_ERROR':
      return {
        ...state,
        fetchingImages: false,
        images: null,
        error: action.error,
      };
    case 'FETCH_USER_IMAGES':
      return {
        ...state,
        userImages: [],
        fetchingUserImages: true,
        error: null,
      };
    case 'FETCH_USER_IMAGES_SUCCESS':
      return {
        ...state,
        fetchingUserImages: false,
        userImages: action.images,
        error: null,
      };
    case 'FETCH_USER_IMAGES_ERROR':
      return {
        ...state,
        fetchingUserImages: false,
        userImages: null,
        error: action.error,
      };
    case 'ADD_IMAGE':
      return {
        ...state,
        addingImage: true,
        error: null,
      };
    case 'ADD_IMAGE_SUCCESS':
      const image = {
        id: Math.floor(Math.random() * 99999999),
        src: action.imageSrc,
        user: state.user,
      };
      return {
        ...state,
        addingImage: false,
        images: [image].concat(state.images),
        userImages: [image].concat(state.images),
        error: null,
      };
    case 'ADD_IMAGE_ERROR':
      return {
        ...state,
        addingImage: false,
        error: action.error,
      };
    default:
      return state;
  }
}
