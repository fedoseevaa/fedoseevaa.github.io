// All visible text on the site, in 4 languages.
// To edit content: change the strings here — markup in index.html does not need to change.
window.TRANSLATIONS = {
  en: {
    nav: { logo: "Aleksandra F.", about: "About", experience: "Experience", education: "Education", projects: "Projects", skills: "Skills", certificates: "Certificates", goals: "Goals", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      tagline: "Data analyst. I work with SQL, Tableau, and Excel.",
      cta_about: "Learn more",
      cta_contact: "Get in touch",
      scroll: "scroll"
    },
    about: {
      title: "About me",
      body1: "I'm a data analyst with over 3 years of experience in telecom and market research. I've prepared reports and forecasts and analyzed business performance.",
      body2: "In October 2026, I finished my Master's degree in Applied Economics and Markets at the University of Bologna. I also take extra courses, most recently in SQL, A/B testing, and Power BI.",
      body3: "I pick up new tools quickly and enjoy working in a team.",
      body4: "If you'd like to know more, just write to me.",
      facts: {
        based: "Based in", based_value: "Bologna, Italy",
        citizenship: "Citizenship", citizenship_value: "Kyrgyzstan",
        languages: "Languages", languages_value: "RU · EN · TR · IT · FR",
        email: "Email",
        status: "Status", status_value: "Open to work"
      }
    },
    experience: {
      title: "Experience",
      items: [
        { date: "2025", role: "Intern, Department of Statistics and Machine Analysis", company: "NUR Telecom LLC — Bishkek, Kyrgyzstan", desc: "Worked with large volumes of telecom data: optimized data pipelines and improved data quality in the department. Built a control report on company services in Tableau and contributed to the plan for moving corporate reporting to a BI platform." },
        { date: "2022 — 2024", role: "Data Analyst → Lead Data Analyst", company: "NUR Telecom LLC — Bishkek, Kyrgyzstan", desc: "Went from Data Analyst to Lead Data Analyst in two years. Responsible for reporting pipelines, data accuracy, and business performance analysis. Prepared regular forecasts and KPI reports for management and explained the main deviations." },
        { date: "2021 — 2022", role: "Market Research Analyst", company: "M-Vector LLC — Bishkek, Kyrgyzstan", desc: "Ran research projects from start to finish: wrote and tested questionnaires, prepared final reports, and gave clients recommendations. Also handled client communication and project timelines, and worked with databases and visualizations." }
      ]
    },
    education: {
      title: "Education",
      items: [
        { date: "2024 — 2026", degree: "Master's degree — Applied Economics and Markets", school: "University of Bologna, Italy", desc: "Econometrics, machine learning, and statistical analysis, using STATA, R, Python, and EViews." },
        { date: "2018 — 2022", degree: "Bachelor's degree — Mathematical Methods and Operations Research in Economics", school: "Kyrgyz-Russian Slavic University, Kyrgyzstan", desc: "Economics with a focus on applied mathematics and data analysis. Used Excel, Access, SPSS, EViews, and MATLAB for statistical modeling and econometric analysis." }
      ]
    },
    projects: {
      title: "Projects",
      cta: "View on GitHub →",
      items: [
        { title: "Baseball Data Analysis with SQL", desc: "Analysis of baseball players, schools, and team salaries in MySQL. Final project of a Maven Analytics course." }
      ]
    },
    skills: {
      title: "Skills",
      tech: "Core tools (daily use)",
      other: "Experienced with",
      languages: "Languages",
      softTitle: "Soft skills",
      lang: { ru: "Russian — Native", en: "English — C1", tr: "Turkish — B1", it: "Italian — B1", fr: "French — A2" },
      soft: {
        research: "Research & analytical skills",
        analytical: "Analytical thinking",
        communication: "Business communication",
        organization: "Organization & planning",
        time: "Time management",
        problem: "Problem solving",
        responsibility: "Responsibility",
        teamwork: "Teamwork"
      }
    },
    certificates: {
      title: "Certificates",
      folders: { programming: "Programming & analytics", visualization: "Visualization", languages: "Language certificates", other: "Other" },
      programming: [
        { title: "SQL for Data Analysis: Advanced SQL Querying Techniques", meta: "8.5 hours · November 2026" },
        { title: "A/B Testing in Python", meta: "3 hours · September 2026", issuer: "Udemy · 365 Careers" },
        { title: "Python for Data Analysis & Business Intelligence", meta: "11.5 hours · 2026" },
        { title: "Microsoft Excel — Power Query", meta: "27 academic hours · February 2024", issuer: "Institute of Professional Accountants & Auditors of Kyrgyzstan" },
        { title: "Oracle SQL", meta: "36 hours · 100% score · November 2023" }
      ],
      visualization: [
        { title: "Microsoft Power BI Desktop for Business Intelligence", meta: "17 hours · July 2026" },
        { title: "Data Visualization & Advanced Tableau", meta: "3 modules · 100% completion · August 2025" },
        { title: "Data Visualization and the Basics of Working in Tableau", meta: "March 2024", badge: "With distinction" }
      ],
      languages: [
        { title: "French Language — CEFR A2", meta: "September 2025 – June 2026", issuer: "Alliance Française de Bichkek" },
        { title: "Italian Language — CEFR B1.3", meta: "50 hours · 2025–2026 · Written + oral exam", issuer: "University of Bologna — Centro Linguistico di Ateneo" },
        { title: "Italian Language — CEFR B1.1", meta: "50 hours · 2025–2026 · Written + oral exam", issuer: "University of Bologna — Centro Linguistico di Ateneo" },
        { title: "IELTS Academic — Overall 7.0 (CEFR C1)", meta: "Listening 8.0 · Reading 7.5 · Speaking 6.5 · Writing 6.0 · February 2024" },
        { title: "Italian Language — CEFR A2.1", meta: "50 hours · 2024–2025 · Written + oral exam", issuer: "University of Bologna — Centro Linguistico di Ateneo" }
      ],
      other: [
        { title: "Poverty and Welfare Analysis", meta: "36 hours · June 2020 · Bishkek", issuer: "World Bank Group · UK Aid" }
      ]
    },
    goals: {
      title: "What I'm looking for",
      body: "I'm looking for a data analyst or BI analyst role in an international team, with people I can learn from.",
      pills: ["Data analytics", "Business Intelligence", "International team", "Learning new things"]
    },
    resumes: {
      title: "Download my CV",
      en: "CV — English", ru: "CV — Russian", it: "CV — Italian", fr: "CV — French"
    },
    contact: {
      title: "Contact",
      body: "You can reach me through any of these."
    },
    game: {
      title: "Take a break",
      body: "I made a small quiz on world capitals: pick the right one out of four.",
      cta: "Capitals quiz game"
    }
  },

  ru: {
    nav: { logo: "Александра Ф.", about: "Обо мне", experience: "Опыт", education: "Образование", projects: "Проекты", skills: "Навыки", certificates: "Сертификаты", goals: "Цели", contact: "Контакты" },
    hero: {
      greeting: "Привет, я",
      tagline: "Аналитик данных. Работаю с SQL, Tableau и Excel.",
      cta_about: "Узнать больше",
      cta_contact: "Связаться",
      scroll: "листай"
    },
    about: {
      title: "Обо мне",
      body1: "Я аналитик данных, у меня больше 3 лет опыта в телекоме и маркетинговых исследованиях. Готовила отчёты и прогнозы, анализировала показатели бизнеса.",
      body2: "В октябре 2026 окончила магистратуру Болонского университета по программе «Прикладная экономика и рынки». Ещё прохожу дополнительные курсы, из последних: SQL, A/B-тестирование и Power BI.",
      body3: "Быстро осваиваю новые инструменты, и мне нравится работать в команде.",
      body4: "Если хотите узнать больше, напишите мне.",
      facts: {
        based: "Местоположение", based_value: "Болонья, Италия",
        citizenship: "Гражданство", citizenship_value: "Кыргызстан",
        languages: "Языки", languages_value: "RU · EN · TR · IT · FR",
        email: "Эл. почта",
        status: "Статус", status_value: "Открыта к предложениям"
      }
    },
    experience: {
      title: "Опыт",
      items: [
        { date: "2025", role: "Стажёр отдела статистики и машинного анализа", company: "NUR Telecom LLC — Бишкек, Кыргызстан", desc: "Работала с большими объёмами телеком-данных: оптимизировала пайплайны и улучшала качество данных в отделе. Сделала в Tableau контрольный отчёт по услугам компании и участвовала в подготовке плана перехода корпоративной отчётности на BI-платформу." },
        { date: "2022 — 2024", role: "Аналитик данных → Ведущий аналитик данных", company: "NUR Telecom LLC — Бишкек, Кыргызстан", desc: "За два года выросла от аналитика данных до ведущего аналитика. Отвечала за отчётные пайплайны, точность данных и анализ показателей бизнеса. Регулярно готовила для руководства прогнозы и отчёты по KPI, объясняла основные отклонения." },
        { date: "2021 — 2022", role: "Аналитик маркетинговых исследований", company: "M-Vector LLC — Бишкек, Кыргызстан", desc: "Вела исследования от начала до конца: составляла и тестировала анкеты, готовила итоговые отчёты и рекомендации для клиентов. Общалась с клиентами, планировала сроки проектов, работала с базами данных и визуализациями." }
      ]
    },
    education: {
      title: "Образование",
      items: [
        { date: "2024 — 2026", degree: "Магистратура — Прикладная экономика и рынки", school: "Болонский университет, Италия", desc: "Эконометрика, машинное обучение и статистический анализ в STATA, R, Python и EViews." },
        { date: "2018 — 2022", degree: "Бакалавриат — Математические методы и исследование операций в экономике", school: "Кыргызско-Российский Славянский Университет, Кыргызстан", desc: "Экономика с упором на прикладную математику и анализ данных. Использовала Excel, Access, SPSS, EViews и MATLAB для статистического моделирования и эконометрического анализа." }
      ]
    },
    projects: {
      title: "Проекты",
      cta: "Смотреть на GitHub →",
      items: [
        { title: "Анализ бейсбольных данных на SQL", desc: "Анализ данных об игроках в бейсбол, школах и зарплатах в командах на MySQL. Финальный проект курса Maven Analytics." }
      ]
    },
    skills: {
      title: "Навыки",
      tech: "Основные инструменты (ежедневно)",
      other: "Есть опыт работы",
      languages: "Языки",
      softTitle: "Гибкие навыки",
      lang: { ru: "Русский — родной", en: "Английский — C1", tr: "Турецкий — B1", it: "Итальянский — B1", fr: "Французский — A2" },
      soft: {
        research: "Исследовательские и аналитические навыки",
        analytical: "Аналитическое мышление",
        communication: "Бизнес-коммуникация",
        organization: "Организация и планирование",
        time: "Тайм-менеджмент",
        problem: "Решение проблем",
        responsibility: "Ответственность",
        teamwork: "Командная работа"
      }
    },
    certificates: {
      title: "Сертификаты",
      folders: { programming: "Программирование и аналитика", visualization: "Визуализация", languages: "Языковые сертификаты", other: "Прочее" },
      programming: [
        { title: "SQL для анализа данных: продвинутые техники запросов", meta: "8.5 часов · ноябрь 2026" },
        { title: "A/B-тестирование в Python", meta: "3 часа · сентябрь 2026", issuer: "Udemy · 365 Careers" },
        { title: "Python для анализа данных и Business Intelligence", meta: "11.5 часов · 2026" },
        { title: "Microsoft Excel — Power Query", meta: "27 академических часов · февраль 2024", issuer: "Институт профессиональных бухгалтеров и аудиторов Кыргызстана" },
        { title: "Oracle SQL", meta: "36 часов · 100% результат · ноябрь 2023" }
      ],
      visualization: [
        { title: "Microsoft Power BI Desktop для Business Intelligence", meta: "17 часов · июль 2026" },
        { title: "Визуализация данных и продвинутый Tableau", meta: "3 модуля · 100% прохождение · август 2025" },
        { title: "Визуализация данных и основы работы в Tableau", meta: "март 2024", badge: "С отличием" }
      ],
      languages: [
        { title: "Французский язык — CEFR A2", meta: "сентябрь 2025 – июнь 2026", issuer: "Alliance Française в Бишкеке" },
        { title: "Итальянский язык — CEFR B1.3", meta: "50 часов · 2025–2026 · письменный и устный экзамен", issuer: "Болонский университет — Centro Linguistico di Ateneo" },
        { title: "Итальянский язык — CEFR B1.1", meta: "50 часов · 2025–2026 · письменный и устный экзамен", issuer: "Болонский университет — Centro Linguistico di Ateneo" },
        { title: "IELTS Academic — Overall 7.0 (CEFR C1)", meta: "Listening 8.0 · Reading 7.5 · Speaking 6.5 · Writing 6.0 · февраль 2024" },
        { title: "Итальянский язык — CEFR A2.1", meta: "50 часов · 2024–2025 · письменный и устный экзамен", issuer: "Болонский университет — Centro Linguistico di Ateneo" }
      ],
      other: [
        { title: "Анализ бедности и благосостояния", meta: "36 часов · июнь 2020 · Бишкек", issuer: "Всемирный банк · UK Aid" }
      ]
    },
    goals: {
      title: "Что я ищу",
      body: "Ищу работу аналитиком данных или BI-аналитиком в международной команде, где есть у кого поучиться.",
      pills: ["Аналитика данных", "Business Intelligence", "Международная команда", "Узнавать новое"]
    },
    resumes: {
      title: "Скачать резюме",
      en: "Резюме — English", ru: "Резюме — Русский", it: "Резюме — Italiano", fr: "Резюме — Français"
    },
    contact: {
      title: "Контакты",
      body: "Со мной можно связаться любым из этих способов."
    },
    game: {
      title: "Сделайте паузу",
      body: "Я сделала небольшой квиз про столицы мира: нужно выбрать правильную из четырёх.",
      cta: "Игра: угадай столицу"
    }
  },

  it: {
    nav: { logo: "Aleksandra F.", about: "Chi sono", experience: "Esperienza", education: "Formazione", projects: "Progetti", skills: "Competenze", certificates: "Certificati", goals: "Obiettivi", contact: "Contatti" },
    hero: {
      greeting: "Ciao, sono",
      tagline: "Data analyst. Lavoro con SQL, Tableau ed Excel.",
      cta_about: "Scopri di più",
      cta_contact: "Contattami",
      scroll: "scorri"
    },
    about: {
      title: "Chi sono",
      body1: "Sono una data analyst con più di 3 anni di esperienza nelle telecomunicazioni e nelle ricerche di mercato. Ho preparato report e previsioni e analizzato i risultati aziendali.",
      body2: "A ottobre 2026 ho concluso la laurea magistrale in Applied Economics and Markets all'Università di Bologna. Seguo anche corsi extra, gli ultimi su SQL, A/B testing e Power BI.",
      body3: "Imparo in fretta a usare nuovi strumenti e mi piace lavorare in squadra.",
      body4: "Se vuoi saperne di più, scrivimi.",
      facts: {
        based: "Vivo a", based_value: "Bologna, Italia",
        citizenship: "Cittadinanza", citizenship_value: "Kirghizistan",
        languages: "Lingue", languages_value: "RU · EN · TR · IT · FR",
        email: "Email",
        status: "Stato", status_value: "Aperta a nuove opportunità"
      }
    },
    experience: {
      title: "Esperienza",
      items: [
        { date: "2025", role: "Tirocinante, Dipartimento di Statistica e Analisi Automatica", company: "NUR Telecom LLC — Bishkek, Kirghizistan", desc: "Ho lavorato con grandi volumi di dati di telecomunicazione: ho ottimizzato le pipeline e migliorato la qualità dei dati nel dipartimento. Ho creato in Tableau un report di controllo sui servizi dell'azienda e ho contribuito al piano per trasferire il reporting aziendale su una piattaforma BI." },
        { date: "2022 — 2024", role: "Data Analyst → Lead Data Analyst", company: "NUR Telecom LLC — Bishkek, Kirghizistan", desc: "In due anni sono passata da Data Analyst a Lead Data Analyst. Mi occupavo delle pipeline di reporting, dell'accuratezza dei dati e dell'analisi dei risultati aziendali. Preparavo regolarmente previsioni e report sui KPI per la direzione e spiegavo gli scostamenti principali." },
        { date: "2021 — 2022", role: "Analista di ricerche di mercato", company: "M-Vector LLC — Bishkek, Kirghizistan", desc: "Ho seguito i progetti di ricerca dall'inizio alla fine: ho scritto e testato i questionari, preparato i report finali e dato raccomandazioni ai clienti. Mi occupavo anche della comunicazione con i clienti e delle tempistiche dei progetti, e lavoravo con database e visualizzazioni." }
      ]
    },
    education: {
      title: "Formazione",
      items: [
        { date: "2024 — 2026", degree: "Laurea Magistrale — Applied Economics and Markets", school: "Università di Bologna, Italia", desc: "Econometria, machine learning e analisi statistica, con STATA, R, Python ed EViews." },
        { date: "2018 — 2022", degree: "Laurea Triennale — Metodi Matematici e Ricerca Operativa in Economia", school: "Università Slava Kirghizo-Russa, Kirghizistan", desc: "Economia con un focus su matematica applicata e analisi dei dati. Ho usato Excel, Access, SPSS, EViews e MATLAB per la modellazione statistica e l'analisi econometrica." }
      ]
    },
    projects: {
      title: "Progetti",
      cta: "Vedi su GitHub →",
      items: [
        { title: "Analisi di dati sul baseball con SQL", desc: "Analisi di giocatori di baseball, scuole e stipendi delle squadre in MySQL. Progetto finale di un corso di Maven Analytics." }
      ]
    },
    skills: {
      title: "Competenze",
      tech: "Strumenti principali (uso quotidiano)",
      other: "Esperienza con",
      languages: "Lingue",
      softTitle: "Competenze trasversali",
      lang: { ru: "Russo — Madrelingua", en: "Inglese — C1", tr: "Turco — B1", it: "Italiano — B1", fr: "Francese — A2" },
      soft: {
        research: "Capacità di ricerca e analisi",
        analytical: "Pensiero analitico",
        communication: "Comunicazione aziendale",
        organization: "Organizzazione e pianificazione",
        time: "Gestione del tempo",
        problem: "Problem solving",
        responsibility: "Responsabilità",
        teamwork: "Lavoro di squadra"
      }
    },
    certificates: {
      title: "Certificati",
      folders: { programming: "Programmazione e analisi", visualization: "Visualizzazione", languages: "Certificati di lingua", other: "Altri" },
      programming: [
        { title: "SQL per l'analisi dei dati: tecniche avanzate di query", meta: "8,5 ore · novembre 2026" },
        { title: "A/B Testing in Python", meta: "3 ore · settembre 2026", issuer: "Udemy · 365 Careers" },
        { title: "Python per Data Analysis & Business Intelligence", meta: "11,5 ore · 2026" },
        { title: "Microsoft Excel — Power Query", meta: "27 ore accademiche · febbraio 2024", issuer: "Istituto dei Contabili e Revisori Professionisti del Kirghizistan" },
        { title: "Oracle SQL", meta: "36 ore · 100% di punteggio · novembre 2023" }
      ],
      visualization: [
        { title: "Microsoft Power BI Desktop per Business Intelligence", meta: "17 ore · luglio 2026" },
        { title: "Data Visualization & Advanced Tableau", meta: "3 moduli · 100% completamento · agosto 2025" },
        { title: "Data Visualization e basi di Tableau", meta: "marzo 2024", badge: "Con distinzione" }
      ],
      languages: [
        { title: "Lingua Francese — CEFR A2", meta: "settembre 2025 – giugno 2026", issuer: "Alliance Française di Bishkek" },
        { title: "Lingua Italiana — CEFR B1.3", meta: "50 ore · 2025–2026 · esame scritto e orale", issuer: "Università di Bologna — Centro Linguistico di Ateneo" },
        { title: "Lingua Italiana — CEFR B1.1", meta: "50 ore · 2025–2026 · esame scritto e orale", issuer: "Università di Bologna — Centro Linguistico di Ateneo" },
        { title: "IELTS Academic — Overall 7.0 (CEFR C1)", meta: "Listening 8.0 · Reading 7.5 · Speaking 6.5 · Writing 6.0 · febbraio 2024" },
        { title: "Lingua Italiana — CEFR A2.1", meta: "50 ore · 2024–2025 · esame scritto e orale", issuer: "Università di Bologna — Centro Linguistico di Ateneo" }
      ],
      other: [
        { title: "Poverty and Welfare Analysis", meta: "36 ore · giugno 2020 · Bishkek", issuer: "World Bank Group · UK Aid" }
      ]
    },
    goals: {
      title: "Cosa cerco",
      body: "Cerco un ruolo da data analyst o BI analyst in un team internazionale, con persone da cui posso imparare.",
      pills: ["Data analytics", "Business Intelligence", "Team internazionale", "Imparare cose nuove"]
    },
    resumes: {
      title: "Scarica il mio CV",
      en: "CV — English", ru: "CV — Русский", it: "CV — Italiano", fr: "CV — Français"
    },
    contact: {
      title: "Contatti",
      body: "Puoi scrivermi tramite uno di questi contatti."
    },
    game: {
      title: "Fai una pausa",
      body: "Ho creato un piccolo quiz sulle capitali del mondo: scegli quella giusta tra quattro opzioni.",
      cta: "Gioco: indovina la capitale"
    }
  },

  fr: {
    nav: { logo: "Aleksandra F.", about: "À propos", experience: "Expérience", education: "Formation", projects: "Projets", skills: "Compétences", certificates: "Certificats", goals: "Objectifs", contact: "Contact" },
    hero: {
      greeting: "Bonjour, je suis",
      tagline: "Data analyst. Je travaille avec SQL, Tableau et Excel.",
      cta_about: "En savoir plus",
      cta_contact: "Me contacter",
      scroll: "défiler"
    },
    about: {
      title: "À propos de moi",
      body1: "Je suis data analyst, avec plus de 3 ans d'expérience dans les télécoms et les études de marché. J'ai préparé des rapports et des prévisions et analysé les résultats de l'entreprise.",
      body2: "En octobre 2026, j'ai terminé mon Master Applied Economics and Markets à l'Université de Bologne. Je suis aussi des cours en plus, les derniers sur SQL, l'A/B testing et Power BI.",
      body3: "J'apprends vite à utiliser de nouveaux outils et j'aime travailler en équipe.",
      body4: "Si vous voulez en savoir plus, écrivez-moi.",
      facts: {
        based: "Basée à", based_value: "Bologne, Italie",
        citizenship: "Nationalité", citizenship_value: "Kirghizistan",
        languages: "Langues", languages_value: "RU · EN · TR · IT · FR",
        email: "Email",
        status: "Statut", status_value: "Ouverte aux opportunités"
      }
    },
    experience: {
      title: "Expérience",
      items: [
        { date: "2025", role: "Stagiaire, Département de Statistiques et d'Analyse Machine", company: "NUR Telecom LLC — Bichkek, Kirghizistan", desc: "J'ai travaillé sur de grands volumes de données télécom : j'ai optimisé les pipelines et amélioré la qualité des données du département. J'ai créé sous Tableau un rapport de contrôle sur les services de l'entreprise et j'ai contribué au plan de migration du reporting vers une plateforme BI." },
        { date: "2022 — 2024", role: "Data Analyst → Lead Data Analyst", company: "NUR Telecom LLC — Bichkek, Kirghizistan", desc: "En deux ans, je suis passée de Data Analyst à Lead Data Analyst. Je m'occupais des pipelines de reporting, de l'exactitude des données et de l'analyse des résultats de l'entreprise. Je préparais régulièrement des prévisions et des rapports KPI pour la direction et j'expliquais les principaux écarts." },
        { date: "2021 — 2022", role: "Analyste études de marché", company: "M-Vector LLC — Bichkek, Kirghizistan", desc: "J'ai suivi les projets d'étude du début à la fin : rédaction et test des questionnaires, rapports finaux et recommandations aux clients. Je m'occupais aussi de la communication avec les clients et du calendrier des projets, et je travaillais avec des bases de données et des visualisations." }
      ]
    },
    education: {
      title: "Formation",
      items: [
        { date: "2024 — 2026", degree: "Master — Applied Economics and Markets", school: "Université de Bologne, Italie", desc: "Économétrie, machine learning et analyse statistique, avec STATA, R, Python et EViews." },
        { date: "2018 — 2022", degree: "Licence — Méthodes Mathématiques et Recherche Opérationnelle en Économie", school: "Université Slave Kirghize-Russe, Kirghizistan", desc: "Économie, avec un accent sur les mathématiques appliquées et l'analyse de données. J'ai utilisé Excel, Access, SPSS, EViews et MATLAB pour la modélisation statistique et l'analyse économétrique." }
      ]
    },
    projects: {
      title: "Projets",
      cta: "Voir sur GitHub →",
      items: [
        { title: "Analyse de données de baseball avec SQL", desc: "Analyse des joueurs de baseball, des écoles et des salaires des équipes avec MySQL. Projet final d'un cours de Maven Analytics." }
      ]
    },
    skills: {
      title: "Compétences",
      tech: "Outils principaux (usage quotidien)",
      other: "Expérience avec",
      languages: "Langues",
      softTitle: "Compétences transversales",
      lang: { ru: "Russe — Langue maternelle", en: "Anglais — C1", tr: "Turc — B1", it: "Italien — B1", fr: "Français — A2" },
      soft: {
        research: "Compétences de recherche et d'analyse",
        analytical: "Esprit analytique",
        communication: "Communication professionnelle",
        organization: "Organisation et planification",
        time: "Gestion du temps",
        problem: "Résolution de problèmes",
        responsibility: "Responsabilité",
        teamwork: "Travail d'équipe"
      }
    },
    certificates: {
      title: "Certificats",
      folders: { programming: "Programmation et analytique", visualization: "Visualisation", languages: "Certificats de langue", other: "Autres" },
      programming: [
        { title: "SQL pour l'analyse de données : techniques avancées de requêtes", meta: "8,5 heures · novembre 2026" },
        { title: "A/B Testing en Python", meta: "3 heures · septembre 2026", issuer: "Udemy · 365 Careers" },
        { title: "Python pour l'analyse de données & Business Intelligence", meta: "11,5 heures · 2026" },
        { title: "Microsoft Excel — Power Query", meta: "27 heures académiques · février 2024", issuer: "Institut des comptables et auditeurs professionnels du Kirghizistan" },
        { title: "Oracle SQL", meta: "36 heures · 100% de score · novembre 2023" }
      ],
      visualization: [
        { title: "Microsoft Power BI Desktop pour Business Intelligence", meta: "17 heures · juillet 2026" },
        { title: "Data Visualization & Advanced Tableau", meta: "3 modules · 100% de réussite · août 2025" },
        { title: "Visualisation de données et bases de Tableau", meta: "mars 2024", badge: "Avec mention" }
      ],
      languages: [
        { title: "Langue française — CECR A2", meta: "septembre 2025 – juin 2026", issuer: "Alliance Française de Bichkek" },
        { title: "Langue italienne — CECR B1.3", meta: "50 heures · 2025–2026 · examen écrit et oral", issuer: "Université de Bologne — Centro Linguistico di Ateneo" },
        { title: "Langue italienne — CECR B1.1", meta: "50 heures · 2025–2026 · examen écrit et oral", issuer: "Université de Bologne — Centro Linguistico di Ateneo" },
        { title: "IELTS Academic — Overall 7.0 (CEFR C1)", meta: "Listening 8.0 · Reading 7.5 · Speaking 6.5 · Writing 6.0 · février 2024" },
        { title: "Langue italienne — CECR A2.1", meta: "50 heures · 2024–2025 · examen écrit et oral", issuer: "Université de Bologne — Centro Linguistico di Ateneo" }
      ],
      other: [
        { title: "Analyse de la pauvreté et du bien-être", meta: "36 heures · juin 2020 · Bichkek", issuer: "Groupe Banque mondiale · UK Aid" }
      ]
    },
    goals: {
      title: "Ce que je recherche",
      body: "Je cherche un poste de data analyst ou de BI analyst dans une équipe internationale, avec des personnes auprès de qui je peux apprendre.",
      pills: ["Data analytics", "Business Intelligence", "Équipe internationale", "Apprendre de nouvelles choses"]
    },
    resumes: {
      title: "Télécharger mon CV",
      en: "CV — English", ru: "CV — Русский", it: "CV — Italiano", fr: "CV — Français"
    },
    contact: {
      title: "Contact",
      body: "Vous pouvez me joindre par l'un de ces moyens."
    },
    game: {
      title: "Faites une pause",
      body: "J'ai créé un petit quiz sur les capitales du monde : choisissez la bonne parmi quatre.",
      cta: "Jeu : devine la capitale"
    }
  }
};
