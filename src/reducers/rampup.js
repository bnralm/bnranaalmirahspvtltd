const rampupReducerDefaultState = {
    isRampupDone: false,
    isRampupSkip: false,
    isRamupRequested: false,
    isRamupActivated: false
};

const rampupReducer = (state = rampupReducerDefaultState, action) => {
 switch(action.type){
   case 'IS_RAMUP_DONE':
     return {
        ...state,
       ...action.isRampupDone
     };

   case 'IS_RAMUP_SKIP':
     return {
       ...state,
       ...action.isRampupSkip
     };

   case 'IS_RAMUP_REQUESTED':
     return {
       ...state,
       ...action.isRampupRequested
     };

   case 'IS_RAMUP_ACTIVATED':
     return {
       ...state,
       ...action.isRampupActivated
     }; 

   default:
     return state;
  }
}

export default rampupReducer