var express = require('express');
const httpStatus = require('http-status');
var router = express.Router();
const db = require('../model/db');
const pathes = db.getResources();
console.log('pathes');
console.log(pathes);

const data = db.getData(pathes);
console.log('data');
console.log(data);


function getRequest(req, res, next) {
  console.log('getRequest');
  // console.log(req._parsedUrl.pathname);
  const resources = req._parsedUrl.pathname.substring(1).split('/');
  console.log(resources);
  if(!resources || !Array.isArray(resources)) {
    return res.status(200).send({ status: 200, message: 'OK' });
  }
  else if(resources && resources.length === 1) {
    if(data.hasOwnProperty(resources[0])) {
      return res.status(200).send({ status: 200, message: 'OK', data: data[resources[0]]});
    } else {
      return res.status(404).send({ status: 404, message: 'NOT_FOUND' });
    }
    
  } else {
    if(data.hasOwnProperty(resources[0])) {
      const result = data[resources[0]];
      const val = result.filter(v => v._id === resources[1]);
      if(val && val[0]) {
        
        return res.status(200).send({ status: 200, message: 'OK', data: val[0]});
      } else {
        return res.status(404).send({ status: 404, message: 'NOT_FOUND' });
      }
    } else {
      return res.status(404).send({ status: 404, message: 'NOT_FOUND' });
    }
  }
  
}

function postRequest(req, res, next) {
  console.log('postRequest');
  const url = req._parsedUrl.pathname;
  console.log(url);
  
  return res.status(200).send({ status: 200, message: 'OK'});

}

function putRequest(req, res, next) {
  console.log('putRequest');
  // console.log(req._parsedUrl.pathname);
  const url = req._parsedUrl.pathname;
  console.log(url);

  return res.status(200).send({ status: 200, message: 'OK'});

}

function deleteRequest(req, res, next) {
  console.log('deleteRequest');
  const url = req._parsedUrl.pathname;
  console.log(url);

  return res.status(200).send({ status: 200, message: 'OK'});

}

/**************** POST ****************/
router.post('/*', postRequest);

/**************** GET ****************/
router.get('/*', getRequest);

/**************** PUT ****************/
router.put('/*', putRequest);

/*************** DELETE ***************/
router.delete('/*', deleteRequest);

module.exports = router;