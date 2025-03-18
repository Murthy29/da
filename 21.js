var form = document.getElementById("form")
form.addEventListener('submit', function(e)
{
    var error=[]
    var success=[]
    e.preventDefault()
    // alert("form is submitted")

    var username=document.getElementById("username")
    var username=document.getElementById("password")
    // if(username.value==""||password.value=="")
    // {
    //     alert("please enter all details")
    // }
    if(username.value==""){
        error.push("please enter username")
    }
    if(password.value==""){
        error.push("please enter password")
    }
    var message = document.getElementById("message")
    message.innerText=error

})