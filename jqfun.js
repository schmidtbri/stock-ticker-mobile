
function load()
{
	if(localStorage.getItem('username') == null)
	{
		$('#username_message').text("Set username:");
		$('#password_message').text("Set password:");	
	}
	
}

function login()
{	 
	if(localStorage.getItem('username') == null)
	{
		if($("#user_name").val() != "" && $("#password").val() != "")
		{
			localStorage.setItem('username', $("#user_name").val());
			localStorage.setItem('password', $("#password").val());
								
			$.mobile.changePage('#quotePage');
		}
		else
		{
			alert('Please enter values.');
		}
	}
	else
	{
		if($("#user_name").val() == localStorage.getItem("username") && $("#password").val() == localStorage.getItem("password"))
		{
			$.mobile.changePage('#quotePage');
		}
		else
		{
			alert('Incorrect username or password.');
		}
	}
}


function getQuote()
{
	var yqlURL="http://query.yahooapis.com/v1/public/yql?q=";
	var dataFormat="&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
	
	var symbol = $("#symbol").val();
     
    var realtimeQ = yqlURL + "select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + symbol + "%22)%0A%09%09&"+ dataFormat;
     
    $(function() {
        $.getJSON(realtimeQ, function(json) {
			if(json.query.results.quote.BidRealtime != null)
				$('#ticker').text("$" + json.query.results.quote.BidRealtime);
			else
				$('#ticker').text("Symbol not found.");
        });
    }); 

}







