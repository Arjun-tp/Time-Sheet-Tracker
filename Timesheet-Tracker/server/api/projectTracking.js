var app = require('../../server');

function projectTrackingDataInsertApi(req,res) {	
  app.default.models.ProjectTracking.create(req.body, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
  });

}

function getprojectTrackingDataAll(req,res){
 app.default.models.ProjectTracking.find({}).exec(function(err,data){
 	if(!err){
 		console.log("data",JSON.stringify(data));
 		cb.send(data);
 	}else{
 		cb.send(false);
 	}	
 })
}

module.exports.projectTrackingDataInsertApi = projectTrackingDataInsertApi;
module.exports.getprojectTrackingDataAll = getprojectTrackingDataAll;
