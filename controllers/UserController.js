const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

const UserController = {

    saveUser: function(req, res) {
        const params = req.body;
        let user = new User({
            email: params.email,
            name: params.name,
            password: bcrypt.hashSync(params.password, 10),
            image: null,
        });

        user.save((err, userSaved) => {
            if(err) return res.status(500).json({message: 'Error al guardar usuario'});

            if(!userSaved) return res.status(404).json({message: 'No se ha podido guardar el usuario'});

            return res.status(200).json({user: user, message: 'Usuario Guardado'});
        })

    },

    updateUser: function(req, res) {
        const UserId = req.params.id;
        const updated = req.body;

        User.findByIdAndUpdate(UserId, updated, {new:true}, (err, UserUpdated) => {
            if(err) return res.status(500).json({message: 'Error al actualizar'});

            if(!UserUpdated) return res.status(404).json({message: 'Usuario Inexistente'});

            return res.status(200).json({user: UserUpdated});
        })
    },

    deleteUser: function(req, res) {
        const UserId = req.params.id;
        const updated = {
            status: false
        };

        User.findByIdAndUpdate(UserId, updated, {new:true}, (err, UserUpdated) => {
            if(err) return res.status(500).json({message: 'Error al actualizar'});

            if(!UserUpdated) return res.status(404).json({message: 'Usuario Inexistente'});

            return res.status(200).json({user: UserUpdated});
        })
    },

    getUsers: function(req, res) {
        User.find({status:true}).exec((err, users) => {
            if(err) return res.status(500).json({message: 'Error al encontrar usuarios'});

            if(!users) return res.status(404).json({message: 'No hay usuarios existentes'});

            return res.status(200).json({users: users});
        })
    },

}

module.exports = UserController;