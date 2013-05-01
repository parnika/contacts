function validateCreate() {
  // add your validation code which runs when page is loaded
  var sEmail = $('#email').val();
  var sName = $('#user').val();
  var sPhone = $('#phone').val();


var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var filter1 = /^[a-zA-Z0-9]*$/;
var filter2 = /^[\d]*$/;

if((filter.test(sEmail)) &&  (filter1.test(sName)) && (filter2.test(sPhone)){
  return true;
}
else{
 
 if ((filter.test(sEmail)) == false) 
      alert('enter valid email id');
     
 if((filter1.test(sName)) == false)
      alert('enter valid name');

 if((filter2.test(sPhone)) == false)
      alert('enter valid phone number');
   return false;
}

}


$(function () {
  // on doc ready
  });
