User = require("../model/User");

exports.index = (req, res) => {
  User.get((err, user) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    } else {
      res.json({
        status: "success",
        message: "Usuários encontrados.",
        data: user
      });
    }
  });
};

exports.new = (req, res) => {
  let user = new User();
  user.login = req.body.login;
  user.email = req.body.email;
  user.nome = req.body.nome;

  user.save(err => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    } else {
      res.json({
        status: "success",
        message: "Usuário criado com sucesso.",
        data: user
      });
    }
  });
};

exports.view = (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    } else {
      res.json({
        status: "success",
        message: "Usuário encontrado com sucesso.",
        data: user
      });
    }
  });
};

exports.delete = (req, res) => {
  User.remove(
    {
      _id: req.params.user_id
    },
    (err, user) => {
      if (err) {
        res.json({
          status: "error",
          message: err
        });
      } else {
        res.json({
          status: "success",
          message: "Usuário removido com sucesso.",
          data: user
        });
      }
    }
  );
};

exports.update = (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    } else {
      user.login = req.body.login;
      user.email = req.body.email;
      user.nome = req.body.nome;
      user.save(error => {
        if (error) {
          res.json({
            status: "error",
            message: error
          });
        } else {
          res.json({
            status: "success",
            message: "Usuário atualizado",
            data: user
          });
        }
      });
    }
  });
};