const fs = require("fs").promises;

class Question {
	constructor(fileName) {
		this.fileName = fileName;
	}

	async readQuestionStore() {
		const questionStore = await fs.readFile(this.fileName);
		const parsedQuestionStore = JSON.parse(questionStore);
		this.list = parsedQuestionStore.data;
	}
}

module.exports = Question;
