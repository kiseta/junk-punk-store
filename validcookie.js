function setCookie()
  {
  //create a date object instance for cookie expiration date
  var vExpDate = new Date
	vExpDate.setMonth(vExpDate.getMonth() + 1)

  //get data from the form fields
  var vName = document.regForm.txtName.value
  var vAddress = document.regForm.txtAddress.value
  var vCity = document.regForm.txtCity.value
  var vState = document.regForm.lstState.options[document.regForm.lstState.selectedIndex].value
  var vZip = document.regForm.txtZip.value
  var vEmail = document.regForm.txtEmail.value
  var vPass = document.regForm.txtPass.value
  var vPassR = document.regForm.txtPassR.value
  var vCardType = document.regForm.lstCardType.options[document.regForm.lstCardType.selectedIndex].value
  var vCardNum = document.regForm.txtCardNum.value
  var vCardNumLen = document.regForm.txtCardNum.value.length
  var vExpMonth = document.regForm.lstExpMonth.options[document.regForm.lstExpMonth.selectedIndex].value
  var vExpYear = document.regForm.lstExpYear.options[document.regForm.lstExpYear.selectedIndex].value

//////////////////// CHECK NAME /////////////////////////

// Check if a name was entered

	if (document.regForm.txtName.value == "") 
		{
		alert("You must enter a name.")
		document.regForm.txtName.focus()
		return false
		}
	
	//check that the name is in right format - 
	//two or three words with the first letters in upper case
	
	//check for a first black space
	var findFirstBlank = document.regForm.txtName.value.indexOf(" ",0)

    if (findFirstBlank == -1)
    	{ 
		alert("You must enter a first and last name separated by a space.") 
		document.regForm.txtName.focus()
		document.regForm.txtName.select()
		return false 
		}
    
    //check for second blank space
	if (document.regForm.txtName.value.indexOf(" ",findFirstBlank+1) > -1) 
		{ 
		var re = /^(\S)(\S+)\s(\S)(\S+)\s(\S)(\S+)$/ 

		re.exec(document.regForm.txtName.value)
		var vNameNew = RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase() + " " + RegExp.$3.toUpperCase() + RegExp.$4.toLowerCase() + " " + RegExp.$5.toUpperCase() + RegExp.$6.toLowerCase()
		document.regForm.txtName.value = vNameNew
		}
	//if there is no second blank space it means that the name consist of 2 words		
   else
   		{
		var re = /^(\S)(\S+)\s(\S)(\S+)$/

			if (re.exec(document.regForm.txtName.value)) 
				{
				vNameNew = RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase() + " " + RegExp.$3.toUpperCase() + RegExp.$4.toLowerCase()
				document.regForm.txtName.value = vNameNew
				}
   
			else 
				{
				alert("Please enter your first and last name.")
				document.regForm.txtName.focus()
				document.regForm.txtName.select()
				return false
				}
		}		

///////////////////END CHECKING NAME //////////////////////   

///////////////////CHECK ADDRESS //////////////////////

	//Check for a street part of an address 
      
	if (vAddress == "") 
     	{
		alert("You must enter an address.")
	  document.regForm.txtAddress.focus()
		return false
		}
		
	//check that the address is in right format - 
	//two three or four words with the first letters in upper case
	
	//check for a first black space
	var findFirstBlank = vAddress.indexOf(" ",0)
	//check for a second black space
	var findSecondBlank = vAddress.indexOf(" ", findFirstBlank+1)
	//check for a third black space
	var findThirdBlank = vAddress.indexOf(" ", findSecondBlank+1) 
	
	var reTwo = /^(\S)(\S+)\s(\S)(\S+)$/ 								//two word address
	var reThree = /^(\S)(\S+)\s(\S)(\S+)\s(\S)(\S+)$/ 				// three word address
	var reFour = /^(\S)(\S+)\s(\S)(\S+)\s(\S)(\S+)\s(\S)(\S+)$/  	// four word address	
	
    if (findFirstBlank == -1)
    	{ 
		alert("Please enter a valid address.") 
	  document.regForm.txtAddress.focus()
	  document.regForm.txtAddress.select()
		return false 
		}
	else (findSecondBlank > -1)
		{	
		if (reTwo.exec(vAddress)) 
			{
			var vAddressNew = RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase() + " " + RegExp.$3.toUpperCase() + RegExp.$4.toLowerCase()
		document.regForm.txtAddress.value = vAddressNew
			}
		else if (reThree.exec(vAddress))
			{
			var vAddressNew = RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase() + " " + RegExp.$3.toUpperCase() + RegExp.$4.toLowerCase() + " " + RegExp.$5.toUpperCase() + RegExp.$6.toLowerCase()
		document.regForm.txtAddress.value = vAddressNew
			}
		}
		
	if (findThirdBlank > -1)
		{
		if (reFour.exec(vAddress))
			{
			var vAddressNew = RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase() + " " + RegExp.$3.toUpperCase() + RegExp.$4.toLowerCase() + " " + RegExp.$5.toUpperCase() + RegExp.$6.toLowerCase() + " " + RegExp.$7.toUpperCase() + RegExp.$8.toLowerCase()
		document.regForm.txtAddress.value = vAddressNew		
			}
		else 
			{
			alert("Please enter a valid address.")
		  document.regForm.txtAddress.focus()
		  document.regForm.txtAddress.select()
			return false
			}
		}
///////////////////END CHECKING ADDRESS ////////////////////// 
///////////////////CHECK CITY //////////////////////

	// Check if a City was entered

	if (document.regForm.txtCity.value == "") 
		{
		alert("You must enter a City.")
		document.regForm.txtCity.focus()
		return false
		}
	
	//check that the City is in right format - 
	//one or two words with the first letter in upper case
	
	//check for a first black space
	var findFirstBlank = document.regForm.txtCity.value.indexOf(" ",0)

    if (findFirstBlank == -1)
    	{ 
		alert("You must enter a first and last City separated by a space.") 
		document.regForm.txtCity.focus()
		document.regForm.txtCity.select()
		return false 
		}
    
    //check for second blank space
	if (document.regForm.txtCity.value.indexOf(" ",findFirstBlank+1) > -1) 
		{ 
		var re = /^(\S)(\S+)\s(\S)(\S+)\s(\S)(\S+)$/ 

		re.exec(document.regForm.txtCity.value)
		var vCityNew = RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase() + " " + RegExp.$3.toUpperCase() + RegExp.$4.toLowerCase() + " " + RegExp.$5.toUpperCase() + RegExp.$6.toLowerCase()
		document.regForm.txtCity.value = vCityNew
		}
	//if there is no second blank space the City consist of 2 words		
   else
   		{
		var re = /^(\S)(\S+)\s(\S)(\S+)$/

			if (re.exec(document.regForm.txtCity.value)) 
				{
				vCityNew = RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase() + " " + RegExp.$3.toUpperCase() + RegExp.$4.toLowerCase()
				document.regForm.txtCity.value = vCityNew
				}
   
			else 
				{
				alert("Please enter your first and last City.")
				document.regForm.txtCity.focus()
				document.regForm.txtCity.select()
				return false
				}
		}		

///////////////////END CHECKING City ////////////////////// 

////////////////// CHECK STATE //////////////////////////

	if (vState == "") 
   		{
		alert("You must select a state.")
	  document.regForm.lstState.focus()
		return false
		}

////////////////// END CHECKING STATE //////////////////////////	
///////////////////CHECK ZIP CODE ////////////////////// 

	var zipLen = document.regForm.txtZip.value.length 
	
	//check that the field is not empty
	if (document.regForm.txtZip.value == "") 
		{
		alert("You must enter a zip code.")
		document.regForm.txtZip.focus()
		return false
		}
		
	//check that zip code is 5, 9, or 10 characters long
 
		if (zipLen !=5 && zipLen !=9 && zipLen !=10) 
			{
			alert("Please enter a valid Zip code")            
			document.regForm.txtZip.focus()
			document.regForm.txtZip.select()
			return false
			}
			
		if (zipLen == 5)
			{
			var re = /^(\d{5})$/	
			if (re.test(document.regForm.txtZip.value))
				{
				}
			else
				{
    			alert("Zip code should be all numbers")
    			document.regForm.txtZip.focus()
    			document.regForm.txtZip.select()
    			return false
    			}
    		}
    	else
    		{
			var re = /^(\d{5})[- ]?(\d{4})$/
			if (re.test(document.regForm.txtZip.value))
					{
					vZipNew = RegExp.$1 + "-" + RegExp.$2
					document.regForm.txtZip.value = vZipNew
					}
				else
					{
    			alert("Zip code entered is invalid")
    			document.regForm.txtZip.focus()
    			document.regForm.txtZip.select()
    			return false
    			}			
			}
///////////////////END CHECKING ZIP CODE ////////////

//////////////CHECK CREDIT CARD DETAILS /////////////////	
	
	//check that the fields are not empty
	if (vCardType == "") 
    {
		alert("You must select a Credit Card Type.")
		document.regForm.lstCardType.focus()
		return false
		}
		
	if (vCardNum == "") 
    {
		alert("You must enter credit card number.")
		document.regForm.txtCardNum.focus()
		return false
		}
		
	//check format
      
	if (vCardType == "Visa")
      {
      if (vCardNumLen == 16)
      	{
      	re = /^(\d{16})$/
      	if(!re.test(vCardNum))
            {
            alert("Visa Card Number is invalid - not 16 digits")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      	}	
      else if (vCardNumLen == 13)
      	{
      	re = /^(\d{13})$/
      	if(!re.test(vCardNum))
            {
            alert("Visa Card Number is invalid - not 13")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      	}
      else      
      	{
      	reVisa16 = /^(\d{4})[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{4})$/
      	reVisa13 = /^(\d{4})[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{1})$/
      	
      	if (reVisa16.test(vCardNum))
            {
            cardNumNew = RegExp.$1 + RegExp.$2 + RegExp.$3 + RegExp.$4
            document.regForm.txtCardNum.value = cardNumNew
            }
      	else if (reVisa13.test(vCardNum))
            {
            cardNumNew = RegExp.$1 + RegExp.$2 + RegExp.$3 + RegExp.$4
            document.regForm.txtCardNum.value = cardNumNew
            }
      	else
            {
            alert("Visa Card Number is invalid")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      	}
      }      	
	else if (vCardType == "Discover")
      {
      // Check number of digits entered and check the format
      if (vCardNumLen == 16)
      	{
      	//check that only numbers were entered
      	var reCardNum = /^(\d{16})$/
      	if (reCardNum.test(vCardNum))
            {
            }
      	else
            {
            alert("Discover Card Number is invalid")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      	}
      else
      	{
      	//check the format
      	var reCardNum = /^(\d{4})[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{4})$/
      	if (reCardNum.test(vCardNum))
            {
            vCardNumNew = RegExp.$1 + RegExp.$2 + RegExp.$3 + RegExp.$4
            document.regForm.txtCardNum.value = vCardNumNew
            }
      	else
            {
            alert("Discover Card Number is invalid")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      	}
      		// Discover card number start with 6011?
		    var dStart = document.regForm.txtCardNum.value.substring(0,4)
		    if (dStart != 6011)
			    {
      		alert("Discover Card Number is invalid")
			    return false
			    }	
      }
	else if (vCardType == "MasterCard")
      {
      // Check number of digits entered and check the format
       if(vCardNumLen == 16)
      	{
      	//check that only numbers were entered
      	var reCardNum = /^(\d{16})$/
      	if (reCardNum.test(vCardNum))
            {
            }
      	else
            {
            alert("Master Card card number is invalid")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      	}
      else
      	{
      	//check the format
      	var reCardNum = /^(\d{4})[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{4})$/
      	if (reCardNum.test(vCardNum))
            {
            vCardNumNew = RegExp.$1 + RegExp.$2 + RegExp.$3 + RegExp.$4
            document.regForm.txtCardNum.value = vCardNumNew
            }
      	else
            {
            alert("Master Card card number is invalid")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      	}
      	
          // MasterCard number start with a 5?
      	var mcFirst = document.regForm.txtCardNum.value.substring(0,1)
          if (mcFirst != 5) 
            {
             alert("The MasterCard number entered is not valid.")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      	
      	// MasterCard second number 1 to 5?
      	var mcSecond = document.regForm.txtCardNum.value.substring(1,2)
      	if (mcSecond < 1 || mcSecond > 5) 
            {
            alert("The MasterCard number entered is not valid.")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      }
	else if (vCardType == "AmEx")
      {
      // Check number of digits entered and check the format
       if(vCardNumLen == 15)
      	{
      	//check that only numbers were entered
      	var reCardNum = /^(\d{15})$/
      	if (reCardNum.test(vCardNum))
            {
            }
      	else
            {
            alert("American Express Card Number is invalid")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      	}
      else
      	{
      	//check the format
      	var reCardNum = /^(\d{4})[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{3})$/
      	if (reCardNum.test(vCardNum))
            {
            vCardNumNew = RegExp.$1 + RegExp.$2 + RegExp.$3 + RegExp.$4
            document.regForm.txtCardNum.value = vCardNumNew
            }
      	else
            {
            alert("American Express Card Number is invalid")
            document.regForm.txtCardNum.focus()
            document.regForm.txtCardNum.select()
            return false
            }
      	}
      
      // American Express card number start with a 3?
      var aeFirst = document.regForm.txtCardNum.value.substring(0,1)
      if (aeFirst != 3)
      	{
      	alert("American Express Card Number is invalid - first not 3")
      	document.regForm.txtCardNum.focus()
      	document.regForm.txtCardNum.select()
      	return false
      	}
      // American Express card second number 4 or 7?
      var aeSecond = document.regForm.txtCardNum.value.substring(1,2)
      if (aeSecond != 4 && aeSecond != 7)
      	{
      	alert("American Express Card Number is invalid - second not 4 or 7")
      	document.regForm.txtCardNum.focus()
      	document.regForm.txtCardNum.select()
      	return false
      	}
      }

if (vExpMonth == "") 
   		{
      alert("You must select expiration month.")
      document.regForm.lstExpMonth.focus()
      return false
      }
      
	if (vExpYear == "") 
      {
      alert("You must select expiration  year.")
      document.regForm.lstExpYear.focus()
      return false
      }	
      	      
      //check card expiration date
      var todayDate = new Date();
      var todayYear = todayDate.getFullYear();
      var todayMonth = todayDate.getMonth();
      
      if(vExpYear == todayYear)
      	{
      	if (vExpMonth < todayMonth + 1)
            {
            alert("Your credit card has already expired.\nPlease check your expiration date or use different card.")
            document.regForm.lstExpMonth.focus()
            return false
            }
      	}
///////////////////END CHECKING CREDIT CARD ///////////////      

///////////////////CHECK EMAIL //////////////////////

	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/   

	if (re.test(document.regForm.txtEmail.value)) 
		{
    	}
	else
		{
    	alert("E-mail address entered is invalid")
    	document.regForm.txtEmail.focus()
    	document.regForm.txtEmail.select()
    	return false
    	}

///////////////////END CHECKING EMAIL //////////////////////


/////////////////////CHECK PASSWORD////////////////////////

      var passLen = document.regForm.txtPass.value.length
      
      //check that field is not empty
		if (document.regForm.txtPass.value == "") 
      		{
			alert("You must enter a password.")
			document.regForm.txtPass.focus()
			return false
			}
      
		//check that 5 or more characters were typed      
		if (passLen < 5 ) 
      		{
			alert("Your password must be 5 or more characters.")            
 			document.regForm.txtPass.focus()
			document.regForm.txtPass.select()
			return false
			}
      
		//check that passwords match
		if (document.regForm.txtPass.value != document.regForm.txtPassR.value) 
			{
			alert("Passwords do not match.")
			document.regForm.txtPassR.focus()
			document.regForm.txtPassR.select()
			return false
			}	
///////////////////// END Checking Password /////////////////////	

  //write cookie
  document.cookie = "cName=" + vNameNew + ";expires=" + vExpDate.toGMTString();
  document.cookie = "cAddress=" + vAddressNew + ";expires=" + vExpDate.toGMTString();
  document.cookie = "cCity=" + vCityNew + ";expires=" + vExpDate.toGMTString();
  document.cookie = "cZip=" + vZipNew + ";expires=" + vExpDate.toGMTString();
  document.cookie = "cState=" + vState + ";expires=" + vExpDate.toGMTString();
  document.cookie = "cPass=" + vPass + ";expires=" + vExpDate.toGMTString();
  document.cookie = "cEmail=" + vEmail + ";expires=" + vExpDate.toGMTString();
  document.cookie = "cCardType=" + vCardType + ";expires=" + vExpDate.toGMTString();
  document.cookie = "cCardNum=" + vCardNum + ";expires=" + vExpDate.toGMTString();
  document.cookie = "cExpMonth=" + vExpMonth + ";expires=" + vExpDate.toGMTString();
  document.cookie = "cExpYear=" + vExpYear + ";expires=" + vExpDate.toGMTString();

  alert("Registration Successful")
  top.MAIN.document.location.href = "thanks.htm"
  }
