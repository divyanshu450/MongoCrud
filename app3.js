var {MongoClient}= require("mongodb");
var url="mongodb://localhost:27017/crud_operations"
//async function read(){
 MongoClient.connect(url, function(err, client)
{
    const db= client.db("crud_operations");
    if(err) throw err;
    
    //let cursor= db.collection("crudcollect").find().toArray()
    db.collection("crudcollect").find({}).toArray(function(err, result)
    {
        console.log(result);
        client.close();
    });
   // print(db.collection("crudcollect").find().pretty());
   
     //  console.log(cursor);
   
    
}
)
