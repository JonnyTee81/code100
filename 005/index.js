const request = require('request');

// API GET METHOD
// Referencing article on Medium
// Title: Writing neat asynchronous Node JS code with Promises
// URL: https://medium.com/dev-bits/writing-neat-asynchronous-node-js-code-with-promises-32ed3a4fd098

let userDetails;

function getData(url) {
    // Set URL and headers for request
    let options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    };

    // Return new promise
    return new Promise(function (resolve, reject) {
        // Async Job
        request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

function main() {
    const userProfileURL = "https://api.github.com/users/JonnyTee81";
    let dataPromise = getData(userProfileURL);
    dataPromise.then(function (result) {
        userDetails = result;
        console.log("Initialized user details");
        return userDetails;
    }, function (err) {
        console.log(err);
    }).then(function (result) {
        console.log("gists: " + result.public_gists + "// public repos: " + result.public_repos)
    });
}

main();