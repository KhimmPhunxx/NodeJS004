const { userGuard } = require("../controller/auth.controller");
const customerController = require("../controller/customer.controller");

// const route = "/api/employee";
const customer = (app,base_route) => {
    app.get(base_route,userGuard, customerController.getAll);
    app.get(`${base_route}/:id`,userGuard( "read.customer"), customerController.getone); // prarams
    app.post(base_route,userGuard("create.customer"), customerController.create);
    app.post(`${base_route}/auth/login`,userGuard, customerController.login);
    app.put(base_route,userGuard("update.customer",), customerController.update);
    app.delete(`${base_route}/:id`,userGuard("delete.customer"), customerController.remove);

    app.get(`${base_route}_address`,userGuard, customerController.listAddress); // api/customer/address get
    app.get(`${base_route}_address/:id`,userGuard, customerController.listOneAddress); // api/customer/address/id get
    app.post(`${base_route}_address`,userGuard, customerController.newAddress); // api/customer/address post
    app.put(`${base_route}_address`,userGuard, customerController.updateAddress); // api/customer/address put
    app.delete(`${base_route}_address /:id`,userGuard, customerController.removeAddress); // api/customer/address/id delete
}

module.exports = customer;