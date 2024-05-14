// SendGridEmailService.ts
import * as sgMail from '@sendgrid/mail';
import { IEmailService, EmailOptions } from './EmailService';

export class PostMarkEmailService implements IEmailService {
  constructor(apiKey: string) {
    sgMail.setApiKey(apiKey);
  }

  async sendMail(options: EmailOptions): Promise<{ success: boolean, error?: any }> {
    try {
      await sgMail.send(options);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
}
