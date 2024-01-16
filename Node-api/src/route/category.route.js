
const { userGuard } = require("../controller/auth.controller");
const categoryController = require("../controller/category.controller");

const category = (app,base_route) => {
    app.get(base_route,userGuard("read.category"), categoryController.getAll);
    app.get(`${base_route}/:id`,userGuard("read.category"), userGuard, categoryController.getone); // prarams
    app.post(base_route, userGuard("create.category"), categoryController.create);
    app.put(base_route, userGuard("update.category"), categoryController.update);
    app.delete(`${base_route}/:id`, userGuard("delete.category"), categoryController.remove);

}
module.exports = category;
