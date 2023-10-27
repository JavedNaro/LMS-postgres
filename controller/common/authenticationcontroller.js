const jwt = require('jsonwebtoken');
const { models } = require('../../models/defination');
const bcrypt = require('bcrypt');
const config = require('../../configure')
let tokens = [];
function generateAccessToken(user){
 return jwt.sign(user,config.jwt)
}
module.exports = {
    login: async(req,res) => {
        try{
            const {email,phoneNUmbers} = req.body;
            let user = await models.user.findOne({
                where:{
                    email:email
                }
            })
            console.log(user);
            user = user.dataValues;
            if(user && bcrypt.compareSync(phoneNUmbers,user.phoneNUmbers)){
                const token = generateAccessToken(user);
                tokens.push(token);
                res.json({token:token})
            }
        }catch(e){
            console.log(e);
        }
    }
}
// module.exports = {
//     authenticationToken: async (req, res, next) => {
//         const authHeader = req.header["authorization"];
//         console.log(authHeader);
//         const token = authHeader && authHeader.split("")[1];
//         if (!token) {
//             return res.sendStatus(401);
//         }
//         jwt.verify(token,config.jwt,(err,user)=>{
//             if(err){
//                 return res.semdStatus(403);
//             }
//             req.user = user;
//             next();
//     })
// }}