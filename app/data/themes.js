const themes = [
  {
    name: ["à la maison", "At Home", "في المنزل"],
    background: require("../../assets/background/background1.jpg"),
  },
  {
    name: ["Au marché", "At the greengrocer", "في السوق"],
    background: require("../../assets/background/background1.jpg"),
    questions: [
      {
        question: ["", "", ""],
        answers: [
          {
            answer: ["", "", ""],
            correct: false,
            color: 1,
          },
          {
            answer: ["", "", ""],
            correct: true,
            color: 0,
          },
          {
            answer: ["", "", ""],
            correct: false,
            color: 2,
          },
          {
            answer: ["", "", ""],
            correct: false,
            color: 3,
          },
        ],
      },
    ],
  },
  {
    name: ["Chez le médecin", "At the doctor", "عند الطبيب"],
    background: require("../../assets/background/background1.jpg"),
  },
  {
    name: ["Au restaurent", "At the restaurent", "في المطعم"],
    background: require("../../assets/background/background1.jpg"),
  },
  {
    name: ["Avec mes amis", "With my friends", "مع أصدقائي"],
    background: require("../../assets/background/background1.jpg"),
  },
];

export default themes;
