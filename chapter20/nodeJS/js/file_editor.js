let textarea = document.querySelector('#editor'),
	fileList = document.querySelector('#files'),
	[btCreate, btUpdate, btDelete] = document.querySelectorAll(".flex-btn a");

function loadFileList () {
	fetch("/public")
		.then(resp => {
			if (resp.status !== 200) {
				console.log(`There was a problem. Status code: ${resp.status}`);
				return;
			}
			return resp.text();
		})
		.then(text => {
			let firstOpt = document.createElement('option');
			firstOpt.value = "",
			firstOpt.textContent = 'Choose a file',
			fileList.appendChild(firstOpt);
			for (let file of text.split('\n')) {
				let opt = document.createElement('option');
				opt.textContent = file;
				fileList.appendChild(opt);	
			} 

			loadCurrentFile();
		})
		.catch(err => {
			console.log('Fetch error :-(', err)
		});	
}

function loadCurrentFile () {
	if (fileList.value == '') { textarea.value = "File content shows up here"; return;}
	fetch('public/' + fileList.value).then(resp => resp.text()).then(text => {
		textarea.value = text;
	});
}

function validateFilename (filename = '') {
	let fn = filename;
	if (fn == null) return fn;
	while(!new RegExp('^[\\w\\s\\-]+\\.\\w{2}\\w*$','g').test(fn)) {
		fn = prompt('Insert a valid filename.'+
		' DON\'T FORGET the file extension!');
		console.log(fn);
		if (fn == null) return fn;
	} 
	return fn;
}

fileList.addEventListener('change', e => {
	loadCurrentFile();
});

btUpdate.addEventListener('click', e => {
	e.preventDefault();
	if (fileList.value == '') return;
	fetch('public/' + fileList.value, 
		{	method: 'PUT',
			headers: {
				"Content-Type": "text/plain"
			},
			body: textarea.value 
		});

});

btDelete.addEventListener('click', e => {
	e.preventDefault();
	let filename = fileList.value;
	if (filename == '') return;
	if (!confirm(`Are you sure you want to delete ${filename}?\n` +
				`There will be NO WAY to retrieve it afterwards!\n` +
				`SO BE SURE!`)) return;
	fetch('public/' + fileList.value, 
		{	method: 'DELETE'
		}).then(resp => {
			if (resp.status == 204) {
				fileList.innerHTML = '';
				loadFileList();
			}
		});

});

btCreate.addEventListener('click', e => {
	e.preventDefault();
	let filename = validateFilename();
	if (filename == null) return;
	fetch('public/')
		.then(r => r.text())
		.then(text => {
			let found = false, 
				list = text.split('\n');
			do {
				if (filename == null) return; 
				found = list.some(file => filename == file);
				if (found) {
					filename = validateFilename(
						 prompt(`Filename ${filename} already exists.` +
								 ` Choose another one.`)
					 );
				}
			} while (found);
			textarea.value = 'This is a brand new file';
			
			// console.log('it begins creating new file');
			fetch('public/' + filename, 
				{	method: 'PUT',
					headers: {
						"Content-Type": "text/plain"
					},
					body: textarea.value 
			}).then(resp => { 
				if (resp.status == 204) {
					let opt = document.createElement('option');
					opt.value = opt.textContent = filename;
					fileList.appendChild(opt);
					fileList.value = opt.value;
				} 
			});
		});
// console.log('it exits click')
});

loadFileList();