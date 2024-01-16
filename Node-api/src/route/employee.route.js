// 
const { userGuard } = require("../controller/auth.controller");
const employeeController = require("../controller/employee.controller");

// const route = "/api/employee";
const employee = (app,base_route) => {
    app.get(base_route,userGuard, employeeController.getAll);
    app.get(`${base_route}/:id`,userGuard, employeeController.getone); // prarams
    app.post(base_route, employeeController.create);
    app.put(base_route, employeeController.update);
    app.delete(`${base_route}/:id`, employeeController.remove);
    app.post(`${base_route}_login`, employeeController.login); 
    app.post(`${base_route}_set_password`, employeeController.setPassword);
    app.post(`${base_route}_token_refresh`, employeeController.refreshToken);
}

module.exports = employee;