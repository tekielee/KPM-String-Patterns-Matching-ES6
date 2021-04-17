function computeLPS(pattern, lps) {
	let len = 0;
	let i = 1;
	let M = pattern.length;
	lps[0] = 0;
	while(i < M) {
		if(pattern[i] === pattern[len]) {
			len++;
			lps[i] = len;
			i++;
		} else {
			if(len !== 0) {
				len = lps[len - 1];
			} else {
				lps[i] = 0;
				i++;
			}
		}
	}
}

function kMPStringMatching(str, pattern) {
	let matches = [];
	let M = pattern.length;
	let N = str.length;
	let i = j = 0;
	lps = [];
	computeLPS(pattern, lps);
	while(i < N) {
		if(pattern[j] === str[i]) {
			j++;
			i++;
		}
		if(j === M) {
			matches.push(i - j);
			j = lps[j - 1];
		} else if( i < N && pattern[j] !== str[i]) {
			if(j !== 0) {
				j = lps[j - 1];
			} else {
				i = i + 1;
			}
		}
	}
	return matches;
}

let txt = 'AABAACAADAABABBBAABAA';
let pattern = 'AABA';
let matches = kMPStringMatching(txt, pattern);
if(matches) {
	for(let v = 0; v < matches.length; v++) {
		console.log('Pattern found at index: ' + matches[v]);
	}
}