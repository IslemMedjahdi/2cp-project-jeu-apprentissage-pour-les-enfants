const themes = [
  {
    name: ["à la maison", "At Home", "في المنزل"],
    background: require("../../assets/background/background1.png"),
    backgroundGame: require("../../assets/background/background1.png"),
    questions: [
      {
        question: ["in frensh", "in english", "in arabic"],
        answers: [
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: true,
            color: 0,
          },
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: false,
            color: 2,
          },
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: false,
            color: 3,
          },
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: false,
            color: 1,
          },
        ],
      },
    ],
  },
  {
    name: ["au marché", "at the market ", "في السوق"],
    background: require("../../assets/background/march.png"),
    backgroundGame: require("../../assets/background/marche.png"),
    questions: [
      {
        question: [
          "Pourquoi devriez-vous manger une diversité d'aliments colorés?",
          "Why should you eat a diversity of colourful foods?",
          "لماذا يجب أن تأكل مجموعة متنوعة من الأطعمة الملونة؟",
        ],
        answers: [
          {
            answer: [
              "Les aliments colorés ont un bon goût",
              "Colourful foods taste better",
              "للاطعمة الملونة طعم أفضل",
            ],
            image: null,
            correct: false,
            color: 1,
          },
          {
            answer: [
              "Chaque couleur apporte des nutriments différents",
              " Each colour provides different health benefits",
              "يوفر كل لون فوائد صحية مختلفة",
            ],
            image: null,
            correct: true,
            color: 0,
          },
          {
            answer: [
              "Les aliments colorés peuvent durer plus longtemps",
              "Colourful foods can last longer",
              "يمكن أن تستمر الأطعمة الملونة لفترة أطول",
            ],
            image: null,
            correct: false,
            color: 2,
          },
          {
            answer: [
              " Les couleurs sont belles",
              "Colors are beautiful",
              "الألوان جميلة",
            ],
            image: null,
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Lequel des aliments suivants est le moins susceptible d'entraîner une intoxication alimentaire ?",
          "Which of the following foods is least likely to result in food poisoning?",
          "أي من الأطعمة التالية أقل احتمالا أن يؤدي إلى التسمم الغذائي؟",
        ],
        answers: [
          {
            answer: ["La viande", "meat", "لحم"],
            image: null,
            correct: false,
            color: 1,
          },
          {
            answer: ["Mayonnaise", "Mayonnaise", "مايونيز"],
            image: null,
            correct: true,
            color: 0,
          },
          {
            answer: ["Le pain", "bread", "خبز"],
            image: null,
            correct: false,
            color: 2,
          },
          {
            answer: ["La salade", "Salad", "سلطة"],
            image: null,
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          " Quelle est la saison de la pomme ?",
          "in english",
          "ما موسم التفاح ؟",
        ],
        answers: [
          {
            answer: [
              " Septembre à décembre",
              "in english",
              "من سبتمبر إلى ديسمبر",
            ],
            image: "",
            correct: true,
            color: 0,
          },
          {
            answer: [" décembre à Mars", "in english", "من ديسمبر إلى مارس"],
            image: "",
            correct: false,
            color: 1,
          },
          {
            answer: [" Mars à juin", "in english", "من مارس إلى جوان"],
            image: "",
            correct: false,
            color: 3,
          },
          {
            answer: ["juin à Aout", "in english", "من جوان إلى أوت"],
            image: "",
            correct: false,
            color: 2,
          },
        ],
      },
      {
        question: [
          " De quelle région du monde est originaire le poivron ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: [" Amérique centrale", "in english", "أمريكا الوسطى"],
            image: "",
            correct: true,
            color: 0,
          },
          {
            answer: ["Asie", "in english", "آسيا"],
            image: "",
            correct: false,
            color: 1,
          },
          {
            answer: [" Europe", "in english", "أوروبا"],
            image: "",
            correct: false,
            color: 3,
          },
          {
            answer: [" Afrique", "in english", "إفريقيا"],
            image: "",
            correct: false,
            color: 2,
          },
        ],
      },
      {
        question: [
          "lequel est le mieux pour votre santé?",
          " which one is better for your health?",
          "أيهما أفضل لصحتك؟",
        ],
        answers: [
          {
            answer: ["Céréale raffinée", "Refined grains", "الحبوب المكررة"],
            image: null,
            correct: false,
            color: 3,
          },
          {
            answer: ["grains entiers", "Whole grains", "الحبوب الكاملة"],
            image: null,
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "lequel est le mieux pour ton coeur ?",
          "which one is best for your heart? ",
          "أيهما أفضل لصحة قلبك؟",
        ],
        answers: [
          {
            answer: ["Le blanc de poulet", "chicken breast", "صدر دجاج"],
            image: null,
            correct: false,
            color: 3,
          },
          {
            answer: [
              "boeuf haché extra-maigre",
              "extra lean ground beef",
              "لحم بقري مفروم قليل الدهن  ",
            ],
            image: null,
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          " Quelle est la couleur de la chair du potiron ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: ["Orange", "in english", "برتقالي"],
            image: "",
            correct: true,
            color: 0,
          },
          {
            answer: [" Bleu ", "in english", "أزرق"],
            image: "",
            correct: false,
            color: 3,
          },
          {
            answer: ["Verte", "in english", "أخضر"],
            image: "",
            correct: false,
            color: 2,
          },
          {
            answer: ["Jaune", "in english", "أصفر"],
            image: "",
            correct: false,
            color: 1,
          },
        ],
      },
      {
        question: [
          "Lequel  a moins de calories?",
          "which has fewer calories?",
          "أي واحد يحتوي على سعرات حرارية أقل؟",
        ],
        answers: [
          {
            answer: ["Le riz brun", "brown rice", "أرز اسمر "],
            image: null,
            correct: false,
            color: 3,
          },
          {
            answer: ["Pomme de terre au four", "baked potatoe", "بطاطس مشوية "],
            image: null,
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Laquelle est la plus saine ?",
          "Which one is healthier?",
          "أيهما افضل لصحتك؟",
        ],
        answers: [
          {
            answer: ["La margarine", "margarine", "المرغرين"],
            image: null,
            correct: true,
            color: 0,
          },
          {
            answer: ["Le beurre", "butter", "الزبدة"],
            image: null,
            correct: false,
            color: 3,
          },
        ],
      },

      {
        question: [
          "Laquelle est la plus saine ?",
          "Which one is healthier?",
          "أيهما افضل لصحتك؟",
        ],
        answers: [
          {
            answer: ["tomates fraîches ", "fresh tomatoes", "طماطم طازجة "],
            image: null,
            correct: false,
            color: 3,
          },
          {
            answer: [
              "tomates en conserve ",
              "canned tomatoes",
              "الطماطم المعلبة   ",
            ],
            image: null,
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Lequel est le plus sain ?",
          "Which one is healthier?",
          "أيهما افضل لصحتك؟",
        ],
        answers: [
          {
            answer: ["Sel de mer", "seasalt", "ملح البحر"],
            image: null,
            correct: false,
            color: 3,
          },
          {
            answer: ["Sel de table", "table salt", " ملح المائدة"],
            image: null,
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          " Comment s'appellent les feuilles de la carotte ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: ["Les fanes ", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
          },
          {
            answer: [" les feuillettes", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
          },
          {
            answer: ["les carofeuilles", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
          },
        ],
      },
      {
        question: [
          "  A quelle famille alimentaire appartient le haricot vert ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: [" La famille des féculent", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
          },
          {
            answer: [
              " La famille des produits laitiers",
              "in english",
              "in arabic",
            ],
            image: "",
            correct: false,
            color: 2,
          },
          {
            answer: [" La famille des fruits", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
          },
          {
            answer: [" la famille des légumes", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "  Quel est le peuple qui a aidé a diffuser la poire ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: [" Les  Rommains ", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
          },
          {
            answer: [" Les Gaulois ", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
          },
          {
            answer: [" Les Grecs", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
          },
          {
            answer: [" Les Phéniciens", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "Lequel est le plus sain ?",
          "Which one is healthier?",
          "أيهما افضل لصحتك؟",
        ],
        answers: [
          {
            answer: ["Sucre de canne complet", "raw sugar", "السكر الخام"],
            image: null,
            correct: false,
            color: 3,
          },
          {
            answer: [
              "Presque les memes",
              "they are about the same",
              "تقريبا نفس الشيء",
            ],
            image: null,
            correct: true,
            color: 0,
          },
          {
            answer: ["Le sucre brun", "brown sugar", "سكر بني    "],
            image: null,
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "  Quel est l’insecte essentiel à la fécondation des fleurs du kiwi ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: [" Les guêpes", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
          },
          {
            answer: [" Les abeilles", "in english", "النحل"],
            image: "",
            correct: true,
            color: 0,
          },
          {
            answer: [" Les fourmis", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
          },
          {
            answer: [" les mouches", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
          },
        ],
      },
      {
        question: [
          "De quelle région du monde est originaire le radis  ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: ["L’Amérique", "in english", "أمريكا"],
            image: "",
            correct: false,
            color: 1,
          },
          {
            answer: [" L’Asie Mineure", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
          },
          {
            answer: ["L’Afrique", "in english", "إفريقيا"],
            image: "",
            correct: false,
            color: 2,
          },
          {
            answer: [" L'europe", "in english", "أوروبا"],
            image: "",
            correct: false,
            color: 3,
          },
        ],
      },
    ],
  },
  {
    name: ["chez le medecin ", "at the doctor", "عند الطبيب"],
    background: require("../../assets/background/hopital.png"),
    backgroundGame: require("../../assets/background/cabinet.jpg"),
    questions: [
      {
        question: [
          " combien de catégories de nutriments y’a t -ils ?",
          "how many categories of nutrients are there?",
          "كم عدد فئات المغذيات الموجودة؟",
        ],
        answers: [
          {
            answer: ["un nutriment", "one nutriment", "مغذي واحد"],
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
    ],
  },
  {
    name: ["Au restaurent", "At the restaurent", "في المطعم"],
    background: require("../../assets/background/restaurant.png"),
    backgroundGame: require("../../assets/background/restau.png"),
    questions: [
      {
        question: ["in frensh", "in english", "in arabic"],
        answers: [
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: true,
            color: 0,
          },
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: false,
            color: 2,
          },
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: false,
            color: 3,
          },
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: false,
            color: 1,
          },
        ],
      },
    ],
  },
  {
    name: ["Avec mes amis", "With my friends", "مع أصدقائي"],
    background: require("../../assets/background/ecole.png"),
    backgroundGame: require("../../assets/background/ecolebg.png"),
    questions: [
      {
        question: ["in frensh", "in english", "in arabic"],
        answers: [
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: true,
            color: 0,
          },
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: false,
            color: 2,
          },
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: false,
            color: 3,
          },
          {
            answer: ["in frensh", "in english", "in arabic"],
            correct: false,
            color: 1,
          },
        ],
      },
    ],
  },
];

export default themes;
