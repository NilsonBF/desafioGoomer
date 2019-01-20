const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "API está funcionando."
  });
});

const UserController = require("../controller/User");
const GroupController = require("../controller/Group");

router
  .route("/v1/user")
  .get(UserController.index)
  .post(UserController.new);

router
  .route("/v1/user/:user_id")
  .get(UserController.view)
  .put(UserController.update)
  .patch(UserController.update)
  .delete(UserController.delete);

router
  .route("/v1/group")
  .get(GroupController.index)
  .post(GroupController.new);

router
  .route("/v1/group/:group_id")
  .get(GroupController.view)
  .put(GroupController.update)
  .patch(GroupController.update)
  .delete(GroupController.delete);

router
  .route("/v1/group/operations/:group_id")
  .get(GroupController.opView)
  .put(GroupController.opAdd)
  .patch(GroupController.opAdd);

router
  .route("/v1/user/operations/:user_id")
  .get(GroupController.opListUser)

module.exports = router;
