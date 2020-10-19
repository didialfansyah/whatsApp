import axios from 'axios';

const getProfileAction = () => {
    return (dispatch) => {
        axios.get('https://5f698968dc0bff0016f4495a.mockapi.io/api/exmp1/profile')
        .then((response) => {
            return dispatch ({
                type : "GET_PROFILE_DATA",
                profile : response.data[0]
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default getProfileAction;