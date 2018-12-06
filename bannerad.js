	adImage = new Array
	adImage [0] = "images/ban_waterwrox.gif"
	adImage [1] = "images/ban_hockey.gif"
	adImage [2] = "images/ban_speedscan.gif"
	adImage [3] = "images/ban_golf.gif"

	adUrl = new Array
	adUrl [0] = "http://www210.oakton.edu/students/pere9195/181/waterworx/index.asp"
	adUrl [1] = "http://www210.oakton.edu/projects/HockeyTeam/home.htm"
	adUrl [2] = "http://www210.oakton.edu/projects/speedscan/final6/Speedscan.htm"
	adUrl [3] = "http://www210.oakton.edu/students/golf181/Home.htm"

	thisAd = 0
	imgCt = adImage.length

	function rotate()
		{
		if(document.images)
			{
			thisAd++
			if (thisAd == imgCt)
				{
				thisAd = 0
				}
			document.adBanner.src = adImage[thisAd]
			setTimeout("rotate()", 3*1000)
			//one thousand miliseconds multiplied by 3 gives 3 seconds
			}
		}

	function newLocation()
		{
		//document.location.href = adUrl[thisAd]
		window.open(adUrl[thisAd])
		}