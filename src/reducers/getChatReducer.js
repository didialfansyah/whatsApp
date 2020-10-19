const initialExchange = [];

const getChatReducer = (state = initialExchange, action) => {
    if(action.type === "GET_CHAT_DATA") {
        return action.chat;
    }
    return state;
}

export default getChatReducer;