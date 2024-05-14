// EmailService.ts
export interface IEmailService {
	sendMail(options: EmailOptions): Promise<{ success: boolean, error?: any }>;
}

export interface EmailOptions {
	to: string;
	from: string;
	subject: string;
	text: string;
	html: string;
	meta: object
}
