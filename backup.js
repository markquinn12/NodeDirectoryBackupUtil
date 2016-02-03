var fse = require('fs-extra');
var dateFormat = require('dateformat');

module.exports = {
    copy: function () {

        var jsonData = require('./toCopy.json');
        var paths = jsonData.paths;
        var now = new Date();
        var date = dateFormat(now, "dd-mm-yy_HH-MM");

        for (var i in paths) {

            var backupInfo = paths[i];
            var source = backupInfo.source;
            var destination = backupInfo.destination + '\\' + backupInfo.description + '_' + date;

            fse.copy(source, destination, { clobber: false }, function (err) {
                if (err) return console.error(err)
                console.log('Copy Success!');
            })
            console.log('Copying: ' + source + ' to ' + destination);
        }
    }
};
