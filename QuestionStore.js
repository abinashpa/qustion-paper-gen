const fs = require("fs/promises");

class questionStore {
	constructor(fileName) {
		this.fileName = fileName;
	}

	async readData() {
		const questionStore = await fs.readFile(this.fileName);
		const parsedQuestionStore = JSON.parse(questionStore);
		this.list = parsedQuestionStore.data;
	}
}

module.exports = questionStore;
