import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import Auth from '@aws-amplify/auth';
import SES from 'aws-sdk/clients/ses';

let SESObj = null;
/**
 * Description: Fetch list of templates on the basis of templateName
 */
export function emailTemplate(param) {
  return new Promise((resolve, reject) => {
    Amplify.configure({
      Auth: {
        identityPoolId: process.env.REACT_APP_SES_IDENTITY_POOL_ID,
        region: process.env.REACT_APP_SES_REGION,
        userPoolId: process.env.REACT_APP_SES_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_SES_USER_POOL_WEB_CLIENT_ID
      }
    });
    Auth.configure(awsconfig);
    Auth.currentCredentials().then(credentials => {
      SESObj = new SES({
        credentials: Auth.essentialCredentials(credentials),
        region: 'us-east-1'
      });
      SESObj.listTemplates(param, (err, data) => {
        if (err) {
          // console.log(err, err.stack); // an error occurred
          reject(err);
        } else {
          // console.log(data);           // successful response
          resolve(data.TemplatesMetadata);
        }
      });
    });
  });
}

export function getTemplate(templateName) {
  return new Promise((resolve, reject) => {
    SESObj.getTemplate(templateName, (err, data) => {
      if (err) {
        // console.log(err, err.stack); // an error occurred
        reject(err);
      } else {
        // console.log(data);           // successful response
        resolve(data.Template);
      }
    });
  });
}
