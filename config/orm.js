const connection = require('./connections.js');

function selectAll(props){
    return connection.query(`
    SELECT * FROM ??;
    `,
    props.table)
}

function insertOne(props){
    return connection.query(`
    INSERT INTO ?? SET ?;
    `,
    [props.table, props.obj]);
}

function updateOne(props){
    return connection.query(`
    UPDATE ?? SET ? = ? WHERE ? = ?;
    `,
    [props.table, props.updateField, props.change, props.whereField, props.where]
    );
}


module.exports = {
    selectAll,
    insertOne,
    updateOne,
    connection
}