function form()
{
    var name = document.getElementById("iname").value ;
    var email = document.getElementById("iemail").value ;
    var password = document.getElementById("ipass").value ;
    var confirmpassword = document.getElementById("icpass").value ;
    var mobilenumber = document.getElementById("inum").value ;
    var namepattern =/^[A-Za-z.]/;
    var emailpattern=/cse_\d{10}@lus\.ac\.bd/;

    var passwordpattern=/((?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.[!@#$%&*])).{8,20}/;

    var mobilepatter = /(\+88)?01[2-9]\d{8}/;

    if(name.length<2 || name.length>30)
    {
        alert("insert between 2-30 char");//escaping \\
    }
    else if (!name.match(namepattern))
    {
        alert("enter valid name");
    }
    else{
        alert("valid")
    }
}

