// 1.Create the first character to uppercase in a paragraph.
      //a. Create a var that store the name that user enters via promt.
      //b. Capitalise the first letter of their name .
      //c. We use the capitalized version of their name to greet them using an alert.
//solution :
      var name = prompt("What is your name?");
      var firstChar = name.slice(0,1);
      var upperCaseFirstChar = firstChar.toUpperCase();
      var restOfName = name.slice(1,name.length);
      var capitalizedName = upperCaseFirstChar + restOfName;
      alert("hai"+ capitalizedName);