// 
const { userGuard } = require("../controller/auth.controller");
const employeeController = require("../controller/employee.controller");

// const route = "/api/employee";
const employee = (app,base_route) => {
    app.get(base_route,userGuard("read.employee"), employeeController.getAll);
    app.get(`${base_route}/:id`,userGuard("read.employee"), employeeController.getone); // prarams
    app.post(base_route,userGuard("crate.employee"), employeeController.create);
    app.put(base_route,userGuard("update.employee"), employeeController.update);
    app.delete(`${base_route}/:id`,userGuard("delete.employee"), employeeController.remove);
    app.post(`${base_route}_login`, employeeController.login); 
    app.post(`${base_route}_set_password`, employeeController.setPassword);
    app.post(`${base_route}_token_refresh`, employeeController.refreshToken);
}

module.exports = employee;