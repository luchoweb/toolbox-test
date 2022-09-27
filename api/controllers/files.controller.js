'use strict';

const fetch = require('node-fetch');

// Set up external api args
const externalApiUri = 'https://echo-serv.tbxnet.com/v1';
const externalApiOptions = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer aSuperSecretKey'
  }
};

// Create a method for getting all files
const getAllFiles = async (req, res) => {
  // If fileName query param exist in the url
  if ( req.query?.fileName ) {
    // Get each file formated
    const response = await getFileFormatted(req.query.fileName);
    res.send(response);
  } else {
    // Getting all files names
    const getFilesName = await fetch(`${externalApiUri}/secret/files`, externalApiOptions);
    // Response to json
    const jsonFilesName = await getFilesName.json();
    // Array to save each file formated
    const filesFiltered = [];

    for ( let i = 0; i < jsonFilesName.files.length; i++) {
      // Current file name
      const file = jsonFilesName.files[i];
      // Get each file formated
      const fileFormated = await getFileFormatted(file);
      if ( fileFormated ) filesFiltered.push(fileFormated);
    }

    res.send(filesFiltered);
  }
}

const getFileFormatted = async (file) => {
  try {
    let filesFiltered;

    // Get current file by name
    const getFileContent = await fetch(`${externalApiUri}/secret/file/${file}`, externalApiOptions);
    // Convert response to text
    const rawFilesContent = await getFileContent.text();
  
    // convert each file content to an array
    const filesContentArr = rawFilesContent.split('\n');
    
    // Filter each file content and ignore errors or incomplete
    const filesContentFiltered = filesContentArr.filter(fileContent => fileContent.indexOf('code') === -1 && fileContent.indexOf(file) > -1 && fileContent.split(',').length === 4);

    // Validate if filesContentFiltered isn't empty
    if ( filesContentFiltered.length > 0) {
      // Map filesContentFiltered to get the lines
      const lines = filesContentFiltered.map(line => {
        // Convert lines to an array
        const lineArr = line.split(',');

        // Return each line object
        return {
          text: lineArr[1],
          number: lineArr[2],
          hex: lineArr[3]
        }
      });
  
      // Add to filesFiltered each new object for valid file content
      filesFiltered = { file, lines };
    }

    // Send to endpoint
    return filesFiltered;
  } catch (error) {
    // Send error details
    return error;
  }
}

// Create a method for getting all files names
const getAllFilesNames = async (req, res) => {
  try {
    // Getting all files names
    const getFilesName = await fetch(`${externalApiUri}/secret/files`, externalApiOptions);
    // Response to json
    const jsonFilesName = await getFilesName.json();

    // Send to endpoint
    res.send(jsonFilesName);
  } catch (error) {
    // Send error details
    res.status(500).send(error);
  }
}

module.exports = {
  getAllFiles,
  getAllFilesNames
}
