var nodemail  = require('nodemailer');
var transport = nodemail.createTransport({
	host: 'smtp.gmail.com',
	port: '587',
	secure: false,
	requireTLS: true,
	auth:{
		user: 'type your email here',
		pass: 'type your password here'
	} 
})

var mailOptions = {
	from: 'anilkushwaha.ind@gmail.com',
	to: 'anilkushwaha.ind@gmail.com',
	subject: 'Node Js mail',
	text: 'Auto generated mail'
}

transport.sendMail(mailOptions, function(error, info){
	if (error) {
		console.log(error)
	}
	else{
		console.log("email sent!", info.response)
	}

})