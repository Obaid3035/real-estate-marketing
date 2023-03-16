import {GoogleSpreadsheet} from "google-spreadsheet";

export async function writeInfo(Name, Phone, Email) {
	try {
		const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
		console.log({
			type: process.env.TYPE,
			project_id: process.env.PROJECT_ID,
			private_key_id: process.env.PRIVATE_KEY_ID,
			private_key: process.env.PRIVATE_KEY,
			client_email: process.env.CLIENT_EMAIL,
			client_id: process.env.CLIENT_ID,
			auth_uri: process.env.AUTH_URI,
			token_uri: process.env.TOKEN_URI,
			auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
			client_x509_cert_url: process.env.CLIENT_X509_CERT_URL

		})
		await doc.useServiceAccountAuth({
			type: process.env.TYPE,
			project_id: process.env.PROJECT_ID,
			private_key_id: process.env.PRIVATE_KEY_ID,
			private_key: process.env.PRIVATE_KEY,
			client_email: process.env.CLIENT_EMAIL,
			client_id: process.env.CLIENT_ID,
			auth_uri: process.env.AUTH_URI,
			token_uri: process.env.TOKEN_URI,
			auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
			client_x509_cert_url: process.env.CLIENT_X509_CERT_URL

		})
		await doc.loadInfo();
		const sheet = doc.sheetsByIndex[0]
		await sheet.addRow({
			Name,
			Phone,
			Email
		})
	} catch (e) {
		console.log(e);
	}
}
