// ykhossna nzidou les options te3 les langages (questionFr,questionEN,questionAr)
// (reponseFr,reponseEN,reponseAr)  :: ndirohoum f array w ndirou l'index 
// 3la 7sseb marana dyrin language tw3na 
//  + color te3 kol reponse

const questions = [
  {
    question: "la première question",
    answers: [
      { body: "reponse 1", isRight: false },
      { body: "reponse 2", isRight: true },
      { body: "reponse 3", isRight: false },
      { body: "reponse 4", isRight: false },
    ],
  },
  {
    question: "la deuxiéme question",
    answers: [
      { body: "reponse 1", isRight: false },
      { body: "reponse 2", isRight: false },
      { body: "reponse 3", isRight: true },
      { body: "reponse 4", isRight: false },
    ],
  },
  {
    question: "la troisième question",
    answers: [
      { body: "reponse 1", isRight: false },
      { body: "reponse 2", isRight: true },
      { body: "reponse 3", isRight: false },
      { body: "reponse 4", isRight: false },
    ],
  },
  {
    question: "la quatrième question",
    answers: [
      { body: "reponse 1", isRight: false },
      { body: "reponse 2", isRight: false },
      { body: "reponse 3", isRight: false },
      { body: "reponse 4", isRight: true },
    ],
  },
  {
    question: "la cinquème question",
    answers: [
      { body: "reponse 1", isRight: false },
      { body: "reponse 2", isRight: true },
      { body: "reponse 3", isRight: false },
      { body: "reponse 4", isRight: false },
    ],
  },
  {
    question: "la sixième question",
    answers: [
      { body: "reponse 1", isRight: true },
      { body: "reponse 2", isRight: false },
      { body: "reponse 3", isRight: false },
      { body: "reponse 4", isRight: false },
    ],
  },
  {
    question: "la septième question",
    answers: [
      { body: "reponse 1", isRight: false },
      { body: "reponse 2", isRight: false },
      { body: "reponse 3", isRight: false },
      { body: "reponse 4", isRight: true },
    ],
  },
];

export default questions;
