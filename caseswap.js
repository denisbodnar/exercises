// Write a JavaScript program that accepts a string as input and swap the
// case of each character. For example if you input 'The Quick Brown Fox' the output should
// be 'tHE qUICK bROWN fOX'.

function caseSwap(string){
	var words=string.split('');
	for (var i=0; i<words.length; i++) {
		if (words[i]==words[i].toLowerCase()) {
			words[i]=words[i].toUpperCase();
		} else {
			words[i]=words[i].toLowerCase();
		}
	};
	return words.join("");
}

var str='The Quick Brown Fox';
caseSwap(str);