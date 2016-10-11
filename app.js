const Je = require('jsonify-excel');
var jsonfile = require('jsonfile');
const config = {
  automap: false,
  sheet: 0,
  start: 3,
  condition: function (cell) {
    return !!cell('A');
  },
};
 
const map = [{
  name: '*A'
}];
 
const json = new Je('see.xlsx').toJSON(config, map);
 
//console.log(json);


 
jsonfile.spaces = 1;
 
var file = '/dev/read/data.json';
var obj =new Je('see.xlsx').toJSON(config, map);
 
// json file has four space indenting now 
jsonfile.writeFile(file, obj, function (err) {
  console.error(err);
})