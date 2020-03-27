// File is for command-line testing
// uploading files to AWS S3

require('dotenv').config()
// Require AWS Software Development Kit
const AWS = require('aws-sdk')

// Define bucket name to use
const bucket = 're-run-through'

// Create S3 Service module instance
const s3 = new AWS.S3()
// console.log('s3-test', s3)

// // Create object of params for putObject call:
// const params = {
//   Bucket: bucket,
//   Key: 'file-test.txt',
//   Body: 'Hello World!',
//   ACL: 'public-read'
// }
module.exports = (key, body, mimetype) => {
  // Create object of params for upload call:
  const params = {
    Bucket: bucket,
    ACL: 'public-read'
  }
  return new Promise((resolve, reject) => {
    // Add key and body params to object
    params.Key = Date.now() + '_' + key
    params.Body = body
    params.ContentType = mimetype
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// const uploadPromise = s3.putObject(params).promise()
// uploadPromise.then(data => {
//   console.log(data)
// })
// .catch(console.error)
// s3.upload(params).promise()
//   .then(console.log)
//   .catch(console.error)
