
var expect = require('chai').expect;
const { assert } = require('chai');
const draw = require('../../misc/draw');
const async = require('../promisified');
const DOMParser = require('dom-parser');
const fs = require('fs');
const path = require('path');


function wait(ms) {
  return new Promise(function (resolve, reject) {
      setTimeout(resolve, ms)
  })
}

describe('implementation with Promise', function(){

  let code;
  const filename = "promisified.js";
  before(function () {
    const tmp = fs.readFileSync(path.resolve('.', filename)).toString('utf8');
    try{
      code = babel.transform(js,{
        filename: filename//you need this filename for some reason, even if jibberish
    }).code;
      }catch{
        code = tmp;
    }
  });

  it('must contain async', ()=>{
    assert(
      (code.includes("async")),
      `${code} must include async`);
    }
  );

  it('must not contain await', ()=>{
    assert(
      !(code.includes("await")),
      `${code} must not include await`);
    }
  );

it('must not contain Promise', ()=>{
    assert(
      (code.includes("Promise")),
      `${code} must include Promise`);
    }
  );
  

});



describe('drawArrows()', function () {
  let canvas = {};
  const parser = new DOMParser();
  const actors = ["hello", "world"];


  beforeEach(function () {
    // avoid object references and create copies
    canvas = draw.getCanvasInNode();
    draw.setCanvas(canvas);
  });


  it('must return one line', function () {

    const timeout = 1000;
    async.drawArrows(actors, timeout, draw.drawArrow);
    setTimeout(() => {
      const svg = canvas.svg();
      const xmlDoc = parser.parseFromString(svg, "text/xml");
      const lines = xmlDoc.getElementsByTagName("line");
      const len = lines.length;
      expect(len).to.equal(1);
    }, 0.7 * timeout)
  });

  it('must return a specific number of lines', done => {

    const timeout = 1000;
    async.drawArrows(actors, timeout, draw.drawArrow);
    try {
      setTimeout(() => {
        try {
          const svg = canvas.svg();
          const xmlDoc = parser.parseFromString(svg, "text/xml");
          const lines = xmlDoc.getElementsByTagName("line");
          // console.log(svg);
          const len = lines.length;
          expect(len).to.equal(3);
          done();
        } catch (err) {
          assert.fail(err);
          // done();
          throw err;
        }
      }, 1.5 * timeout);
    } catch (err) {
      assert.fail(err);
      done();
    }

  });


  it('must return N=(actors2.length -1) lines', done => {
    
    const timeout = 100;
    const actors2 = ["mobile client", "router", "controller", "model", "mongoDB"]
    async.drawArrows(actors2, timeout, draw.drawArrow);
    
    wait((actors2.length-1)*timeout)
    .then(data=>{
      const svg = canvas.svg();
      // console.log(svg);
      const xmlDoc = parser.parseFromString(svg, "text/xml");
      const lines = xmlDoc.getElementsByTagName("line");
      const len = lines.length;
      expect(len).to.equal(actors2.length-1);
      done();  
    });
  });


});



