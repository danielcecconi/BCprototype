function loadFromQueryString() {
  //Get query string information from link.
  function getQueryString() {
    return location.search;
  }
  //Process query string information. Initialise object with processed information.
  function processQueryString(queryString) {
    //Declaring of necessary variables. Index values are dependant on the order which information is sent within the query string.
    let queryStringArray = queryString.split("&");
    let imageNameIndex = 0;
    let productNameIndex = 1;
    let productDescriptionIndex = 2;
    let productPriceIndex = 3;
    //Assign image name to imageName variable.
    let imageName = queryStringArray[imageNameIndex].substring(queryStringArray[imageNameIndex].indexOf("=") + 1);
    //Assign product name to productName variable.
    let productNameUnprocessed = queryStringArray[productNameIndex].substring(queryStringArray[productNameIndex].indexOf("=") + 1);
    let productNameArray = productNameUnprocessed.split("+");
    let productName = "";
    //Cycle through productNameArray and create a 'product name' string.
    for (let i = 0; i < productNameArray.length; i++) {
      //Make sure that there is no space added to the end of the 'product name'.
      if (i == productNameArray.length - 1){
        productName += productNameArray[i]
      } else {
        productName += productNameArray[i] + " ";
      }
    }
    //Assign product description to productDescription variable.
    let productDescriptionUnprocessed = queryStringArray[productDescriptionIndex].substring(queryStringArray[productDescriptionIndex].indexOf("=") + 1);
    let productDescriptionArray = productDescriptionUnprocessed.split("+");
    let productDescription = "";
    //Cycle through productDescriptionArray and create a 'product description' string.
    for (let i = 0; i < productDescriptionArray.length; i++) {
      //Make sure that there is no space added to the end of the 'product description'.
      if (i == productDescriptionArray.length - 1) {
        productDescription += productDescriptionArray[i];
      } else {
        productDescription += productDescriptionArray[i] + " ";
      }
    }
    //Assign product price to productPrice variable.
    let productPrice = queryStringArray[productPriceIndex].substring(queryStringArray[productPriceIndex].indexOf("=") + 1);
    //Create dictionary object containing all processed query string information.
    let queryDictionary = new Object();
    queryDictionary.imageName = imageName;
    queryDictionary.productName = productName;
    queryDictionary.productDescription = productDescription;
    queryDictionary.productPrice = productPrice;
    return queryDictionary;
  }
  //Pre load images to be assembled.
  function preLoadImages(queryDictionary, rows, columns) {
    let preLoadedImages = [];
    let imageName = queryDictionary.imageName;

    for (let rowIterator = 0; rowIterator < rows; rowIterator++) {
      let preLoadedRow = [];
      preLoadedImages[rowIterator] = preLoadedRow;
      for (let colIterator = 0; colIterator < columns; colIterator++) {
        preLoadedImages[rowIterator][colIterator] = new Image();
        preLoadedImages[rowIterator][colIterator].src = "../images/slices/" + imageName + "/" + imageName + "_" + rowIterator + "_" + colIterator + ".jpg";
      }
    }
    return preLoadedImages;
    //Return a multi-dimensional array containing pre-loaded images.
  }
  //Load processed query string information onto 'Members Order' page.
  function loadQueryStringInformation(queryDictionary, preLoadedImages) {
    //Assemble pre-loaded images and render them on the page.
    function assembleAndRenderImage(preLoadedImages, rows, columns){
      let table = document.querySelector(".imageTable");
      for (rowIterator = 0; rowIterator < rows; rowIterator++) {
        let row = table.insertRow(rowIterator);
        for (colIterator = 0; colIterator < columns; colIterator++) {
          cell = row.insertCell(colIterator);
          cell.appendChild(preLoadedImages[rowIterator][colIterator]);
        }
      }
    }

    assembleAndRenderImage(preLoadedImages, 4, 5);
    //Load queryDictionary string information into the 'Members Order' page.
    document.querySelector(".orderHeading").innerHTML = queryDictionary.productName;
    document.querySelector(".orderFormHeading").innerHTML = "Ordering: " + queryDictionary.productName;
    document.querySelector("#productDescription").innerHTML = queryDictionary.productDescription;
    document.querySelector("#productPrice").setAttribute("value", queryDictionary.productPrice);
    document.querySelector("#productPrice").setAttribute("min", queryDictionary.productPrice);
  }
  //Execute necessary functions.
  let preLoadedImages = preLoadImages(processQueryString(getQueryString()), 4, 5);
  loadQueryStringInformation(processQueryString(getQueryString()), preLoadedImages);
}
