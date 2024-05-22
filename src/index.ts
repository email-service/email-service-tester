import { Hono } from 'hono'
import { EmailDispatcher } from '@email-service/email-service'


const app = new Hono()

app.get('/', (c) => {

	return c.text('Server is runing')
})


app.get('/nm', async (c) => {

	// const emailEPS = new EmailDispatcher({
	// 	esp: 'nodeMailer',
	// 	name: 'ethereal',
	// 	host: 'smtp.ethereal.email',
	// 	port: 587,
	// 	auth: {
	// 		user: 'abby.lockman@ethereal.email',
	// 		pass: 'YuahaqNRmH47gWEhT1'
	// 	}
	// })
	//console.log('emailEPS', emailEPS)


	const emailEPS = new EmailDispatcher({
		esp: 'nodemailer',
		name: 'ethereal',
		host: 'localhost',
		port: 1025,
		auth: {
			user: 'project.1',
			pass: 'secret.12'
		}
	})

	const emailToSend = await emailEPS.sendEmail({
		to: 'romaindemoustier.com',
		from: 'test@demoustier.com',
		subject: 'Essai de message' + new Date().toLocaleTimeString(),
		text: 'Corp du message',
		html: 'string html du message',
		meta: { test: 'test' }
	})

	console.log('emailToSend', emailToSend)

	emailEPS.close()

	return c.json(emailToSend)
})


app.get('/pm', async (c) => {


	const emailEPS = new EmailDispatcher(
		{
			esp: 'postmark',
			name: 'PostMarktestSimu',
			host: 'https://api.postmarkapp.com/email',
			stream: 'test',
			apiKey: process.env.POSTMARK_API_KEY || ''
		})

	console.log('emailEPS', emailEPS)

	const emailToSend = await emailEPS.sendEmail({
		to: 'romain@demoustier.com',
		from: 'test@question.direct',
		subject: 'Essai de message PostMark' + new Date().toLocaleTimeString(),
		text: 'Corp du message en texte',
		html: '<h1>Message en HTML</h1><p>avec un paragraphe</p><p>envoyer par PostMark à ' + new Date().toLocaleTimeString() + '</p>',
		meta: { test: 'test' }
	})

	console.log('emailToSend', emailToSend)


	return c.json(emailToSend)
})


app.get('/brevo', async (c) => {


	const emailEPS = new EmailDispatcher(
		{
			esp: 'brevo',
			name: 'Brevotest',
			host: 'https://api.brevo.com/v3/smtp/email',
			apiKey: process.env.BREVO_API_KEY  || ''
		})

	console.log('emailEPS', emailEPS)

	const emailToSend = await emailEPS.sendEmail({
		to: 'romain@demoustier.com',
		from: 'server@maluro.com',
		subject: 'Essai de message Brevo' + new Date().toLocaleTimeString(),
		text: 'Corp du message en texte',
		html: '<h1>Message en HTML</h1><p>avec un paragraphe</p><p>envoyer par Brevo à ' + new Date().toLocaleTimeString() + '</p>',
		meta: { test: 'test' }
	})

	console.log('emailToSend', emailToSend)


	return c.json(emailToSend)
})



app.get('/esw', async (c) => {


	const emailEPS = new EmailDispatcher(
		{
			esp: 'emailserviceviewer',
			name: 'emailservicetest',
			host: 'http://192.168.68.52:5173/api/sendMail',
			apiToken: 'token a demander'
		})

	console.log('emailEPS', emailEPS)

	const emailToSend = await emailEPS.sendEmail({
		to: 'romain@demoustier.com',
		from: 'server@maluro.com',
		subject: 'Essai de message email-service-viewer envoyé à ' + new Date().toLocaleTimeString(),
		text: 'Corp du message en texte',
		html: '<h1>Message en HTML</h1><p>avec un paragraphe</p><p>envoyer  à ' + new Date().toLocaleTimeString() + '</p>',
		meta: { test: 'test' }
	})

	console.log('emailToSend', emailToSend)


	return c.json(emailToSend)
})



app.get('/em', async (c) => {

	// const emailEPS = new EmailDispatcher({
	// 	esp: 'nodeMailer',
	// 	name: 'ethereal',
	// 	host: 'smtp.ethereal.email',
	// 	port: 587,
	// 	auth: {
	// 		user: 'abby.lockman@ethereal.email',
	// 		pass: 'YuahaqNRmH47gWEhT1'
	// 	}
	// })
	//console.log('emailEPS', emailEPS)


	const emailEPS = new EmailDispatcher({
		esp: 'nodemailer',
		name: 'ethereal.email',
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'marcelina.trantow3@ethereal.email',
			pass: '3YRPvw6fQjQs4Qa7sz'
		}
	})

	const emailToSend = await emailEPS.sendEmail({
		to: 'romain@demoustier.com',
		from: 'test@demoustier.com',
		subject: 'Essai de message to ethermail' + new Date().toLocaleTimeString(),
		text: 'Corp du message',
		html: 'string html du message',
		meta: { test: 'test' }
	})

	console.log('emailToSend', emailToSend)

	emailEPS.close()

	return c.json(emailToSend)
})


app.post('/webhook', async (c) => {
	// Récupérer les en-têtes
	const headers = c.req.raw.headers;

	// Récupérer le corps de la requête
	const body = await c.req.json();


	console.log('Headers:', headers);
	console.log('Body:', body);


	const userAgent = c.req.raw.headers.get('user-agent') || 'unknown';
	console.log('user:', userAgent);
	const responseWebHook = await EmailDispatcher.webHook(userAgent, body)

	console.log('responseWebHook:', responseWebHook);
	// Log des headers et du body pour les visualiser
	return c.text('Webhook received')
})


export default app
