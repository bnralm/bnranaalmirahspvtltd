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
      isRamupOpen: action.isRamupOpen,
      isRamupClosed: action.isRamupClosed
    }
  
  case actionType.CLOSE_RAMPUP_GALLARY: 
    return {
      ...state,
      isRamupClosed: action.isRamupClosed,
      isRamupOpen: action.isRamupOpen
    }  

   default:
     return state;
  }
}

export default rampupReducer