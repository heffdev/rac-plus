// Simple Interest Start
$("#simpleInterestPrinciple").live("change" , function() {
	calculateSimpleInterest();
});

$("#simpleInterestRate").live("change" , function() {
	calculateSimpleInterest();
});

$("#simpleInterestTime").live("change" , function() {
	calculateSimpleInterest();
});
//Simple Interest End

//*************************************************************************************

//Compound Interest Start
$("#compoundInterestPrinciple").live("change" , function() {
	calculateCompoundInterest();
});

$("#compoundInterestRate").live("change" , function() {
	calculateCompoundInterest();
});

$("#compoundInterestTime").live("change" , function() {
	calculateCompoundInterest();
});
//Compound Interest End


//*************************************************************************************

//Gross Scheduled Income Start
$("#grossScheduledIncomeTotalRentPayment").live("change" , function() {
	calculateGrossScheduledIncome();
});

$("#grossScheduledIncomeTotalPotentialRent").live("change" , function() {
	calculateGrossScheduledIncome();
});
//Gross Scheduled Income End

//*************************************************************************************

//Vacancy and Credit Loss Start
$("#vacancyAndCreditLossGrossScheduledIncome").live("change" , function() {
	calculateVacancyAndCreditLoss();
});

$("#vacancyAndCreditLossPercent").live("change" , function() {
	calculateVacancyAndCreditLoss();
});
//Vacancy and Credit Loss End

//Gross Operating Income Start
$("#grossOpertingIncomeGrossScheduledIncome").live("change" , function() {
	calculateGrossOperatingIncome();
});

$("#grossOpertingIncomeVacancyAndCreditLoss").live("change" , function() {
	calculateGrossOperatingIncome();
});
//Gross Operating Income End

//Net Operating Income Start
$("#noiGrossScheduledIncome").live("change" , function() {
	calculateNetOperatingIncome();
});

$("#noiVacancyAndCreditLoss").live("change" , function() {
	calculateNetOperatingIncome();
});

$("#noiOperatingExpenses").live("change" , function() {
	calculateNetOperatingIncome();
});
//Net Operating Income End

//Capitalization Rate Start
$("#capRateNetOperatingIncome").live("change" , function() {
	calculateCapitalizationRate();
});

$("#capRateMarketValue").live("change" , function() {
	calculateCapitalizationRate();
});

$("#capRateNetOperatingIncome").live("change" , function() {
	calculateCapitalizationRate();
});
//Capitalization Rate End

//Net Income Multiplier Start
$("#netIncomeMultiplierCapRate").live("change" , function() {
	calculateNetIncomeMultiplier();
});
//Net Income Multiplier End

//Taxable Income Start
$("#taxableIncomeNOI").live("change" , function() {
	calculateTaxableIncome();
});

$("#taxableIncomeMortgageInterest").live("change" , function() {
	calculateTaxableIncome();
});

$("#taxableIncomeDepreciationProperty").live("change" , function() {
	calculateTaxableIncome();
});

$("#taxableIncomeDepreciationAdditions").live("change" , function() {
	calculateTaxableIncome();
});

$("#taxableIncomeAmortization").live("change" , function() {
	calculateTaxableIncome();
});

$("#taxableIncomeInterest").live("change" , function() {
	calculateTaxableIncome();
});
//Taxable Income End

//Cash Flow Start
$("#cashFlowNOI").live("change" , function() {
	calculateCashFlow();
});

$("#cashFlowDebtService").live("change" , function() {
	calculateCashFlow();
});

$("#cashFlowCapitalAdditions").live("change" , function() {
	calculateCashFlow();
});

$("#cashFlowLoanProceeds").live("change" , function() {
	calculateCashFlow();
});

$("#cashFlowInterestEarned").live("change" , function() {
	calculateCashFlow();
});

$("#cashFlowTaxLiability").live("change" , function() {
	calculateCashFlow();
});
//Cash Flow End