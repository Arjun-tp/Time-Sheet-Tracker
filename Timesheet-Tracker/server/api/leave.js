var app = require('../../server');

function leaveDataInsertApi(req,res) {
  app.default.models.Leaves.create(req.body, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
  });

}


function getLeaveDataAll(req,cb){
 app.default.models.Leaves.find({}).exec(function(err,data){
 	if(!err){
 		console.log("data",JSON.stringify(data));
 		cb.send(data);
 	}else{
 		cb.send(false);
 	}	
 })
}


module.exports.leaveDataInsertApi = leaveDataInsertApi;
module.exports.getLeaveDataAll = getLeaveDataAll;
