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

// Function to get one or all files
const getAllFiles = async (req, res) => {
  // If fileName query param exist in the url
  // Get that file formatted only
  if ( req.query?.fileName ) {
    // Get the file formatted
    const response = await getFileFormatted(req.query.fileName);
    console.log(response)

    // Send to endpoint the file or 404 not found error
    res.status(response ? 200 : 404).send(
      response || { error: `File doesn't exist` }
    );
  } else {
    // If fileName query param doesn't exist in the url
    // Get all formatted files
    const getFilesName = await fetch(`${externalApiUri}/secret/files`, externalApiOptions);
    const jsonFilesName = await getFilesName.json();

    // Array to save each formatted file
    const filesFiltered = [];

    if ( jsonFilesName?.files?.length ) {
      // Get each filename to get the file content
      for ( let i = 0; i < jsonFilesName?.files?.length; i++) {
        // Current file name
        const file = jsonFilesName.files[i];
        // Get each formatted file
        const fileFormated = await getFileFormatted(file);
        if ( fileFormated ) filesFiltered.push(fileFormated);
      }
    }

    // Send to endpoint the files
    res.send(filesFiltered);
  }
}

// Function to get each file formatted
const getFileFormatted = async (file) => {
  try {
    let formattedFile;

    // Get current file by name
    const getFileContent = await fetch(`${externalApiUri}/secret/file/${file}`, externalApiOptions);
    // Convert response to text
    const rawFileContent = await getFileContent.text();
  
    // Separate each line from the file content
    const fileContentArr = rawFileContent.split('\n');
    
    // Filter each line of file content and ignore errors or incompletes
    const fileContentFiltered = fileContentArr.filter(fileContent => fileContent.indexOf('code') === -1 && fileContent.indexOf(file) > -1 && fileContent.split(',').length === 4);

    // Validate if filesContentFiltered isn't empty
    if ( fileContentFiltered.length ) {
      // Map fileContentFiltered to get the lines of the file
      const lines = fileContentFiltered.map(line => {
        // Convert the lines to an array
        const lineArr = line.split(',');

        // Return each line object
        return {
          text: lineArr[1],
          number: lineArr[2],
          hex: lineArr[3]
        }
      });
  
      // Add formatted info
      formattedFile = { file, lines };
    }

    // Send to endpoint the formatted file
    return formattedFile;
  } catch (error) {
    // Send error details
    return error;
  }
}

// Function to get all file names
const getAllFilesNames = async (req, res) => {
  try {
    // Getting all file names
    const getFilesName = await fetch(`${externalApiUri}/secret/files`, externalApiOptions);
    const jsonFilesName = await getFilesName.json();

    // Send to endpoint the file names
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
