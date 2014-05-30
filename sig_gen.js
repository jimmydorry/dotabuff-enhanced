var sig_gen_added = false;
var records_num = 3;

for (var i = 0; i < $("#content-nav li").size(); i++){
	if ($("#content-nav li").eq(i).find("a").html() == "Records"){
		records_num = i;
	}
	if ($("#content-nav li").eq(i).find("a").html() == "Signature Generator"){
		sig_gen_added = true;
	}
}

if (!sig_gen_added){
$("#content-nav li").eq(records_num).after('<li class=""><a id="signature_generator_button" href="javascript:void(0)">Signature Generator</a>');
  
  var player_id;
  if (document.URL.split("/")[document.URL.split("/").length - 2] == "players"){
    player_id = document.URL.split("/")[document.URL.split("/").length - 1];
  }
  if (document.URL.split("/")[document.URL.split("/").length - 3] == "players"){
    player_id = document.URL.split("/")[document.URL.split("/").length - 2];
  }
  
  var signature_html = '<div id="signature_generator" style="margin-top: 10px; margin-bottom: 10px; display: none;">';
  signature_html += '<img style="margin:auto; display:block;" src="http://getdotastats.com/sig/' + player_id + '.png">';
  signature_html += '<div style="text-align: center;">';
  signature_html += '<a href="http://getdotastats.com/sig/' + player_id + '.png" style="color: #92A525; font-size: 1.5em; font-weight: 800 !important; line-height: 2em; text-shadow: 1px 1px 5px #000000; text-transform: lowercase; vertical-align: middle;">http://getdotastats.com/sig/' + player_id + '.png</a></div>';
  signature_html += '</div>';
  
  $("#container-header").after(signature_html);
  
  $("#signature_generator_button").click(function() {

    $("#container-content").fadeOut("fast");
    $("#signature_generator").fadeIn("fast");
    $("#content-nav li").eq(4).attr("class", "active");
    
    for (var i = 0; i < 4; i++){
        $("#content-nav li").eq(i).attr("class", "");
    }
  });
}