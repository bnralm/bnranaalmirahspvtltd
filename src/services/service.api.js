/**
 * Summary: Member Search actions
 * Description: Member Search function which will called to service layer
 * @author Pankaj Rana
 * @date  27.06.2019
 */
import { baseService, token } from '../services';
import { uriConstants } from '../constants/constant.uri';

/**
 * Description: const member list would be exposed so it can be accessed outside
 * @param {null}
 * @return {null}
 */
export const serviceAPI = {
  getProducts,
 ;

/**
 * Description: Fetch list of members on the basis of filter
 * @param {json} req_data
 * @return {json} req_response
 */
function getProducts() {
  let url = uriConstants.PRODUCTS_URL;
  return baseService.get(
    url
    );
}