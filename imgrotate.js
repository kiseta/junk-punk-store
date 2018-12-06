	var imgRotate1 = new Array
	imgRotate1 [0] = "images/season01.gif"
	imgRotate1 [1] = "images/season02.gif"
	imgRotate1 [2] = "images/season03.gif"
	imgRotate1 [3] = "images/season04.gif"

	var thisImg1 = 0
	var imgCntr1 = imgRotate1.length

function rotateImg1()
	{
		if (document.imgSpin1.complete)
			{
			thisImg1++
				if (thisImg1 == imgCntr1 )
					{
                		{ thisImg1 = 0 }
           		}

          		document.imgSpin1.src=imgRotate1 [thisImg1]

       	}

		setTimeout("rotateImg1()", 2 * 1000)

	}