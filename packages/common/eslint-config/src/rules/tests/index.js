const testGQLNaming = require("./enforce-graphql-naming.test.js");
const testFragmentSpreads = require("./must-spread-fragment-in-parent.test.js");
const testGQLSyntax = require("./graphql-syntax-errors.test.js");

testGQLNaming;
testFragmentSpreads;
testGQLSyntax;

console.log("All tests passed!");
