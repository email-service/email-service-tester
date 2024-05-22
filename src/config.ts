const config = {
	esp: [
		{
			name: 'postmark_test',
			host: 'https://api.postmarkapp.com/',
			stream : 'test',

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