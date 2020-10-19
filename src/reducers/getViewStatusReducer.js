const initialExchange = [];

const getViewStatusReducer = (state = initialExchange, action) => {
    if(action.type === "GET_VIEW_STATUS") {
        return action.viewed;
    }
    return state;
}

export default getViewStatusReducer;