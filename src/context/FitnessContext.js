import createDataContext from './createDataContext';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                userid: action.userpayload.id,
                token: action.userpayload.token,
                workouts: []
            }
        case 'WORKOUT':
            return { ...state, workout: action.payload.workout }
        default:
            return state;
    }
}


const login = dispatch => {
    return async (username, password, callback) => {
        try {
            let response = await fetch('http://192.168.1.73:3000/user/login', {
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
                case 'USERNAME_OR_PASSWORD_INCORRECT':
                    callback(false, 'Error', message);
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

const getWorkouts = dispatch => {
    return async (id, token, callback) => {
        try {
            let response = await fetch(`http://localhost:3000/workout/${id}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).json();
            let { workouts } = response;
            let map = workouts.map((plan) => {
                return {
                    title: plan.title,
                    summary: plan.summary,
                    exercises: plan.exercises
                }
            });
            dispatch({ payload: { workout: map }, type: 'WORKOUT' });
            callback();
        } catch (error) {
            console.log(error);
        }
    }
}

export const { Context, Provider } = createDataContext(userReducer, { login, getWorkouts }, {});
