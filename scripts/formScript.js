function calculateTotalPrice() {
  //Declaring necessary variables.
  let quantity = document.querySelector("#quantity").value;
  let price = document.querySelector("#productPrice").value;
  let formErrorDetected = false;
  let errorMessage = "";

  //Check performed to see if either price or quantity is '0', 'null' or 'blank'.
  function formValidation(formValue) {
    if (parseInt(formValue) == 0) {
      errorMessage = "Please enter a value other than '0'.";
      formErrorDetected = true;
    } else if (formValue == null) {
      errorMessage = "Please enter a value other than 'null'.";
      formErrorDetected = true;
    } else if (formValue == "" || formValue == " ") {
      errorMessage = "Please enter a value.";
      formErrorDetected = true;
    }

  }

  //If form 'errors' are detected an error message is displayed.
  //If 'price' entered is '0' then the value is set to the price global variable.
  formValidation(quantity);
  if (formErrorDetected) {
    alert(errorMessage);
  } else {
    formValidation(price);
    if (formErrorDetected) {
      alert(errorMessage);
      document.querySelector("#productPrice").value = price;
    } else {
        let totalPrice = quantity * price;
        document.querySelector("#totalPrice").innerHTML = totalPrice;
    }
  }
  return;
}

//This clears the values both quantity and total price. It does not, however, clear the 'price' input.
function clearValues() {
  document.querySelector("#quantity").value = "1";
  document.querySelector("#totalPrice").innerHTML = "0";
  return;
}

//This displays that which to be submitted (if submission was desired) - all input values.
function formSubmission() {
  let newLine = "\n";
  let formDisplay = "Product Decription: ";
  formDisplay += document.querySelector("#productDescription").innerHTML;
  formDisplay += newLine;
  formDisplay += "Quantity: "
  formDisplay += document.querySelector("#quantity").value;
  formDisplay += newLine;
  formDisplay += "Price: ";
  formDisplay += document.querySelector("#productPrice").value;
  formDisplay += newLine;
  formDisplay += "Is this information correct?"
  if (confirm(formDisplay) == false) {
    clearValues();
    alert("Form submission unsuccessful.")
  }
  return false;
}
