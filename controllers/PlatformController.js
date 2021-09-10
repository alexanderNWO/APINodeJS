const Platform = require('../models/PlatformModel');

const PlatformController = {

    savePlatform: function(req, res) {
        const params = req.body;
        let platform = new Platform({
            name: params.name,
            description: params.description,
            fundator: req.user._id,
            image: null,
        });

        platform.save((err, platformSaved) => {
            if(err) return res.status(500).json({message: 'Error al guardar plataforma'});

            if(!platformSaved) return res.status(404).json({message: 'No se ha podido guardar la plataforma'});

            return res.status(200).json({platform: platform, message: 'Plataforma Guardada'});
        })

    },

    updatePlatform: function(req, res) {
        const PlatformId = req.params.id;
        const updated = req.body;

        Platform.findByIdAndUpdate(PlatformId, updated, {new:true}, (err, PlatformUpdated) => {
            if(err) return res.status(500).json({message: 'Error al actualizar'});

            if(!PlatformUpdated) return res.status(404).json({message: 'Plataforma Inexistente'});

            return res.status(200).json({platform: PlatformUpdated});
        })
    },

    deletePlatform: function(req, res) {
        const PlatformId = req.params.id;
        const updated = {
            status: false
        };

        Platform.findByIdAndUpdate(PlatformId, updated, {new:true}, (err, PlatformUpdated) => {
            if(err) return res.status(500).json({message: 'Error al actualizar'});

            if(!PlatformUpdated) return res.status(404).json({message: 'Plataforma Inexistente'});

            return res.status(200).json({platform: PlatformUpdated});
        })
    },

    getPlatforms: function(req, res) {
        Platform.find({status:true}).populate('fundator', 'name').exec((err, platforms) => {
            if(err) return res.status(500).json({message: 'Error al encontrar plataformas'});

            if(!platforms) return res.status(404).json({message: 'No hay plataformas existentes'});

            return res.status(200).json({platforms: platforms});
        })
    },

}

module.exports = PlatformController;