const LOADED = 'technology/loaded';
const LOADING = 'technology/loading';
const ERROR = 'technology/error';

const URL = 'http://localhost:3000/api/posts/read/topic/';

const loadingAction = () => ({
  type: LOADING,
});

const errorAction = (error) => ({
  type: ERROR,
  payload: error,
});
const loadedAction = (data) => ({
  type: LOADED,
  payload: data,
});





const initialState = {
  data: [],
  loading: false,
  error: null,

};

export const fetchMissionData = (url) => (dispatch) => {
  dispatch(loadingAction());
    console.log("THIS URL", url);
  fetch(URL`/${url}`)
    .then((response) => response.json())
    .then((data) => {
      const blogPostsData = [];
      data.forEach((datum) => {
        blogPostsData.push({
          id: datum.id,
          title: datum.title,
          content: datum.content,
          mission_status: false,
        });
      });
      dispatch(loadedAction(blogPostsData));
    })
    .catch((error) => {
      dispatch(errorAction(error.message));
    });
};



const technologyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOADED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default technologyReducer;


