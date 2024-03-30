import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import SalonItemList from '../container/SalonItemList';
import Login from '../container/Login';
import SignUp from '../container/SignUp';
import NavBar from './NavBar';
import SalonDetails from '../container/SalonDetails';
import AppointmentLists from '../container/AppointmentLists';

const Routess = () => (
  <BrowserRouter>
    <div className="Routes__Nav">
      <NavBar />
    </div>
    <div className="Routes__Main">
      <Routes>
        <Route  path="/" element={< SalonItemList />} />
        <Route  path="/login" element={< Login />} loader={(props) => (<Login history={props.history} />)} />
        <Route  path="/signup" element={< SignUp />} loader={(props) => (<SignUp history={props.history} />)} />
        <Route  path="/items" element={<SalonItemList />} />
        <Route  path="/item/:id" element={< SalonDetails />} render={(props) => (<SalonDetails history={props.history} />)} />
        <Route  path="/appointments" element={<AppointmentLists />} />
      </Routes>
    </div>
  </BrowserRouter>
);

Routes.propTypes = {
  history: PropTypes.instanceOf(Object),
};

Routes.defaultProps = {
  history: null,
};

export default Routess;
