function validate()
{ 
   if( document.StudentDetailsForm.name.value == "" )
   {
     alert( "Please provide your Name!" );
     document.StudentDetailsForm.name.focus() ;
     return false;
   }

   var email = document.StudentDetailsForm.email.value;
   atpos = email.indexOf("@");
   dotpos = email.lastIndexOf(".");
   if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
  {
    alert("Please enter correct Email ID")
    document.StudentDetailsForm.email.focus() ;
    return false;
  }

  if ( ( StudentDetailsForm.gender[0].checked == false ) && ( StudentDetailsForm.gender[1].checked == false ) && ( StudentDetailsForm.gender[2].checked == false ) )
  {
  alert ( "Please choose your Gender" );
  return false;
  } 

   if( document.StudentDetailsForm.address.value == "" )
   {
     alert( "Please provide your Address!" );
     document.StudentDetailsForm.address.focus() ;
     return false;
   }

   if( document.StudentDetailsForm.branch.value == "-1" )
   {
     alert( "Please provide your Branch!" );
     document.StudentDetailsForm.branch.focus() ;
     return false;
   }   

   if ( ( StudentDetailsForm.year[0].checked == false ) && ( StudentDetailsForm.year[1].checked == false ) && ( StudentDetailsForm.year[2].checked == false ) && ( StudentDetailsForm.year[3].checked == false))
  {
   alert ( "Please choose your Gender" );
   return false;
  } 

   if ( ( StudentDetailsForm.scholarship[0].checked == false ) && ( StudentDetailsForm.scholarship[1].checked == false ) )
   {
   alert ( "Please choose your answer" );
   return false;
   }  

   if( StudentDetailsForm.phno.value == "" ||
           isNaN( StudentDetailsForm.phno.value) ||
           StudentDetailsForm.phno.value.length != 10 )
   {
     alert( "Please enter correct Phone No." );
     StudentDetailsForm.phno.focus() ;
     return false;
   }

   else
   {
     alert("Form Succesfully Submitted");
     window.location.reload();
     return true;
   }
}   