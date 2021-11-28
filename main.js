const Question = require("./question");

async function main() {
	const paper1 = new Question("./question-store.json");
	await paper1.readQuestionStore();
}

main().catch(console.error);
