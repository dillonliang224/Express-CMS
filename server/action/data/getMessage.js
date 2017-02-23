var getMessageList = require('../../data/getMessage');

exports.execute = function (req, res) {
     getMessageList.getMessageList(function (data) {
         //console.log('res send data:' + data[2]);
         //console.log('data length: ' + data.length);
         res.send(data);
     });
};