$("#content-nav li").eq(1).after('<li class=""><a id="tower_barracks_button" href="javascript:void(0)">Tower & Barracks Status</a>');

var tower_barracks_html = '<div id="tower_barracks_div" style="background: none repeat scroll 0 0 #313131; color: #FFFFFF; margin-top: 8px; display: none;">';
tower_barracks_html += '<div style="width: 960px; margin:auto;">';
tower_barracks_html += '</div></div>';

$("#container-header").after(tower_barracks_html);

var twr_brks_data = "";
$("#tower_barracks_button").click(function() {
  if(twr_brks_data == ""){
    $("#tower_barracks_div div").html('<img style="margin:37px auto 0 auto; display:block;" src="' + chrome.extension.getURL("loading.gif") + '">');

	var xhr = new XMLHttpRequest();
	match_id = location.pathname.substring(9);
	link = "http://getdotastats.com/dbe/dotabuff_twrbrcs.php?match_id=" + match_id;
	xhr.open("GET", link, true);
	xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
	    twr_brks_data = $(xhr.responseText).html().split(",");
	    var htmlkod = makeImgHTML(twr_brks_data);
	    $("#tower_barracks_div").html(htmlkod);
      }
    }
    xhr.send();
  }

  if ($("#content-nav li").eq(0).attr("class") == "active"){
	$("#content-nav li").eq(0).find("a").attr("href", "javascript:void(0)");
	$("#content-nav li").eq(0).find("a").click(function() {
	  $("#content-nav li").eq(2).attr("class", "");
	  $("#content-nav li").eq(0).attr("class", "active");
	  $("#container-content").fadeIn("fast");
	  $("#tower_barracks_div").fadeOut("fast");
	});
  }
  if ($("#content-nav li").eq(1).attr("class") == "active"){
	$("#content-nav li").eq(1).find("a").attr("href", "javascript:void(0)");
	$("#content-nav li").eq(1).find("a").click(function() {
	  $("#content-nav li").eq(2).attr("class", "");
	  $("#content-nav li").eq(1).attr("class", "active");
	  $("#container-content").fadeIn("fast");
	  $("#tower_barracks_div").fadeOut("fast");
	});
  }

  $("#content-nav li").eq(0).attr("class", "");
  $("#content-nav li").eq(1).attr("class", "");
  $("#content-nav li").eq(2).attr("class", "active");

  $("#container-content").fadeOut("fast");
  $("#tower_barracks_div").fadeIn("fast");

  function makeImgHTML(dataarr){
    var data_dir = chrome.extension.getURL("loading.gif").substr(0, chrome.extension.getURL("loading.gif").length - 11) + "twr_brks/";
	var html_code;
	if (dataarr[0] == 1){
	  html_code = '<div class="match-show"><div class="match-result"><span class="team radiant">Radiant Victory</span></div></div>';
      html_code += '<img style="margin:auto; display:block;" src="' + data_dir + 'tower_barracks_image_background.png">';
      html_code += '<img style="position:relative; top:-500px; margin:0 auto -500px auto; display:block;" src="' + data_dir + 'radiant_t.png">';
    }
    else{
      html_code = '<div class="match-show"><div class="match-result"><span class="team dire">Dire Victory</span></div></div>';
      html_code += '<img style="margin:auto; display:block;" src="' + data_dir + 'tower_barracks_image_background.png">';
      html_code += '<img style="position:relative; top:-500px; margin:0 auto -500px auto; display:block;" src="' + data_dir + 'dire_t.png">';
    }
      
    for (var i = 0; i < 11; i++){
      if (dataarr[1].substr(i, 1) == 1)
        html_code += '<img style="position:relative; top:-500px; margin:0 auto -500px auto; display:block;" src="' + data_dir + 'radiant_t_' + (i + 1) + '.png">';
      if (dataarr[2].substr(i, 1) == 1)
        html_code += '<img style="position:relative; top:-500px; margin:0 auto -500px auto; display:block;" src="' + data_dir + 'dire_t_' + (i + 1) + '.png">';
      }
    for (i = 0; i < 6; i++){
      if (dataarr[3].substr(i, 1) == 1)
        html_code += '<img style="position:relative; top:-500px; margin:0 auto -500px auto; display:block;" src="' + data_dir + 'radiant_b_' + (i + 1) + '.png">';
      if (dataarr[4].substr(i, 1) == 1)
        html_code += '<img style="position:relative; top:-500px; margin:0 auto -500px auto; display:block;" src="' + data_dir + 'dire_b_' + (i + 1) + '.png">';
    }
      
    return html_code;
  }
});