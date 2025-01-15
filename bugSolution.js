```javascript
//Correct usage of $inc operator in MongoDB aggregation pipeline
db.collection('myCollection').aggregate([
  { $match: { someField: 'someValue' } },
  { $group: { _id: '$someField', count: { $sum: 1 } } },
  { $project: { _id: 0, count: { $add: ['$count', 1] } }}
]);
```