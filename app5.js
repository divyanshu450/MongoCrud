const {MongoClient} =require("mongodb");
const url="mongodb://localhost:27017/crud_operations"

MongoClient.connect(url, function(err, client)
{
    const db=client.db("crud_operations")
    if(err) throw err;
    db.collection("crudcollect").deleteOne({"employee_name":'shan'}, function(err, result){
        console.log("deleted")
        client.close();
    })
})