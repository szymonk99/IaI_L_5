var x = '\n';

for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {

		x += (i*j) + ' ';
	}
    x += '\n'
}

console.log(x);