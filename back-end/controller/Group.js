Group = require("../model/Group");
User = require("../model/User");

exports.index = (req, res) => {
    Group.get((err, group) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Grupos encontrados.",
                data: group
            });
        }
    });
};

exports.new = (req, res) => {
    if (req.body.users.length && req.body.users.length >= 2) {
        let group = new Group();
        group.nome = req.body.nome;
        group.users = req.body.users;

        group.save(err => {
            if (err) {
                res.json({
                    status: "error",
                    message: err
                });
            } else {
                res.json({
                    status: "success",
                    message: "Grupo criado com sucesso.",
                    data: group
                });
            }
        });
    } else {
        res.json({
            status: "error",
            message: "É necessário criar um grupo com dois ou mais usuários."
        });
    }
};

exports.view = (req, res) => {
    Group.findById(req.params.group_id, (err, group) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Grupo encontrado com sucesso.",
                data: group
            });
        }
    });
};

exports.delete = (req, res) => {
    Group.remove({
            _id: req.params.group_id
        },
        (err, group) => {
            if (err) {
                res.json({
                    status: "error",
                    message: err
                });
            } else {
                res.json({
                    status: "success",
                    message: "Grupo removido com sucesso.",
                    data: group
                });
            }
        }
    );
};

exports.update = (req, res) => {
    Group.findById(req.params.group_id, (err, group) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            group.nome = req.body.nome ? req.body.nome : group.nome;
            group.users = req.body.users ? req.body.users : group.users;
            group.save(error => {
                if (error) {
                    res.json({
                        status: "error",
                        message: error
                    });
                } else {
                    res.json({
                        status: "success",
                        message: "Grupo atualizado",
                        data: group
                    });
                }
            });
        }
    });
};

exports.opView = (req, res) => {
    Group.findById(req.params.group_id, async(err, group) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            User.find({ _id: { $in: group.users } }, (er, u) => {
                if (er) {
                    res.json({
                        status: "error",
                        message: er
                    });
                } else {
                    res.json({
                        status: "success",
                        message: `Usuarios do grupo ${group.nome} encontrado.`,
                        data: u
                    });
                }
            });
        }
    });
};

exports.opAdd = (req, res) => {
    Group.findById(req.params.group_id, (err, group) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            group.nome = group.nome;
            group.users = [...group.users, ...req.body.users];
            group.save(error => {
                if (error) {
                    res.json({
                        status: "error",
                        message: error
                    });
                } else {
                    res.json({
                        status: "success",
                        message: "Usuários adicionados.",
                        data: group
                    });
                }
            });
        }
    });
};

exports.opListUser = (req, res) => {
    Group.find({ users: req.params.user_id }, async(err, group) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            res.json({
                status: "success",
                message: "Grupos do Usuario.",
                data: group
            });
        }
    });
};