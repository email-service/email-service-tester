// // EmailDispatcher.ts
// import { IEmailService } from './EmailService';
// import { SendGridEmailService } from './SendGridEmailService';
// import { PostMarkEmailService } from './PostMarkEmailService';
// import { type EmailOptions } from './EmailService';



// export class EmailDispatcher {
// 	private emailService: IEmailService | undefined;

// 	constructor(service: string) {
// 		if (service === 'sendgrid') {
// 			this.emailService = new SendGridEmailService(process.env.SENDGRID_API_KEY);
// 		} else if (service === 'postmark') {
// 			this.emailService = new PostMarkEmailService(process.env.POSTMARK_API_KEY);
// 		}
// 	}

// 	async sendEmail(options: EmailOptions) {
// 		if (this.emailService)
// 			return await this.emailService.sendMail(options);
// 		else return ({ success: false, error: 'No email service configured' })
// 	}

// 	static async sendEmail(esp:string,options: EmailOptions) {
// 		const emailDispatcher = new EmailDispatcher(esp);
// 		return await emailDispatcher.sendEmail(options);
// 	}

	
// }
