import axios from 'axios';
import {API_URL} from './config';

const API_Service = {
  // GET Requests
  getRequest: () => {
    return axios.get(API_URL + '');
  },
  // POST Requests
  addNewUser: req_data => {
    return axios.post(API_URL + '/auth/signup', req_data);
  },
  getUserProfile: req_data => {
    return axios.post(API_URL + '/user/account', req_data);
  },
  addNewBooking: req_data => {
    return axios.post(API_URL + '/user/bookticket', req_data);
  },
  getUserBookings: req_data => {
    return axios.post(API_URL + '/user/bookings', req_data);
  },
  getValidSlots: req_data => {
    return axios.post(API_URL + '/slot/find', req_data);
  },
};
export default API_Service;
