const User = require('../models/user.mode');
const Response = require('../res/response');

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        Response.success(res, 'Usuario creado exitosamente', newUser);
    } catch (error) {
        Response.error(res, 'Error al crear usuario', error);
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        Response.success(res, 'Usuarios obtenidos exitosamente', users);
    } catch (error) {
        Response.error(res, 'Error al obtener usuarios', error);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return Response.error(res, 'Usuario no encontrado', null, 404);
        }
        Response.success(res, 'Usuario obtenido exitosamente', user);
    } catch (error) {
        Response.error(res, 'Error al obtener usuario', error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        Response.success(res, 'Usuario actualizado exitosamente', updatedUser);
    } catch (error) {
        Response.error(res, 'Error al actualizar usuario', error);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        Response.success(res, 'Usuario eliminado exitosamente');
    } catch (error) {
        Response.error(res, 'Error al eliminar usuario', error);
    }
};