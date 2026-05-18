function sendEmail() {

    let mailing = {

        to_name:
        document.getElementById("name").value,

        from_email:
        document.getElementById("email").value,

        message:
        document.getElementById("message").value

    };


    emailjs.send(

        "service_w07den6",

        "template_7b408c9",

        mailing

    )

    .then(function(){

        alert("Email has been sent");

    })

    .catch(function(error){

        console.log(error);

        alert("Failed to send");

    });

}