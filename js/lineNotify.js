$('#submitBtn').click(function(){
  var name = $('#contactForm').find('#name').val();
  var email = $('#contactForm').find('#email').val();;
  var phone = $('#contactForm').find('#phone').val();;
  var message = $('#contactForm').find('#message').val();;
  
  alert(name + ', ' + email + ', ' + phone + ', ' + message);
  
  $.ajax({
    type:'POST',
    contentType: 'application/json',
    url:'http://35.212.132.206:5000/line',
    //data:JSON.stringify(data),
    //dataType: 'text',
    success: function(response){
      console.log(response)
    },
    error : function(xtr, status, error){
      alert(xtr +":"+status+":"+error);
    }
  });

});
