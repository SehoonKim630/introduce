$('#submitBtn').click(function(){
  var nameDt = $('#contactForm').find('#name').val();
  var emailDt = $('#contactForm').find('#email').val();
  var phoneDt = $('#contactForm').find('#phone').val();
  var messageDt = $('#contactForm').find('#message').val();
  
  var datas = {
    "name" : nameDt,
    "email" : emailDt,
    "phone" : phoneDt,
    "message" : messageDt
  }
  
  $.ajax({
    type:'POST',
    contentType: 'application/json; charset=utf-8',
    url:'https://www.martmanage86api.tk/yesmart-0.0.1-SNAPSHOT/line',
    data:JSON.stringify(datas),
    success: function(response){
      console.log(response)
      alert("送信しました。");
    },
    error : function(xtr, status, error){
      alert(xtr +":"+status+":"+error);
    }
  });

});
