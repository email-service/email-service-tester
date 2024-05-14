// import { EmailDispatcher } from "../models/EmailDispatcher";
// import { EmailOptions } from "../models/EmailService";
// import { MailPayLoad, Provider, SendMailResponse } from "../types";



// export async function sendMail(mail: MailPayLoad, provider?: Provider)
// 	: Promise<SendMailResponse> {


// 	if (true) {
// 		return { success: true, id: 'exempleId' }
// 	}
// 	else {
// 		return { success: false, errorNumber: 1, errorText: 'test de message d\erreur' }
// 	}

// }

// // --------------------------------------------------------------------------------------------
// // Expedition de plusieurs emails
// // --------------------------------------------------------------------------------------------

// // Prepare the email list
// const emailList = ['toto@demoustier.om', 'romain@demoustier.com']

// // Create the EmailDispatcher instance
// const emailEPS = new EmailDispatcher('postmark')

// // Send the emails
// for (const email of emailList) {
// 	const emailToSend: EmailOptions = {
// 		to: email,
// 		from: 'noreply@yourdomain.com',
// 		subject: 'Welcome to Our Platform!',
// 		text: 'We are glad to have you onboard.',
// 		html: '<strong>We are glad to have you onboard.</strong>'

// 	}

// 	const resultSendEmail = emailEPS.sendEmail(emailToSend)

// 	if (resultSendEmail.success)
// 		console.log('Email sent successfully');
// 	else {
// 		console.error('Error sending email:', resultSendEmail.error);
// 	}
// }


// // --------------------------------------------------------------------------------------------
// // expedition d'un seul mail
// // --------------------------------------------------------------------------------------------

// // Prepare the email options
// const emailOptions: EmailOptions = {
// 	to: 'romain@toto.com',
// 	from: 'noreply@yourdomain.com',
// 	subject: 'Welcome to Our Platform!',
// 	text: 'We are glad to have you onboard.',
// 	html: '<strong>We are glad to have you onboard.</strong>'
// };

// // Send the email
// const resultSendEmail = EmailDispatcher.sendEmail('postmark', emailOptions);

// // Check the result
// if (resultSendEmail.success)
// 	console.log('Email sent successfully');
// else {
// 	console.error('Error sending email:', resultSendEmail.error);
// }