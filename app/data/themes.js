const themes = [
  {
    name: ["À la maison", "At home", "في المنزل"],
    background: require("../../assets/background/background1.png"),
    backgroundGame: require("../../assets/background/background0.jpg"),
    badge: {
      image: 0,
      text: ["0", "0", "0"],
    },
    intro: [
      " Notre aventure commence ici à la maison. Ensemble nous apprendrons les secrets d’une alimentation saine. Olé,que l’aventure commence !",
      "Our adventure begins here at home. Together we will learn the secrets of healthy eating. Olé, let the adventure begin!",
      "!تبدأ مغامرتنا هنا في المنزل. سنتعلم معًا أسرار الأكل الصحي. هيا ، فلتبدأ المغامرة",
    ],
    skills: [
      [
        "Prendre conscience de ce qu’est une alimentation saine",
        "Become aware of healthy eating",
        "التعرف على مفهوم الأكل الصحي",
      ],
      [
        "Prendre conscience de ce qu’est un repas équilibré",
        "Become aware of what a balanced meal is",
        "التعرف على مفهوم  الوجبة المتوازنة",
      ],
      [
        "Prendre connaissance du nombre de repas par jour ainsi que leur importance ",
        "Know the number of meals per day and their importance",
        "التعرف على عدد الوجبات في اليوم واهميتها",
      ],
    ],
    questions: [
      {
        question: [
          "Il est important que les enfants comme toi mangent bien pour grandir et devenir plus fort.",
          "It is important that children eat well to grow and become stronger.",
          "من المهم أن يأكل الأطفال مثلك جيدًا لينموا و ويصبحوا أقوى ؟",
        ],
        type: 0,
        explanation: [
          "Se nourrir est un acte essentiel afin d'apporter à notre corps les aliments dont on a besoin pour bien fonctionner",
          "Eating is an essential act in order to provide our body with the food we need to function well.",
          ".الأكل هو عمل أساسي لتزويد أجسامنا بالطعام الذي نحتاجه ليعمل بشكل جيد",
        ],
        answers: [
          {
            answer: ["Vrai", "True", "صحيح"],
            correct: true,
            color: 0,
          },
          {
            answer: ["Faux", "False", "خطأ"],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Manger sain revient à faire le choix d'une alimentation variée, équilibrée et en quantité adaptée.",
          "Eating healthy means choosing a varied, balanced diet in the right quantity..",
          "الأكل الصحي يعني اختيار نظام غذائي متنوع ومتوازن و بالكمية المناسبة. ؟",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: ["Vrai", "True", "صحيح"],
            correct: true,
            color: 0,
          },
          {
            answer: ["Faux", "False", "خطأ"],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Combien de repas un enfant doit-il prendre par jour ?",
          "How many meals should a child eat per day ?",
          "كم عدد الوجبات التي يجب أن يتناولها الطفل في اليوم ؟",
        ],
        type: 0,
        explanation: [
          "L'apport énergétique doit être réparti dans la journée au cours des quatre repas pour couvrir les dépenses du corps humain",
          "Eating four meals a day improves your energy levels and keeps your metabolism working",
          "يجب توزيع مدخول الطاقة على مدار اليوم على أربع وجبات لتغطية نفقات الجسم",
        ],
        answers: [
          {
            answer: ["Un seul repas", "Only one meal", "وجبة واحدة"],
            correct: false,
            color: 3,
          },
          {
            answer: ["Deux repas", "Two meals", "وجبتين"],
            correct: false,
            color: 2,
          },
          {
            answer: ["Trois repas", "Three meals", "ثلاث وجبات"],
            correct: false,
            color: 1,
          },
          {
            answer: ["Quatre repas", "Four meals", "أربع وجبات"],
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Quels sont les repas à prendre au cours de la journée ?",
          "What are the meals to eat during the day?",
          " ما هي الوجبات التي يجب تناولها في اليوم ؟",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: ["Déjeuner et dîner", "Lunch and dinner", "الغذاء والعشاء"],
            correct: false,
            color: 1,
          },
          {
            answer: [
              "Petit déjeuner et dîner",
              "Breakfast and dinner",
              "فطورالصباح و العشاء",
            ],
            correct: false,
            color: 2,
          },
          {
            answer: [
              "Déjeuner et goûter du soir",
              "Lunch and evening snack",
              "الغذاء ووجبة المساء",
            ],
            correct: false,
            color: 3,
          },
          {
            answer: [
              "Petit déjeuner, déjeuner, goûter du soir et dîner",
              "Breakfast, lunch, evening snack and dinner",
              "فطورالصباح, الغذاء, وجبة المساء و العشاء ",
            ],
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Quel est le repas le plus important de la journée ?",
          "What is the most important meal of the day ?",
          "ما هي اهم وجبة في اليوم ؟",
        ],
        type: 0,
        explanation: [
          "Le petit-déjeuner est le repas le plus important de la journée, il apporte à ton corps le quart de ses besoins énergétiques nécessaires pour la journée",
          "Breakfast is the most important meal of the day, it provides your body with a quarter of the energy needs necessary for the day",
          ".الفطور هو أهم وجبة في اليوم ، فهو يمد جسم الإنسان بربع الطاقة التي يحتاجها في اليوم",
        ],
        answers: [
          {
            answer: ["Le dîner", "dinner", " العشاء"],
            correct: false,
            color: 2,
          },
          {
            answer: ["Le petit déjeuner", "Breakfast", "فطور الصباح"],
            correct: true,
            color: 0,
          },
          {
            answer: ["Le goûter du soir", "Evening snack", "وجبة المساء"],
            correct: false,
            color: 3,
          },
          {
            answer: ["Le déjeuner", "Lunch", "الغذاء"],
            correct: false,
            color: 1,
          },
        ],
      },
      {
        question: [
          "Quel est le repas qu'il ne faut absolument pas rater ?",
          "What is the meal that should not be missed ?",
          "ما هي الوجبة التي لا ينبغي تفويتها ؟",
        ],
        type: 0,
        explanation: [
          "Le petit déjeuner est essentiel pour toi, il permet de recharger tes batteries après le long jeûne de la nuit et t'apporte les nutriments nécessaires à ta concentration.",
          "Breakfast is essential for you, it allows to recharge your batteries after the long night's fast and provides you with the nutrients necessary for your concentration.",
          "فطور الصباح  ضروري بالنسبة لك ، فهو يسمح بإعادة شحن بطارياتك بعد صيام الليل الطويل ويوفر لك العناصر الغذائية اللازمة لتركيزك",
        ],
        answers: [
          {
            answer: ["Le petit déjeuner", "Breakfast", "فطور الصباح"],
            correct: true,
            color: 0,
          },
          {
            answer: ["Le dîner", "dinner", " العشاء"],
            correct: false,
            color: 2,
          },
          {
            answer: ["Le goûter du soir", "Evening snack", "وجبة المساء"],
            correct: false,
            color: 3,
          },
          {
            answer: ["Le déjeuner", "Lunch", "الغذاء"],
            correct: false,
            color: 1,
          },
        ],
      },
      {
        question: [
          "De quoi est constitué un repas équilibré ?",
          "What are the components of a balanced meal ?",
          "من ماذا تتكون وجبة متوازنة ؟ ",
        ],
        type: 1,
        explanation: [
          "Un repas équilibré doit être composé d'aliments des trois groupes alimentaires voire les légumes et les fruits, les produits de grains entiers et les aliments protéinés. ?",
          "A balanced meal should include foods from all three food groups including vegetables and fruits, whole grain products and protein foods ?",
          "يجب أن تشمل الوجبة المتوازنة أطعمة من المجموعات الغذائية الثلاث بما في ذلك الخضار والفواكه ومنتجات الحبوب الكاملة والأطعمة البروتينية",
        ],
        answers: [
          {
            answer: ["Des légumes", "Vegetables", "خضروات"],
            image: require("../../assets/images/légumes.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: [
              "Des glucides (riz, pâtes, pain)",
              "Carbohydrates (rice, pasta, bread)",
              "الكربوهيدرات (الأرز والمعكرونة والخبز)",
            ],
            image: require("../../assets/images/carbs1.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: [
              "Des légumes, des glucides et des protéines",
              "Carbohydrates, vegetables and proteins",
              " خضروات ,الكربوهيدرات والبروتينات",
            ],
            image: require("../../assets/images/mélange1.png"),
            correct: true,
            color: 0,
          },
          {
            answer: [
              "Des protéines (viande, poulet, poisson)",
              "Proteins (meat, chicken, fish)",
              "البروتينات (اللحوم والدجاج والأسماك)",
            ],
            image: require("../../assets/images/protéine.jpg"),
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Est ce que c'est bien de boire beaucoup d'eau durant la journée ?",
          "Is it good to drink a lot of water during the day ?",
          "هل من الجيد شرب الكثير من الماء خلال اليوم ؟",
        ],
        type: 0,
        explanation: [
          "L'eau représente 65% du corps humain. C'est un besoin vital pour assurer notre survie de même que l'oxygène ou la nourriture.",
          "Water represents 65% of the human body. It is a vital need to ensure our survival as well as oxygen or food",
          "يمثل الماء 65٪ من جسم الإنسان. إنها حاجة حيوية لضمان بقائنا كالأكسجين أو الطعام.",
        ],
        answers: [
          {
            answer: ["Vrai", "True", "صحيح"],
            correct: true,
            color: 0,
          },
          {
            answer: ["Faux", "False", "خطأ"],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Que devrais-je prendre lorsque j'ai faim entre les repas ?",
          "What should I take when I am hungry after eating ?",
          "ماذا يجب أن آخذ عندما أجوع بين الوجبات ؟",
        ],
        type: 1,
        explanation: [
          "Les fruits sont riches en vitamines, en minéraux et en fibres. C'est pourquoi il est recommandé d'en manger",
          "Fruits are rich in vitamins, minerals and fiber. That is why it is recommended to eat it",
          "الفواكه غنية بالفيتامينات والمعادن والألياف. لهذا السبب ينصح بتناولها",
        ],
        answers: [
          {
            answer: [" Des chips", "Chips", "رقائق البطاطس"],
            image: require("../../assets/images/chips.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["Un fruit", "A fruit", "فاكهة"],
            image: require("../../assets/images/fruit.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["Du chocolat", "Chocolate", "شوكولاتة"],
            image: require("../../assets/images/choco.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: ["Des bonbons", "Candy", "حلوى"],
            image: require("../../assets/images/bonbon1.png"),
            correct: false,
            color: 3,
          },
        ],
      },

      {
        question: [
          "Quel aliment doit rester occasionnel pour un sain petit déjeuner ?",
          "What food should be occasional for a healthy breakfast?",
          "ما هو الطعام الذي يجب أن يتواجد من حين لآخر فقط  لوجبة فطور صحية ؟",
        ],
        type: 1,
        explanation: [
          "La consommation excessive de chocolat peut conduire à une prise de poids ou même à des maladies plus graves, c'est pourquoi il faut le consommer avec modération ",
          "Eating a lot of chocolate can lead to weight gain or even more serious health issues,which is why it should be consumed with moderation",
          "يمكن أن يؤدي الاستهلاك الزائد للشوكولاتة إلى زيادة الوزن أو حتى الإصابة بأمراض أكثر خطورة ، ولهذا يجب تناولها باعتدال",
        ],
        answers: [
          {
            answer: ["Le lait", "Milk", "حليب"],
            image: require("../../assets/images/milk.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["Les fruits", "Fruits", "الفواكه"],
            image: require("../../assets/images/fruit.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: ["Le chocolat", "Chocolate", "الشوكولاطة"],
            image: require("../../assets/images/choco.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["Le pain", "Bread", "الخبز"],
            image: require("../../assets/images/bread.jpg"),
            correct: false,
            color: 1,
          },
        ],
      },
      {
        question: [
          "Trouve l'intrus. Si je n'ai pas le temps de prendre mon petit déjeuner, j'emporte avec moi :",
          "Find the intruder. If I don't have time for breakfast, I take with me:",
          "ابحث عن الدخيل. إذا لم يكن لدي وقت لتناول فطورالصباح ، فأنا آخذ معي:",
        ],
        type: 0,
        explanation: [
          "Le petit déjeuner est très important pour les enfants comme toi",
          "Breakfast is so important especially for kids like you",
          "فطور الصباح هو أهم طبق في اليوم بالنسبة للصغار مثلك",
        ],
        answers: [
          {
            answer: [
              "Une boîte de céréales et un fruit ou une tartine",
              "Cereal and a fruit or a toast",
              "علبة حبوب و فاكهة أو خبز بالزبدة و المربى",
            ],
            correct: false,
            color: 3,
          },
          {
            answer: [
              "Ce n'est pas grave, le petit déjeuner n'est pas important",
              "Nothing, breakfast is not important",
              "لا أتناول شيئا ففطور الصباح ليس مهما",
            ],
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Lequel de ces aliments ne fait pas partie de la famille des féculents ?",
          "Which of these foods is not part of the starch family ?",
          "أي من الأطعمة التالية ليس جزءًا من عائلة النشويات ؟",
        ],
        type: 1,
        explanation: [
          "La famille des féculents réunit les nutriments d'origine végétale, tandis que la viande est d'origine animale. Elle appartient à la famille des protéines",
          "The family of starches brings together nutrients of plant origin, while meat is of animal origin. It belongs to the protein family",
          "تجمع عائلة النشويات بين العناصر الغذائية من أصل نباتي ، في حين أن اللحوم من أصل حيواني. فهي تنتمي إلى عائلة البروتينات",
        ],
        answers: [
          {
            answer: ["Le pain", "Bread", "الخبز"],
            image: require("../../assets/images/bread.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["Les pâtes", "Pasta", "المعجنات"],
            image: require("../../assets/images/pasta.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: ["La viande", "Meats", "اللحوم"],
            image: require("../../assets/images/meat.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["Les céréales", "Cereals", "الحبوب"],
            image: require("../../assets/images/cereale.jpg"),
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Je fais partie de la famille des viandes et dérivés. Je suis pondu par la poule. Il faut me déplacer avec précaution sinon je casse. Qui suis-je ?",
          "I belong to the family of meat and its derivatives, I came from the chicken, I must move carefully or else I will break. who am I ?",
          "أنا من عائلة اللحوم ومشتقاتها, جئت  من الدجاجة , يجب أن أتحرك بعناية وإلا أنكسر. من أنا ؟",
        ],
        type: 1,
        explanation: [],
        answers: [
          {
            answer: ["Un oeuf", "An egg", "بيضة"],
            image: require("../../assets/images/ouef1.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["Une poule", "A chiken", "دجاجة"],
            image: require("../../assets/images/chiken.jpg"),
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Je viens de la vache. Je suis liquide et de couleur blanche. Qui suis-je?",
          "I come from the cow. I am liquid and white in color",
          ".مصدري هو البقرة. أنا سائل وأبيض اللون",
        ],
        type: 1,
        explanation: [],
        answers: [
          {
            answer: ["L'eau", "Water", "الماء"],
            image: require("../../assets/images/water2.jpg"),
            correct: false,
            color: 3,
          },
          {
            answer: ["Le lait", "Milk", "حليب"],
            image: require("../../assets/images/milk.jpg"),
            correct: true,
            color: 0,
          },
        ],
      },
    ],
  },
  {
    name: ["au marché", "at the market ", "في السوق"],
    background: require("../../assets/background/march.png"),
    backgroundGame: require("../../assets/background/marche.png"),
    intro: [
      "Oups! je crois qu’il nous manque des ingrédients pour préparer le dîner. Allons faire les courses! Je te tiendrai compagnie pour faire les bons choix car pas tout ce qui se vend est sain et bon pour la santé",
      "Oops! I think we are missing ingredients to prepare dinner. Let's go shopping! I will be with you to make the right choices because not everything that is sold is healthy ",
      "عفوًا! أعتقد أننا نفتقد بعض المكونات لتحضير العشاء. دعنا نذهب للتسوق! سأصاحبك لاتخاذ الخيارات الصحيحة لأنه ليس كل ما يباع يعد جيدًا لصحتك",
    ],
    badge: {
      image: 1,
      text: ["1", "1", "1"],
    },
    skills: [
      [
        "Se familiariser avec la notion d’aliments de saison ",
        "Become familiar with the concept of seasonal food",
        "التعرف على مفهوم الأطعمة الموسمية",
      ],
      [
        "Être en mesure de faire les bons achats pour pouvoir préparer un repas équilibré.",
        "Being able to make the right purchases to be able to prepare a balanced meal",
        "القدرة على إقتناء المشتريات الصحيحة من اجل  إعداد وجبة متوازنة",
      ],
      [
        "Savoir reconnaître la meilleure qualité d’un seul et même produit",
        "Knowing how to recognize the best quality of a single product",
        "القدرة على التعرف على أفضل جودة للمنتج الواحد",
      ],
    ],

    questions: [
      {
        explanation: [
          "Les oranges sont riches en vitamine C; par conséquent, manger des oranges en hiver peut prévenir le rhume.",
          "Oranges are rich in vitamin C; therefore, eating oranges in winter can prevent colds a flu.",
          "البرتقال غني بفيتامين سي. لذلك ، فإن تناول البرتقال في الشتاء يمكن أن يجنبنا نزلات البرد.",
        ],
        question: [
          "En hiver, le fruit que tu devrais acheter est :",
          "In winter, the fruit you should buy is:",
          ":في الشتاء ، الفاكهة التي يجب أن تشتريها هي",
        ],
        type: 1,
        answers: [
          {
            answer: ["Orange", "Oranges", ""],
            image: require("../../assets/images/orange.jpg"),
            correct: true,
            color: 0,
          },

          {
            answer: ["Banane", "", "   "],
            image: require("../../assets/images/banane.png"),
            correct: false,
            color: 1,
          },
          {
            answer: ["Ananas", "", ""],
            image: require("../../assets/images/ananas.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["Kiwi", "", ""],
            image: require("../../assets/images/kawkaw.jpg"),
            correct: false,
            color: 3,
          },
        ],
      },

      {
        explanation: [
          "Le ketchup n'a pas vraiment de valeur nutritive bien qu'il soit fait à partir de tomates",
          "ketchup doesn't really have any nutritional value despite being made from tomatoes",
          "الكاتشب ليس له أي قيمة غذائية على الرغم من أنه مصنوع من الطماطم",
        ],
        question: [
          "Lequel des aliments suivants tu ne dois pas mettre dans ton panier ?",
          "Which of the following foods you should not put in your basket?",
          "أي من الأطعمة التالية لا يجب أن تضعها في سلتك؟",
        ],
        type: 1,
        answers: [
          {
            answer: ["La viande", "meat", "لحم"],
            image: require("../../assets/images/meat.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: ["Ketchup", "Ketchup", ""],
            image: require("../../assets/images/ketchup.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["Le pain", "bread", "خبز"],
            image: require("../../assets/images/bread.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["La salade", "Salad", "سلطة"],
            image: require("../../assets/images/salade.jpg"),
            correct: false,
            color: 3,
          },
        ],
      },
      {
        explanation: [
          "Le soda n'est pas bon pour la santé car il contient beaucoup de sucre. En consommer trop peut entraîner une prise de poids, du diabète et des maladies cardiovasculaires",
          "Soda is not good for health because it contains lots of sugar. Consuming it too much may lead to weight gain, diabetes, and cardiovascular conditions.",
          "الصودا ليست جيدة للصحة لأنها تحتوي على الكثير من السكر. قد يؤدي الإفراط منها إلى زيادة الوزن ومرض السكري وأمراض القلب والأوعية الدموية.",
        ],
        question: [
          "Que dois-tu ne pas acheter pour ton petit déjeuner ?",
          "What shouldn't you buy for breakfast?",
          "ما الذي يجب ألا تشتريه لوجبة الإفطار؟",
        ],
        type: 1,
        answers: [
          {
            answer: ["Soda", "", ""],
            image: require("../../assets/images/soda3.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["Boite de céreales ", "", ""],
            image: require("../../assets/images/céréales2.jpg"),
            correct: false,
            color: 3,
          },
          {
            answer: ["Du biscuit ", "", ""],
            image: require("../../assets/images/biscuit.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["De la confiture", "", ""],
            image: require("../../assets/images/conféture.jpg"),
            correct: false,
            color: 1,
          },
        ],
      },

      {
        explanation: [
          "Les nouilles instantanées augmentent le risque de développer des maladies cardiaques, le diabète et d'accident vasculaire cérébral.",
          "Instant noodles  increase one's risk  for heart disease, diabetes, and stroke.",
          "تزيد المعكرونة الفورية من خطر الإصابة بأمراض القلب والسكري والسكتة الدماغية.",
        ],
        question: [
          "Pour le diner, tu dois éviter de prendre ",
          "For dinner, you must avoid taking",
          "للعشاء ، يجب تجنب تناول",
        ],
        type: 1,
        answers: [
          {
            answer: ["Riz brun", "brown rice", "أرز اسمر "],
            image: require("../../assets/images/riznoire.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["La pomme de terre", "baked potatoe", "بطاطس مشوية "],
            image: require("../../assets/images/batata.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: ["Nouilles instantanées", "Instant noodle", " "],
            image: require("../../assets/images/Nouilles.jpeg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["Des aubergines", " ", " "],
            image: require("../../assets/images/danjel.jpg"),
            correct: false,
            color: 3,
          },
        ],
      },

      {
        explanation: [
          "La mise en conserve tue un grand nombre de nutriments, vaut mieux opter pour les aliments frais",
          "Canning kills a lot of nutrients, better go for fresh food",
          "التعليب يقتل الكثير من العناصر الغذائية ، لذلك من الأفضل تناول طعام طازج",
        ],
        question: [
          "pour la sauce des pates, tu dois acheter des",
          "for pasta sauce, you have to buy some",
          "لصلصة المعكرونة  لا بد من شراء بعض",
        ],
        type: 1,
        answers: [
          {
            answer: ["tomates fraîches ", "fresh tomatoes", "طماطم طازجة "],
            image: require("../../assets/images/tomate2.png"),
            correct: true,
            color: 0,
          },
          {
            answer: [
              "tomates en conserve ",
              "canned tomatoes",
              "الطماطم المعلبة   ",
            ],
            image: require("../../assets/images/tomate1.jpg"),
            correct: false,
            color: 3,
          },
        ],
      },

      {
        explanation: [
          "manger de la mayonnaise tous les jours peut être malsain, car la mayonnaise achetée en magasin contient souvent beaucoup de graisses saturées.",
          "eating mayonnaise everyday could be unhealthy, as store-bought mayonnaise often has lots of saturated fat.",
          "قد يكون تناول المايونيز كل يوم غير صحي ، حيث يحتوي المايونيز الذي يتم شراؤه من المتجر على الكثير من الدهون المشبعة.",
        ],
        question: [
          "Barres l'intrus: Pour ta salade, tu ne dois pas acheter de ",
          "find the odd one out: For your salad, you must avoid buying",
          "انقر فوق الدخيل: للحصول على سلطتك ، يجب تجنب الشراء",
        ],
        type: 1,

        answers: [
          {
            answer: ["La laitue", "", ""],
            image: require("../../assets/images/laitue.jpg"),
            correct: false,
            color: 2,
          },

          {
            answer: [
              "Olives",
              "TRADUCTION NO NEED, CUZ WE WILL PUT IMAGES ",
              "   ",
            ],
            image: require("../../assets/images/olive.png"),
            correct: false,
            color: 1,
          },
          {
            answer: ["Tomates", "", "  "],
            image: require("../../assets/images/tomate2.png"),
            correct: false,
            color: 2,
          },
          {
            answer: ["La mayonnaise", "", ""],
            image: require("../../assets/images/mayonnaise.jpg"),
            correct: true,
            color: 0,
          },
        ],
      },
      {
        explanation: [
          "la congélation de la viande nécessite une hygiène et une fraîcheur irréprochables, car le risque de développement de microbes est plus élevé, il vaut mieux l'évite",
          "freezing meat requires impeccable hygiene and freshness, because the risk of development of microbes is higher, it is better to avoid it ",
          "يتطلب تجميد اللحوم نظافة ونضارة لا تشوبهما شائبة ، لأن خطر تطور الميكروبات أعلى ، فمن الأفضل تجنبها.",
        ],
        question: [
          "Quelle viande tu dois éviter?",
          "What type of meat you should  avoid? ",
          "ما نوع اللحوم التي يجب تجنبها؟",
        ],
        type: 1,
        answers: [
          {
            answer: ["Le blanc de poulet", "chicken breast", "صدر دجاج"],
            image: require("../../assets/images/sdar.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["La viande surgelée", "", ""],
            image: require("../../assets/images/viandesurg.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["Poisson ", "", ""],
            image: require("../../assets/images/fish.jpg"),
            correct: false,
            color: 3,
          },
          {
            answer: ["La viande hachée", "", ""],
            image: require("../../assets/images/kafta.jpg"),
            correct: false,
            color: 1,
          },
        ],
      },
      {
        explanation: [
          "la margarine contient une combinaison malsaine de gras saturés et trans",
          " margarine contains an unhealthy combination of saturated and trans fats",
          "يحتوي المارجرين على مزيج غير صحي من الدهون المشبعة والمتحولة",
        ],
        question: [
          "pour ta tartine du petit déjeuner, tu dois acheter",
          "for your breakfast toast, you have to buy",
          "من أجل خبز الإفطار ، يجب أن تشتريه له   ",
        ],
        type: 1,
        answers: [
          {
            answer: ["La margarine", "margarine", "المرغرين"],
            image: require("../../assets/images/margarine4.png"),
            correct: false,
            color: 3,
          },
          {
            answer: ["Le beurre", "butter", "الزبدة"],
            image: require("../../assets/images/berbere.jpg"),
            correct: true,
            color: 0,
          },
        ],
      },
      {
        explanation: [],
        question: [
          "Est-il conseillé d'acheter des fruits et légumes d'hors saison? ",
          "Is it advisable to buy fruits and vegetables out of their season?",
          "هل ينصح بشراء فواكه وخضروات خارج موسمها؟",
        ],
        type: 0,
        answers: [
          {
            answer: ["Oui", "Yes", "نعم"],
            image: null,
            correct: false,
            color: 1,
          },

          {
            answer: ["Non", "No", "لا"],
            image: null,
            correct: true,
            color: 0,
          },
        ],
      },
    ],
  },

  {
    name: ["chez le medecin ", "at the doctor", "عند الطبيب"],
    background: require("../../assets/background/hopital.png"),
    backgroundGame: require("../../assets/background/cabinet.jpg"),
    intro: [
      " Rien de meilleur que de prendre l’avis d’un expert , c’est pour cela qu'on se dirige chez le docteur pour en savoir encore plus sur la relation qui existe entre l’alimentation et notre santé !",
      "There is nothing better than taking the advice of an expert, that's why we go to the doctor to know more about the relationship between diet and our health!",
      "لا يوجد شيء أفضل من أخذ نصيحة خبير ، ولهذا السبب نذهب إلى الطبيب لمعرفة المزيد عن العلاقة بين النظام الغذائي وصحتنا!",
    ],
    badge: {
      image: 2,
      text: ["2", "2", "2"],
    },
    skills: [
      [
        "Comprendre ce qu’est la nutrition ainsi que ses catégories.",
        "Understand what nutrition is and its categories.",
        "التعرف على التغذية و انواع الاغذية",
      ],
      [
        "Prendre connaissance de la source de différents nutriments ainsi que leur importance pour la santé de l’être humain.",
        "Learn about the source of different nutrients and their importance for the health.",
        "التعرف على مصدر العناصر الغذائية المختلفة وأهميتها لصحة الإنسان.",
      ],
      [
        "Prendre conscience de plusieurs maladies en lien direct avec l’alimentation.",
        "Becoming aware of several diseases directly related to food.",
        "التعرف على العديد من الأمراض المرتبطة مباشرة بالغذاء.",
      ],
    ],
    questions: [
      {
        type: 0,
        explanation: [],
        question: [
          "laver les fruits et légumes avant de les manger n'est pas important ",
          "washing fruits and vegetables before eating them is not important",
          "ليس من المهم غسل الفواكه والخضروات قبل تناولها",
        ],
        answers: [
          {
            answer: ["vrai", "true", "صحيح"],
            correct: false,
            color: 3,
          },
          {
            answer: ["faux", "false", "خطأ"],
            correct: true,
            color: 0,
          },
        ],
      },
      {
        type: 0,
        explanation: [],
        question: [
          "Certains fruits, comme le citron, nous apportent beaucoup de vitamines C",
          "Some fruits, such as lemon, provide us with a lot of vitamin C",
          "تزودنا بعض الفواكه ، مثل الليمون ، بالكثير من فيتامين سي",
        ],
        answers: [
          {
            answer: ["vrai", "true", "صحيح"],
            correct: true,
            color: 0,
          },
          {
            answer: ["faux", "false", "خطأ"],
            correct: false,
            color: 1,
          },
        ],
      },
      {
        type: 1,
        explanation: [
          "L'orange est riche en vitamine C qui protège notre système immunitaire",
          "Orange is rich in vitamin C which protects our immune system",
          "البرتقال غني بفيتامين سي الذي يحمي جهاز المناعة",
        ],
        question: [
          "Que faut-il faire quand on est grippé ? ",
          "What should you do when you have the flu?",
          "ماذا يجب ان تفعل عندما تكون مصابا بالأنفلونزا؟",
        ],
        answers: [
          {
            answer: ["manger des oranges ", "eat oranges", "أكل البرتقال"],
            image: require("../../assets/images/orange.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: [
              "manger des bonbons",
              "Eat some candies",
              "تناول بعض الحلوى",
            ],
            image: require("../../assets/images/bonbon1.png"),

            correct: false,
            color: 3,
          },
          {
            answer: ["manger une carotte ", "eat a carrot", "أكل جزرة"],
            image: require("../../assets/images/carotte.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["boire de l’eau ", "drink water", "اشرب ماء"],
            image: require("../../assets/images/water2.jpg"),
            correct: false,
            color: 1,
          },
        ],
      },
      {
        type: 1,
        explanation: [
          "On s'hydrate avec de l'eau pour éliminer les toxines du corps et la chaleur superflu ",
          "We hydrate with water to eliminate toxins from the body and superfluous heat.",
          "نقوم بترطيب أنفسنا بالماء لإزالة السموم من الجسم والحرارة الزائدة.",
        ],
        question: [
          "Pour hydrater ton corps tu dois boire :",
          "To hydrate your body you must drink:",
          "لترطيب جسمك يجب أن تشرب:",
        ],
        answers: [
          {
            answer: [
              "des boissons gazeuses ",
              "carbonated drinks",
              "المشروبات الغازية",
            ],
            image: require("../../assets/images/soda3.jpg"),
            correct: false,
            color: 3,
          },
          {
            answer: ["Lait ", "Milk", "حليب"],
            image: require("../../assets/images/milk.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: [" jus   ", "juice", "عصير "],
            image: require("../../assets/images/jus.png"),
            correct: false,
            color: 1,
          },

          {
            answer: ["Eau", "water", "ماء"],
            image: require("../../assets/images/water2.jpg"),
            correct: true,
            color: 0,
          },
        ],
      },
      {
        type: 0,
        explanation: [
          "Pour éviter l'obésité,  il faut limiter sa consommation de sucre et de sel et consommer des fruits et des légumes quotidiennement ",
          "To avoid obesity, it is necessary to limit its consumption of sugar and salt and to consume fruits and vegetables daily",
          "لتجنب السمنة لا بد من الحد من تناول السكر والملح وضرورة تناول الفاكهة والخضروات يوميا",
        ],
        question: [
          " Pour éviter de devenir obèse , tu dois  : ",
          "To avoid becoming obese, you must:",
          "لتجنب الإصابة بالسمنة ، يجب عليك",
        ],
        answers: [
          {
            answer: [
              "Eviter de pratiquer du sport  ",
              "Avoid playing sports",
              "تجنب ممارسة الرياضة",
            ],
            correct: false,
            color: 2,
          },

          {
            answer: [
              "Augmenter la consommation du  sel",
              "Increase salt intake",
              " تناول الملح بزيادة",
            ],
            correct: false,
            color: 1,
          },

          {
            answer: [
              " Consommer des fruits et des légumes quotidiennement ",
              "Consume fruits and vegetables daily",
              "استهلك الفاكهة والخضروات يوميًا",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              " Augmenter la consommation du sucre  ",
              "Increase sugar consumption",
              "زيادة استهلاك السكريات",
            ],
            correct: false,
            color: 3,
          },
        ],
      },

      {
        type: 0,
        explanation: [
          "Se laver les mains limite le développement des méchantes bactéries qui deviennent par la suite des nids à microbes.",
          "Washing your hands limits the development of nasty bacteria which then become breeding grounds for germs.",
          "غسل اليدين يحد من تطور البكتيريا التي تصبح فيما بعد أعشاشًا مليئة بالميكروبات.",
        ],
        question: [
          "Pourquoi faut-il se laver les mains avant de manger ? ",
          "Why should you wash your hands before eating ? ",
          "لماذا يجب أن تغسل يديك قبل الأكل؟",
        ],
        answers: [
          {
            answer: [" car c’est amusant ", "because it's fun", "لأنه ممتع"],
            correct: false,
            color: 3,
          },
          {
            answer: [
              "pour se rafraîchir les mains ",
              "to refresh your hands",
              "لانعاش يديك",
            ],
            correct: false,
            color: 1,
          },
          {
            answer: [
              "pour empêcher toutes bactéries de s’infiltrer dans notre corps ",
              "to prevent any bacteria from infiltrating our body",
              "لمنع أي بكتيريا من التسلل إلى أجسامنا",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "pour jouer avec les bulles du savon",
              "to play with soap bubbles",
              "للعب بفقاعات الصابون",
            ],
            correct: false,
            color: 2,
          },
        ],
      },
      {
        type: 0,
        explanation: [
          "L'activité physique favorise la croissance et le développement de ton corps et diminue le risque de tomber malade ",
          "Physical activity helps your body grow and develop and lowers your risk of getting sick",
          "يساعد النشاط البدني جسمك على النمو والتطور ويقلل من خطر إصابتك بالمرض",
        ],
        question: [
          " Trouve l'intrus . Faire de l'activité physique : ",
          "Find the intruder . Physical activity:",
          "ابحث عن الدخيل. القيام بنشاط بدني:",
        ],
        answers: [
          {
            answer: [
              "c'est bon poour ma croissance  ",
              "it's good for my growth",
              "إنه جيد لنموي",
            ],
            correct: false,
            color: 2,
          },

          {
            answer: [
              "c'est bon pour le developpement de mon corps ",
              "It's good for the development of my body",
              "إنه جيد لنمو جسدي",
            ],
            correct: false,
            color: 1,
          },

          {
            answer: [
              "ça ne sert à rien ça fatigue ",
              "it's useless it's tiring",
              "إنه غير مجدي إنه متعب",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "ça me permet de relaxer ",
              "it allows me to relax",
              "يسمح لي بالاسترخاء",
            ],
            correct: false,
            color: 3,
          },
        ],
      },

      {
        type: 1,
        explanation: [],
        question: [
          "Pour avoir de l'énergie tu dois consommer des glucides que tu trouveras dans :",
          "To have energy you must consume carbohydrates that you will find in:",
          "للحصول على الطاقة ، يجب أن تستهلك الكربوهيدرات التي ستجدها في:",
        ],
        answers: [
          {
            answer: ["le lait", "Milk", "حليب"],
            image: require("../../assets/images/milk.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: [
              "le chocolat et autres sucreries",
              "chocolate and other sweets",
              "الشوكولاته والحلويات الأخرى",
            ],
            image: require("../../assets/images/choco.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: [
              "les légumes verts ",
              "the green vegetables",
              "الخضار الخضراء",
            ],
            image: require("../../assets/images/légumesvert.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["le poisson", "Fish", "سمك"],
            image: require("../../assets/images/fish1.jpg"),
            correct: false,
            color: 3,
          },
        ],
      },

      {
        type: 1,
        explanation: [
          "Les protéines sont nécessaires pour la croissance et le maintien des cellules et tissus de notre corps",
          "Protein is necessary for the growth and maintenance of cells and tissues in our body.",
          "البروتين ضروري لنمو الخلايا والأنسجة في الجسم والحفاظ عليها",
        ],
        question: [
          "pour une bonne croissance et santé des muscles , tu dois absolument consommer :",
          "For good muscle growth and health, you absolutely must consume:",
          "من أجل نمو العضلات وصحتها بشكل جيد ، يجب أن تستهلك:",
        ],
        answers: [
          {
            answer: [
              "des boissons gazeuses ",
              "carbonated drinks",
              "المشروبات الغازية",
            ],
            image: require("../../assets/images/soda3.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: ["du sucre ", "sugar", "سكر"],
            image: require("../../assets/images/sugar.jpg"),
            correct: false,
            color: 3,
          },
          {
            answer: [" des chips   ", "chips", "رقائق البطاطا"],
            image: require("../../assets/images/chips.jpg"),
            correct: false,
            color: 2,
          },

          {
            answer: ["des protéines", "proteins", "البروتينات"],
            image: require("../../assets/images/protéine.jpg"),
            correct: true,
            color: 0,
          },
        ],
      },

      {
        type: 0,
        explanation: [
          "Les sept catégories sont : les  protéines , les lipides ,les  glucides ,les fibres , les vitamines , les sels minéraux et l’eau .",
          "The seven categories are: proteins, lipids, carbohydrates, fibers, vitamins, mineral salts and water.",
          "الفئات السبع هي: البروتينات والدهون والكربوهيدرات والألياف والفيتامينات والأملاح المعدنية والمياه.",
        ],
        question: [
          " combien de catégories de nutriments y’a t -ils ?",
          "how many categories of nutrients are there?",
          "كم عدد فئات المغذيات الموجودة؟",
        ],
        answers: [
          {
            answer: ["un nutriment", "one nutriment", "  مغذ واحد"],
            correct: false,
            color: 3,
          },
          {
            answer: ["trois nutriments", "three nutrients", "ثلاثة مغذيات"],
            correct: false,
            color: 2,
          },
          {
            answer: ["septs nutriments", "seven nutrients ", "سبعة مغذيات"],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "quinze nutriments",
              "fifteen nutrients",
              "خمسة عشر مادة مغذية",
            ],
            correct: false,
            color: 1,
          },
        ],
      },
      {
        type: 0,
        explanation: [
          "Le manque de fer provoque le manque de globules rouges qui par la suite cause l’anémie .",
          "Lack of iron causes lack of red blood cells which subsequently causes anemia.",
          "يؤدي نقص الحديد إلى نقص خلايا الدم الحمراء مما يؤدي بالتالي إلى فقر الدم",
        ],
        question: [
          "L’anémie s’explique le plus souvent par :  ",
          "Anemia is most often caused by:",
          " : غالبًا ما ينتج فقر الدم عن ",
        ],
        answers: [
          {
            answer: [
              "l'excès de vitamines ",
              "excess vitamins",
              "فيتامينات زائدة",
            ],
            correct: false,
            color: 3,
          },

          {
            answer: [
              "le manque de calcium ",
              "lack of calcium",
              "نقص الكالسيوم",
            ],
            correct: false,
            color: 1,
          },
          {
            answer: ["le manque de fer ", "lack of iron", "نقص الحديد"],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "l'excès de glucide ",
              "excess carbohydrate",
              " الكربوهيدرات الزائدة ",
            ],
            correct: false,
            color: 2,
          },
        ],
      },
      {
        type: 0,
        explanation: [],
        question: [
          "Les nutriments sont toutes les substances alimentaires que ton corps absorbe et utilise pour fonctionner",
          "Nutrients are all the food substances that your body absorbs and uses to function",
          "المغذيات هي جميع المواد الغذائية التي يمتصها جسمك ويستخدمها",
        ],
        answers: [
          {
            answer: ["vrai", "true", "صحيح"],
            correct: true,
            color: 0,
          },
          {
            answer: ["faux", "false", "خطأ"],
            correct: false,
            color: 1,
          },
        ],
      },
    ],
  },
  {
    name: ["Au restaurant", "At the restaurant", "في المطعم"],

    background: require("../../assets/background/restaurant.png"),
    backgroundGame: require("../../assets/background/restau.png"),
    intro: [
      "Aujourd’hui nous allons manger au restaurant, chouette n’est ce pas ? Mais n’oublions pas les bonnes habitudes alimentaires. Que l’aventure commence!",
      "Today we are going to eat at the restaurant, nice isn't it? But let’s not forget good eating habits. Let the adventure begin!",
      "!اليوم سوف نأكل في المطعم ، أليس كذلك؟ لكن دعونا لا ننسى عادات الأكل الجيدة. فلتبدأ المغامرة!",
    ],
    badge: {
      image: 3,
      text: ["3", "3", "3"],
    },
    skills: [
      [
        "Prendre conscience des bonnes habitudes en mangeant",
        "Become aware of good eating habits",
        "الكون على دراية بعادات الأكل الجيدة   ",
      ],
      [
        "Être en mesure de faire le bon choix à partir d’un menu .",
        "Being able to make the right choice from a menu.",
        "القدرة على الاختيار الصحيح من قائمة المطعم",
      ],
    ],
    questions: [
      {
        question: [
          "Qu'est ce que tu vas choisir comme entrée ?",
          "what will you choose as an appetizer ?",
          "ماذا ستختار كمقبلة ؟",
        ],
        type: 1,
        explanation: [
          "Manger des salades est sain car vous obtenez des nutriments vitaux, des fibres et de bonnes graisses",
          "Eating a salads is healthy because you get vital nutrients, fiber, and good fats.",
          "يعتبر تناول السلطات أمرًا صحيًا لأنك تحصل على العناصر الغذائية الحيوية والألياف والدهون الجيدة.",
        ],
        answers: [
          {
            answer: ["Les rondelles d'oignon", "Onion rings", "حلقات البصل"],
            image: require("../../assets/images/onionrings.png"),
            correct: false,
            color: 2,
          },
          {
            answer: ["Frites", "Fries", "بطاطس مقلية"],
            image: require("../../assets/images/fries.png"),
            correct: false,
            color: 2,
          },
          {
            answer: ["Trempette", "Creamy dips", "صلصة (تغميسة)"],
            image: require("../../assets/images/dips.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: ["Salade", "Salad", "سلطة"],
            image: require("../../assets/images/salad.jpg"),
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Qu'est ce que tu vas choisir comme plat principal ?",
          "what will you choose as a main dish ?",
          "ماذا ستختار كوجبة رئيسية؟",
        ],
        type: 1,
        explanation: [
          "c'est un excellent repas sain, il contient des protéines, des glucides et une bonne portion de légumes et il est faible en gras et en sucre",
          "it is a great healthy meal, It contains protein, carbs and a good helping of vegetables and it is low in fat and sugar",
          "إنها وجبة صحية رائعة ، فهي تحتوي على البروتينات والكربوهيدرات و الخضروات وقليلة الدهون والسكر",
        ],
        answers: [
          {
            answer: ["Burger", "Burger", "برغر"],
            image: require("../../assets/images/burger.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: ["Riz au poulet", "Chicken & rice", "رز بالدجاج"],
            image: require("../../assets/images/rice.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["Croquette de poulet", "Chicken nuggets", " ناجتس الدجاج"],
            image: require("../../assets/images/chickenNuggets.png"),
            correct: false,
            color: 2,
          },
          {
            answer: ["Pizza", "Pizza", "بيتزا"],
            image: require("../../assets/images/pizza.jpg"),
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Qu'est ce que tu vas choisir comme dessert ?",
          "what will you choose as a dessert ?",
          "ماذا ستختار كتحلية؟",
        ],
        type: 1,
        explanation: [
          "Consommer de la salade de fruits aide à digérer facilement nos aliments. La salade de fruits améliore également la santé de notre système digestif. Ceci est attribué à la teneur élevée en fibres et en potassium ainsi qu'à la faible teneur en fructose.",
          "Consuming fruit salad helps to easily digest our food. Fruit salad also improves the health of our digestive system. This is attributed to the high fiber and potassium content and also because of the low fructose content.",
          "يساعد تناول سلطة الفاكهة على هضم طعامنا بسهولة. تعمل سلطة الفاكهة أيضًا على تحسين صحة الجهاز الهضمي. ويعزى ذلك إلى المحتوى العالي من الألياف والبوتاسيوم وأيضًا بسبب محتوى الفركتوز المنخفض.",
        ],
        answers: [
          {
            answer: ["Une tarte", "A pie", "فطيرة"],
            image: require("../../assets/images/pie.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: ["Salade de fruits", "fruit salad", "سلطة فواكه"],
            image: require("../../assets/images/fruits.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["Cake", "Cake", "كيك"],
            image: require("../../assets/images/chocoCake.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["Donuts", "Donuts", "دوناتس"],
            image: require("../../assets/images/donuts.jpg"),
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Quelle boisson tu ne devrais pas choisir?",
          "What shouldn't you choose for a drink?",
          "ما المشروب الذي لا يجب أن تشربه؟",
        ],
        type: 1,
        explanation: [
          "ce n'est pas bon pour la santé parce qu'il contient beaucoup de sucre. Consommer trop de soda peut entraîner une prise de poids, du diabète et des problèmes cardiovasculaires.",
          "Soda is not good for a person's health because it contains lots of sugar. Consuming too much soda may lead to weight gain, diabetes, and cardiovascular conditions.",
          "الصودا ليست جيدة لصحة الإنسان لأنها تحتوي على الكثير من السكر. قد يؤدي استهلاك الكثير من الصودا إلى زيادة الوزن ومرض السكري وأمراض القلب والأوعية الدموية.",
        ],
        answers: [
          {
            answer: ["Milkshake", "Milkshake", "ميلك شايك"],
            image: require("../../assets/images/milkShake.jpg"),
            correct: false,
            color: 3,
          },
          {
            answer: ["Jus naturel", "Natural juice", "عصير طبيعي"],
            image: require("../../assets/images/naturalJuice.jpg"),
            correct: false,
            color: 2,
          },
          {
            answer: ["Soda", "Soda", "مشروب غازي"],
            image: require("../../assets/images/soda.jpg"),
            correct: true,
            color: 0,
          },
          {
            answer: ["De l'eau", "Water", "الماء"],
            image: require("../../assets/images/water.jpg"),
            correct: false,
            color: 1,
          },
        ],
      },
      {
        question: [
          "Que vas-tu choisir comme pain ?",
          "what will you choose as bread ?",
          "ماذا ستختار كخبز؟",
        ],
        type: 1,
        explanation: [
          "Le pain brun est clairement l'option la plus saine du point de vue santé en raison de la teneur en fibres ainsi que des nutriments naturels présents et la faible teneur en calories est un avantage supplémentaire.",
          "Brown bread is clearly the healthier option from a health perspective due to the fiber content along with natural nutrients present in with and low calories is an additional benefit",
          "من الواضح أن الخبز البني هو الخيار الأكثر صحة من منظور صحي نظرًا لاحتوائه على الألياف إلى جانب العناصر الغذائية الطبيعية الموجودة فيه ، كما أن انخفاض السعرات الحرارية يعد ميزة إضافية",
        ],
        answers: [
          {
            answer: ["Le pain blanc", "White bread", "الخبز الابيض"],
            image: require("../../assets/images/whiteBread.jpg"),
            correct: false,
            color: 1,
          },

          {
            answer: ["Le pain complet", "Brown bread", "الخبز الاسمر"],
            image: require("../../assets/images/brownBread.jpg"),
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "As-tu besoin de manger avec du pain à chaque repas ?",
          "Do you need to eat with bread every meal?",
          "هل تحتاج لتناول الخبز في كل وجبة؟",
        ],
        type: 0,
        explanation: [
          "Le pain est riche en glucides, pauvre en micronutriments, et sa teneur en gluten et en antinutriments peut causer des problèmes à certaines personnes. Pourtant, il est souvent enrichi de nutriments supplémentaires, et les variétés à grains entiers ou germées peuvent conférer plusieurs avantages pour la santé. Avec modération, le pain peut être consommé dans le cadre d'une alimentation saine",
          "Bread is high in carbs, low in micronutrients, and its gluten and antinutrient contents may cause issues for some people. Still, it's often enriched with extra nutrients, and whole-grain or sprouted varieties may bestow several health benefits. In moderation, bread can be enjoyed as part of a healthy diet ",
          "يحتوي الخبز على نسبة عالية من الكربوهيدرات وقليل من المغذيات الدقيقة ، وقد تسبب محتوياته من الغلوتين ومضادات المغذيات مشاكل لبعض الناس. ومع ذلك ، غالبًا ما يتم إثرائه بالعناصر الغذائية الإضافية ، وقد تضفي الحبوب الكاملة أو الأصناف المنبتة العديد من الفوائد الصحية. باعتدال ، يمكن الاستمتاع بالخبز كجزء من نظام غذائي صحي",
        ],
        answers: [
          {
            answer: ["Oui", "Yes", "نعم"],
            image: null,
            correct: false,
            color: 1,
          },

          {
            answer: ["Non", "No", "لا"],
            image: null,
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Est ce que tu dois boire de l'eau pendant le repas ?",
          "will you drink water during the meal ?",
          "هل تشرب الماء أثناء الوجبة؟",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: ["Oui", "Yes", "نعم"],
            image: null,
            correct: false,
            color: 1,
          },

          {
            answer: ["Non", "No", "لا"],
            image: null,
            correct: true,
            color: 0,
          },
        ],
      },
    ],
  },
  {
    name: ["Avec mes amis", "With my friends", "مع أصدقائي"],
    intro: [
      "Il est maintenant temps de partager ce que t'as appris tout au long de ton voyage avec Zineb et Ahmed tes camarades de classe. Hâte de commencer n'est ce pas ? Que l'aventure continue!",
      "Now is the time to share what you have learned along your journey with Zineb and Ahmed, two of your classmates. Can't wait to start, right? Let the adventure continue!",
      "! حان الوقت الآن لمشاركة ما تعلمته خلال رحلتك مع زينب وأحمد زملائك في الفصل. لا تستطيع الانتظار للبدء ، أليس كذلك؟ دع المغامرة تستمر",
    ],
    badge: {
      image: 4,
      text: ["4", "4", "4"],
    },
    skills: [
      [
        "Développer les capacités de mémorisation et d'attention de l'enfant.",
        "Develop the child's memory and attention skills.",
        ".تنمية مهارات الذاكرة والانتباه لدى الطفل",
      ]
    ],
    background: require("../../assets/background/ecole.png"),
    backgroundGame: require("../../assets/background/ecolebg.png"),
    questions: [
      {
        question: [
          "Au déjeuner, t'as remarqué que Zineb boit beaucoup d'eau. Qu'en penses-tu ?",
          "At lunch, you noticed that Zineb drinks a lot of water. What do you think ?",
          "في الغذاء لاحظت أن زينب تشرب الكثير من الماء. ما رأيك ؟",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: [
              "Boire de l'eau pendant les repas empêche une bonne digestion des aliments",
              "Drinking water during meals prevents proper digestion of food",
              "شرب الماء أثناء الوجبات يمنع الهضم السليم للطعام",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "C'est une bonne pratique.",
              "It is a good practice.",
              "إنها ممارسة جيدة",
            ],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Tu viens de savoir qu'Ahmed rate souvent son petit-déjeuner.",
          "You just learned that Ahmed often misses his breakfast.",
          "لقد علمت للتو أن أحمد غالبًا ما يفوت وجبة الإفطار",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: [
              "Tu lui expliques que le petit-déjeuner apporte à son corps le quart de ses besoins énergétiques de la journée, c'est pourquoi il ne faut pas le rater",
              "You explain to him that breakfast provides his body with a quarter of his energy needs for the day, which is why he should not miss it",
              "تشرح له أن فطور الصباح يمد جسده بربع حاجاته اليومية من الطاقة ، لذلك يجب ألا يفوته.",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "Tu n'interviens pas car de toute façon le petit déjeuner n'est pas important. ",
              "You don't intervene because breakfast isn't important anyway.",
              "لا تتدخل لأن الإفطار ليس مهما على أي حال",
            ],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "T'as remarqué que tes amis remplissent leur gourde avec du soda à la place de l'eau ",
          "you noticed that your friends fill their water bottles with soda instead of water",
          " لاحظت أن أصدقائك يملأون زجاجات المياه الخاصة بهم بالصودا بدلاً من الماء؟",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: [
              "Tu valides cette pratique et tu fais comme eux.",
              "You validate this practice and you do like them.",
              ".تؤيد هذه الممارسة وتفعل مثلهم",
            ],
            correct: false,
            color: 3,
          },
          {
            answer: [
              "Tu leur expliques que boire du soda est mauvais pour la santé c'est pourquoi il faut arrêter de le faire. ",
              "You explain to them that drinking soda is bad for health, that's why they have to stop doing it.",
              " .تشرح لهم أن شرب الصودا مضر بالصحة ، ولهذا السبب عليهم التوقف عن فعل ذلك",
            ],
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "T'as remarqué que Zineb mange beaucoup d'oranges en hiver. ",
          "You noticed that Zineb eats a lot of oranges in winter",
          "لاحظت أن زينب تأكل الكثير من البرتقال في الشتاء",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: [
              "Il faut faire pareil car les oranges sont riches en vitamine C, reconnue pour ses bienfaits sur l'immunité.",
              "You have to do the same because oranges are rich in vitamin C, known for its benefits on immunity.",
              "القيام بنفس الشيء لأن البرتقال غني بفيتامين سي المعروف بفوائده على المناعة.",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "Manger des oranges n'est pas important pour la santé. ",
              "Eating oranges is not important for health.",
              ".تناول البرتقال ليس مهما للصحة",
            ],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Ahmed veille à bien se laver les mains avant de manger. ",
          "Ahmed makes sure to wash his hands well before eating.",
          "يحرص أحمد على غسل يديه جيداً قبل الأكل.",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: [
              "Il s'agit d'une bonne pratique qu'il faut absolument adopter. ",
              "This is a good practice that should absolutely be adopted.",
              "هذه ممارسة جيدة يجب اعتمادها بشكل مطلق.",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "Se laver les mains avant de manger reste occasionnel car ce n'est pas très important.",
              "Washing hands before eating remains occasional because it is not very important.",
              ".يظل غسل اليدين قبل الأكل عرضيًا لأنه ليس مهمًا جدًا",
            ],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Zineb sèche souvent la séance de sport.",
          "Zineb often skips the sports session.",
          ".غالبًا ما تتخطى زينب الجلسة الرياضية",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: [
              "Zineb a raison, faire du sport n'est rien de plus qu'une perte de temps.",
              "Zineb is right, playing sports is nothing more than a waste of time.",
              ".زينب محقة. ممارسة الرياضة ما هي إلا مضيعة للوقت",
            ],
            correct: false,
            color: 3,
          },
          {
            answer: [
              "Il ne faut pas faire comme Zineb car l'activité physique permet de se sentir bien dans son corps et dans sa tête.",
              "You should not do like Zineb           because physical activity makes you feel good in your body and in your mind.",
              " .النشاط البدني يجعلك تشعر بالراحة في جسدك وفي عقلك لذلك يجب عدم تفويت حصص الرياضة كزينب",
            ],
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Avant de commencer les cours, Ahmed t'offre un petit bout de chocolat. ",
          "Before starting classes, Ahmed offers you a small piece of chocolate.",
          ".قبل بدء الدراسة ، يقدم لك أحمد قطعة صغيرة من الشوكولاتة",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: [
              "Je le prends mais je sais qu'il faut consommer le chocolat avec modération.",
              "I take it but I know that chocolate should be consumed in moderation.",
              ".آخذه لكني أعلم أنه يجب عدم الإفراط في تناول الشوكولاتة",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "Je ne le prends pas car manger du chocolat est mauvais pour la santé.",
              "I don't take it because eating chocolate is not good for health.",
              ".أنا لا آخذه لأن تناول الشوكولاتة مضر بالصحة",
            ],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Ton professeur de science te demande si le manque de fer peut causer des ennuis de santé",
          "Your science teacher asks you if lack of iron can cause health problems",
          "يسألك مدرس العلوم إذا كان نقص الحديد يمكن أن يسبب مشاكل صحية",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: [
              "Le manque de fer peut être l'origine de plusieurs maladies dont l'anémie.",
              "Lack of iron can be the cause of several diseases including anemia.",
              ".يمكن أن يكون نقص الحديد سببًا للعديد من الأمراض بما في ذلك فقر الدم",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "Le manque de fer n'a pas de conséquence sur la santé.",
              "Lack of iron does not affect health.",
              ".نقص الحديد لا يؤثر على الصحة",
            ],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Souvent à la sortie des cours, Zineb achète du fast food",
          "Often after school, Zineb buys fast food.",
          ".في كثير من الأحيان بعد المدرسة تشتري زينب الوجبات السريعة",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: [
              "Pour être en bonne santé il faut mager sain et éviter d'acheter du fast-food.",
              "To be healthy you need to eat healthy food and avoid buying fast food",
              "لكي تكون بصحة جيدة ، عليك أن تأكل طعامًا صحيًا وتتجنب شراء الوجبات السريعة.",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "Manger souvent du fast-food comme Zineb n'a pas d'influence sur ma santé.",
              "Eating fast food often like Zineb has no influence on my health.",
              ".إن تناول الوجبات السريعة في كثير من الأحيان مثل زينب ليس له أي تأثير على صحتي",
            ],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "A midi, tes amis prennent très souvent une salade comme entrée",
          "At noon, your friends very often have a salad as a starter.",
          "في الظهيرة ، غالبًا ما يتناول أصدقاؤك السلطة كمقبلات",
        ],
        type: 0,
        explanation: [],
        answers: [
          {
            answer: [
              "Il vaut mieux éviter de prendre de la salade car elle ne sert à rien.",
              "It is better to avoid taking salad because it is useless.",
              "الأفضل تجنب تناول السلطة لأنها غير مجدية.",
            ],
            correct: false,
            color: 3,
          },
          {
            answer: [
              "Prendre de la salade comme eux est bon pour ma santé car elle m'apporte des nutriments vitaux, des fibres et de bonnes graisses",
              "Eating salad like them is good for my health as it gives me vital nutrients, fiber and good fats.",
              ".إن تناول السلطة مثلهم مفيد لصحتي لأنها تعطيني العناصر الغذائية الحيوية والألياف والدهون الجيدة",
            ],
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Au cours de science le prof te demande de citer une source de calcium",
          "In science class the teacher asks you to name a source of calcium",
          "في فصل العلوم ، يطلب منك المعلم تسمية مصدر للكالسيوم",
        ],
        type: 1,
        explanation: [],
        answers: [
          {
            answer: ["La viande", "Meat", "اللحم"],
            image: require("../../assets/images/meat.jpg"),
            correct: false,
            color: 1,
          },
          {
            answer: ["Le lait", "Milk", "حليب"],
            image: require("../../assets/images/milk.jpg"),
            correct: true,
            color: 0,
          },
        ],
      },
    ],
  },
];
export default themes;
