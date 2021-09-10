const jwt = require('jsonwebtoken');



const generateJWT = ( _id = '' ) => {

    return new Promise( (resolve, reject) => {

        const payload = { _id };

        jwt.sign( payload, 'seed', {
            expiresIn: '7d'
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    })
}




module.exports = {
    generateJWT
}