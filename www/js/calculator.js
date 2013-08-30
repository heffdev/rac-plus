/**
 * calculateSimpleInterest
 */
function calculateSimpleInterest() {
	var time  = parseFloat($('#simpleInterestTime').val());
	var rate = parseFloat($('#simpleInterestRate').val());
	var principle = parseFloat($('#simpleInterestPrinciple').val());
	
	if(isNaN(time) || isNaN(rate) || isNaN(principle)){
		return;
	}
	
	var simpleInterest = principle*(rate/100)*time;
	$('#simpleInterestResult').text("Simple Interest = " + simpleInterest.toFixed(2));
}

/**
 * calculateCompundInterest
 */
function calculateCompoundInterest() {
	var time  = parseFloat($('#compoundInterestTime').val()); 
	var rate = parseFloat($('#compoundInterestRate').val());
	var principle = parseFloat($('#compoundInterestPrinciple').val());
	
	if(isNaN(time) || isNaN(rate) || isNaN(principle)){
		return;
	}
	
	var futureVal = principle * Math.pow((1.0+(rate/100)),time);
	var totalInt = futureVal - principle;
	
	//futureVal = Math.round(futureVal*100.0)/100.0;
    //totalInt  = Math.round(totalInt*100.0)/100.0;
    
	var compoundInterest = totalInt;
	$('#compoundInterestResult').text("Compound Interest = " + compoundInterest.toFixed(2));
}

/**
 * calculateGrossScheduledIncome
 */
function calculateGrossScheduledIncome() {
	var totalRentPayment  = parseFloat($('#grossScheduledIncomeTotalRentPayment').val()); 
	var totalRentPotential  = parseFloat($('#grossScheduledIncomeTotalPotentialRent').val()); 
	
	if(isNaN(totalRentPayment) || isNaN(totalRentPotential)){
		return;
	}
	var grossScheduledIncome = totalRentPayment + totalRentPotential;
	$('#grossScheduledIncomeResult').text("Gross Scheduled Income = " + grossScheduledIncome.toFixed(2));
}

/**
 * calculateVacancyAndCreditLoss
 */
function calculateVacancyAndCreditLoss() {
	var vacancyAndCreditLossGrossScheduledIncome  = parseFloat($('#vacancyAndCreditLossGrossScheduledIncome').val()); 
	var vacancyAndCreditLossPercent  = parseFloat($('#vacancyAndCreditLossPercent').val()); 
	
	if(isNaN(vacancyAndCreditLossGrossScheduledIncome) || isNaN(vacancyAndCreditLossPercent)){
		return;
	}
	var vacancyAndCreditLoss = vacancyAndCreditLossGrossScheduledIncome * (vacancyAndCreditLossPercent/100);
	$('#vacancyAndCreditLossResult').text("Vacancy and Credit Loss = " + vacancyAndCreditLoss.toFixed(2));
}

/**
 * calculateGrossOperatingIncome
 */
function calculateGrossOperatingIncome() {
	var grossOpertingIncomeGrossScheduledIncome  = parseFloat($('#grossOpertingIncomeGrossScheduledIncome').val()); 
	var grossOpertingIncomeVacancyAndCreditLoss  = parseFloat($('#grossOpertingIncomeVacancyAndCreditLoss').val()); 
	
	if(isNaN(grossOpertingIncomeGrossScheduledIncome) || isNaN(grossOpertingIncomeVacancyAndCreditLoss)){
		return;
	}
	var grossOperatingIncome = grossOpertingIncomeGrossScheduledIncome - ((grossOpertingIncomeVacancyAndCreditLoss/100)*grossOpertingIncomeGrossScheduledIncome);
	$('#grossOpertingIncomeResult').text("Gross Operating Income = " + grossOperatingIncome.toFixed(2));
}

/**
 * calculateNetOperatingIncome
 */
function calculateNetOperatingIncome() {
	var noiGrossScheduledIncome  = parseFloat($('#noiGrossScheduledIncome').val()); 
	var noiVacancyAndCreditLoss  = parseFloat($('#noiVacancyAndCreditLoss').val()); 
	var noiOperatingExpenses  = parseFloat($('#noiOperatingExpenses').val()); 
	
	if(isNaN(noiGrossScheduledIncome) || isNaN(noiVacancyAndCreditLoss) || 
			isNaN(noiOperatingExpenses)){
		return;
	}
	var grossOperatingIncome = noiGrossScheduledIncome - ((noiVacancyAndCreditLoss/100)*noiGrossScheduledIncome);
	var netOperatingIncome = grossOperatingIncome - noiOperatingExpenses;
	$('#netOperatingIncomeResult').text("Net Operating Income = " + netOperatingIncome.toFixed(2));
}

/**
 * calculateCapitalizationRate
 */
function calculateCapitalizationRate() {
	var capRateNetOperatingIncome  = parseFloat($('#capRateNetOperatingIncome').val()); 
	var capRateMarketValue  = parseFloat($('#capRateMarketValue').val()); 
	var capRateCapitalizationRate  = parseFloat($('#capRateCapitalizationRate').val()); 
	
	var capRate = capRateCapitalizationRate;
	var value = capRateMarketValue;
	var noi = capRateNetOperatingIncome;
	
	if(!isNaN(capRateNetOperatingIncome) && !isNaN(capRateMarketValue)){
		// calculate cap rate
		capRate = noi/value;
		$('#capitalizationRateResult').text("Cap Rate = " + (capRate*100).toFixed(2) + "%");
	} else if (!isNaN(capRateMarketValue) && !isNaN(capRateCapitalizationRate)) {
		// calculate noi
		noi = value*capRate;
		$('#capitalizationRateResult').text("NOI = " + noi.toFixed(2));
	} else if (!isNaN(capRateNetOperatingIncome) && !isNaN(capRateCapitalizationRate)) {
		// calculate market value
		value = noi/capRate;
		$('#capitalizationRateResult').text("Market Value = " + value.toFixed(2));
	}
	
}

/**
 * calculateNetIncomeMultiplier
 */
function calculateNetIncomeMultiplier() {
	var netIncomeMultiplierCapRate  = parseFloat($('#netIncomeMultiplierCapRate').val()); 
	
	if(isNaN(netIncomeMultiplierCapRate)) {
		return;
	}
	var netIncomeMultplier = 1/ (netIncomeMultiplierCapRate/100);
	$('#netIncomeMultiplierResult').text("Net Income Multiplier = " + netIncomeMultplier.toFixed(2));
}

/**
 * calculateTaxableIncome
 */
function calculateTaxableIncome() {
	
	var taxableIncomeNOI = parseFloat($('#taxableIncomeNOI').val()); 
	var taxableIncomeMortgageInterest  = parseFloat($('#taxableIncomeMortgageInterest').val()); 
	var taxableIncomeDepreciationProperty  = parseFloat($('#taxableIncomeDepreciationProperty').val()); 
	var taxableIncomeDepreciationAdditions  = parseFloat($('#taxableIncomeDepreciationAdditions').val()); 
	var taxableIncomeAmortization  = parseFloat($('#taxableIncomeAmortization').val()); 
	var taxableIncomeInterest  = parseFloat($('#taxableIncomeInterest').val()); 
	
	if(isNaN(taxableIncomeNOI)) {
		return;
	}
 	var taxableIncome = taxableIncomeNOI;
 	
 	if(!isNaN(taxableIncomeMortgageInterest)) {
 		//subtract taxableIncomeMortgageInterest
 		taxableIncome = taxableIncome - taxableIncomeMortgageInterest;
 	}
 	
 	if(!isNaN(taxableIncomeDepreciationProperty)) {
 		//subtract taxableIncomeDepreciationProperty
 		taxableIncome = taxableIncome - taxableIncomeDepreciationProperty;
 	}
 	
 	if(!isNaN(taxableIncomeDepreciationAdditions)) {
 		//subtract taxableIncomeDepreciationAdditions
 		taxableIncome = taxableIncome - taxableIncomeDepreciationAdditions;
 	}
 	
 	if(!isNaN(taxableIncomeAmortization)) {
 		//subtract taxableIncomeAmortization
 		taxableIncome = taxableIncome - taxableIncomeAmortization;
 	}
	
 	if(!isNaN(taxableIncomeInterest)) {
 		//add taxableIncomeInterest
 		taxableIncome = taxableIncome +taxableIncomeInterest;
 	}
 	
	$('#taxableIncomeResult').text("Taxable Income = " + taxableIncome.toFixed(2));
}

/**
 * calculateCashFlow
 */
function calculateCashFlow(){
	var cashFlowNOI = parseFloat($('#cashFlowNOI').val()); 
	var cashFlowDebtService = parseFloat($('#cashFlowDebtService').val()); 
	var cashFlowCapitalAdditions = parseFloat($('#cashFlowCapitalAdditions').val()); 
	var cashFlowLoanProceeds = parseFloat($('#cashFlowLoanProceeds').val()); 
	var cashFlowInterestEarned = parseFloat($('#cashFlowInterestEarned').val()); 
	var cashFlowTaxLiability = parseFloat($('#cashFlowTaxLiability').val()); 
	
	var cashFlowBeforeTaxes = cashFlowNOI;
	
	if(!isNaN(cashFlowDebtService)) {
		// subtract cashFlowDebtService
		cashFlowBeforeTaxes = cashFlowBeforeTaxes - cashFlowDebtService;
	}
	
	if(!isNaN(cashFlowCapitalAdditions)) {
		// subtract cashFlowCapitalAdditions
		cashFlowBeforeTaxes = cashFlowBeforeTaxes - cashFlowCapitalAdditions;
	}
	
	if(!isNaN(cashFlowLoanProceeds)) {
		// add cashFlowLoanProceeds
		cashFlowBeforeTaxes = cashFlowBeforeTaxes + cashFlowLoanProceeds;
	}
	
	if(!isNaN(cashFlowInterestEarned)) {
		// add cashFlowInterestEarned
		cashFlowBeforeTaxes = cashFlowBeforeTaxes + cashFlowInterestEarned;
	}
	
 	if(!isNaN(cashFlowTaxLiability)) {
 		// subtract cashFlowTaxLiability from cashFlowAfterTaxes
 		cashFlowBeforeTaxes = cashFlowBeforeTaxes -  cashFlowTaxLiability;
 	}
 	if(!isNaN(cashFlowDebtService)) {
 		$('#cashFlowResult').text("Cash Flow Before Taxes = " + cashFlowBeforeTaxes.toFixed(2));
 	}
	
}



































