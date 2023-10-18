const { models } = require("../models/defination")

module.exports = {createstudent : async(data)=>
{
    const result= await models.student.create(data);
    return result
}}