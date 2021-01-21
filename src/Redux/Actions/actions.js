import actionType from "./actionType";
import {getQuote} from '../../Utils/Api'
  
  export const getQuoteCreator = () => {
    return {
      type: actionType.getQuote,
      payload: getQuote()
    };
  };

  export const addFavoriteCreator = (data) => {
    return {
      type: actionType.addFavoriteQuote,
      payload: data
    };
  };

  export const addMyQuoteCreator = (data) => {
    return {
      type: actionType.addMyQuote,
      payload: data
    };
  };  