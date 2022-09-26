const fetch = require('node-fetch');
const externalApiUri = 'https://echo-serv.tbxnet.com/v1';

const getAllFiles = async (req, res, next) => {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer aSuperSecretKey'
    }
  }
  const request = await fetch(`${externalApiUri}/secret/files`, options);
  const response = await request.json();
  res.json(response);
}

module.exports = {
  getAllFiles
}
