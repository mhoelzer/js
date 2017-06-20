var fs = require('fs');
function getBts(filepath, done){
	fs.readFile(filepath, function(err, bts){
		if (err) return done(err);
		fs.readFile('0.17_bts.members', function(err, members){
			if (err) return done(err);
			compareBts(bts, members);
		})
	})
	var compareBts = function (bts, members){
		members = members.toString().split('\n');
		bts = bts.toString().split('\n').filter(function(bts){
			return members.indexOf(bts) !== -1
		})
		done(bts);
	}
}

getBts('0.17_bts.txt', function(bts){
	console.log(bts);
})