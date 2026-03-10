document.getElementById("claimForm").addEventListener("submit", function(e){

e.preventDefault();

let amount = document.getElementById("amount").value;
let previous = document.getElementById("previous").value;

let riskScore = 0;

if(amount > 500000){
riskScore += 50;
}

if(previous > 3){
riskScore += 30;
}

if(amount > 1000000){
riskScore += 20;
}

let result = document.getElementById("result");

if(riskScore >= 70){
result.innerHTML = "⚠️ High Fraud Risk Detected";
result.style.color = "red";
}
else if(riskScore >= 30){
result.innerHTML = "⚠️ Medium Fraud Risk";
result.style.color = "orange";
}
else{
result.innerHTML = "✅ Claim Looks Genuine";
result.style.color = "green";
}

});