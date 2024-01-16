const db = require("../util/db");

const getAll = async (req,res) =>{
    const sql = "SELECT * FROM payment_method";
    const data = await db.query(sql);
    res.json({
        data : data
    })
}

const create = async (req,res) =>{
    const {name, code} = req.body;
    const sql = "INSERT INTO payment_method(name, code) VALUES (?,?)";
    const param = [name, code];
    const data = await db.query(sql,param);
    res.json({
        message:"Product added successfully",
        data : data
    })
}

const remove = async (req,res) =>{
    const {payment_method_id} = req.body;
    const sql = "DELETE FROM payment_method WHERE payment_method_id = ?";
    const param = [payment_method_id];
    const data = await db.query(sql,param);
    res.json({
        message:"Product removed successfully",
        data : data
    })
}

module.exports = {
    getAll,
    create,
    remove
}
