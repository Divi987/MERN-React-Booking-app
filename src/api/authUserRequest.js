import cookie from 'react-cookies';
import { addAppointments, removeAppointments } from '../redux/actions';
import store from '../redux/store';
import authAxios from './request';

export const loggedIn = async (username, password) => {
  const response = await authAxios().post('/users/login', { userName: username, password: password  })
  .then((response) => response.data).catch((error) => error);
  return response;
};

export const signedUp = async (username, password) => {
  const response = await authAxios().post('/users/new', {  userName: username, password: password  })
    .then((response) => response.data).catch((error) => error);
  return response;
};

export const redirectToHome = async (userId) => {
  const response = await authAxios(cookie.load('token')).post('/users/login/auto_login', { _id: userId  })
    .then((response) => response.data).catch((error) => error);
    return response;
};

export const bookAppointment = async (date, id, userId, branch) => {
  store.dispatch(removeAppointments());
  const response = await authAxios(cookie.load('token')).post('/appointment', {
    appointment: {
      date, branch, item_id: id, user_id: userId,
    },
  })
    .then((response) => store.dispatch(addAppointments(response.data))).catch((error) => error);
  return response;
};
