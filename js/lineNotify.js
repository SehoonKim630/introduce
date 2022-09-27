$('#submitBtn').click(function(){
  var name = $('#contactForm').find('#name').val();
  var email = $('#contactForm').find('#email').val();;
  var phone = $('#contactForm').find('#phone').val();;
  var message = $('#contactForm').find('#message').val();;
  
  alert(name + ', ' + email + ', ' + phone + ', ' + message);
});
