const _ = require("lodash");
const ver = _.VERSION;
console.log(ver);

function hellonode(array) {
  let fel = _.first(array);
  let lel = _.last(array);
  let result = fel + " " + lel;
  console.log(result);
}

module.exports = hellonode;
