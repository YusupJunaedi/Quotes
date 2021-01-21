import actionType from "../Actions/actionType";

let initialState = {
  quoteAPI: '',
  favorite: [''],
  myQuote: [''],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const AppReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case actionType.getQuote + "_PENDING":
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.getQuote + "_REJECTED":
      return {
        ...prevState,
        isRejected: true,
        isPending: false,
      };
    case actionType.getQuote + "_FULFILLED":
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        isRejected: false,
        quoteAPI: payload.data.quote
      };
      case actionType.addFavoriteQuote:
        let data = []
        if(prevState.favorite.includes(payload)){
            data = [...prevState.favorite]
        }else{
           data = [...prevState.favorite, payload]
        }
      return {
        ...prevState,
        favorite: data
      };
      case actionType.addMyQuote:
        let dataMyQuote = []
        if(prevState.myQuote.includes(payload)){
            dataMyQuote = [...prevState.myQuote]
        }else{
           dataMyQuote = [...prevState.myQuote, payload]
        }
      return {
        ...prevState,
        myQuote: dataMyQuote
      };
    default:
      return prevState;
  }
};

export default AppReducer;
