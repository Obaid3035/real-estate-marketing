import {GoogleSpreadsheet} from "google-spreadsheet";

import creds from './real-estate-378409-fa7cc0849b35.json';

export async function writeInfo(Name, Phone, Email) {
	try {
		const doc = new GoogleSpreadsheet('1szydB2OQTEyYf1pgwHIOYC6KbzdWnhMyQaGhM9hwBcg')
		await doc.useServiceAccountAuth(creds)
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
