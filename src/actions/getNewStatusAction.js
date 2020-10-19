import axios from 'axios';

const getNewStatusAction = () => {
    return (dispatch) => {
        axios.get('https://5f698968dc0bff0016f4495a.mockapi.io/api/exmp1/status?status=1')
        .then((response) => {
            return dispatch ({
                type : "GET_NEW_STATUS",
                status : response.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default getNewStatusAction;