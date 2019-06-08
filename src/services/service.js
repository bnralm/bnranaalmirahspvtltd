import axios from 'axios';
export const baseService = {
  get,
  put,
  post,
  delete: _delete
};
//===========CRUD Operations=====================//

//Get Call
function get(url, header) {
  return axios
    .get(url, { headers: '' })
    .then(handleResponse)
    .catch(error);
}

//create Call
function put(url, header, body) {
  return axios
    .put(url, body, { headers: { Authorization: header.Authorization } })
    .then(handleResponse)
    .catch(error);
}
//update Call
function post(url, body, header) {
  return axios
    .post(url, body, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json'
      }
    })
    .then(handleResponse)
    .catch(error);
}

// Delete Call (prefixed function name with underscore because delete is a reserved word in javascript)
function _delete(url, header, params) {
  return axios
    .delete(url, { headers: { Authorization: header.Authorization } })
    .then(handleResponse)
    .catch(error);
}

//callback of response (returns promise)
function handleResponse(response) {
  if (response.status !== 200) {
    return Promise.reject(response);
  }
  return response;
}

//callback of error
function error(error) {
  return error;
}
