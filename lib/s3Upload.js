// File is for command-line testing
// uploading files to AWS S3

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
