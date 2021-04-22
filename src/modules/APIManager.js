const remoteURL = "http://localhost:5002"

//https://firebase.google.com/docs/reference/rest/database

export const getAll = () => {
	return fetch(`${remoteURL}/chrisLists?userId=${getUser().id}`)
	.then(response => response.json())
}

export const getOneItem = (id) => {
	console.log("getone", id);
	return fetch(`${remoteURL}/chrisLists/${id}`)
	.then(response => response.json())
}

export const addItem = (itemObj) => {
	return fetch(`${remoteURL}/chrisLists`,{
		method:"POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(itemObj)
	}).then(response => response.json())
}

export const updateItem = (itemObj) => {
	//we don't want to add the firebase key to the item object on firebase(duplication of data) so, 
	//make a reference to the fbid and then remove it from the object
	const id = itemObj.id;
	// delete itemObj.id;

	return fetch(`${remoteURL}/chrisLists/${id}`,{
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(itemObj)
	})	
}

export const updateChristList = (itemObj) => {

	//we don't want to add the firebase key to the item object on firebase(duplication of data) so, 
	//make a reference to the fbid and then remove it from the object
	const id = itemObj.fbid;
	delete itemObj.fbid;

	return fetch(`${remoteURL}/chrisLists/${id}`,{
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(itemObj)
	})	
}

export const deleteItem = (itemID) => {
	return fetch(`${remoteURL}/chrisLists/${itemID}`,{
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		},
	}).then(response => {
		//should return 200 OK HTTP status code
		return response.status
	})
}

export const getUser = () => {
	const user = {
		id: 1,
		name: "Brenda"
	}

	return user;
}

// export const getPromiseAll = () {
// 	//https://javascript.info/promise-api
// 	//let promise = Promise.all([...promises...]);

// 	let urls = [
// 		'https://api.github.com/users/iliakan',
// 		'https://api.github.com/users/remy',
// 		'https://api.github.com/users/jeresig'
// 	  ];
	  
// 	  // map every url to the promise of the fetch
// 	  let requests = urls.map(url => fetch(url));
	  
// 	  // Promise.all waits until all jobs are resolved
// 	  Promise.all(requests)
// 		.then(responses => responses.forEach(
// 		  response => alert(`${response.url}: ${response.status}`)
// 		));


// }