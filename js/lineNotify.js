$('#submitBtn').click(function(){
  var name = $('#contactForm').find('#name').val();
  var email = $('#contactForm').find('#email').val();
  var phone = $('#contactForm').find('#phone').val();
  var message = $('#contactForm').find('#message').val();
  
  alert(name + ', ' + email + ', ' + phone + ', ' + message);
  
  var data = {}
  data.name = $('#contactForm').find('#name').val(),
  data.email = $('#contactForm').find('#email').val(), 
  data.phone = $('#contactForm').find('#phone').val(), 
  data.message = $('#contactForm').find('#message').val()
  
  var jsonStr = JSON.stringify(data);
  
  $.ajax({
    type:'POST',
    contentType: 'aapplication/json; charset=utf-8',
    url:'https://www.martmanage86api.tk/yesmart-0.0.1-SNAPSHOT/line',
    data:jsonStr,
    dataType:jsonp,
    crossDomain: true,
    headers: {
      "accept": "application/json",
      "Access-Control-Allow-Origin":"*"
    },
    success: function(response){
      console.log(response)
    },
    error : function(xtr, status, error){
      alert(xtr +":"+status+":"+error);
    }
  });

});
