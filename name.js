var allCookies = document.cookie
if (allCookies!="")
	{
	//get Name cookie value
	var cNamePos = allCookies.indexOf("cName=")
	var cName2
	if(cNamePos == -1) //Name cookie does not exist
	  {
	  cName2 ="Guest";  
	  }
	else if(cNamePos > -1) //if it exists
	  {
	  var start = cNamePos + 6
	  var end = allCookies.indexOf(";", start)
  	if (end == -1)
  		{
  		end = allCookies.length
  		}

	  cName2 = allCookies.substring(start, end)
    }
	//get User cookie value
	var cUserPos = allCookies.indexOf("cUser=")
	if (cUserPos == -1)	//User cookie does not exist
		{
		document.write(cName2 + "! ");
		}
	else if(cUserPos > -1)//if it exists
		{
		var start = cUserPos + 6
		var end = allCookies.indexOf(";", start)
		if (end == -1)
			{
			end = allCookies.length
			}

		var cUser2 = allCookies.substring(start, end)

		//write values to the page
		//check if the user registered
		if (cName2 == cUser2)
			{
			document.write(cName2 + "! ");
			}
		else
			{
			document.write(cUser2 + "! ");
			}
		}
	}