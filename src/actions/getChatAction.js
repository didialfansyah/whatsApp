import axios from 'axios';

const getChatAction = () => {
    return (dispatch) => {
        axios.get('https://5f698968dc0bff0016f4495a.mockapi.io/api/exmp1/chattings')
        .then((response) => {
            return dispatch ({
                type : "GET_CHAT_DATA",
                chat : response.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default getChatAction;