const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AuthController = {

    login: function(req, res) {
        User.findOne({email: req.body.email, status: true})
                    .then(data => {
                        if(data)
                        {
                            const validatePassword = bcrypt.compareSync(req.body.password, data.password);
                            if(!validatePassword) return res.status(404).json({message:'Usuario o contraseña incorrectos'});
                            const token = jwt.sign({data: {_id: data._id, name: data.name, email: data.email}}, 'seed', {expiresIn: '24h'});
                            res.json({
                                user: {
                                    _id: data._id,
                                    name: data.name,
                                    email: data.email
                                },
                                token
                            });
                        } else {
                            res.status(404).json({
                                message:'Usuario o contraseña incorrectos'
                            });
                        }
                    })
                    .catch(err => {
                        res.status(400).json({error: err});
                    })
    },

    user: function(req, res) {
        return res.status(200).json({
            user: req.user
        });
    }

}

module.exports = AuthController;