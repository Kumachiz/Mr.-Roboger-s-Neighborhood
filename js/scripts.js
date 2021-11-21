//Business Logic

function beepBoop(number) {
	let result = [];

	for (let i=''; i<=number; i++) {
		const numbers = getNumbers(i);

		if (numbers.includes(3)) {
			result.push("Won't you be my neighbor?");
		}
		else if (numbers.includes(2)) {
			result.push("Boop!");
		}
		else if (numbers.includes(1)) {
			result.push("Beep!");
		}
		else {
			result.push(i);
		}
	}

	return result;
}


function getNumbers(number) {
	let numbers = [];
	for (let currentNumber = number; number >= 1; number = Math.floor(number / 10)) {
		numbers.push(number % 10)
	}

	return numbers;
}

//UI Logic

$(document).ready(function() {
	$("#inputForm").submit(function(event) {
		event.preventDefault();
		
		$("#results").show();
		$("ul#numbers").empty();

		inputNumber = parseInt($("input#numberInput").val());
    $("#inputForm")[0].reset();
		
		const results = beepBoop(inputNumber);
		for (const result of results) {
			$("ul#numbers").append("<li>" + result + "</li>");
		}
	})
});