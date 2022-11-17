const poetryData = [
  {
    en: { nameAuthor: "J. W. Goethe", title: "New love - new life" },
    ru: {
      nameAuthor: "И. В. Гёте",
      title: "Новая любовь - новая жизнь",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/gyote-stix-o-lyubvi-novaya-lyubov-novaya-zizn.mp3",
  },
  {
    en: {
      nameAuthor: "J. W. Goethe",
      title: "Mountain castle",
    },
    ru: {
      nameAuthor: "И. В. Гёте",
      title: "Горный замок",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/gornyi-zamok.mp3",
  },
  {
    en: { nameAuthor: "J. W. Goethe", title: "Beautiful night" },
    ru: {
      nameAuthor: "И. В. Гёте",
      title: "Прекрасная ночь",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/prekrasnaya-noc.mp3",
  },
  {
    en: { nameAuthor: "J. W. Goethe", title: "Meeting and parting" },
    ru: {
      nameAuthor: "И. В. Гёте",
      title: "Свидание и разлука",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/svidanie-i-razluka.mp3",
  },
  {
    en: { nameAuthor: "G. R. Derzhavin", title: "Confession" },
    ru: {
      nameAuthor: "Г. Р. Державин",
      title: "Признание",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/priznanie.mp3",
  },
  {
    en: { nameAuthor: "G. R. Derzhavin", title: "River of time" },
    ru: {
      nameAuthor: "Г. Р. Державин",
      title: "Река времен",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/reka-vremen.mp3",
  },
  {
    en: { nameAuthor: "M. V. Lomonosov", title: "Evening reflection on God" },
    ru: {
      nameAuthor: "М. В. Ломоносов",
      title: "Вечернее размышление о Боге",
    },
    categoryPoetry: "classicism",
    srcAudio: "./static/audio/audio-poetry/classicism/vecernee-razmyslenie.mp3",
  },
  {
    en: {
      nameAuthor: "M. V. Lomonosov",
      title: "Ode to Elizabeth's Accession to the Throne",
    },
    ru: {
      nameAuthor: "М. В. Ломоносов",
      title: "Ода на день восшествия на престол Елизаветы",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/oda-na-den-vossestviya-na-vserossiiskii-prestol-eyo.mp3",
  },

  {
    en: { nameAuthor: "John Donn", title: "The Flea" },
    ru: {
      nameAuthor: "Джон Донн",
      title: "Блоха",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/bloxa-stixotvorenie-dzona-donna-v-perevode-iosifa-brodskogo_lwz5Af9S.mp3",
  },
  {
    en: { nameAuthor: "John Donn", title: "The image of the beloved" },
    ru: {
      nameAuthor: "Джон Донн",
      title: "Образ любимой",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/donn-krasivyi-stix-o-lyubvi-obraz-lyubimoi (mp3cut.net).mp3",
  },
  {
    en: { nameAuthor: "John Donn", title: "Portrait" },
    ru: {
      nameAuthor: "Джон Донн",
      title: "Портрет",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/donn-stixotvorenie-o-lyubvi-portret (mp3cut.net).mp3",
  },
  {
    en: { nameAuthor: "Pierre-Jean de Beranger", title: "The Attic" },
    ru: {
      nameAuthor: "Пьер-Жан де Беранжe",
      title: "Чердак",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/beranze-krasivoe-stixotvorenie-cerdak (mp3cut.net).mp3",
  },
  {
    en: { nameAuthor: "Pierre-Jean de Beranger", title: "Puppets" },
    ru: {
      nameAuthor: "Пьер-Жан де Беранжe",
      title: "Марионетки",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/beranze-stixotvorenie-marionetki (mp3cut.net).mp3",
  },
  {
    en: {
      nameAuthor: "Pierre-Jean de Beranger",
      title: "Puzan in the election of 1819",
    },
    ru: {
      nameAuthor: "Пьер-Жан де Беранжe",
      title: "Пузан на выборах 1819 года",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/beranze-satiriceskoe-stix-e-o-vyborax (mp3cut.net).mp3",
  },
  {
    en: {
      nameAuthor: "Pierre-Jean de Beranger",
      title: "A drunkard and his wife",
    },
    ru: {
      nameAuthor: "Пьер-Жан де Беранжe",
      title: "Пьяница и его жена",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/per-zan-beranze-pyanica-i-ego-zena (mp3cut.net).mp3",
  },
  {
    en: {
      nameAuthor: "Pierre-Jean de Beranger",
      title: "I don't know you anymore",
    },
    ru: {
      nameAuthor: "Пьер-Жан де Беранжe",
      title: "Я с вами больше не знаком",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/per-zan-beranze-ya-s-vami-bolse-ne-znakom (mp3cut.net).mp3",
  },
  {
    en: {
      nameAuthor: "Pierre de Ronsard",
      title: "I am dry to the bone. To the threshold of darkness and cold",
    },
    ru: {
      nameAuthor: "Пьер де Ронсар",
      title: "Я высох до костей. К порогу тьмы и хлада",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/de-ronsar-grustnoe-stixotvorenie-o-smerti_RFk63IpF.mp3",
  },
  {
    en: {
      nameAuthor: "Pierre de Ronsard",
      title: "When amidst the noise of existence",
    },
    ru: {
      nameAuthor: "Пьер де Ронсар",
      title: "Когда средь шума бытия",
    },
    categoryPoetry: "classicism",
    srcAudio:
      "./static/audio/audio-poetry/classicism/per-de-ronsar-kogda-sred-suma-bytiya.mp3",
  },
  {
    en: {
      nameAuthor: "A.S. Pushkin",
      title: "Autumn",
    },
    ru: {
      nameAuthor: "А.С. Пушкин",
      title: "Осень",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/aleksandr-puskin-osen.mp3",
  },
  {
    en: {
      nameAuthor: "A.S. Pushkin",
      title: "Prisoner",
    },
    ru: {
      nameAuthor: "А.С. Пушкин",
      title: "Узник",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/aspuskin-uznik_[cut_45sec].mp3",
  },
  {
    en: {
      nameAuthor: "A.S. Pushkin",
      title: "Winter. What should we do in the countryside",
    },
    ru: {
      nameAuthor: "А.С. Пушкин",
      title: "Зима. Что делать нам в деревне",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/zima-cto-delat-nam-v-derevne-as-puskin.mp3",
  },
  {
    en: {
      nameAuthor: "A.S. Pushkin",
      title: "A gift in vain, a gift of chance",
    },
    ru: {
      nameAuthor: "А.С. Пушкин",
      title: "Дар напрасный, дар случайный",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/puskin-as-dar-naprasnyi-dar-slucainyi.mp3",
  },
  {
    en: {
      nameAuthor: "M.Y. Lermontov",
      title: "Loneliness",
    },
    ru: {
      nameAuthor: "М.Ю. Лермонтов",
      title: "Одиночество",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/mixail-lermontov-odinocestvo-citaet-pavel-morozov-uci-stixi-legko.mp3",
  },
  {
    en: {
      nameAuthor: "M.Y. Lermontov",
      title: "Clouds",
    },
    ru: {
      nameAuthor: "М.Ю. Лермонтов",
      title: "Тучи",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/mixail-yurevic-lermontov-tuci-ucit-stixi-legko-audio-stixi-slusat-onlain.mp3",
  },
  {
    en: {
      nameAuthor: "M.Y. Lermontov",
      title: "I go out on the road alone",
    },
    ru: {
      nameAuthor: "М.Ю. Лермонтов",
      title: "Выхожу один я на дорогу",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/mixail-yurevic-lermontov-vyxozu-odin-ya-na-dorogu-ucit-stixi-legko-audio-stixi-slusat-onlain.mp3",
  },
  {
    en: {
      nameAuthor: "M.Y. Lermontov",
      title: "Leaf",
    },
    ru: {
      nameAuthor: "М.Ю. Лермонтов",
      title: "Листок",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/mixail-yurevic-lermontov-listok-ucit-stixi-legko-audio-stixi-slusat-onlain.mp3",
  },
  {
    en: {
      nameAuthor: "M.Y. Lermontov",
      title: "Desire",
    },
    ru: {
      nameAuthor: "М.Ю. Лермонтов",
      title: "Желание",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/mixail-yurevic-lermontov-zelanie-otvorite-mne-temnicu-ucit-stixi-legko-audio-stixi-slusat-onlain.mp3",
  },
  {
    en: {
      nameAuthor: "Giacomo Leopardi",
      title: "The first love",
    },
    ru: {
      nameAuthor: "Джакомо Леопарди",
      title: "Первая любовь",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/dzakomo-leopardi-stix-e-pervaya-lyubov_[cut_350sec].mp3",
  },
  {
    en: {
      nameAuthor: "Giacomo Leopardi",
      title: "To my Donna",
    },
    ru: {
      nameAuthor: "Джакомо Леопарди",
      title: "К моей донне",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/dzakomo-leopardi-stix-e-k-moei-donne-11.4-187.3.mp3",
  },
  {
    en: {
      nameAuthor: "V.A. Zhukovsky",
      title: "Sea",
    },
    ru: {
      nameAuthor: "В.А. Жуковский",
      title: "Море",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/vasilii-andreevic-zukovskii-more-ucit-stixi-legko-audio-stixi-slusat-onlain.mp3",
  },
  {
    en: {
      nameAuthor: "V.A. Zhukovsky",
      title: "Unbearable",
    },
    ru: {
      nameAuthor: "В.А. Жуковский",
      title: "Невыразимое",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/vasilii-andreevic-zukovskii-nevyrazimoe-otryvok-ucit-stixi-legko-audio-stixi-slusat-onlain.mp3",
  },
  {
    en: {
      nameAuthor: "William Wordsworth",
      title: "Daffodils",
    },
    ru: {
      nameAuthor: "Уильям Вордсворт",
      title: "Нарциссы",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/uilyam-vordsvort-krasivyi-stix-narcissy-16.8-111.3.mp3",
  },
  {
    en: {
      nameAuthor: "William Wordsworth",
      title: "It's the other way around",
    },
    ru: {
      nameAuthor: "Уильям Вордсворт",
      title: "Все наоборот",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/uilyam-vordsvort-stix-vsyo-naoborot-13.6-123.2.mp3",
  },
  {
    en: {
      nameAuthor: "William Wordsworth",
      title: "You are still silent",
    },
    ru: {
      nameAuthor: "Уильям Вордсворт",
      title: "Ты все молчишь",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/vordsvort-sonet-ob-otvergnutoi-lyubvi-18.7-77.9.mp3",
  },
  {
    en: {
      nameAuthor: "Edgar Allan Poe",
      title: "Anabel Lee",
    },
    ru: {
      nameAuthor: "Эдгар Аллан По",
      title: "Анабель Ли",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/edgar-po-annabel-li-18.7-156.mp3",
  },
  {
    en: {
      nameAuthor: "Edgar Allan Poe",
      title: "Sleep",
    },
    ru: {
      nameAuthor: "Эдгар Аллан По",
      title: "Сон",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/edgar-allan-po-son-vo-sne-hd-56.2-139.9.mp3",
  },
  {
    en: {
      nameAuthor: "Edgar Allan Poe",
      title: "Eldorado",
    },
    ru: {
      nameAuthor: "Эдгар Аллан По",
      title: "Эльдорадо",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/edgar-po-misticeskoe-stix-e-eldorado-18.3-99.8.mp3",
  },
  {
    en: {
      nameAuthor: "Edgar Allan Poe",
      title: "Spirits of the Dead",
    },
    ru: {
      nameAuthor: "Эдгар Аллан По",
      title: "Духи мертвых",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/edgar-po-grustnyi-stix-duxi-myortvyx-21.7-137.7.mp3",
  },
  {
    en: {
      nameAuthor: "Emily Elizabeth Dickinson",
      title: "First we ask for joy ",
    },
    ru: {
      nameAuthor: "Э́мили Эли́забет Ди́кинсон",
      title: "Сперва мы просим радости",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/sperva-my-prosim-radosti-emili-dikinson-zarubeznaya-poeziya-citaet-pavel-besedin.mp3",
  },
  {
    en: {
      nameAuthor: "Emily Elizabeth Dickinson",
      title: "Руку is a letter to the world from me",
    },
    ru: {
      nameAuthor: "Э́мили Эли́забет Ди́кинсон",
      title: "Здесь письмо к миру от меня",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/zdes-pisma-k-miru-ot-menya-emili-dikinson-zarubeznaya-poeziya-citaet-pavel-besedin.mp3",
  },
  {
    en: {
      nameAuthor: "Emily Elizabeth Dickinson",
      title: "I've come for a smile",
    },
    ru: {
      nameAuthor: "Э́мили Эли́забет Ди́кинсон",
      title: "Я за улыбкою пришла",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/e-ponasenkov-citaet-stixotvorenie-emili-dikinson-26.4-70.8.mp3",
  },
  {
    en: {
      nameAuthor: "William Blake",
      title: "Cupid",
    },
    ru: {
      nameAuthor: "Уильям Блейк",
      title: "Купидон",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/uilyam-bleik-stixotvorenie-kupidon-12.2-76.1.mp3",
  },
  {
    en: {
      nameAuthor: "William Blake",
      title: "Mary",
    },
    ru: {
      nameAuthor: "Уильям Блейк",
      title: "Мэри",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/uilyam-bleik-pecalnyi-stix-meri-17.8-248.6.mp3",
  },
  {
    en: {
      nameAuthor: "William Blake",
      title: "Under the dead tree",
    },
    ru: {
      nameAuthor: "Уильям Блейк",
      title: "Под мертвым древом",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/uilyam-bleik-pod-mirtovym-drevom-16.3-73.9.mp3",
  },
  {
    en: {
      nameAuthor: "Robert Burns",
      title: "Breakup",
    },
    ru: {
      nameAuthor: "Роберт Бёрнс",
      title: "Расставание",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/robert-byorns-stix-e-o-lyubvi-rasstavanie-7.4-56.9.mp3",
  },
  {
    en: {
      nameAuthor: "Robert Burns",
      title: "Honest Poverty",
    },
    ru: {
      nameAuthor: "Роберт Бёрнс",
      title: "Честная бедность",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/robert-byorns-stix-e-cestnaya-bednost-12-89.8.mp3",
  },
  {
    en: {
      nameAuthor: "Robert Burns",
      title: "Old friendship",
    },
    ru: {
      nameAuthor: "Роберт Бёрнс",
      title: "Старая дружба",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/robert-byorns-stix-staraya-druzba-19.3-118.1.mp3",
  },
  {
    en: {
      nameAuthor: "Victor Hugo",
      title: "Fairy",
    },
    ru: {
      nameAuthor: "Виктор Гюго",
      title: "Фея",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/gyugo-misticeskoe-krasivoe-stix-e-feya (1)-18.5-171.mp3",
  },
  {
    en: {
      nameAuthor: "Victor Hugo",
      title: "Your will",
    },
    ru: {
      nameAuthor: "Виктор Гюго",
      title: "Твоею волею",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/gyugo-tvoeyu-voleyu-to-molod-ya-to-star-20.2-232.5.mp3",
  },
  {
    en: {
      nameAuthor: "Victor Hugo",
      title: "Wishes",
    },
    ru: {
      nameAuthor: "Виктор Гюго",
      title: "Желания",
    },
    categoryPoetry: "romanticism",
    srcAudio:
      "./static/audio/audio-poetry/romanticism/gyugo-neznoe-stixotvorenie-zelaniya-13.4-80.7.mp3",
  },

  {
    en: {
      nameAuthor: "Charles Baudelaire",
      title: "Twilight",
    },
    ru: {
      nameAuthor: "Шарль Бодлер",
      title: "Сумерки",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/bodler-krasivoe-stixotvorenie-sumerki-15.5-104.5.mp3",
  },
  {
    en: {
      nameAuthor: "Charles Baudelaire",
      title: "Albatross",
    },
    ru: {
      nameAuthor: "Шарль Бодлер",
      title: "Альбатрос",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/sarl-bodler-albatros-22.1-102.4.mp3",
  },
  {
    en: {
      nameAuthor: "Charles Baudelaire",
      title: "Destruction",
    },
    ru: {
      nameAuthor: "Шарль Бодлер",
      title: "Разрушение",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/bodler-stixotvorenie-razrusenie-15.6-96.3.mp3",
  },
  {
    en: {
      nameAuthor: "Guillaume Apollinaire",
      title: "May",
    },
    ru: {
      nameAuthor: "Гийом Аполлинер",
      title: "Май",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/giiom-apolliner-krasivoe-stixotvorenie-17.5-118.8.mp3",
  },
  {
    en: {
      nameAuthor: "Guillaume Apollinaire",
      title: "My youth",
    },
    ru: {
      nameAuthor: "Гийом Аполлинер",
      title: "Моя молодость",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/giiom-apolliner-moya-molodost-ty-zanosena-14.8-93.6.mp3",
  },
  {
    en: {
      nameAuthor: "Guillaume Apollinaire",
      title: "Mirabeau Bridge",
    },
    ru: {
      nameAuthor: "Гийом Аполлинер",
      title: "Мост Мирабо",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/giiom-apolliner-most-mirabo-21.9-122.5.mp3",
  },
  {
    en: {
      nameAuthor: "Rubén Darío",
      title: "Nocturne",
    },
    ru: {
      nameAuthor: "Рубен Дарио",
      title: "Ноктюрн",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/ruben-dario-stixotvorenie-dlya-dusi-16-107.9.mp3",
  },
  {
    en: {
      nameAuthor: "Rubén Darío",
      title: "Sink",
    },
    ru: {
      nameAuthor: "Рубен Дарио",
      title: "Раковина",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/dario-mificeskoe-stixotvorenie-rakovina-14-86.4.mp3",
  },
  {
    en: {
      nameAuthor: "W. B. Yeats",
      title: "Two wood",
    },
    ru: {
      nameAuthor: "Уильям Йейтс",
      title: "Два дерева",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/ieits-krasivoe-misticeskoe-stix-e-10.5-85.4.mp3",
  },
  {
    en: {
      nameAuthor: "W. B. Yeats",
      title: "Heart be stingy",
    },
    ru: {
      nameAuthor: "Уильям Йейтс",
      title: "Сердце будь скупым",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/ieits-stixotvorenie-o-nescastnoi-lyubvi-13.3-59.mp3",
  },
  {
    en: {
      nameAuthor: "W. B. Yeats",
      title: "The song of Engus",
    },
    ru: {
      nameAuthor: "Уильям Йейтс",
      title: "Песнь Энгуса",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/ieits-krasivoe-mificeskoe-stixotvorenie-[AudioTrimmer.com].mp3",
  },
  {
    en: {
      nameAuthor: "Enrique González Martínez",
      title: "Be able to go over life",
    },
    ru: {
      nameAuthor: "Энрике Мартинес",
      title: "Сумей пройти над жизнью",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/martines-krasivoe-stixotvorenie-o-zizni-17-123.1.mp3",
  },
  {
    en: {
      nameAuthor: "Enrique González Martínez",
      title: "Death from love",
    },
    ru: {
      nameAuthor: "Энрике Мартинес",
      title: "Смерть от любви",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/martines-krasivoe-stixotvorenie-o-lyubvi-15.6-72.6.mp3",
  },
  {
    en: {
      nameAuthor: "Ivan Franko",
      title: "Why do you appear to me?",
    },
    ru: {
      nameAuthor: "Иван Франко",
      title: "Чого являєшся мені  у сні",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/ivan-franko-cogo-yavlyajessya-meni-u-sni-audio-virs-13-117.8.mp3",
  },
  {
    en: {
      nameAuthor: "Ivan Franko",
      title: "If you knew",
    },
    ru: {
      nameAuthor: "Иван Франко",
      title: "Якби ти знав",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/ivan-franko-yakbi-ti-znav-yak-mnogo-vazit-slovo-12.1-145.5.mp3",
  },
  {
    en: {
      nameAuthor: "Ivan Franko",
      title: "Stonemasons",
    },
    ru: {
      nameAuthor: "Иван Франко",
      title: "Каменярі",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/ivan-franko-kamenyari-citaje-oleksandr-yarmak-sluxai-[AudioTrimmer.com].mp3",
  },

  {
    en: {
      nameAuthor: "Marina Tsvetaeva",
      title: "In a huge city",
    },
    ru: {
      nameAuthor: "Марина Цветаева",
      title: "В огромном городе",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/v-ogromnom-gorode-moem-noc-anna-egoyan-avtor-marina-cvetaeva.mp3",
  },
  {
    en: {
      nameAuthor: "Marina Tsvetaeva",
      title: "How many have fallen",
    },
    ru: {
      nameAuthor: "Марина Цветаева",
      title: "Уж сколько их упало",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/marina-cvetaeva-uz-skolko-ix-upalo-v-etu-bezdnu.mp3",
  },
  {
    en: {
      nameAuthor: "Marina Tsvetaeva",
      title: "Here is the window again.",
    },
    ru: {
      nameAuthor: "Марина Цветаева",
      title: "Вот опять окно",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/marina-cvetaeva-vot-opyat-okno (1).mp3",
  },
  {
    en: {
      nameAuthor: "Marina Tsvetaeva",
      title: "Homesickness",
    },
    ru: {
      nameAuthor: "Марина Цветаева",
      title: "Тоска по родине",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/marina-cvetaeva-toska-po-rodine-davno.mp3",
  },
  {
    en: {
      nameAuthor: "Anna Akhmatova",
      title: "Late answer",
    },
    ru: {
      nameAuthor: "Анна Ахматова",
      title: "Поздний ответ",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/ty-osibsya-lyubov-eto-ad-anna-axmatova-lyubimye-stixi.mp3",
  },
  {
    en: {
      nameAuthor: "Anna Akhmatova",
      title: "Покорно мне воображенье",
    },
    ru: {
      nameAuthor: "Анна Ахматова",
      title: "Покорно мне воображенье",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/pokorno-mne-voobrazene-anna-axmatova-alisa-freindlix.mp3",
  },
  {
    en: {
      nameAuthor: "Anna Akhmatova",
      title: "I had a voice",
    },
    ru: {
      nameAuthor: "Анна Ахматова",
      title: "Мне голос был",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/anna-axmatova-kogda-v-toske-samoubiistva-fragment.mp3",
  },
  {
    en: {
      nameAuthor: "Anna Akhmatova",
      title: "Sentence",
    },
    ru: {
      nameAuthor: "Анна Ахматова",
      title: "Приговор",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/anna-axmatova-prigovor.mp3",
  },
  {
    en: {
      nameAuthor: "Anna Akhmatova",
      title: "Requiem",
    },
    ru: {
      nameAuthor: "Анна Ахматова",
      title: "Реквием",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/aaxmatovarekviemcitaet-lyudmila-duxovnaya-[AudioTrimmer.com].mp3",
  },
  {
    en: {
      nameAuthor: "Alexander Blok",
      title: "When you're hunkered down and hammered",
    },
    ru: {
      nameAuthor: "А. Блок",
      title: "Когда ты загнан и забит",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/aleksandr-blokkogda-ty-zagnan-i-zabitpoema-vozmezdie.mp3",
  },
  {
    en: {
      nameAuthor: "Alexander Blok",
      title: "In the restaurant",
    },
    ru: {
      nameAuthor: "А. Блок",
      title: "В ресторане",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/aleksandr-blok-v-restorane-[AudioTrimmer.com].mp3",
  },
  {
    en: {
      nameAuthor: "Alexander Blok",
      title: "Night. Street. Lantern. Pharmacy",
    },
    ru: {
      nameAuthor: "А. Блок",
      title: "Ночь. Улица. Фонарь. Аптека",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/aleksandr-blok-noc-ulica-fonar-apteka.mp3",
  },
  {
    en: {
      nameAuthor: "Alexander Blok",
      title: "Bless all that was",
    },
    ru: {
      nameAuthor: "А. Блок",
      title: "Благославляю все что было",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/aleksandr-blok-blagoslovlyayu-vsyo-cto-bylo-[AudioTrimmer.com].mp3",
  },
  {
    en: {
      nameAuthor: "Alexander Blok",
      title: "Oh, I want to live madly",
    },
    ru: {
      nameAuthor: "А. Блок",
      title: "О, я хочу безумно жить",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/aleksandr-blok-o-ya-xocu-bezumno-zit-[AudioTrimmer.com].mp3",
  },
  {
    en: {
      nameAuthor: "Vladimir Mayakovsky",
      title: "Cloud in your pants",
    },
    ru: {
      nameAuthor: "В. Маяковский",
      title: "Облако в штанах",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/vladimir-mayakovskii-oblako-v-stanax-otryvok (1)-[AudioTrimmer.com].mp3",
  },
  {
    en: {
      nameAuthor: "Vladimir Mayakovsky",
      title: "At one hundred and forty suns the sunset was blazing",
    },
    ru: {
      nameAuthor: "В. Маяковский",
      title: "В сто сорок солнц закат пылал",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/vladimir-mayakovskii-neobycainoe-priklyucenie-byvsee-s-vladimirom-mayakovskim-letom-na-dace-[AudioTrimmer.com].mp3",
  },
  {
    en: {
      nameAuthor: "Vladimir Mayakovsky",
      title: "Listen",
    },
    ru: {
      nameAuthor: "В. Маяковский",
      title: "Послушайте",
    },
    categoryPoetry: "modernism",
    srcAudio:
      "./static/audio/audio-poetry/modernism/vladimir-mayakovskii-poslusaite.mp3",
  },
];

export default poetryData;
