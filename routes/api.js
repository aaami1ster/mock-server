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
  const url = req._parsedUrl.pathname;
  console.log(url);

  return res.status(200).send({ status: 200, message: 'OK'});
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