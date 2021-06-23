const initialState =

const changeNumber = (state = initialState  , action)=>{
    switch(action.type){
        
        case "SUBMIT" : return state + 1;

        default : return state;
    }
}
export default changeNumber;