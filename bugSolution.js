```javascript
// Correct approach using $exists operator
db.collection.find({ field: { $exists: true } }); 
//Alternative approach for specific needs 
if (myArray.length > 0) {
  db.collection.find({ field: { $in: myArray } });
} else {
  db.collection.find({}); //Return all documents if myArray is empty
}
```