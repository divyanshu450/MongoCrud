var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/crud_operations";
MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var myobj = [
    { employee_id: "vb001", employee_name: "joshua" },
    { employee_id: "vb002", employee_name: "enoch" },
    { employee_id: "vb003", employee_name: "shan" },
    { employee_id: "vb004", employee_name: "venkat" },
    { employee_id: "vb005", employee_name: "shan" },
    { employee_id: "vb006", employee_name: "iliyas" },
    { employee_id: "vb007", employee_name: "desa" },
  ];
  const db = client.db("crud_operations");
  db.collection("crudcollect").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    client.close();
  });
});
