const themes = [
  {
    name: ["À la maison", "At home", "في المنزل"],

    background: require("../../assets/background/background1.png"),
    backgroundGame: require("../../assets/background/background0.jpg"),
    intro: [
      " Notre aventure commence ici à la maison. Ensemble nous apprendrons les secrets d’une alimentation saine. Olé,que l’aventure commence !",
      "Our adventure begins here at home. Together we will learn the secrets of healthy eating. Olé, let the adventure begin!",
      "تبدأ مغامرتنا هنا في المنزل. سنتعلم معًا أسرار الأكل الصحي. يا أولي ، فلتبدأ المغامرة!",
    ],
    skills: [
      [
        "Prendre conscience de ce qu’est une alimentation saine",
        "Become aware of healthy eating",
        "كن على دراية بالأكل الصحي",
      ],
      [
        "Prendre conscience de ce qu’est un repas équilibré",
        "Become aware of what a balanced meal is",
        "كن على دراية بماهية الوجبة المتوازنة",
      ],
      [
        "Prendre connaissance du nombre de repas par jour ainsi que leur importance ",
        "Know the number of meals per day and their importance",
        "اعرف عدد الوجبات في اليوم واهميتها",
      ],
    ],
    //background: null,
    questions: [
      {
        question: [
          "Il est important que les enfants comme toi mangent bien pour grandir et devenir plus fort.",
          "It is important that children eat well to grow and become stronger.",
          "من المهم أن يأكل الأطفال مثلك جيدًا لينموا و ويصبحوا أقوى ؟",
        ],
        type: 0,
        answers: [
          {
            answer: ["Vrai", "True", "صحيح"],
            correct: true,
            color: 0,
            explanation: [
              "Se nourrir est un acte essentiel afin d'apporter à notre corps les aliments dont on a besoin pour bien fonctionner",
              "in english",
              "in arabic",
            ],
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
            explanation: [
              "L'apport énergétique doit être réparti dans la journée au cours des quatre repas pour couvrir les dépenses du corps humain",
              "Eating four meals a day improves your energy levels and keeps your metabolism working",
              "يجب توزيع مدخول الطاقة على مدار اليوم على أربع وجبات لتغطية نفقات الجسم",
            ],
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
            explanation: [
              "Le petit-déjeuner est le repas le plus important de la journée, il apporte à ton corps le quart de ses besoins énergétiques nécessaires pour la journée",
              "Breakfast is the most important meal of the day, it provides your body with a quarter of the energy needs necessary for the day",
              ".الفطور هو أهم وجبة في اليوم ، فهو يمد جسم الإنسان بربع الطاقة التي يحتاجها في اليوم",
            ],
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
        answers: [
          {
            answer: ["Le petit déjeuner", "Breakfast", "فطور الصباح"],
            correct: true,
            color: 0,
            explanation: [
              "Le petit déjeuner est essentiel pour toi, il permet de recharger tes batteries après le long jeûne de la nuit et t'apporte les nutriments nécessaires à ta concentration.",
              "Breakfast is essential for you, it allows to recharge your batteries after the long night's fast and provides you with the nutrients necessary for your concentration.",
              "فطور الصباح  ضروري بالنسبة لك ، فهو يسمح بإعادة شحن بطارياتك بعد صيام الليل الطويل ويوفر لك العناصر الغذائية اللازمة لتركيزك",
            ],
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
        answers: [
          {
            answer: ["Des légumes", "Vegetables", "خضروات"],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: [
              "Des glucides (riz, pâtes, pain)",
              "Carbohydrates (rice, pasta, bread)",
              "الكربوهيدرات (الأرز والمعكرونة والخبز)",
            ],
            //image: null,
            correct: false,
            color: 1,
          },
          {
            answer: [
              "Des légumes, des glucides et des protéines",
              "Carbohydrates, vegetables and proteins",
              " خضروات ,الكربوهيدرات والبروتينات",
            ],
            //image: null,
            correct: true,
            color: 0,
            explanation: [
              "Un repas équilibré doit être composé d'aliments des trois groupes alimentaires voire les légumes et les fruits, les produits de grains entiers et les aliments protéinés. ?",
              "A balanced meal should include foods from all three food groups including vegetables and fruits, whole grain products and protein foods ?",
              "يجب أن تشمل الوجبة المتوازنة أطعمة من المجموعات الغذائية الثلاث بما في ذلك الخضار والفواكه ومنتجات الحبوب الكاملة والأطعمة البروتينية",
            ],
          },
          {
            answer: [
              "Des protéines (viande, poulet, poisson)",
              "Proteins (meat, chicken, fish)",
              "البروتينات (اللحوم والدجاج والأسماك)",
            ],
            //image: null,
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
        answers: [
          {
            answer: [" Des chips", "Chips", "رقائق البطاطس"],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["Un fruit", "A fruit", "فاكهة"],
            //image: null,
            correct: true,
            color: 0,
            explanation: [
              "Les fruits sont riches en vitamines, en minéraux et en fibres. C'est pourquoi il est recommandé d'en manger",
              "Fruits are rich in vitamins, minerals and fiber. That is why it is recommended to eat it",
              "الفواكه غنية بالفيتامينات والمعادن والألياف. لهذا السبب ينصح بتناولها",
            ],
          },
          {
            answer: ["Du chocolat", "Chocolate", "شوكولاتة"],
            //image: null,
            correct: false,
            color: 1,
          },
          {
            answer: ["Des bonbons", "Candy", "حلوى"],
            //image: null,
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
        answers: [
          {
            answer: ["Vrai", "True", "صحيح"],
            correct: true,
            color: 0,
            explanation: [
              "L'eau représente 65% du corps humain. C'est un besoin vital pour assurer notre survie de même que l'oxygène ou la nourriture.",
              "Water represents 65% of the human body. It is a vital need to ensure our survival as well as oxygen or food",
              "يمثل الماء 65٪ من جسم الإنسان. إنها حاجة حيوية لضمان بقائنا كالأكسجين أو الطعام.",
            ],
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
          "Lequel de ces aliments ne fait pas partie de la famille des féculents ?",
          "Which of these foods is not part of the starch family ?",
          "أي من الأطعمة التالية ليس جزءًا من عائلة النشويات ؟",
        ],
        type: 1,
        answers: [
          {
            answer: ["Le pain", "Bread", "الخبز"],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["Les pâtes", "Pasta", "المعجنات"],
            //image: null,
            correct: false,
            color: 1,
          },
          {
            answer: ["La viande", "Meats", "اللحوم"],
            //image: null,
            correct: true,
            color: 0,
            explanation: [
              "La famille des féculents réunit les nutriments d'origine végétale, tandis que la viande est d'origine animale. Elle appartient à la famille des protéines",
              "The family of starches brings together nutrients of plant origin, while meat is of animal origin. It belongs to the protein family",
              "تجمع عائلة النشويات بين العناصر الغذائية من أصل نباتي ، في حين أن اللحوم من أصل حيواني. فهي تنتمي إلى عائلة البروتينات",
            ],
          },
          {
            answer: ["Les céréales", "Cereals", "الحبوب"],
            //image: null,
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
        answers: [
          {
            answer: ["Le lait", "Milk", "حليب"],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["Les fruits", "Fruits", "الفواكه"],
            //image: null,
            correct: false,
            color: 1,
          },
          {
            answer: ["Le chocolat", "Chocolate", "الشوكولاطة"],
            //image: null,
            correct: true,
            color: 0,
            explanation: [
              "La consommation excessive de chocolat peut conduire à une prise de poids ou même à des maladies plus graves, c'est pourquoi il faut le consommer avec modération ",
              "Eating a lot of chocolate can lead to weight gain or even more serious health issues,which is why it should be consumed with moderation",
              "يمكن أن يؤدي الاستهلاك الزائد للشوكولاتة إلى زيادة الوزن أو حتى الإصابة بأمراض أكثر خطورة ، ولهذا يجب تناولها باعتدال",
            ],
          },
          {
            answer: ["Le pain", "Bread", "الخبز"],
            //image: null,
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
            explanation: [
              "Le petit déjeuner est très important pour les enfants comme toi",
              "Breakfast is so important especially for kids like you",
              "فطور الصباح هو أهم طبق في اليوم بالنسبة للصغار مثلك",
            ],
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
        answers: [
          {
            answer: ["Un oeuf", "An egg", "بيضة"],
            //image: null,
            correct: true,
            color: 0,
          },
          {
            answer: ["Une poule", "A chiken", "دجاجة"],
            //image: null,
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
        answers: [
          {
            answer: ["L'eau", "Water", "الماء"],
            //image: null,
            correct: false,
            color: 3,
          },
          {
            answer: ["Le lait", "Milk", "حليب"],
            //image: null,
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
      ,
      "Oops! I think we are missing ingredients to prepare dinner. Let's go shopping! I will keep you company to make the right choices because not everything that is sold is healthy and good for your health",
      "عفوًا! أعتقد أننا نفتقد بعض المكونات لتحضير العشاء. دعنا نذهب للتسوق! سأحافظ على صحبتك لاتخاذ الخيارات الصحيحة لأنه ليس كل ما يبيع صحيًا وجيدًا لصحتك",
    ],
    skills: [
      [
        "Se familiariser avec la notion d’aliments de saison ",
        "Become familiar with the concept of seasonal foods",
        "التعرف على مفهوم الأطعمة الموسمية",
      ],
      [
        "Être en mesure de faire les bons achats pour pouvoir préparer un repas équilibré.",
        "Being able to make the right purchases to be able to prepare a balanced meal",
        "أن تكون قادرًا على إجراء عمليات الشراء الصحيحة لتكون قادرًا على إعداد وجبة متوازنة",
      ],
      [
        "Savoir reconnaître la meilleure qualité d’un seul et même produit",
        "Knowing how to recognize the best quality of a single product",
        "معرفة كيفية التعرف على أفضل جودة لمنتج واحد",
      ],
    ],
    background: null,
    questions: [
      {
        question: [
          "Est-il conseillé d'acheter des fruits et légumes d'hors saison? ",
          "Is it advisable to buy fruits and vegetables out of their season?",
          "هل ينصح بشراء فواكه وخضروات خارج موسمها؟",
        ],
        type: 0,
        answers: [
          {
            answer: ["Oui", "Yes", "نعم"],
            //image: require("no //image is required here"),
            correct: false,
            color: 1,
          },

          {
            answer: ["Non", "No", "لا"],
            //image: require("no //image is required here"),
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Lequel des aliments suivants tu ne dois pas mettre dans ton panier ?",
          "Which of the following foods you should not put in your basket?",
          "أي من الأطعمة التالية لا يجب أن تضعها في سلتك؟",
        ],
        type: 1,
        answers: [
          {
            answer: ["La viande", "meat", "لحم"],
            //image: null,
            correct: false,
            color: 1,
          },
          {
            answer: ["Ketchup", "Ketchup", "كاتشب"],
            //image: null,
            correct: true,
            color: 0,
          },
          {
            answer: ["Le pain", "bread", "خبز"],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["La salade", "Salad", "سلطة"],
            //image: null,
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Que dois-tu ne pas acheter pour ton petit déjeuner ?",
          "What shouldn't you buy for breakfast?",
          "ما الذي يجب ألا تشتريه لوجبة الإفطار؟",
        ],
        type: 1,
        answers: [
          {
            answer: ["Soda", "soda", "صودا"],
            //image: null,
            correct: true,
            color: 0,
          },
          {
            answer: ["Boite de céreales ", "cereal box", "علبة حبوب"],
            //image: null,
            correct: false,
            color: 3,
          },
          {
            answer: ["Du biscuit ", "biscuit", "بسكويت"],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["De la confiture", "jam", "مربى"],
            //image: null,
            correct: false,
            color: 1,
          },
        ],
      },
      {
        question: [
          "Quelle viande tu dois éviter?",
          "What type of meat you should  avoid? ",
          "ما نوع اللحوم التي يجب تجنبها؟",
        ],
        type: 1,
        answers: [
          {
            answer: ["Le blanc de poulet", "chicken breast", "صدر دجاج"],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["La viande surgelée", "Frozen meat", "لحم مجمد"],
            //image: null,
            correct: true,
            color: 0,
          },
          {
            answer: ["Poisson", "Fish", "سمك"],
            //image: null,
            correct: false,
            color: 3,
          },
          {
            answer: ["La viande hachée", "Minced meat", "لحم مفروم"],
            //image: null,
            correct: false,
            color: 1,
          },
        ],
      },
      {
        question: [
          "Pour le diner, tu dois éviter de prendre ",
          "For dinner, you must avoid taking",
          "للعشاء ، يجب تجنب تناول",
        ],
        type: 1,
        answers: [
          {
            answer: ["Riz brun", "brown rice", "أرز اسمر "],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["La pomme de terre", "baked potatoe", "بطاطس مشوية "],
            //image: null,
            correct: false,
            color: 1,
          },
          {
            answer: [
              "Nouilles instantanées",
              "Instant noodle",
              "معكرونة فورية",
            ],
            //image: null,
            correct: true,
            color: 0,
          },
          {
            answer: ["Des aubergines", "Eggplant", " باذنجان"],
            //image: null,
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "pour ta tartine du petit déjeuner, tu dois acheter",
          "for your breakfast toast, youhave to buy",
          "من أجل خبز الإفطار ، يجب أن تشتريه له   ",
        ],
        type: 1,
        answers: [
          {
            answer: ["La margarine", "margarine", "المرغرين"],
            //image: null,
            correct: false,
            color: 3,
          },
          {
            answer: ["Le beurre", "butter", "الزبدة"],
            //image: null,
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "pour la sauce des pates, tu dois acheter des",
          "for pasta sauce, you have to buy some",
          "لصلصة المعكرونة  لا بد من شراء بعض",
        ],
        type: 1,
        answers: [
          {
            answer: ["tomates fraîches ", "fresh tomatoes", "طماطم طازجة "],
            //image: null,
            correct: false,
            color: 3,
          },
          {
            answer: [
              "tomates en conserve ",
              "canned tomatoes",
              "الطماطم المعلبة   ",
            ],
            //image: null,
            correct: true,
            color: 0,
          },
        ],
      },

      {
        question: [
          "Quelle boite de sucre devrais-tu prendre?",
          "What kind of sugar should you take?",
          "أي علبة سكر يجب أن تأخذها؟",
        ],
        type: 1,
        answers: [
          {
            answer: ["Sucre de canne complet", "raw sugar", "السكر الخام"],
            //image: null,
            correct: false,
            color: 1,
          },

          {
            answer: ["Le sucre brun", "brown sugar", "سكر بني    "],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["Le sucre normal", "normal sugar", "سكر عادي"],
            //image: null,
            correct: false,
            color: 3,
          },
          {
            answer: [
              "Presque les memes",
              "they are about the same",
              "تقريبا نفس الشيء",
            ],
            //image: null,
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "En hiver, le fruit que tu devrais acheter est :",
          "In winter, the fruit you should buy is:",
          ":في الشتاء ، الفاكهة التي يجب أن تشتريها هي",
        ],
        type: 1,
        answers: [
          {
            answer: ["Orange", "Oranges", "برتقال"],
            //image: null,
            correct: true,
            color: 0,
          },

          {
            answer: ["Banane", "Bananas", "موز"],
            //image: null,
            correct: false,
            color: 1,
          },
          {
            answer: ["Ananas", "Ananas", "أناناس"],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["Kiwi", "Kiwi", "كيوي"],
            //image: null,
            correct: false,
            color: 3,
          },
        ],
      },

      {
        question: [
          "Barres l'intrus: Pour ta salade, tu ne dois pas acheter de ",
          "find the odd one out: For your salad, you must avoid buying",
          "انقر فوق الدخيل: للحصول على سلطتك ، يجب تجنب الشراء",
        ],
        type: 1,

        answers: [
          {
            answer: ["La laitue", "", ""],
            //image: null,
            correct: false,
            color: 2,
          },

          {
            answer: ["Olives", "Olives", "زيتون"],
            //image: null,
            correct: false,
            color: 1,
          },
          {
            answer: ["Tomates", "", "  "],
            //image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["La mayonnaise", "", ""],
            //image: null,
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
      "There is nothing better than taking the advice of an expert, that's why we go to the doctor to find out even more about the relationship between diet and our health!",
      "لا يوجد شيء أفضل من أخذ نصيحة خبير ، ولهذا السبب نذهب إلى الطبيب لمعرفة المزيد عن العلاقة بين النظام الغذائي وصحتنا!",
    ],
    skills: [
      [
        "Comprendre ce qu’est la nutrition ainsi que ses catégories.",
        "Understand what nutrition is and its categories.",
        "فهم ما هي التغذية وفئاتها.",
      ],
      [
        "Prendre connaissance de la source de différents nutriments ainsi que leur importance pour la santé de l’être humain.",
        "Learn about the source of different nutrients and their importance for human health.",
        "تعرف على مصدر العناصر الغذائية المختلفة وأهميتها لصحة الإنسان.",
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
        question: [
          "Les nutriments sont toutes les substances alimentaires que ton corps absorbe et utilise pour fonctionner",
          "Nutrients are all the food substances that your body absorbs and uses to function",
          "المغذيات هي جميع المواد الغذائية التي يمتصها جسمك ويستخدمها ليعمل",
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
        type: 0,
        question: [
          " combien de catégories de nutriments y’a t -ils ?",
          "how many categories of nutrients are there?",
          "كم عدد فئات المغذيات الموجودة؟",
        ],
        answers: [
          {
            answer: ["un nutriment", "one nutriment", "مغذ"],
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
        type: 1,
        question: [
          "Que faut-il faire quand on est grippé ? ",
          "What should you do when you have the flu?",
          "ماذا يجب ان تفعل عندما تكون مصابا بالأنفلونزا؟",
        ],
        answers: [
          {
            answer: ["manger des oranges ", "eat oranges", "أكل البرتقال"],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "manger des bonbons",
              "Eat some candies",
              "تناول بعض الحلوى",
            ],
            correct: false,
            color: 3,
          },
          {
            answer: ["manger une carotte ", "eat a carrot", "أكل جزرة"],
            correct: false,
            color: 2,
          },
          {
            answer: ["boire de l’eau ", "drink water", "اشرب ماء"],
            correct: false,
            color: 1,
          },
        ],
      },
      {
        type: 0,
        question: [
          "laver les fruits et legumes avant de les manger n'est pas important ",
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
        type: 1,
        question: [
          "Pour avoir de l'énergie tu dois consommer des glucides que tu trouveras dans :",
          "To have energy you must consume carbohydrates that you will find in:",
          "للحصول على الطاقة ، يجب أن تستهلك الكربوهيدرات التي ستجدها في:",
        ],
        answers: [
          {
            answer: ["le lait", "Milk", "حليب"],
            correct: false,
            color: 1,
          },
          {
            answer: [
              "le chocolat et autres sucreries",
              "chocolate and other sweets",
              "الشوكولاته والحلويات الأخرى",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              "les légumes verts ",
              "the green vegetables",
              "الخضار الخضراء",
            ],
            correct: false,
            color: 2,
          },
          {
            answer: ["le poisson", "Fish", "سمك"],
            correct: false,
            color: 3,
          },
        ],
      },

      {
        type: 0,
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
        question: [
          "pour une bonne croissance et santé des muscles , tu dois absolument consommer :",
          "For good muscle growth and health, you absolutely must consume:",
          "من أجل نمو العضلات وصحتها بشكل جيد ، يجب أن تستهلك بالتأكيد:",
        ],
        answers: [
          {
            answer: [
              "des boissons gazeuses ",
              "carbonated drinks",
              "المشروبات الغازية",
            ],
            correct: false,
            color: 1,
          },
          {
            answer: ["du sucre ", "sugar", "سكر"],
            correct: false,
            color: 3,
          },
          {
            answer: [" des chips   ", "chips", "رقائق البطاطا"],
            correct: false,
            color: 2,
          },

          {
            answer: ["des protéines", "proteins", "البروتينات"],
            correct: true,
            color: 0,
          },
        ],
      },
      {
        type: 0,
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
              "لتحديث يديك",
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
              "للعب مع فقاعات الصابون",
            ],
            correct: false,
            color: 2,
          },
        ],
      },
      {
        type: 1,
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
            correct: false,
            color: 3,
          },
          {
            answer: ["Lait ", "Milk", "حليب"],
            correct: false,
            color: 2,
          },
          {
            answer: [" jus   ", "juice", "رعصير "],
            correct: false,
            color: 1,
          },

          {
            answer: ["Eau", "water", "ماء"],
            correct: true,
            color: 0,
          },
        ],
      },
      {
        type: 1,
        question: [
          "Pour avoir des os solides tu dois consommer un sel minéral qui est :",
          "To have strong bones you must consume a mineral salt which is:",
          "للحصول على عظام قوية يجب تناول ملح معدني وهو:",
        ],
        answers: [
          {
            answer: ["le calcium", "calcium", "الكالسيوم"],
            correct: true,
            color: 0,
          },
          {
            answer: ["le fer", "the iron", "الحديد"],
            correct: false,
            color: 1,
          },
          {
            answer: ["le phosphore ", "phosphorus", "الفوسفور"],
            correct: false,
            color: 2,
          },
          {
            answer: ["le potassium", "potassium", "البوتاسيوم"],
            correct: false,
            color: 3,
          },
        ],
      },

      {
        type: 0,
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
              "زيادة تناول الملح",
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
              "زيادة استهلاك السكر",
            ],
            correct: false,
            color: 3,
          },
        ],
      },
      {
        type: 0,
        question: [
          " Trouve l'intrus . Faire de l'activité physique : ",
          "Find the intruder . Physical activity:",
          "ابحث عن الدخيل. قم بنشاط بدني:",
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
        type: 0,
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
    ],
  },
  {
    name: ["Au restaurant", "At the restaurant", "في المطعم"],

    background: require("../../assets/background/restaurant.png"),
    backgroundGame: require("../../assets/background/restau.png"),
    intro: [
      "Aujourd’hui nous allons manger au restaurant, chouette n’est ce pas ? Mais n’oublions pas les bonnes habitudes alimentaires. Que l’aventure commence!",
      "Today we are going to eat at the restaurant, nice isn't it? But let’s not forget good eating habits. Let the adventure begin!",
      "اليوم سوف نأكل في المطعم ، أليس كذلك؟ لكن دعونا لا ننسى عادات الأكل الجيدة. فلتبدأ المغامرة!",
    ],
    skills: [
      [
        "Prendre conscience des bonnes habitudes en mangeant",
        "Become aware of good eating habits",
        "كن على دراية بعادات الأكل الجيدة",
      ],
      [
        "Être en mesure de faire le bon choix à partir d’un menu .",
        "Become aware of good eating habits",
        "كن على دراية بعادات الأكل الجيدة",
      ],
    ],
    background: null,
    questions: [
      {
        question: [
          "Qu'est ce que tu vas choisir comme entrée ?",
          "what will you choose as an appetizer ?",
          "ماذا ستختار كمقبلة ؟",
        ],
        type: 1,
        answers: [
          {
            answer: ["Les rondelles d'oignon", "Onion rings", "حلقات البصل"],
            //image: require("../../assets/images/onionrings.png"),
            correct: false,
            color: 2,
            explanation: [
              "les rondelles d'oignon sont un mauvais choix nutritionnel",
              "onion rings are a poor nutritional choice",
              "تعتبر حلقات البصل خيارًا غذائيًا سيئًا",
            ],
          },
          {
            answer: ["Frites", "Fries", "بطاطس مقلية"],
            //image: require("../../assets/images/fries.png"),
            correct: false,
            color: 2,
            explanation: [
              "les frites contiennent beaucoup de matières grasses et de sel qui pourraient augmenter le risque de maladies cardiovasculaires",
              "french fries have a lot of fat and salt that could raise the risk of cardiovascular disease",
              "تحتوي البطاطس المقلية على الكثير من الدهون والأملاح التي قد تزيد من مخاطر الإصابة بأمراض القلب والأوعية الدموية",
            ],
          },
          {
            answer: ["Trempette", "Creamy dips", "صلصة (تغميسة)"],
            //image: require("../../assets/images/dips.png"),
            correct: false,
            color: 1,
            explanation: [
              "les trempettes sont parfois chargées d'ingrédients riches en calories, sel, sucre et d'autres additifs",
              "dips are sometimes loaded with high calorie ingredients, salt, sugar, and other additives.",
              "يتم تحميل الغموسات أحيانًا بمكونات عالية السعرات الحرارية والملح والسكر والإضافات الأخرى.",
            ],
          },
          {
            answer: ["Salade", "Salad", "سلطة"],
            //image: require("../../assets/images/salad.jpg"),
            correct: true,
            color: 0,
            explanation: [
              "Manger des salades est sain car vous obtenez des nutriments vitaux, des fibres et de bonnes graisses",
              "Eating a salads is healthy because you get vital nutrients, fiber, and good fats.",
              "يعتبر تناول السلطات أمرًا صحيًا لأنك تحصل على العناصر الغذائية الحيوية والألياف والدهون الجيدة.",
            ],
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

        answers: [
          {
            answer: ["Burger", "Burger", "برغر"],
            //image: require("../../assets/images/burger.jpg"),
            correct: false,
            color: 1,
            explanation: [
              "Les burgers ont peut-être la mauvaise réputation d'être des aliments « malsains », mais la valeur nutritive de votre burger dépend vraiment de ce qu'il contient.",
              "Burgers might have a bad reputation as an “unhealthy” food, but the nutritional value of your burger really depends on what's in it.",
              "قد يكون للبرغر سمعة سيئة كطعام غير صحي لكن القيمة الغذائية لبرغر الخاص بك تعتمد حقًا على ما بداخله",
            ],
          },
          {
            answer: ["Riz au poulet", "Chicken & rice", "رز بالدجاج"],
            //image: require("../../assets/images/rice.jpg"),
            correct: true,
            color: 0,
            explanation: [
              "c'est un excellent repas sain, il contient des protéines, des glucides et une bonne portion de légumes et il est faible en gras et en sucre",
              "it is a great healthy meal, It contains protein, carbs and a good helping of vegetables and it is low in fat and sugar",
              "إنها وجبة صحية رائعة ، فهي تحتوي على البروتينات والكربوهيدرات و الخضروات وقليلة الدهون والسكر",
            ],
          },
          {
            answer: ["Croquette de poulet", "Chicken nuggets", " ناجتس الدجاج"],
            //image: require("../../assets/images/chickenNuggets.png"),
            correct: false,
            color: 2,
            explanation: [
              "ils contiennent de grandes quantités de conservateurs, de sucre et de matières grasses, ce qui en fait des choix malsains, surtout lorsqu'ils sont consommés fréquemment",
              "they contain high amounts of preservatives, sugar, and fat, making them unhealthy choices, especially when eaten frequently",
              "أنها تحتوي على كميات عالية من المواد الحافظة والسكر والدهون ، مما يجعلها خيارات غير صحية ، خاصة عند تناولها بشكل متكرر",
            ],
          },
          {
            answer: ["Pizza", "Pizza", "بيتزا"],
            //image: require("../../assets/images/pizza.jpg"),
            correct: false,
            color: 3,
            explanation: [
              "Le fromage sur la pizza est riche en graisses saturées, ce qui augmente votre risque d'hypercholestérolémie et de maladie cardiaque",
              "The cheese on pizza is high in saturated fat, which increases your risk for high cholesterol and heart disease",
              "يحتوي الجبن الموجود في البيتزا على نسبة عالية من الدهون المشبعة ، مما يزيد من خطر الإصابة بارتفاع الكوليسترول وأمراض القلب",
            ],
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

        answers: [
          {
            answer: ["Une tarte", "A pie", "فطيرة"],
            //image: require("../../assets/images/pie.jpg"),
            correct: false,
            color: 1,
            explanation: [
              "les tartes sont considérées comme de la malbouffe mais tout comme les burgers, le contenu compte",
              "pies are considered as junk food but just like burgers, the content matters",
              "تعتبر الفطائر من الوجبات السريعة ولكن المحتوى مهم تمامًا مثل البرغر",
            ],
          },
          {
            answer: ["Salade de fruits", "fruit salad", "سلطة فواكه"],
            //image: require("../../assets/images/fruits.jpg"),
            correct: true,
            color: 0,
            explanation: [
              "Consommer de la salade de fruits aide à digérer facilement nos aliments. La salade de fruits améliore également la santé de notre système digestif. Ceci est attribué à la teneur élevée en fibres et en potassium ainsi qu'à la faible teneur en fructose.",
              "Consuming fruit salad helps to easily digest our food. Fruit salad also improves the health of our digestive system. This is attributed to the high fiber and potassium content and also because of the low fructose content.",
              "يساعد تناول سلطة الفاكهة على هضم طعامنا بسهولة. تعمل سلطة الفاكهة أيضًا على تحسين صحة الجهاز الهضمي. ويعزى ذلك إلى المحتوى العالي من الألياف والبوتاسيوم وأيضًا بسبب محتوى الفركتوز المنخفض.",
            ],
          },
          {
            answer: ["Cake", "Cake", "كيك"],
            //image: require("../../assets/images/chocoCake.jpg"),
            correct: false,
            color: 2,
            explanation: [
              "Ce n'est un secret pour personne que le gâteau est riche en sucre, et c'est l'un des principaux ingrédients qui le rend malsain.",
              "It's no secret that cake is high in sugar, and that's one of the main ingredients that makes it unhealthy.",
              "ليس سراً أن الكيك يحتوي على نسبة عالية من السكر ، وهذا أحد المكونات الرئيسية التي تجعله غير صحي.",
            ],
          },
          {
            answer: ["Donuts", "Donuts", "دوناتس"],
            //image: require("../../assets/images/donuts.jpg"),
            correct: false,
            color: 3,
            explanation: [
              "ils contiennent une bonne quantité de sucre, d'amidon et de graisse, mais sont pauvres en nutriments bénéfiques. Ils sont considérés comme un aliment ultra-transformé non nutritif.",
              " doughnuts have a fair amount of sugar, starch, and fat but are low in beneficial nutrients. They're considered a non-nutritious, ultra-processed food.",
              "تحتوي على كمية لا بأس بها من السكر والنشا والدهون ولكنها منخفضة في العناصر الغذائية المفيدة. إنها تعتبر طعامًا غير مغذي ومعالج للغاية.",
            ],
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

        answers: [
          {
            answer: ["Milkshake", "Milkshake", "ميلك شايك"],
            //image: require("../../assets/images/milkShake.jpg"),
            correct: false,
            color: 3,
            explanation: [
              "boire un seul milkshake riche en matières grasses provoque des changements malsains dans vos vaisseaux sanguins et vos globules rouges. Si vous voulez que votre milkshake soit nutritif et plus sain, préparez-le à la maison",
              "drinking a single full-fat milkshake causes unhealthy changes to your blood vessels and your red blood cells, If you want your milkshake to be nutritious and  healthier, make it at home",
              "يؤدي شرب مخفوق الحليب كامل الدسم إلى تغييرات غير صحية في الأوعية الدموية وخلايا الدم الحمراء لديك ، إذا كنت تريد أن يكون اللبن المخفوق مغذيًا وصحيًا ، فقم بإعداده في المنزل",
            ],
          },
          {
            answer: ["Jus naturel", "Natural juice", "عصير طبيعي"],
            //image: require("../../assets/images/naturalJuice.jpg"),
            correct: false,
            color: 2,
            explanation: [
              "le jus est extrait de fruits ou de légumes frais. Le liquide contient la plupart des vitamines, des minéraux et des produits chimiques végétaux présents dans le fruit.",
              "the juice is extracted from fresh fruits or vegetables. The liquid contains most of the vitamins, minerals and plant chemicals  found in the fruit.",
              "يُستخرج العصير من الفاكهة أو الخضار الطازجة. يحتوي السائل على معظم الفيتامينات والمعادن والمواد الكيميائية النباتية الموجودة في الفاكهة.",
            ],
          },
          {
            answer: ["Soda", "Soda", "مشروب غازي"],
            //image: require("../../assets/images/soda.jpg"),
            correct: true,
            color: 0,
            explanation: [
              "ce n'est pas bon pour la santé parce qu'il contient beaucoup de sucre. Consommer trop de soda peut entraîner une prise de poids, du diabète et des problèmes cardiovasculaires.",
              "Soda is not good for a person's health because it contains lots of sugar. Consuming too much soda may lead to weight gain, diabetes, and cardiovascular conditions.",
              "الصودا ليست جيدة لصحة الإنسان لأنها تحتوي على الكثير من السكر. قد يؤدي استهلاك الكثير من الصودا إلى زيادة الوزن ومرض السكري وأمراض القلب والأوعية الدموية.",
            ],
          },
          {
            answer: ["De l'eau", "Water", "الماء"],
            //image: require("../../assets/images/water.jpg"),
            correct: false,
            color: 1,
            explanation: [
              "L'eau est essentielle pour votre corps. elle évite la déshydratation, la constipation et les calculs rénaux. De plus, sans calories, c'est la meilleure boisson pour le corps",
              "Water is essential for your body. It prevents dehydration, constipation, and kidney stones. Plus, with no calories, it's the best beverage for your waistline.",
              "الماء ضروري لجسمك. يمنع الجفاف والإمساك وحصوات الكلى. بالإضافة إلى أنه بدون سعرات حرارية ، فهو أفضل مشروب لصحتك",
            ],
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
        answers: [
          {
            answer: ["Le pain blanc", "White bread", "الخبز الابيض"],
            //image: require("../../assets/images/whiteBread.jpg"),
            correct: false,
            color: 1,
            explanation: [
              "La farine transformée et les additifs contenus dans le pain blanc emballé peuvent le rendre malsain. Consommer trop de pain blanc peut contribuer à l'obésité, aux maladies cardiaques et au diabète.",
              "The highly processed flour and additives in white, packaged bread can make it unhealthful. Consuming too much white bread can contribute to obesity, heart disease, and diabetes.",
              "يمكن للدقيق والإضافات المعالجة بشكل كبير في الخبز الأبيض المعبأ أن تجعله غير صحي. يمكن أن يساهم استهلاك الكثير من الخبز الأبيض في الإصابة بالسمنة وأمراض القلب والسكري.",
            ],
          },

          {
            answer: ["Le pain complet", "Brown bread", "الخبز الاسمر"],
            //image: require("../../assets/images/brownBread.jpg"),
            correct: true,
            color: 0,
            explanation: [
              "Le pain brun est clairement l'option la plus saine du point de vue santé en raison de la teneur en fibres ainsi que des nutriments naturels présents et la faible teneur en calories est un avantage supplémentaire.",
              "Brown bread is clearly the healthier option from a health perspective due to the fiber content along with natural nutrients present in with and low calories is an additional benefit",
              "من الواضح أن الخبز البني هو الخيار الأكثر صحة من منظور صحي نظرًا لاحتوائه على الألياف إلى جانب العناصر الغذائية الطبيعية الموجودة فيه ، كما أن انخفاض السعرات الحرارية يعد ميزة إضافية",
            ],
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

        answers: [
          {
            answer: ["Oui", "Yes", "نعم"],
            //image: null,
            correct: false,
            color: 1,
            explanation: [
              "Le pain est riche en glucides, pauvre en micronutriments, et sa teneur en gluten et en antinutriments peut causer des problèmes à certaines personnes. Pourtant, il est souvent enrichi de nutriments supplémentaires, et les variétés à grains entiers ou germées peuvent conférer plusieurs avantages pour la santé. Avec modération, le pain peut être consommé dans le cadre d'une alimentation saine",
              "Bread is high in carbs, low in micronutrients, and its gluten and antinutrient contents may cause issues for some people. Still, it's often enriched with extra nutrients, and whole-grain or sprouted varieties may bestow several health benefits. In moderation, bread can be enjoyed as part of a healthy diet ",
              "يحتوي الخبز على نسبة عالية من الكربوهيدرات وقليل من المغذيات الدقيقة ، وقد تسبب محتوياته من الغلوتين ومضادات المغذيات مشاكل لبعض الناس. ومع ذلك ، غالبًا ما يتم إثرائه بالعناصر الغذائية الإضافية ، وقد تضفي الحبوب الكاملة أو الأصناف المنبتة العديد من الفوائد الصحية. باعتدال ، يمكن الاستمتاع بالخبز كجزء من نظام غذائي صحي",
            ],
          },

          {
            answer: ["Non", "No", "لا"],
            //image: require("no //image is required here"),
            correct: true,
            color: 0,
            explanation: [
              "Le pain est riche en glucides, pauvre en micronutriments, et sa teneur en gluten et en antinutriments peut causer des problèmes à certaines personnes. Pourtant, il est souvent enrichi de nutriments supplémentaires, et les variétés à grains entiers ou germées peuvent conférer plusieurs avantages pour la santé. Avec modération, le pain peut être consommé dans le cadre d'une alimentation saine",
              "Bread is high in carbs, low in micronutrients, and its gluten and antinutrient contents may cause issues for some people. Still, it's often enriched with extra nutrients, and whole-grain or sprouted varieties may bestow several health benefits. In moderation, bread can be enjoyed as part of a healthy diet ",
              "يحتوي الخبز على نسبة عالية من الكربوهيدرات وقليل من المغذيات الدقيقة ، وقد تسبب محتوياته من الغلوتين ومضادات المغذيات مشاكل لبعض الناس. ومع ذلك ، غالبًا ما يتم إثرائه بالعناصر الغذائية الإضافية ، وقد تضفي الحبوب الكاملة أو الأصناف المنبتة العديد من الفوائد الصحية. باعتدال ، يمكن الاستمتاع بالخبز كجزء من نظام غذائي صحي",
            ],
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

        answers: [
          {
            answer: ["Oui", "Yes", "نعم"],
            //image: require("no //image is required here"),
            correct: false,
            color: 1,
            explanation: [
              "boire de l'eau pendant le repas diluera les sucs digestifs libérés pour digérer vos aliments, les empêchant ainsi de décomposer les aliments",
              "drinking water during the meal will dilute the digestive juices being released to digest your food, thereby hindering them from breaking down food.",
              "شرب الماء أثناء الوجبة سيخفف من إفراز العصارة الهضمية لهضم طعامك ، وبالتالي يمنعهم من تكسير الطعام. ",
            ],
          },

          {
            answer: ["Non", "No", "لا"],
            //image: require("no //image is required here"),
            correct: true,
            color: 0,
            explanation: [
              "boire de l'eau pendant le repas diluera les sucs digestifs libérés pour digérer vos aliments, les empêchant ainsi de décomposer les aliments",
              "drinking water during the meal will dilute the digestive juices being released to digest your food, thereby hindering them from breaking down food.",
              "شرب الماء أثناء الوجبة سيخفف من إفراز العصارة الهضمية لهضم طعامك ، وبالتالي يمنعهم من تكسير الطعام. ",
            ],
          },
        ],
      },
    ],
  },
];
export default themes;
