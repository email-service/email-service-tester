const config = {
	esp: [
		{
			name: 'postmark#1',
			host: 'https://api.postmarkapp.com/',
			stream : 'stream 1',

		},{
			name: 'postmark#2',
			host: 'https://api.postmarkapp.com/',
			stream : 'stream 2',

		},
		{
			name: 'brevo',
			host: ''
		},
		{
			name: 'ethereal',
			host: 'smtp.ethereal.email',
			port: 587,
			auth: {
				user: 'henriette71@ethereal.email',
				pass: process.env.ETHEREAL_API_KEY
			}
		}
	]
}
export default config;