const AWS = require('aws-sdk');
const proxy = require('proxy-agent');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const REGION = 'us-east-1'; // code for US East (N. Virginia), see full list here: https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region
const BUCKET = 'webrix.amdocs.com';
const API = '2006-03-01';
const FILE_PERMISSION = 'public-read';
const PROXY = 'http://genproxy.amdocs.com:8080';
const RETRIES = 20000;
const DIR = path.resolve(__dirname, '../build');

// Setup
AWS.config.update({region: REGION});
AWS.config.logger = console;

// Create S3 service object
const s3 = new AWS.S3({
    apiVersion: API,
    httpOptions: {
        agent: process.argv[2] === 'proxy' ? proxy(PROXY) : undefined,
    },
    maxRetries: RETRIES
});

const traverse = (dir, callback) => {
    fs.readdirSync(dir, {withFileTypes: true}).forEach(d => {
        const filePath = path.join(dir, d.name);
        if (d.isFile()) {
            callback(filePath);
        } else if (d.isDirectory()) {
            traverse(filePath, callback);
        }
    });
};

traverse(DIR, filepath => {
    const fileStream = fs.createReadStream(filepath);
    fileStream.on('error', (err) => {
        console.log('File Error', err);
    });

    const params = {
        Bucket: BUCKET,
        Key: filepath.substring(DIR.length + 1), // Change the path so that it starts from DIR
        Body: fileStream,
        ACL: FILE_PERMISSION,
        ContentType: mime.lookup(path.extname(filepath)) || 'application/octet-stream',
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.log("Error", err);
        } if (data) {
            console.log("Upload Success", data.Location);
        }
    });
});
