const url = require('url');

const address = new URL('https://www.example.com:8080/path/name?search=query#hash');
const parsedURL = new url.URL(address.href);

console.log(parsedURL.host); // www.example.com:8080
console.log(parsedURL.pathname); // /path/name
console.log(parsedURL.searchParams);  // ?search=query
console.log(parsedURL.searchParams.get('search'));    // #hash    
