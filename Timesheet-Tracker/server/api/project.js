var app = require('../../server');

function projectDataInsertApi(req,res) {	
  app.default.models.Project.create(req.body, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
  });

}

function getprojectDataAll(req,res){
 app.default.models.Project.find({}).exec(function(err,data){
 	if(!err){
 		console.log("data",JSON.stringify(data));
 		cb.send(data);
 	}else{
 		cb.send(false);
 	}	
 })
}


module.exports.projectDataInsertApi = projectDataInsertApi;
module.exports.getprojectDataAll = getprojectDataAll;
