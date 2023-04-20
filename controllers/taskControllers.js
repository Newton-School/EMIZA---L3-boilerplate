const users   = require("../models/user.js");
const jwt = require("jsonwebtoken");
const tasks   = require("../models/task.js");
const bcrypt  = require('bcrypt');
const { valid } = require("joi");
const JWT_SECRET = "newtonSchool";

const createTask =async (req, res) => {

    const { heading, description, token  } = req.body;
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const creator_id = decodedToken.userId;

    var newtask = {
        "heading":heading,
        "description":description,
        "creator_id": creator_id
    };

    tasks.create(newtask).then((task) => {

        res.status(200).json({
            "message": 'Task added successfully',
            "task_id": task._id,
            "status": 'success'
        });
    })
    .catch((error) => {
        res.status(404).json({
            "status": 'fail',
            "message": error.message
        });
    });

}


/*

Taskdetail Controller

req.body = {
    "task_id" : task_id,
    "token" : token
}

1. Implement the middleware isowner in ../middleware/taskmiddleware.js (This will also handel if task with given _id doesnot exist).
2. Return the detail of the task with given task_id.

Response --> 

1. Success

200 Status code

json = {
  status: 'success',
  data: {
    Status: 'pending',
    _id: 'mxcnbxzcn-khscc',
    heading: 'Study Doglapan',
    description: 'Need to study atleast 10 Pages',
    creator_id: 'kdjhgsdjgmsbmbs'
  }
}

2. Fail

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}

//this case will be handel by Middleware.
3. Task Doesnot exist
403 Status Code
json = {
    "status": 'fail',
    "message": 'Given task doesnot exist'
}

*/

const Taskdetail = async (req, res) => {

    const {task_id, token} = req.body;

   //Write your code here

}


/*

Taskupdate Controller

In req.body only those field will be given from "heading", "description" and "status" that is being Updated.

req.body = {
    "task_id"    : task_id,
    "token"      : token,
    "heading"    : ... ,
    "description": ... ,
    "status"     : ...
}


1. Middleware isowner is Implemented in ../middleware/taskmiddleware.js (This will also handel if task with given _id doesnot exist).
2. Return the detail of the task with given task_id.

Response --> 

1. Success

200 Status code

json = {
  status: 'success',
  data: {
    Status: 'pending',
    _id: 'mxcnbxzcn-khscc',
    heading: 'Study Doglapan',
    description: 'Need to study atleast 10 Pages',
    creator_id: 'kdjhgsdjgmsbmbs',
  }
}

2. Fail

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}

//this case will be handel by Middleware.
3. Task Doesnot exist
403 Status Code
json = {
    "status": 'fail',
    "message": 'Given task doesnot exist'
}

*/


Taskupdate = async (req, res) => {
    
    const task_id = req.body.task_id;
    
    //Write your code here
   

}


/*

Taskdelete Controller

req.body = {
    "task_id"    : task_id,
    "token"      : token,
}


1. Middleware isowner is Implemented in ../middleware/taskmiddleware.js (This will also handel if task with given _id doesnot exist).
2. delete the task with given task_id.

Response --> 

1. Success

200 Status code
json = {
  status: 'success',
  message: 'Task deleted successfully'
}

2. Fail

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}


//this case will be handel by Middleware.
3. Task Doesnot exist
403 Status Code
json = {
    "status": 'fail',
    "message": 'Given task doesnot exist'
}

*/

Taskdelete = async (req, res) => {

    const {task_id, token} = req.body;

    //Write your code here

}


module.exports = { createTask, Taskdetail, Taskupdate, Taskdelete };