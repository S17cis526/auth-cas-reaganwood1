/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3000;
module.export('authCAS'); // this isn't right I think

// Requires
var fs = require('fs');
var http = require('http');
var express = require('express');

// The Express app
var app = express();

var server = https
// Serve files from public folder
app.use(express.static('public'));

// Start the server
app.listen(PORT, function(){
  console.log(PORT);
});
