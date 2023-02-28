// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "175г су спиртовкада 15 ˚С-тан 75 ˚С –қа дейін қыздырылды. Спиртовканың спиртпен қосып алғандағы бастапқы массасы 163г болатын. Ал қыздыру аяқталғаннан кейін массасы 157г болды. Қыздырғыштың ПӘК-і (qспирт = 2,7∙10 '7' Дж/кг; ссу = 4200 Дж/кг ∙ ˚С )",
    answer: "27%",
    options: [
      "27%",
      "47%",
      "4,7%",
      "0,27%"
    ]
  },
    {
    numb: 2,
    question: "2 м/с және 1 м/с жылдамдықпен бір-біріне қарама-қарсы қозғалған массалары 1 кг және 2 кг екі шардың абсолют серпімсіз центрлік соқтығысуы нәтижесінде ішкі энергияларының өзгеруі",
    answer: "3 Дж",
    options: [
      "3 Дж",
      "2 Дж",
      "1 Дж",
      "2,67 Дж"
    ]
  },
    {
    numb: 3,
    question: "60 Н күш денеге 0,8 м/с'2' үдеу береді. Осы денеге 2 м/с'2' үдеу беретін күш",
    answer: "150 H",
    options: [
      "140 H",
      "200 H",
      "150 H",
      "160 H"
    ]
  },
    {
    numb: 4,
    question: "Шыны түтік пластинамен жабылған жағымен h = 0,68 м тереңдікке суға батырылған. Пластина түсіп қалу үшін, түтікке құйылатын h1 сынап биіктігі. (ρсу = 10'3' кг/м'3' , ρсынап= 13,6∙10'3' кг/м'3')",
    answer: "0.05 м",
    options: [
      "0.005 м",
      "0.05 м",
      "0.25 м",
      "0.1 м"
    ]
  },
    {
    numb: 5,
    question: "Ашық ыдыста тұрған судың тау етегіндегі T1 және тау шыңындағы Т2 қайнау температураларын салыстыр.",
    answer: "Т1 > T2",
    options: [
      "Т1 > T2",
      "T1 < T2",
      "T1 ≤ T2",
      "T1 ≥ T2"
    ]
  },

  {
    numb: 6,
    question: "Массасы 20 г белгісіз газды тұрақты қысымда 10 К-ге қыздыру үшін 182,4 Дж, ал тұрақты көлемде қыздыру үшін 129,8 Дж жылу мөлшері қажет. Бұл (R = 8,31Дж/моль∙К)",
    answer: "оттегі (М=0,032кг/моль)",
    options: [
      "гелий (М=0,004кг/моль)",
      "көмірқышқыл газы (М=0,044кг/моль)",
      "оттегі (М=0,032кг/моль)",
      "азот (М=0,028кг/моль)"
    ]
  },

  {
    numb: 7,
    question: "Рычагтың қысқа иініне массасы 100 кг жүк ілінген. Оны көтеру үшін рычагтың ұзын иініне 250 Н күш түсірілген. Жүкті h1 = 0,08 м биіктікке көтерген, сонда қозғаушы күштің түсу нүктесі h2 = 0,4 м төмендеген. Рычагтың ПӘК-і (g = 10 м/с'2')",
    answer: "80%",
    options: [
      "100%",
      "80%",
      "90%",
      "77%"
    ]
  },

  {
    numb: 8,
    question: "Электролиз үшін Фарадей заңының өрнегі",
    answer: "m=kl∆t",
    options: [
      "«m=k/∆T»",
      "«m=kt/T»",
      "«m=kl/t",
      "m=kl∆t"
    ]
  },


  {
    numb: 9,
    question: "Автомобиль көпірмен бір қалыпты 18 км/сағ жылдамдықпен қозғалып келеді. Егер көпірдің ұзындығы 480 м болса, автомобильдің көпірден өту уақыты.",
    answer: "96c",
    options: [
      "69c",
      "27c",
      "96c",
      "86c"
    ]
  },


  {
    numb: 10,
    question: "Екі нүктелік зарядтардың әсерлесуінен кейін олардың арақашықтығы төрт есе азайды. Кулон күші",
    answer: "16 есе көбейеді",
    options: [
      "16 есе көбейеді",
      "өзгермейді",
      "4 есе көбейеді",
      "16 есе азаяды"
    ]
  },
  {
  numb: 11,
    question: "Атқарылған жұмыс теріс болған кездегі күш пен орын ауыстыру векторлары арасындағы бұрыштың мәні",
    answer: "α>90˚",
    options: [
      "α=90˚",
      "α>90˚",
      "α=0",
      "α<90˚"
    ]
  },
  {
  numb: 12,
  question: "Егер жібінің ұзындығын 9 есе ұзартса, онда математикалық маятниктің тербеліс периоды",
  answer: "3 есе артады",
  options: [
    "9 есе артады",
    "9 есе кемиді",
    "3 есе кемиді",
    "3 есе артады"
  ]
},
{
numb: 13,
question: "Егер контурдың индуктивтілігін 2 есе кемітіп, ал сыйымдылығын 8 есе арттырса, ондағы еркін тербелістің жиілігі",
answer: "2 есе кемиді",
options: [
  "16 есе артады",
  "4 есе кемиді",
  "2 есе кемиді",
  "2 есе артады"
]
},
{
numb: 14,
question: "Зарядталған шардың бетіндегі өріс кернеулігі 130 В/м. Егер шардың радиусы 6,37 м болса, шар бетінің потенциалы (k = 9∙109 Н∙кг2/Кл2)",
answer: "828В",
options: [
  "828В",
  "8.28В",
  "414В",
  "204В"
]
},
{
numb: 15,
question: "Линза арқылы экранда электр шамының нақты кескіні алынған. Линзаның жоғары бөлігін жапқанда",
answer: "кескін орнында қалады, бірақ жарықтылығы азаяды",
options: [
  "кескін төмен қарай жылжиды",
  "кескін орнында қалады, бірақ жарықтылығы азаяды",
  "кескін жоғары қарай жылжиды",
  "кескіннің жоғары бөлігі жоғалады"
]
}
  ];
