// File is for command-line testing
// uploading files to AWS S3
require('dotenv').config()
// Require AWS Software Development Kit
const AWS = require('aws-sdk')
// Not sure if we need this:
// UUID Package
const uuid = require('uuid')

// Define bucket name to use
const bucket = 'eron-bucket'

// Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)

// Create object of params for putObject call:
const params = {
  Bucket: bucket,
  Key: 'file-test.txt',
  Body: 'Hello World!'
}

// const uploadPromise = s3.putObject(params).promise()
// uploadPromise.then(data => {
//   console.log(data)
// })
// .catch(console.error)
s3.putObject(params).promise()
  .then(console.log)
  .catch(console.error)
