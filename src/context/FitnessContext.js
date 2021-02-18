import createDataContext from './createDataContext';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                userid: action.userpayload.id,
                webtoken: null,
                workouts: []
            }
        default:
            return state;
    }
}


const login = dispatch => {
    return async (username, password) => {
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
            let { message, payload } = json;
            console.log(message);
            console.log(payload);
            switch (message) {
                case 'USER_NOT_FOUND':
                    null;
                case 'LOGGED_IN':
                    dispatch({ userpayload: { id: payload.id, username }, type: 'LOGIN' });
                default:
                    null;
            }
        } catch (error) {
            console.log(error);
        }
    }
};

export const { Context, Provider } = createDataContext(userReducer, { login }, {});
