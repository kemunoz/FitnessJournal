import createDataContext from './createDataContext';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                userid: action.userpayload.id,
                webtoken: action.userpayload.token,
                workouts: []
            }
        default:
            return state;
    }
}


const login = dispatch => {
    return async (username, password, callback) => {
        try {
            let response = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            let json = await response.json();
            let { message, payload, token } = json;
            switch (message) {
                case 'USER_NOT_FOUND':
                    callback(false, 'Error', message);
                case 'LOGGED_IN':
                    dispatch({ userpayload: { id: payload.id, username, token }, type: 'LOGIN' });
                    callback(true, null, null);
                default:
                    null;
            }
        } catch (error) {
            console.log(error);
        }
    }
};

export const { Context, Provider } = createDataContext(userReducer, { login }, {});
