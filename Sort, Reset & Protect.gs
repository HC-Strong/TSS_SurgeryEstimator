// Script written by Hannah Strong <stronghannahc@gmail.com> for James Atkins, March 2017
// Last edit November 28, 2018

/**
 * @OnlyCurrentDoc
 */
// The above tag restricts access to only the connected document, so this script cannot modify any other document in the user’s drive


function onOpen() {
  
    var submenu = [{name:"Sort Procedures", functionName:"sortProcedures"}, {name:"Reset Sheet", functionName:"resetSheet"}, {name:"getFormulaTests", functionName:"getFormulaTests"}];
    SpreadsheetApp.getActiveSpreadsheet().addMenu('Form Options', submenu);
}

// Protect formula ranges, move selection to next input field after edit
function onEdit(e) {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   var sheet = ss.getActiveSheet();
   var cell = sheet.getActiveCell();
   var editRange = e.range;
   var editCol = editRange.getColumn();
   var cellAddresses = ['B1', 'B2', 'B3', 'B5', 'B7', 'B8', 'B10', 'B12', 'B13','B14', 'B16','B17', 'B20', 'B21', 'B24', 'B25', 'B28', 'B29', 'B36', 'B39', 'B1'];
  
    if (sheet.getName() == "QuoteForm" && cell.getColumn() == 2) {
      
      nextField(cell, sheet, cellAddresses);
  }
      //Browser.msgBox("editCol is " + editCol + " and index of is " + cellAddresses.indexOf(editRange.getA1Notation()));
  if (sheet.getName() == "QuoteForm" && editCol != 4 && cellAddresses.indexOf(editRange.getA1Notation()) == -1) {

     passwordProtect(e);
  }
  

}

// Prompt for password before allowing edit of formula cells 
// This method was used to get around issues with sharing permissions when the built-in protection was used
function passwordProtect(e){
    var password = "James Atkins";
    
    var passwordAttempt = Browser.inputBox('Enter Password to edit protected range, or hit cancel to cancel edit:', Browser.Buttons.OK_CANCEL);
    if(passwordAttempt == password) {
      Browser.msgBox('Edit Accepted');
    } else {
      if (passwordAttempt != 'cancel'){
        Browser.msgBox('Incorrect password. Contact James Atkins for password to edit protected ranges.');
      }
      if(e.oldValue){
         //Browser.msgBox('old value is defined as ' + e.oldFormula);
         e.range.setValue(e.oldValue);
      } else {
         e.range.clear();
      }
   }
}

//Move active cell to next input field after edit (or loop if at end of input range)
function nextField(cell, sheet, cellAddresses){
    var index = cellAddresses.indexOf(cell.getA1Notation());
    var destination = cellAddresses[index + 1];

    sheet.setActiveSelection(destination);
}


function sortProcedures() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var sortRange = sheet.getRange(3, 4, sheet.getLastRow()-2, 4);
  
  var cpCol = 4;   //Choose Procedures Column
  var apCol = 7;   // Anticipated Payment Column
  
  //sort by AP
  sortRange.sort([{column: apCol, ascending: false}]);
  
  //sort by chosen procedures
  sortRange.sort([{column: cpCol, ascending: true}]);
  
}


function resetSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var sortRange = sheet.getRange(3, 4, sheet.getLastRow()-2, 4);
  
  //Clear named ranges. To change which cells are cleared, edit ranges in sheet.
  sheet.getRange('ClientInfo').clearContent();
  sheet.getRange('Ins').clearContent();
  sheet.getRange('CoPay').clearContent();
  sheet.getRange('DeductibleApplies').clearContent();
  sheet.getRange('CoInsMax').clearContent();
  sheet.getRange('IndivOOP').clearContent();
  sheet.getRange('FamOOP').clearContent();
  sheet.getRange('IndivDeductible').clearContent();
  sheet.getRange('FamDeductible').clearContent();
  sheet.getRange('CoIns').clearContent();
    sheet.getRange('Bal').clearContent();
  sheet.getRange(3, 4, sheet.getLastRow()-2, 1).clearContent(); //Choose Procedures. Not done with named range to insure new rows don't break it
  
  var resetCol = 5;   //Choose Original Order Column
  
  //Reset range to original order
  sortRange.sort([{column: resetCol, ascending: true}]);
  
}