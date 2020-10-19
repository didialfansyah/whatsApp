const initialExchange = [];

const getNewStatusReducer = (state = initialExchange, action) => {
    if(action.type === "GET_NEW_STATUS") {
        return action.status;
    }
    return state;
}

export default getNewStatusReducer;