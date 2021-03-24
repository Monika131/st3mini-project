function validateform(){
    var letters = /^[A-Za-z]+$/;
      if(document.regform.name.value.match(letters)||document.regform.name.value == "")
      {
      }
      else
      {
      alert('Please input characters only in First Name');
      return false;
      }
    if(document.regform.name.value == "")
    {
        alert("please Enter your NAME");
        document.regform.name.focus();
        return false;
    }
    if(document.regform.email.value == "")
			{
				alert("please Enter email");
				document.regform.email.focus();
				return false;
            }
            if(document.regform.number.value.match(numbers)||document.regform.number.value=="")
             {
       
             }
             else
             {
             alert('Please input numbers only');
             return false;
             }
                   if(document.regform.number.value=="")
                   {
                       alert("Please Enter Your Number");
                       document.regform.number.focus();
                       return false;
                   }
			var email = document.regform.email.value;
            atpos = email.indexOf("@");
  			dotpos = email.lastIndexOf(".");
 			if (atpos < 1 || ( dotpos - atpos < 2 )) 
 			{
     		alert("Please enter correct email ID")
     		document.regform.email.focus() ;
		    return false;
             }
             var numbers = /^[0-9]+$/;
             
}