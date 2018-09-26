jayss_icons = [];
window.onload = function(){
	jayss_icons = document.querySelectorAll('icon');
	jayss_icons.forEach(function(item, index){
		var name = item.innerText;
		if (typeof window["jayssIconis_"+name] == "function") {
			item.innerHTML = ''+window["jayssIconis_"+name]()+'';
		}
	})
}

// -----

function jayssIconis_fb_cl(){
	return '<svg enable-background="new 0 0 48 48" version="1.1" viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="24" cy="24" fill="#3b5999" r="24"/><path d="M29.9,19.5h-4v-2.6c0-1,0.7-1.2,1.1-1.2c0.5,0,2.8,0,2.8,0v-4.4l-3.9,0c-4.4,0-5.3,3.3-5.3,5.3v2.9h-2.5V24  h2.5c0,5.8,0,12.7,0,12.7h5.3c0,0,0-7,0-12.7h3.6L29.9,19.5z" fill="#FFFFFF"/></svg>';
}

// -----

function jayssIconis_at_circular_social(){
	return 'x';
}

function jayssIconis_circular_dribbble_social(){
	return 'x';
}

function jayssIconis_dribbble_social(){
	return 'x';
}

function jayssIconis_circular_facebook_social(){
	return 'x';
}

function jayssIconis_facebook_social(){
	return 'x';
}

function jayssIconis_circular_flickr_social(){
	return 'x';
}

function jayssIconis_flickr_social(){
	return 'x';
}

function jayssIconis_circular_github_social(){
	return 'x';
}

function jayssIconis_github_social(){
	return 'x';
}

function jayssIconis_circular_fm_last_social(){
	return 'x';
}

function jayssIconis_fm_last_social(){
	return 'x';
}

function jayssIconis_arrow_minimise_outline(){
	return 'x';
}

function jayssIconis_arrow_minimise(){
	return 'x';
}

function jayssIconis_arrow_move_outline(){
	return 'x';
}

function jayssIconis_arrow_move(){
	return 'x';
}

function jayssIconis_arrow_outline_repeat(){
	return 'x';
}

function jayssIconis_arrow_repeat(){
	return 'x';
}

function jayssIconis_arrow_outline_right(){
	return 'x';
}

function jayssIconis_arrow_right_thick(){
	return 'x';
}

function jayssIconis_arrow_right(){
	return 'x';
}

function jayssIconis_arrow_shuffle(){
	return 'x';
}

function jayssIconis_arrow_outline_sync(){
	return 'x';
}

function jayssIconis_arrow_sync(){
	return 'x';
}

function jayssIconis_arrow_outline_up(){
	return 'x';
}

function jayssIconis_arrow_thick_up(){
	return 'x';
}

function jayssIconis_arrow_up(){
	return 'x';
}

function jayssIconis_at(){
	return '<svg baseProfile="tiny" height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12,4c-4.411,0-8,3.589-8,8s3.589,8,8,8c1.616,0,3.172-0.479,4.499-1.384c0.456-0.312,0.574-0.934,0.263-1.39  c-0.311-0.457-0.932-0.572-1.39-0.263C14.378,17.642,13.212,18,12,18c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6v0.5  c0,0.552-0.448,1-1,1s-1-0.448-1-1v-3c0-0.553-0.447-1-1-1c-0.441,0-0.805,0.29-0.938,0.688C13.482,8.761,12.773,8.5,12,8.5  c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5c1.045,0,1.975-0.47,2.616-1.199C15.164,15.024,16.024,15.5,17,15.5c1.654,0,3-1.346,3-3  V12C20,7.589,16.411,4,12,4z M12,13.5c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5s1.5,0.673,1.5,1.5S12.827,13.5,12,13.5z"/></svg>';
}

function jayssIconis_attachment_outline(){
	return 'x';
}

function jayssIconis_attachment (){
	return 'x';
}

// ---

function jayssIconis_database(){
	return '<svg baseProfile="tiny" height="2ch" version="1.2" viewBox="0 0 24 24" width="2ch" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M18.983,8.791C18.807,5.087,15.747,2.125,12,2.125S5.193,5.087,5.017,8.791C5.015,8.82,5,8.845,5,8.875v6.25   c0,3.86,3.141,7,7,7s7-3.14,7-7v-6.25C19,8.845,18.985,8.82,18.983,8.791z M12,17.625c-2.22,0-4.132-1.324-5-3.222v-0.388   c1.271,1.3,3.042,2.11,5,2.11s3.729-0.811,5-2.11v0.388C16.132,16.301,14.22,17.625,12,17.625z M12,4.125c2.757,0,5,2.243,5,5   s-2.243,5-5,5s-5-2.243-5-5S9.243,4.125,12,4.125z M12,20.125c-2.271,0-4.172-1.532-4.778-3.609   c1.188,1.293,2.888,2.109,4.778,2.109s3.59-0.816,4.778-2.109C16.172,18.593,14.271,20.125,12,20.125z"/></g></svg>';
}

function jayssIconis_eject_outline(){
	return '<svg baseProfile="tiny" height="2ch" version="1.2" viewBox="0 0 24 24" width="2ch" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16,8.551V7c0-1.105-0.896-2-2-2H4v10c0,1.104,0.896,2,2,2h1.066c0.893,2.887,3.646,5,6.809,5  c3.859,0,7.062-3.016,7.062-6.875C20.938,11.964,18.869,9.385,16,8.551z M8,10.413v3.243c0,0.552-0.448,1-1,1s-1-0.448-1-1V7h6.656  c0.552,0,1,0.448,1,1s-0.448,1-1,1H9.413l4.801,4.799c0.392,0.391,0.392,1.025,0.001,1.415c-0.189,0.188-0.439,0.292-0.708,0.292  c-0.268,0-0.519-0.104-0.707-0.291L8,10.413z M14,20.031c-2.757,0-5-2.26-5-5.016c0-0.705-0.004-1.371,0.21-1.979l2.883,2.884  c0.39,0.39,0.901,0.584,1.414,0.584s1.022-0.194,1.414-0.584c0.781-0.78,0.781-2.049,0-2.83l-2.567-2.567  c0.517-0.226,1.065-0.398,1.646-0.398c2.757,0,5,2.182,5,4.938C19,17.82,16.757,20.031,14,20.031z"/></svg>';
}

function jayssIconis_anchor_outline(){
	return '<svg baseProfile="tiny" height="2ch" version="1.2" viewBox="0 0 24 24" width="2ch" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_1"><g><circle cx="12" cy="6" r="1"/></g><g><path d="M19.793,12.096C19.927,11.756,20,11.387,20,11c0-1.654-1.346-3-3-3h-0.422C16.851,7.381,17,6.703,17,6    c0-2.757-2.243-5-5-5S7,3.243,7,6c0,0.703,0.149,1.381,0.422,2H7c-1.654,0-3,1.346-3,3c0,0.387,0.073,0.756,0.207,1.096    C3.475,12.644,3,13.518,3,14.5c0,4.963,4.037,9,9,9s9-4.037,9-9C21,13.518,20.525,12.644,19.793,12.096z M12,21.5    c-3.859,0-7-3.141-7-7c0-0.553,0.447-1,1-1s1,0.447,1,1c0,2.414,1.721,4.434,4,4.898V12H7c-0.553,0-1-0.447-1-1s0.447-1,1-1h4    V8.816C9.838,8.403,9,7.305,9,6c0-1.657,1.343-3,3-3s3,1.343,3,3c0,1.305-0.838,2.403-2,2.816V10h4c0.553,0,1,0.447,1,1    s-0.447,1-1,1h-4v7.398c2.279-0.465,4-2.484,4-4.898c0-0.553,0.447-1,1-1s1,0.447,1,1C19,18.359,15.859,21.5,12,21.5z M7.321,13    H10v4.962c-1.207-0.701-2-2.009-2-3.462C8,13.903,7.737,13.367,7.321,13z M16.679,13C16.263,13.367,16,13.903,16,14.5    c0,1.453-0.793,2.761-2,3.462V13H16.679z"/><circle cx="12" cy="6" r="1"/></g></g></svg>';
}