function reverseString() {
	// Defines the string and puts it into a variable.
		var original = document.getElementById("input").value;
	
	/* To change the String through a code.
		var original = 'I am Yoda';
	Delete this to use it through the console. -> */
		
	// Reverses the string by sticking it into an array and joining it together.
		//.split takes the string and splits it into an array.
			var reversed = original.split(' ')
		//.reverse takes the words in the array and reverses it.
			.reverse()
		//.join takes the array and joins it back into a string in the end.
			.join(' ');
		
	// Prints the data stored in the reversed variable to the div
		var div = document.getElementById('div1');
		div.innerHTML = div.innerHTML + reversed;
}