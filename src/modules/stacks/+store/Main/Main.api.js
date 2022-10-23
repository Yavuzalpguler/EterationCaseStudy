import Params from '../../../../common/Params';

function getUserInfo() {
  return fetch('https://5fc9346b2af77700165ae514.mockapi.io/simpsons', {
    method: 'GET',
    headers: {
      // Authorization: 'Bearer ' + secretKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      return responseJson;
    });
}

export const mainServices = {
  getUserInfo,
};
