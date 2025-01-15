# MongoDB Aggregation Pipeline Bug: Incorrect Use of $inc Operator
This repository demonstrates a common error when using the `$inc` operator within MongoDB's aggregation pipeline. The `$inc` operator is intended for updating documents, not for transforming data within the aggregation pipeline. Attempting to use it outside of the `$group` stage will result in an error.

## Bug Description
The provided code attempts to increment the `count` field after the `$group` stage. This is incorrect. The `$inc` operator should be used within the `$group` stage to modify a field within each grouped document.

## Solution
The solution involves moving the `$inc` operator into the `$group` stage. This ensures that the increment is performed correctly on each grouped document.

## How to reproduce the error
1. Clone this repository.
2. Ensure a MongoDB instance is running.
3. Run the `bug.js` file using Node.js. This will produce a MongoDB error.
4. Run the `bugSolution.js` file using Node.js. This will perform the aggregation correctly.