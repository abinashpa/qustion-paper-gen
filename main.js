const fs = require("fs/promises");
const QuestionStore = require("./QuestionStore");
const QuestionPaper = require("./QuestionPaper");

async function main() {
	const configFile = await fs.readFile("config.json");
	const parsedConfigFile = JSON.parse(configFile);

	const questionStore = new QuestionStore(parsedConfigFile.filePath);
	await questionStore.readData();
	
	const questionPaper = new QuestionPaper(
		parsedConfigFile.totalMarks,
		questionStore.list,
		parsedConfigFile.difficulty
	);
	questionPaper.check();
	questionPaper.make();
	questionPaper.print();
}

main().catch(console.error);
