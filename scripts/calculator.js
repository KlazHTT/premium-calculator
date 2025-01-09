function calculator() {
  // pull from input fields
  var effectiveDate = document.getElementById("effectiveDate").value;
  var expiryDate = document.getElementById("expiryDate").value;
  var cancelDate = document.getElementById("cancelDate").value;
  var totalPremium = document.getElementById("totalPremium").value;
  var breakDO = document.getElementById("breakDO").value || 0;
  var breakEO = document.getElementById("breakEO").value || 0;
  var breakCyber = document.getElementById("breakCyber").value || 0;
  var breakLEI = document.getElementById("breakLEI").value || 0;
  var breakCGL = document.getElementById("breakCGL").value || 0;
  var breakProperty = document.getElementById("breakProperty").value || 0;
  var breakEB = document.getElementById("breakEB").value || 0;

  // calculate dates in policy term
  var policyDays = new Date(expiryDate).getTime() - new Date(effectiveDate).getTime();
  var termDays = policyDays / (1000 * 60 * 60 * 24);

  // calculate dates involved with cancellation
  var cancelDays = new Date(cancelDate).getTime() - new Date(effectiveDate).getTime();
  var forceDays = cancelDays / (1000 * 60 * 60 * 24);
  var remainingDays = termDays - forceDays;

  // calculate pro rata
  if(document.getElementById('calcProRata').checked) {
    var earnedFactor = Math.round(((forceDays / termDays) + Number.EPSILON)*100)/100;
    var unearnedFactor = Math.round(((remainingDays / termDays) + Number.EPSILON)*100)/100;
  // calculate short rate
  }else if(document.getElementById('calcShortRate').checked) {
    var earnedFactor = Math.round(((1 - ((remainingDays / termDays ) * 0.9)) + Number.EPSILON)*100)/100;
    var unearnedFactor = Math.round((((remainingDays / termDays) * 0.9) + Number.EPSILON)*100)/100;
  }

  // calculate premiums
  var earnedPremium = Math.round(((totalPremium * earnedFactor) + Number.EPSILON)*100)/100;
  var unearnedPremium = Math.round(((totalPremium * unearnedFactor) + Number.EPSILON)*100)/100;

  // calculate breakdown
  var calcBreak = +breakDO + +breakEO + +breakCyber + +breakLEI + +breakCGL + +breakProperty + +breakEB;
  // check if breakdown matches total premium
  var calcMatch = calcBreak-totalPremium;
  if(totalPremium<calcBreak) {
    var checkMatch = "Total breakdown is too high by " + calcMatch + ".";
    document.getElementById("checkMatch").className = 'red';
    var calculateBreakdown = false;
  }else if(totalPremium>calcBreak) {
    var checkMatch = "Total breakdown is too low by " + calcMatch + ".";
    document.getElementById("checkMatch").className = 'red';
    var calculateBreakdown = false;
  }else {
    var checkMatch = "Total breakdown matches total premium! Success!";
    document.getElementById("checkMatch").className = 'green';
    var calculateBreakdown = true;
  }

  // calculate breakdowns
  if(calculateBreakdown == true) {
    var earnedDO = Math.round(((breakDO * earnedFactor) + Number.EPSILON)*1000)/1000;
    var unearnedDO = Math.round(((breakDO * unearnedFactor) + Number.EPSILON)*1000)/1000;
    var earnedEO = Math.round(((breakEO * earnedFactor) + Number.EPSILON)*1000)/1000;
    var unearnedEO = Math.round(((breakEO * unearnedFactor) + Number.EPSILON)*1000)/1000;
    var earnedCyber = Math.round(((breakCyber * earnedFactor) + Number.EPSILON)*1000)/1000;
    var unearnedCyber = Math.round(((breakCyber * unearnedFactor) + Number.EPSILON)*1000)/1000;
    var earnedLEI = Math.round(((breakLEI * earnedFactor) + Number.EPSILON)*1000)/1000;
    var unearnedLEI = Math.round(((breakLEI * unearnedFactor) + Number.EPSILON)*1000)/1000;
    var earnedCGL = Math.round(((breakCGL * earnedFactor) + Number.EPSILON)*1000)/1000;
    var unearnedCGL = Math.round(((breakCGL * unearnedFactor) + Number.EPSILON)*1000)/1000;
    var earnedProperty = Math.round(((breakProperty * earnedFactor) + Number.EPSILON)*1000)/1000;
    var unearnedProperty = Math.round(((breakProperty * unearnedFactor) + Number.EPSILON)*1000)/1000;
    var earnedEB = Math.round(((breakEB * earnedFactor) + Number.EPSILON)*1000)/1000;
    var unearnedEB = Math.round(((breakEB * unearnedFactor) + Number.EPSILON)*1000)/1000;
  }else {
    var earnedDO = 'ERROR'
    var unearnedDO = 'ERROR'
    var earnedEO = 'ERROR'
    var unearnedEO = 'ERROR'
    var earnedCyber = 'ERROR'
    var unearnedCyber = 'ERROR'
    var earnedLEI = 'ERROR'
    var unearnedLEI = 'ERROR'
    var earnedCGL = 'ERROR'
    var unearnedCGL = 'ERROR'
    var earnedProperty = 'ERROR'
    var unearnedProperty = 'ERROR'
    var earnedEB = 'ERROR'
    var unearnedEB = 'ERROR'
  }

  // display policy terms
  document.getElementById("termDays").innerHTML = termDays;
  document.getElementById("forceDays").innerHTML = forceDays;
  document.getElementById("remainingDays").innerHTML = remainingDays;
  document.getElementById("earnedFactor").innerHTML = earnedFactor;
  document.getElementById("unearnedFactor").innerHTML = unearnedFactor;
  document.getElementById("earnedPremium").innerHTML = earnedPremium;
  document.getElementById("unearnedPremium").innerHTML = unearnedPremium;
  // display breakdown
  document.getElementById("checkMatch").innerHTML = checkMatch;
  document.getElementById("earnedDO").innerHTML = earnedDO;
  document.getElementById("unearnedDO").innerHTML = unearnedDO;
  document.getElementById("earnedEO").innerHTML = earnedEO;
  document.getElementById("unearnedEO").innerHTML = unearnedEO;
  document.getElementById("earnedCyber").innerHTML = earnedCyber;
  document.getElementById("unearnedCyber").innerHTML = unearnedCyber;
  document.getElementById("earnedLEI").innerHTML = earnedLEI;
  document.getElementById("unearnedLEI").innerHTML = unearnedLEI;
  document.getElementById("earnedCGL").innerHTML = earnedCGL;
  document.getElementById("unearnedCGL").innerHTML = unearnedCGL;
  document.getElementById("earnedProperty").innerHTML = earnedProperty;
  document.getElementById("unearnedProperty").innerHTML = unearnedProperty;
  document.getElementById("earnedEB").innerHTML = earnedEB;
  document.getElementById("unearnedEB").innerHTML = unearnedEB;
}
doSomething
