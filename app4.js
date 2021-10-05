var {MongoClient}=require("mongodb")
var url= "mongodb://localhost:27017/crud_operations";

MongoClient.connect(url, function(err, client)
{
    const db=client.db("crud_operations")
    if(err) throw err;
    db.collection("crudcollect").updateMany({employee_name:'iliyas'},{$set:{employee_name:'iiliyas'}},function(err, res)
    {
        console.log("files updated")
        client.close();
    })
    
})
