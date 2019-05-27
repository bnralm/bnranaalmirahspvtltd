/**
 * Summary: customErrorConst, httpErrorConst, validCodes, invalidToken
 * Description: define the customErrorConst, httpErrorConst, validCodes, invalidToken
 * @author Deepak Goyal
 * @date  13.09.2018
 */

export const customErrorConst = {
  ERROR_LOGIN: 'Error while login.',
  ERROR_DEFAULT: 'Not able to perform this action.'
};

export const httpErrorConst = {
  500: 'Internal Server Error.'
};

export const validCodes = code => {
  if (code >= 200 && code < 400) {
    return true;
  }
  return false;
};

export const invalidToken = {
  401: '401'
};
