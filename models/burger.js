const orm = require('../config/orm');

function get(){
    return orm.selectAll({table:"burgers"});
}

function add(burger){
    return orm.addBurger({table:"burgers", obj:burger})
}

function devour(burger){
    //props.table, props.updateField, props.change, props.whereField, props.where
    return orm.addBurger({table:"burgers", updateField:"devoured", change:"1", whereField:"id", where:burger})
}

module.exports={
    get,
    add,
    devour
}