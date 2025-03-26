const Auth = require('../models/auth-mod');
const Response = require('../res/response');

exports.register = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const newAuth = new Auth({ username, password, email });
        await newAuth.save();
        Response.success(res, 'Usuario registrado exitosamente', newAuth);
    } catch (error) {
        Response.error(res, 'Error al registrar usuario', error);
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Auth.findOne({ username });
        
        if (!user || user.password !== password) {
            return Response.error(res, 'Credenciales inválidas', null, 401);
        }
        
        Response.success(res, 'Inicio de sesión exitoso', { user });
    } catch (error) {
        Response.error(res, 'Error al iniciar sesión', error);
    }
};