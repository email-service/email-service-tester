import { Hono } from 'hono'
import { helloWorld, EmailDispatcher } from '@email-service/email-service'


const app = new Hono()

app.get('/', (c) => {

	return c.text(helloWorld('Romain Demoustier'))
})


app.get('/test', async (c) => {

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
		esp: 'nodeMailer',
		name: 'ethereal',
		host: 'localhost',
		port: 1025,
		auth: {
			user: 'project.1',
			pass: 'secret.1'
		}
	})

	const emailToSend = await emailEPS.sendEmail({
		to: 'romain@demoustier.com',
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


	const emailEPS = new EmailDispatcher(
		{
			esp: 'postmark',
			name: 'PostMarktestSimu',
			host: 'https://api.postmarkapp.com/email',
			stream: 'question-direct',
			apiKey:' process.env.POSTMARK_API_KEY'
		})

		console.log('emailEPS', emailEPS)

	const emailToSend = await emailEPS.sendEmail({
		to: 'romain@demoustier.com',
		from: 'test@simu.immo',
		subject: 'Essai de message ' + new Date().toLocaleTimeString(),
		text: 'Corp du message',
		html: '<h1>Message en HTML</h1><p>avec un paragraphe</p><p>envoyer par PostMark à '+ new Date().toLocaleTimeString()+'</p>',
		meta: { test: 'test' }
	})

	console.log('emailToSend', emailToSend)


	return c.json(emailToSend)
})



export default app
