import createDataContext from './createDataContext';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                userid: action.payload.id,
                webtoken: null,
                workouts: []
            }
        default:
            return state;
    }
}


const login = dispatch => {
    return (username, password, callback) => {
        const payload = { username, password };
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => {
                switch (data.message) {
                    case 'USER_NOT_FOUND':
                        console.log(data.message);
                        callback();
                    case 'LOGGED_IN':
                        dispatch({ payload: { id: data.payload.id, username }, type: 'LOGIN' });
                        console.log(data.message);
                        callback();
                    default:
                        console.log(data.message);
                        callback()
                }
            });
    }
};

export const { Context, Provider } = createDataContext(userReducer, { login }, {});
