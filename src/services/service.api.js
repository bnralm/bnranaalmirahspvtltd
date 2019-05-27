/**
 * Summary: Member Search actions
 * Description: Member Search function which will called to service layer
 * @author Prateek Jain
 * @date  09.10.2018
 */
import { baseService, token } from '../services';
import { authHeader } from '../helpers';
import { uriConstants } from '../constants/constant.uri';

/**
 * Description: const member list would be exposed so it can be accessed outside
 * @param {null}
 * @return {null}
 */
export const serviceAPI = {
  getMembers,
  getMembersByCriteria,
  getDependentList,
  getMemberInfo,
  getActivationInfo,
  getCareInfo,
  getMessageInfo,
  getAllTemplates,
  createMessage,
  createMessageTemplate,
  getAllMessageInfo,
  getMembersByFamilyId,
  updateEmailNotificationPreferences,
  getTempMemberPortalLogin,
  deleteCsrMemberPortalsession,
  getMemberInboxMessages,
  getReferrals,
  updateMemberUserData,
  searchPcp,
  updateAddress,
  updatePcp,
  accessApproval,
  resetAccount,
  submitReferral
};

/**
 * Description: Fetch list of members on the basis of filter
 * @param {json} req_data
 * @return {json} req_response
 */
function getMembers(requestData) {
  let url = uriConstants.MEMBER_SEARCH_URL;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

/**
 * Description: Fetch list of members on the basis of criteria selected
 * @param {json} req_data
 * @return {json} req_response
 */
function getMembersByCriteria(requestData) {
  let url = uriConstants.MEMBER_SEARCH_BY_CRITERIA_URL;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

/**
 * Description: Fetch list of members on the basis of family ID
 * @param {json} req_data
 * @return {json} req_response
 */
function getMembersByFamilyId(requestData) {
  let url = uriConstants.MEMBER_SEARCH_BY_FAMILYID_URL;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

/**
 * Summary: fetch profile info of a perticular member
 * Description: Fetch Profile info of the selected member
 * @param {json} req_data
 * @return {json} req_response
 */
function getMemberInfo(requestData) {
  let url = uriConstants.GET_MEMBER_INFO;
  //return baseService.get(url, authHeader)
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

/**
 * Summary: fetch All Family Members List
 * Description: Fetch other family member list of the selected member
 * @param {json} req_data
 * @return {json} req_response
 */
function getDependentList(requestData) {
  let url = uriConstants.DEPENDENT_LIST_URL;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

/**
 * Description: Fetch data of member activation on the basis of filter
 * @param {json} req_data
 * @return {json} req_response
 */
function getActivationInfo(requestData) {
  let url = uriConstants.GET_MEMBER_ACTIVATION_INFO;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

/**
 * Description: Fetch data of member care on the basis of filter
 * @param {json} req_data
 * @return {json} req_response
 */
function getCareInfo(requestData) {
  let url = uriConstants.GET_MEMBER_CARE_INFO;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

/**
 * Description: Fetch message data of member on the basis of filter
 * @param {json} req_data
 * @return {json} req_response
 */
function getMessageInfo() {
  let url = uriConstants.GET_MEMBER_MESSAGE_INFO;
  return baseService.post(url, authHeader, token.setTokenInRequest({}));
}

/**
 * Description: Fetch all message templates
 * @return {json} req_response
 */
function getAllTemplates() {
  let url = uriConstants.GET_ALL_MSG_TEMPLATES;
  return baseService.post(url, authHeader, token.setTokenInRequest({}));
}

/**
 * Description: Fetch all message templates
 * @return {json} req_response
 */

function createMessageTemplate(requestData) {
  let url = uriConstants.CREATE_MSG_TEMPLATE;
  return baseService.post(url, authHeader, requestData);
}

/**
 * Description: Fetch message data of member on the basis of filter
 * @param {json} req_data
 * @return {json} req_response
 */
function getAllMessageInfo() {
  let url = uriConstants.GET_ALL_MESSAGES;
  return baseService.post(url, authHeader, {});
}

/**
 * Description: Create email message
 * @param {json} requestData
 * @return {json} req_response
 */
function createMessage(requestData) {
  let url = uriConstants.CREATE_MSG;
  return baseService.post(url, authHeader, requestData);
}

/**
 * Description: set email unsubscription information
 * @param {json} requestData
 * @return {json} req_response
 */
function updateEmailNotificationPreferences(requestData) {
  let url = uriConstants.SET_EMAIL_UNSUBSCRIPTION_INFO;
  return baseService.post(url, authHeader, requestData);
}

/**
 * Description: function to get temporary login credentials for CSR to login into member portal
 * @param {json} requestData
 * @return {json} req_response
 */
function getTempMemberPortalLogin(requestData) {
  let url = uriConstants.GET_TEMP_MEMBER_PORTAL_LOGIN;
  return baseService.post(url, authHeader, requestData);
}

/**
 * Description: delete temporary session created for CSR to login into member portal
 * @param {json} requestData
 * @return {json} req_response
 */
function deleteCsrMemberPortalsession(requestData) {
  let url = uriConstants.DELETE_CSR_MEMBER_PORTAL_SESSION;
  return baseService.post(url, authHeader, requestData);
}

/**
 * Description: get inbox messages of a perticular member
 * @param {json} requestData
 * @return {json} req_response
 */
function getMemberInboxMessages(requestData) {
  let url = uriConstants.GET_MEMBER_INBOX_MESSAGE;
  return baseService.post(url, authHeader, requestData);
}

/**
 * Description: get referral list of a perticular member
 * @param {json} requestData
 * @return {json} req_response
 */
function getReferrals(requestData) {
  let url = uriConstants.GET_REFERRALS;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

function updateMemberUserData(requestData) {
  let url = uriConstants.UPDATE_MEMBER_DETAILS;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

function searchPcp(requestData) {
  let url = uriConstants.SEARCH_PCP;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

function updatePcp(requestData) {
  let url = uriConstants.UPDATE_PCP;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

function updateAddress(requestData) {
  let url = uriConstants.UPDATE_ADDRESS;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

function accessApproval(requestData) {
  let url = uriConstants.ACCESS_APPROVAL;
  return baseService.post(
    url,
    authHeader,
    token.setTokenInRequest(requestData)
  );
}

function resetAccount(data) {
  let url = uriConstants.RESET_ACCOUNT;
  return baseService.post(url, authHeader, token.setTokenInRequest(data));
}

function submitReferral(data) {
  let url = uriConstants.SUBMIT_REFERRAL;
  return baseService.post(url, authHeader, token.setTokenInRequest(data));
}
