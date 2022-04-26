const themes = [
  {
    name: ["à la maison", "At Home", "في المنزل"],
    background: require("../../assets/background/background1.jpg"),
    backgroundGame: require("../../assets/background/background1.jpg"),
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
    name: ["Au marché", "At the greengrocer", "في السوق"],
    background: require("../../assets/background/march.png"),
    backgroundGame: require("../../assets/background/marche.png"),
    questions: [
      {
        question: [
          "Combien de portions de fruits et légumes est-il conseillé de manger chaque jour ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: [
              " 2 portions de fruits et légumes",
              "in english",
              "in arabic",
            ],
            correct: true,
            color: 0,
          },
          {
            answer: [
              " 4 portions de fruits et légumes",
              "in english",
              "in arabic",
            ],
            correct: false,
            color: 2,
          },
          {
            answer: [
              " 5 portions de fruits et légumes",
              "in english",
              "in arabic",
            ],
            correct: false,
            color: 3,
          },
          {
            answer: [
              "7 portions de fruits et légumes",
              "in english",
              "in arabic",
            ],
            correct: true,
            color: 0,
          },
        ],
      },
      {
        question: [
          "Parmi ces trois fruits, lequel contient des matières grasses ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: ["Le kiwi", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["La cerise", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" L’avocat", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" L'abricot", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: [
          " Quand est-il conseillé de manger des fruits et légumes ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: [
              " Uniquement au petit-déjeuner",
              "in english",
              "in arabic",
            ],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" A chaque repas", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Uniquement au goûter", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" quand je tombe malade", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: [
          " Parmi ces  vitamines, laquelle n’est pas apportée par les fruits et les légumes ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: ["La vitamine C", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["La vitamine B9", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" La vitamine A", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["La vitamine D", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: [
          " Quelle est la saison de la pomme ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: [" Septembre a décembre", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" décembre a Mars", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Mars a juin", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" juin a Aout", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
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
            answer: [" Amérique centrale", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["Asie", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Europe", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Afrique", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
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
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Les Gaulois ", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Les Grecs", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Les Phéniciens", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: [
          " Quelles vitamines les abricots contiennent-ils?  ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: [" A , C ", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" B9 , B12 ", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" K , D ", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" E , B6", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: ["   La banane est-elle ?", "in english", "in arabic"],
        answers: [
          {
            answer: [" Un fruit", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Un légume", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" un produit sucré", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Un fruit sec", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
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
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Les abeilles", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Les fourmis", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" les mouches", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
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
            explanation: ["explanation in frensh", "in english", "in arabic"],
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
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" La famille des fruits", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" la famille des légumes", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: [
          "Quels fruits ne sont pas recommandés pour être consommés en grande quantité pendant un régime ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: ["L'avocat", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["La pommme", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["les raisins", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["La mangue", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: [
          " Dans quel fruit trouve-t-on la vitamine  B9 en abondance  ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: ["La grenade", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" L'abricot", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Les dattes", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" la banane", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
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
            answer: ["L’Amérique", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" L’Asie Mineure", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["L’Afrique", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" L'europe", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: [
          "Quel peuple utilisait les fraises pour faire des masques de soin pour le visage ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: ["Les gaulois", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Les romains ", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["Les Egyptiens", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["Les africains", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
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
            answer: ["Orange", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Bleu ", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["Verte", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["Jaune", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: [
          " Quelle ville organize chaque année une fete du citron ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: ["Paris", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" Menton ", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["Nantes", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["London", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: [" La cerise est-elle ?", "in english", "in arabic"],
        answers: [
          {
            answer: ["un fruit a noyeau", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" un fruit a pépins ", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["un fruit sans pépins", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["un fruit a grains", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
        ],
      },
      {
        question: [
          " Quel est l’apport en énergie de l’artichaut aux 100 g ?",
          "in english",
          "in arabic",
        ],
        answers: [
          {
            answer: ["44 kcal", "in english", "in arabic"],
            image: "",
            correct: true,
            color: 0,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" 54 kcal ", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["64 kcal", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["88 kcal", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 3,
            explanation: ["explanation in frensh", "in english", "in arabic"],
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
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: [" les feuillettes", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 2,
            explanation: ["explanation in frensh", "in english", "in arabic"],
          },
          {
            answer: ["les carofeuilles", "in english", "in arabic"],
            image: "",
            correct: false,
            color: 1,
            explanation: ["explanation in frensh", "in english", "in arabic"],
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
