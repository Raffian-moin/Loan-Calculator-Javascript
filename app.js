document.getElementById('loan-form').addEventListener('submit',calculateResults);


function calculateResults(e){
	const amount=document.getElementById('loan-amount');
	const interest=document.getElementById('interest');
	const years=document.getElementById('years');
	const monthlyPayment=document.getElementById('monthly-payment');
	const totalPayment=document.getElementById('total-payment');
	const totalInterest=document.getElementById('total-interest');

	const p=parseFloat(amount.value);
	const r=parseFloat(interest.value)/100/12;
	const n=parseFloat(years.value)*12;

	//calculaye monthly payment

	const x=Math.pow(1+r,n);
	const monthly=(p*r*n)/(x-1);

	if(isFinite(monthly)){
		monthlyPayment.value=monthly.toFixed(2);
		totalPayment.value=(monthly*n).toFixed(2);
		totalInterest.value=((monthly*n)-p).toFixed(2);
	}else{
		showError('please check your number');
	}

	e.preventDefault();
}

function showError(error){
	const erroDiv=document.createElement('div');

	const card=document.querySelector('.card');
	const heading=document.querySelector('.heading');

	erroDiv.className="alert alert-danger";
	erroDiv.appendChild(document.createTextNode(error));

	card.insertBefore(erroDiv,heading);
	
	setTimeout(clearError,3000);

	console.log('het');
}
function clearError(){
	document.querySelector('.alert').remove();
}