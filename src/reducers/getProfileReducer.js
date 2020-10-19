const initialExchange = [];

const getProfileReducer = (state = initialExchange, action) => {
    if(action.type === "GET_PROFILE_DATA") {
        return action.profile;
    }
    return state;
}

export default getProfileReducer;