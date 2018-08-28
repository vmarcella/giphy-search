function copy(bitly_url){
	const temp_element = document.createElement("textarea");
	temp_element.value = bitly_url;
	document.body.appendChild(temp_element);
	temp_element.select();
	document.execCommand("copy");
	document.body.removeChild(temp_element);
}
