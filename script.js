var numer = Math.floor(Math.random()*7)+1;  
			
			function schowaj()
			{
				$("#slider").fadeOut(1000);
				
			
			}
			function zmienslajd()
			{
				numer++; 
				if (numer>5) numer=1; 
				var plik = "<img src =\"slides/img" + numer + ".jpg\" />" ;
				
				document.getElementById("slider").innerHTML = plik ;
				$("#slider").fadeIn(1000);
				
				setTimeout("zmienslajd()" , 5000);		
				setTimeout("schowaj()", 4000);
				
			}