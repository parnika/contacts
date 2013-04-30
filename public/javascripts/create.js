function validateCreate() {
  // add your validation code which runs when page is loaded
  // name - a-zA-Z0-9.

  // email should be valid
  

  // phone should be numberic
 // alert('in validate');
  var sEmail = $('#email').val();
  var sName = $('#user').val();
  var sPhone = $('#phone').val();

  //alert('name:'+sName);
 // alert('phone:'+sPhone);
    /*var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
     if (filter.test(sEmail)) {
         return true;
     }
     else {alert('enter valid email id');
     return false;
    }

var filter1 = /^[a-zA-Z0-9]*$/;
     if (filter1.test(sName)) 
     	{alert('name:'+sName);      
        return true;
     }
     else {alert('enter valid name');
      return false;
    }*/

var filter2 = /^[\d]*$/;  
     if (filter2.test(sPhone)) {
         return true;
     }
     else {alert('enter valid number');
      return false;
    }


  //return true;
}


$(function () {
  // on doc ready
  //alert('hi');
  validateCreate();
  //alert('hiii');
});
