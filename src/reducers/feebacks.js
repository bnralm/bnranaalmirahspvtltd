//Feedback Reducers

const feedbacksReducerDefaultState = [];

export default (state = feedbacksReducerDefaultState, action) => {
 switch(action.type){
   case 'ADD_FEEDBACK':
     // return state.concat(action.feeback);
     return [
       ...state,
       action.feeback
     ];
   case 'REMOVE_FEEDBACK':
     return state.filter( ({id}) => {
         console.log('==>', id, ' actid ==> ', action.id);
         
         return id !== action.id;
       });
     
   case 'EDIT_FEEDBACK':
       return state.map( (feedback) => {
         if(feedback.id == action.id){
           return {
             ...feedback,
             ...action.updates
           }
         }
         else {
           return state;
         }
       } )
   default:
     return state;
 }
}
