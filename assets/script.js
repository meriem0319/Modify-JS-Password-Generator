// Assignment Code (given)
var generateBtn = document.querySelector("#generate");

// the console has error that says generatePassword function is not defined, we have to define it:
function generatePassword() { //(given)

  var password = [];
  // once the criteria has been selected by user we need to save what they selected so we added a variable for it 
  var selectedCriteria = [];
    // Need prompt windows for pw criteria: 
    // length btw 8 to 128 chara 
    // and have LC, UC, or spec. chara.
  var pLength = prompt('How many characters would you like your password to contain?');
    if (pLength < 8 || pLength > 128 || isNaN(pLength)) {
      alert("Your input does not meet the password length criteria.");
      return;
    }
  var spChara = confirm('Click OK to confirm including special characters.');
    if (spChara) {
    password.push(spCharaSelect());   
    selectedCriteria.push("spChara"); 
    }
  
  var numChara = confirm('Click OK to confirm including numeric characters.');
    if (numChara) {
    password.push(numCharaSelect());
    selectedCriteria.push("numChara"); 
    }
  
  var lcChara = confirm('Click OK to confirm including lower case characters.');
    if (lcChara) {
    password.push(lcCharaSelect());
    selectedCriteria.push("lcChara"); 
    }
 
  var ucChara = confirm('Click OK to confirm including upper case characters.');
    if (ucChara) {
    password.push(ucCharaSelect());
    selectedCriteria.push("ucChara"); 
    }

function spCharaSelect() {
  var specialCharaList = [ "\\", "!", '\"', "#", "$", "%", "&", "\'","(",")", "*", "+" , "," , "-", "." , "/",":",";","<", "=",">", "?", "@", "[","]" ,"^", "_", "`", "{", "|", "}", "~"];
  var charaSelected = specialCharaList[Math.floor(Math.random() * specialCharaList.length)];

  return charaSelected;
}

function numCharaSelect() {
  var numCharaList = ["0","1","2","3","4","5","6","7","8","9"];
  var numSelected = numCharaList[Math.floor(Math.random() * numCharaList.length)];

  return numSelected;
}

function lcCharaSelect() {
  var lcCharaList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var lcSelected = lcCharaList[Math.floor(Math.random() * lcCharaList.length)];

  return lcSelected;
}

function ucCharaSelect() {
  var ucCharaList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var ucSelected = ucCharaList[Math.floor(Math.random() * ucCharaList.length)];

  return ucSelected;
}

// we need a loop to run the function so that we have a valid number of characters based on what was input of user 
var numbSelectedOptions = password.length;

for (var i = 0; i < pLength-numbSelectedOptions; i++) {
     var currentCriteria = selectedCriteria[Math.floor(Math.random() * selectedCriteria.length)];
     if (currentCriteria === "spChara") {
      password.push(spCharaSelect());
     }
     if (currentCriteria === "numChara") {
      password.push(numCharaSelect());
     }
     if (currentCriteria === "lcChara") {
      password.push(lcCharaSelect());
     }
     if (currentCriteria === "ucChara") {
      password.push(ucCharaSelect());
     }
}
// added .join so that the password characters aren't seperated by commas 
return password.join('');
}


// Write password to the #password input (given)
function writePassword() {
  var myPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = myPassword;

}


// Add event listener to generate button (given)
generateBtn.addEventListener("click", writePassword);
