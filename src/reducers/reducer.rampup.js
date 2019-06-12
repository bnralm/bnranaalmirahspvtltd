import * as actionType from './../constants/constant.action';

const rampupReducerDefaultState = {
    isRamupOpen: false,
    isRamupClosed: false
};

const rampupReducer = (state = rampupReducerDefaultState, action) => {
 switch(action.type){
  case  actionType.REQUEST_RAMPUP_GALLARY: 
    return {
      ...state,
      isRamupOpen: true,
      isRamupClosed: false
    }
  
  case actionType.CLOSE_RAMPUP_GALLARY: 
    return {
      ...state,
      isRamupClosed: true,
      isRamupOpen: false
    }  

   default:
     return state;
  }
}

export default rampupReducer