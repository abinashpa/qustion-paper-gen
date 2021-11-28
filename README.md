# Read Me
- This is a question paper generator based on [specification](https://santoshbaggam.notion.site/Coding-Assignment-Backend-f91feb20dce34ab39428ebe8a5131e4e).

- Requirements: You need to Node.js > v10 installed in your system.

- If your system doesn't have Node.js installed then you can goto https://nodejs.org and install LTS version.

- Follow these steps to run the programme.

1. Clone the repo.
```bash
git clone https://github.com/Abinash393/qustion-paper-gen.git
```

2. Add questions inside data object in question-store.json file. \
Ex: 
// Question Subject Topic Difficulty Marks
```json
["What is the speed of light", "Physics", "Waves", "Easy", 5]
```

3. Setup config.json file. \
Ex: For total 100 marks, 20% easy, 50% medium and 30% hard difficulty questions and question store file path.
```json
{
  "totalMarks": 100,
  "difficulty": {
    "easy": 20,
    "medium": 50,
    "hard": 30
  },
  "filePath": "./question-store.json"
}
```

4. Run (on unix like os).
```bash
cd qustion-paper-gen

node main
````

5. Result format (in arrays questions will be stored).
```json
{
  "easy": [],
  "medium": [],
  "hard": []
}
```