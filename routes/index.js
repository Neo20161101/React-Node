require("node-jsx").install();
const express = require('express');
const router = express.Router();
const React = require('react');
const ReactDOMServer = require("react-dom/server");
const Test = require('../public/javascripts/Test');
/* GET home page. */
var reactHtml = React.createElement( Test );
router.get('/', function(req, res, next) {
    res.render('index', {
        component: ReactDOMServer.renderToString(reactHtml)
    });
});
module.exports = router;
