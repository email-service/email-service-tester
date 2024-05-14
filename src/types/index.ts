export type MailPayLoad =
	{
		to: string,
		subject: string,
		text: string,
		html: string,
		meta: object
	}


export type Provider = 'postmark' | 'brevo'

export type ProviderParams =
	{
		name: 'postmark',
		server: string,
		stream: string
	} |
	{
		name: 'brevo'
	}


export type SendMailResponse =
	{
		success: true,
		id: string
	} |
	{
		success: false,
		errorNumber: number,
		errorText: string
	}


export enum MailStatus {
	Accepted = 'accepted',
	Sent = 'sent',
	Pending = 'pending',
	HardBounced = 'hardBounced',
	SpamChallenge = 'spamChallenge',
	Responder = 'responder',
	OtherBounces = 'otherBounces',
	Delivered = 'delivered',
	Opened = 'opened',
	Clicked = 'clicked',
	Error = 'error'
}


export type StatusMailResponse =
	{
		success: true,
		status: MailStatus,
		events: EventMail[]
	} |
	{
		success: false,
		errorNumber: number,
		errorText: string
	}


export type EventMail =
	{
		id: string,
		createdAt: string,
		status: MailStatus,
		comment?: string
	}