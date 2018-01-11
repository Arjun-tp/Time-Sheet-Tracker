var app = require('../../server');

/*function employeeCreateCollectionApi() {
  if (err) throw err;
  app.default.models.Employee.createCollection("employees", function(err, res) {
    if (err) throw err;
    console.log("Employee Collection created!");
  });
	console.log("Employee API here*********")
}*/


function employeeDataInsert(req,res) {	
  app.default.models.Employee.create(req.body, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
  });
}


function getEmployeeDataAll(req){
 app.default.models.Employee.find({}).exec(function(err,data){
 	if(!err){
 		console.log("data",JSON.stringify(data));
 		return data;
 	}else{
 		return err;
 	}	
 })
}



// module.exports.employeeCreateCollectionApi = employeeCreateCollectionApi;
module.exports.employeeDataInsert = employeeDataInsert;
module.exports.getEmployeeDataAll = getEmployeeDataAll;
