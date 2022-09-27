$('#submitBtn').click(function(){
  var name = $('#contactForm').find('#name').val();
  var email = $('#contactForm').find('#email').val();
  var phone = $('#contactForm').find('#phone').val();
  var message = $('#contactForm').find('#message').val();
  
  alert(name + ', ' + email + ', ' + phone + ', ' + message);
  
  var params = {
    name : $('#contactForm').find('#name').val(),
    email : $('#contactForm').find('#email').val(), 
    phone : $('#contactForm').find('#phone').val(), 
    message : $('#contactForm').find('#message').val()
  }
  
  $.ajax({
    type:'POST',
    contentType: 'application/json',
    url:'https://www.martmanage86api.tk/yesmart-0.0.1-SNAPSHOT/line',
    data:params,
    success: function(response){
      console.log(response)
    },
    error : function(xtr, status, error){
      alert(xtr +":"+status+":"+error);
    }
  });

});
