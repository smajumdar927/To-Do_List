module.exports.getDate = getDate;

function getDate() {
	let today = new Date();
	// let currentDay = today.getDay();

	let options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	};
	return day = today.toLocaleDateString('en-us', options);

}

module.exports.getDay = getDay
function getDay(){
    let today = new Date()

    let options = {
        weekday: 'long'
    }

    return day = today.toLocaleDateString('en-us', options)
    
}