db.collection('qmart').get().then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
		console.log(`${doc.id} => ${doc.data()}`);
	});
});