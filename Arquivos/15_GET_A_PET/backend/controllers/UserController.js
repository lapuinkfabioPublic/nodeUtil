const User = require('../models/User')

module.exports = class UserController
{
    static async register(req, res)
    {

       /* const name = req.body.name
        const email = req.body.email
        
        const phone = req.body.phone
        const password = req.body.password
        const confirmpassword = req.body.confirmpassword
        */


        const {name, email, phone, password, confirmpassword} = req.body


        //validations

        if(!name){

            res.status(422).json({message: 'O nome é obrigatório'})
            return
        }
        if(!email){

            res.status(422).json({message: 'O email é obrigatório'})
            return
        }
        if(!phone){

            res.status(422).json({message: 'O phone é obrigatório'})
            return
        }
        if(!password){

            res.status(422).json({message: 'O password é obrigatório'})
            return
        }
        if(!confirmpassword){

            res.status(422).json({message: 'O confirmpassword é obrigatório'})
            return
        }
        res.json('Olá Get A Pet')
       // res.end
    }
}
 