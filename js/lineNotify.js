
$('#submitBtn').click(function(){

	$('#sendMsg').modal('show');

  var name_DT = $('#contactForm').find('#name').val();
  var email_DT = $('#contactForm').find('#email').val();
  var phone_DT = $('#contactForm').find('#phone').val();
  var message_DT = $('#contactForm').find('#message').val();

  if(name_DT == '') {
	$('#nameEmptyWarningMsg').modal('show');
	$('#contactForm').find('#name').focus();
	return false;
  }
  else if(email_DT == '') {
	$('#emailEmptyWarningMsg').modal('show');
	$('#contactForm').find('#email').focus();
	return false;
  }
  else if(phone_DT == '') {
	$('#phoneEmptyWarningMsg').modal('show');
	$('#contactForm').find('#phone').focus();
	return false;
  }
  else if(message_DT == '') {
	$('#messageEmptyWarningMsg').modal('show');
	$('#contactForm').find('#message').focus();
	return false;
  }
  else {
	var params = {
      "name" : name_DT,
      "email" : email_DT,
      "phone" : phone_DT,
      "message" : message_DT
    }
  
    $.ajax({
      type:'POST',
      contentType: 'application/json; charset=utf-8',
      url:'https://www.martmanage86api.tk/yesmart-0.0.1-SNAPSHOT/line',
      data:JSON.stringify(params),
      success: function(response){
		$('#contactForm').each(function() {
			this.reset();
		});
       $('#sendMsg').modal('show');
      },
      error : function(xtr, status, error){
        alert("エラーが発生しました。")
        //alert(xtr +":"+status+":"+error);
      }
    });

	return false;
  }

});

$('#sendMsgCloseBtn').click(function() {
	$('#sendMsg').modal('hide')
});

$('.msgCloseBtn').click(function() {
	$('.warning').modal('hide')
});
