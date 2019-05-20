import * as nodemailer from 'nodemailer';

export default class EmailService {
	public to: string;
	public subject: string;
	public message: string;

	constructor(to: string, subject: string, message: string) {
		this.to = to;
		this.subject = subject;
		this.message = message;
	}

	/****
	 * Method for send email 
	 */
	sendEmail() {
		const mailOptions = {
			from: 'socket020497@gmail',
			to: this.to,
			subject: this.subject,
			text: this.message
        };
        
		const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
			auth: {
				user: 'socket020497@gmail.com',
				pass: 'thehum97'
			}
		});

		transporter.sendMail(mailOptions, async (error, info) => {
         if (error) console.log(error);
         await console.log(info.response)
		});
	}
}
