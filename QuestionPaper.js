class QuestionPaper {
	constructor(totalMarks, questionList, difficulty) {
		this.totalMarks = totalMarks;
		this.questionList = questionList;
		this.difficulty = difficulty;
		this.selectedQuestions = { easy: [], medium: [], hard: [] };
	}

	check() {
		if (
			this.totalMarks !==
			(this.difficulty.easy + this.difficulty.medium, this.difficulty.hard)
		) {
			console.info("Total marks doesn't match with given difficulty values");
		}
	}

	make() {
		const marksToBeAdded = {
			Easy: this.totalMarks * (this.difficulty.easy / 100),
			Medium: this.totalMarks * (this.difficulty.medium / 100),
			Hard: this.totalMarks * (this.difficulty.hard / 100),
		};

		const question = 0;
		const difficulty = 3;
		const marks = 4;

		for (let data of this.questionList) {
			switch (data[difficulty]) {
				case "Easy":
					if (marksToBeAdded["Easy"] === 0) continue;
					this.selectedQuestions.easy.push(data);
					marksToBeAdded["Easy"] -= data[marks];
					break;

				case "Medium":
					if (marksToBeAdded["Medium"] === 0) continue;
					this.selectedQuestions.medium.push(data);
					marksToBeAdded["Medium"] -= data[marks];
					break;

				case "Hard":
					if (marksToBeAdded["Hard"] === 0) continue;
					this.selectedQuestions.hard.push(data);
					marksToBeAdded["Hard"] -= data[marks];
					break;

				default:
					console.info(`Unknown difficulty on ${data[question]}`);
					break;
			}
		}
	}

	print() {
		console.info(this.selectedQuestions);
	}
}

module.exports = QuestionPaper;
