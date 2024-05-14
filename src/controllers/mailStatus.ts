import { MailPayLoad, MailStatus, Provider, SendMailResponse, StatusMailResponse } from "../types";

export async function statusMail(mailId: string, provider?: Provider)
	: Promise<StatusMailResponse> {


	const responseExemple : StatusMailResponse= {
		success: true,
		status: MailStatus.Sent,
		events: [
			{
				id: '54656457',
				createdAt: '2024-05-09T18:45:00.545Z',
				status: MailStatus.Accepted
			},
			{
				id: '54656457',
				createdAt: '2024-05-09T18:47:05.545Z',
				status: MailStatus.Delivered
			},
			{
				id: '54656457',
				createdAt: '2024-05-09T18:48:05.545Z',
				status: MailStatus.Sent
			}
		]
	}


	if (true) {
		return responseExemple
	}
	else {
		return { success: false, errorNumber: 1, errorText: 'test de message d\erreur' }
	}

}