// The default product state.
let productState = {
  data: [],
  searchKey: "",
  isLoading: false,
  isFinish: false,
  page: 0,
  limit: 10, 
  error: null
};

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case "RESET_ALL_DATA":
      return {
        ...productState
      };
    case "LOADING_PRODUCT":
      return {
        ...state,
        isLoading: true
      };
    case "RESET_PRODUCT_DATA":
      return {
        ...state,
        data: [],
        page: 0,
        isLoading: false,
        isFinish: false
      };
    case "LOAD_PRODUCT_SUCCESSFULLY":
      if (action.page > 0 && action.data.length == 0) {
        return {
          ...state,
          isLoading: false,
          isFinish: true
        };
      }
      let currentPage = ++action.page;
      let productList = [...state.data, ...action.data];
      return {
        ...state,
        data: productList,
        isLoading: false,
        page: currentPage,
        searchKey: action.searchKey
      };
    case "LOAD_PRODUCT_FAILURE":
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
  }
  return state;
};

export default productReducer;
