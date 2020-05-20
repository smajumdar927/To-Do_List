exports.getDate = function () {
	let today = new Date();
	// let currentDay = today.getDay();

	let options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	};
	return day = today.toLocaleDateString('en-us', options);

}

exports.getDay = function(){
    let today = new Date()

    let options = {
        weekday: 'long'
    }

    return day = today.toLocaleDateString('en-us', options)
    
}