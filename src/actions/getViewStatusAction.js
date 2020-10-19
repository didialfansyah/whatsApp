import axios from 'axios';

const getViewStatusAction = () => {
    return (dispatch) => {
        axios.get('https://5f698968dc0bff0016f4495a.mockapi.io/api/exmp1/status?status=0')
        .then((response) => {
            return dispatch ({
                type : "GET_VIEW_STATUS",
                viewed : response.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default getViewStatusAction;