window.onload = function()
{
	console.log("ssdf");


	 nom_div("rango").addEventListener('change' , function(event)
    {

    	//nom_div("txtrango").innerHTML = this.value;
    	capicua(Number(this.value));
    	console.log(this.value);
    });

    var capicua = function(posicion)
    {
    	var total = 0;
		var txt = "";
    	for (var bas = "1" , i = 1; i <= posicion; i++)
        {
           	total = parseInt(bas) * parseInt(bas);
           	
            txt += "<div><div class = 'valor oper'>" + bas + " x " + bas + "</div>" + 
                   "<div class = 'valor'>" + total + "</div></div>";
             bas += "1";
            // console.log(txt);

        }
        nom_div("capicua").innerHTML = txt;
    };



	function nom_div(div)
	{
		return document.getElementById(div);
	}
};


