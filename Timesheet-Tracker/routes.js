'use strict';
// var app = require('./server');
var requireDir = require('require-dir');
var controllers = requireDir('./server/api');

	


module.exports.register = function(router) {
    // router.route( '/employeeCreateCollectionApi' ).post(controllers.employee.employeeCreateCollectionApi);
    router.route( '/employeeDataInsert' ).post(controllers.employee.employeeDataInsert);
    router.route( '/getEmployeeDataAll' ).get(controllers.employee.getEmployeeDataAll);

    router.route( '/projectDataInsertApi' ).post(controllers.project.projectDataInsertApi);
    router.route( '/getprojectDataAll' ).get(controllers.project.getprojectDataAll);


    router.route( '/leaveDataInsertApi' ).post(controllers.leave.leaveDataInsertApi);
    router.route( '/getLeaveDataAll' ).get(controllers.leave.getLeaveDataAll);

    router.route( '/projectTrackingDataInsertApi' ).post(controllers.projectTracking.projectTrackingDataInsertApi);
    router.route( '/getprojectTrackingDataAll' ).post(controllers.projectTracking.getprojectTrackingDataAll);
    


    console.log('routes registered ..!!');
};	
