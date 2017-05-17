var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
// var formattedDate = date.format('dddd, MMMM Do YYYY, h:mm a');
// console.log(formattedDate);
console.log(date.format('h:mm a'));
