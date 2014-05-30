$('.comment').each(function(){
	if(this.id.length > 0){
		player_id = $("#"+this.id+' .comment-player a').attr("href").substr(9);

		$("#"+this.id + ' .comment-body div').after('<div id="comment-sig' + player_id + '"><a target="__new" href="http://getdotastats.com/sig/' + player_id + '.png"><img style="margin:auto; margin-bottom:20px; display:block;" src="http://getdotastats.com/sig/forum.php?aid=' + player_id + '"></a><div style="margin-top:-15px;text-align: center;"><a href="http://strawpoll.me/1511023">Want these to stay? Vote now!</a> || <a href="http://getdotastats.com/dbe/forum_sigs.php">What is this?</a></div></div>');
	}
});