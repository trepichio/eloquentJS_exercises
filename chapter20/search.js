/////////////////
// My solution //
/////////////////
/*const {readFileSync, readdirSync}  = require('fs');
const [node, file, regex, ...paths] = process.argv;
const cwd = process.cwd();
// console.log('CWD:', cwd);
// console.log('node:', node);
// console.log('script:', file);
// console.log('paths:', paths);
if (regex == null) return console.log('Missing a Regular Expression argument');
let regEx = RegExp(regex,'g');
// console.log('Regex:', regEx);

if (paths.length == 0) { paths.push(cwd)}

function searchFiles(files) {
	for (let file of files) {
		try{
			let content = readFileSync(file,'utf8');
			if (content.match(regex)) console.log(file);
		}
		catch(err){
			// Reading doc I've found out that it's better to check 
			// whether it is a directory by handling an error on readFile
			// instead of use fs.stat.
			if (err.code != "EISDIR") throw err;
			let dir = file;
			let contentDir = readdirSync(dir, 'utf8');
			let pathsDir = contentDir.map(f => dir + '/' + f );
			searchFiles(pathsDir);
		}
	}	
}
searchFiles(paths);*/

//////////////////////////////
// My asynchronous solution //
//////////////////////////////
const {stat, readFile, readdir} = require('fs').promises;


let searchTerm = new RegExp(process.argv[2]);
if (searchTerm == "/(?:)/") return console.log('Missing a Regular Expression argument');

for (let arg of process.argv.slice(3)){
	search(arg);
}

async function search (file) {
	let stats = await stat(file);
	if (stats.isDirectory()) {
		let files = await readdir(file);
		for (let f of files) {
			search(file + '/' + f);	
		} 
	} else if (searchTerm.test(await readFile(file, 'utf8'))){
		console.log(file);
	}
}

/////////////////////
// Book's solution //
/////////////////////
/*const {statSync, readdirSync, readFileSync} = require('fs');

let searchTerm = new RegExp(process.argv[2]);

for (let arg of process.argv.slice(3)) {
	search(arg);	
} 

function search (file) {
	let stats = statSync(file); 
	if (stats.isDirectory()) {
		for (let f of readdirSync(file)) {
			search(file + '/' + f);
		} 
	} else if (searchTerm.test(readFileSync(file,'utf8'))){
		console.log(file);
	}
}*/