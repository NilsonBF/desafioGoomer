process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let User = require("../model/User");
let Group = require("../model/Group");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
let should = chai.should();

chai.use(chaiHttp);

let arrUsers = [];
let arrGrupos = [];

describe("User", () => {
    before(done => {
        User.remove({}, err => {
            Group.remove({}, err => {
                done();
            });
        });
    });
    describe("User api/v1/user", () => {
        it("Deve adicionar um novo usuário", done => {
            let user = {
                nome: "Nilson Bertola Chai",
                login: "nilson.chai",
                email: "nilson.chai@gmail.com"
            };
            chai
                .request(server)
                .post("/api/v1/user")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve adicionar um novo usuário", done => {
            let user = {
                nome: "Nilson Bertola Chai2",
                login: "nilson.chai2",
                email: "nilson.chai2@gmail.com"
            };
            chai
                .request(server)
                .post("/api/v1/user")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve adicionar um novo usuário", done => {
            let user = {
                nome: "Nilson Bertola Chai3",
                login: "nilson.chai3",
                email: "nilson.chai3@gmail.com"
            };
            chai
                .request(server)
                .post("/api/v1/user")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve listar todos os usuários", done => {
            chai
                .request(server)
                .get("/api/v1/user")
                .end((err, res) => {
                    arrUsers = res.body.data;
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve listar um usuário", done => {
            chai
                .request(server)
                .get("/api/v1/user/" + arrUsers[0]._id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve alterar somente o nome de um usuario", done => {
            let updateUser = {
                nome: "Nilson update PUT"
            }
            chai
                .request(server)
                .put("/api/v1/user/" + arrUsers[0]._id)
                .send(updateUser)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve alterar somente o nome de um usuario", done => {
            let updateUser = {
                nome: "Nilson 2 update patch"
            }
            chai
                .request(server)
                .patch("/api/v1/user/" + arrUsers[1]._id)
                .send(updateUser)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve deletar um usuario", done => {
            chai
                .request(server)
                .delete("/api/v1/user/" + arrUsers[2]._id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
    });
    describe("Grupo api/v1/group", () => {
        it("Deve adicionar um novo grupo", done => {
            let grupo = {
                nome: "Grupo",
                users: [arrUsers[0]._id, arrUsers[1]._id],
            };
            chai
                .request(server)
                .post("/api/v1/group")
                .send(grupo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve adicionar um novo grupo", done => {
            let grupo = {
                nome: "Grupo2",
                users: [arrUsers[0]._id, arrUsers[1]._id],
            };
            chai
                .request(server)
                .post("/api/v1/group")
                .send(grupo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve listar todos os grupos", done => {
            chai
                .request(server)
                .get("/api/v1/group")
                .end((err, res) => {
                    arrGrupos = res.body.data;
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve listar um group", done => {
            chai
                .request(server)
                .get("/api/v1/group/" + arrGrupos[0]._id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve alterar somente o nome de um grupo", done => {
            let updateGrupo = {
                nome: "Grupo 1 Put"
            }
            chai
                .request(server)
                .put("/api/v1/group/" + arrGrupos[0]._id)
                .send(updateGrupo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve alterar somente o nome de um grupo", done => {
            let updateGrupo = {
                nome: "Grupo 1 Patch"
            }
            chai
                .request(server)
                .patch("/api/v1/group/" + arrGrupos[0]._id)
                .send(updateGrupo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
        it("Deve deletar um grupo", done => {
            chai
                .request(server)
                .delete("/api/v1/group/" + arrGrupos[1]._id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
    });
});