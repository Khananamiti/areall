import images from "./constants/data";

const investigationList = [
  { // AO "Рынок земли" 2023
    id: 1,
    img: images.aoEarth20234,
    alt: "Аналитический отчет", // Подпись к рисунку
    type: "Анализ рынка", // Тип документа
    demo: images.daoEarth20234, // Демо
    text: 'Аналитический отчет "Рынок земли" города Омска. 4Q 2023', // Описание
    price: "4000 руб.", // Цена
    date: "01.10.2023", // Опубликован
    company: 'НП "Евразийский Союз Экспертов"', // Подготовлен
    category: "Земля", // Категория для фильтрации
  },
  { // AO "Офисная недвижимость" 2023
    id: 2, 
    img: images.aoOffice20234,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    demo: images.daoOffice20234,
    text: 'Аналитический отчет "Офисная недвижимость" города Омска. 4Q 2023',
    price: "4000 руб.",
    date: "01.10.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Офисы",
  },
  { // AO "Индивидуальная жилая застройка" 2023
    id: 3,
    img: images.aoIzhs20234,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    demo: images.daoIzhs20234,
    text: 'Аналитический отчет "Индивидуальная жилая застройка" города Омска. 4Q 2023',
    price: "4000 руб.",
    date: "01.10.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ИЖС",
  },
  { // AO "ПСН" 2023
    id: 4,
    img: images.aoPsn20234,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    demo: images.daoPsn20234,
    text: 'Аналитический отчет "Производственно-складская недвижимость" города Омска. 4Q 2023',
    price: "4000 руб.",
    date: "01.10.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ПСН",
  },
  { // AO "ТОН" 2023
    id: 5,
    img: images.aoTon20234,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    demo: images.daoTon20234,
    text: 'Аналитический отчет "Торговые помещения" города Омска. 4Q 2023',
    price: "4000 руб.",
    date: "01.10.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Торговые помещения",
  },
  { // СК "Квартиры" 2024
    id: 6,
    img: images.iApartment2024,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    demo: images.diApartment2024,
    text: 'Сборник корректировок "Квартиры" 2024',
    price: "5000 руб.",
    date: "01.01.2024",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Квартиры",
  },
  { // СК "Гаражи" 2024
    id: 7,
    img: images.iGarage2024,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    demo: images.diGarage2024,
    text: 'Сборник корректировок "Гаражи. Индивидуальные объекты хранения" 2024',
    price: "5000 руб.",
    date: "01.01.2024",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Гаражи",
  },
  { // СК "ИЖС" 2024
    id: 8,
    img: images.iIzhs20241,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    demo: images.diIzhs20241,
    text: 'Сборник корректировок "Индивидуальные жилые строения" 2024',
    price: "5000 руб.",
    date: "01.01.2024",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ИЖС",
  },
  { // СК "ПСН" 2024
    id: 9,
    img: images.iPsn20241,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    demo: images.diPsn20241,
    text: 'Сборник корректировок "Производственно-складская недвижимость" 2024',
    price: "5000 руб.",
    date: "01.01.2024",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ПСН",
  },
  { // СК "ТОН" 2024
    id: 10,
    img: images.iTon2024,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    demo: images.diTon2024,
    text: 'Сборник корректировок "Торгово-офисная недвижимость" 2024',
    price: "5000 руб.",
    date: "01.01.2024",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ТОН",
  },
  { // СК "Земля" 2024
    id: 11,
    img: images.iZu2024,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    demo: images.diZu2024,
    text: 'Сборник корректировок "Земельные участки" 2024',
    price: "5000 руб.",
    date: "01.01.2024",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Земля",
  },
  // БЕЗ демо-версии
  { // AO "Рынок земли" 2024
    id: 12,
    img: images.aoEarth20241,
    alt: "Аналитический отчет", // Подпись к рисунку
    type: "Анализ рынка", // Тип документа
    // demo: images.daoEarth20241,  Демо
    text: 'Аналитический отчет "Рынок земли" города Омска. 2024', // Описание
    price: "5000 руб.", // Цена
    date: "01.01.2024", // Опубликован
    company: 'НП "Евразийский Союз Экспертов"', // Подготовлен
    category: "Земля", // Категория для фильтрации
  },
  { // AO "Офисная недвижимость" 2024
    id: 13, 
    img: images.aoOffice20241,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    // demo: images.daoOffice20241,
    text: 'Аналитический отчет "Офисная недвижимость" города Омска. 2024',
    price: "5000 руб.",
    date: "01.01.2024",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Офисы",
  },
  { // AO "Индивидуальная жилая застройка" 2024
    id: 14,
    img: images.aoIzhs20241,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    // demo: images.daoIzhs20241,
    text: 'Аналитический отчет "Индивидуальная жилая застройка" города Омска. 2024',
    price: "5000 руб.",
    date: "01.01.2024",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ИЖС",
  },
  { // AO "ПСН" 2023
    id: 15,
    img: images.aoPsn20241,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    // demo: images.daoPsn20241,
    text: 'Аналитический отчет "Производственно-складская недвижимость" города Омска. 2024',
    price: "5000 руб.",
    date: "01.01.2024",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ПСН",
  },
  { /* 
  { // AO "ТОН" 2023
  id: 5,
  img: images.aoTon2024,
  alt: "Аналитический отчет",
  type: "Анализ рынка",
  demo: images.daoTon2024,
  text: 'Аналитический отчет "Торговые помещения" города Омска. 4Q 2023',
  price: "5000 руб.",
  date: "01.01.2024",
  company: 'НП "Евразийский Союз Экспертов"',
  category: "Торговые помещения",
  },
  */},
  { // СК "Квартиры" 2020
    id: 16,
    img: images.iApartment2020,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diApartment2020,
    text: 'Сборник корректировок "Квартиры" 2020',
    price: "3000 руб.",
    date: "01.01.2020",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Квартиры",
  },
  { // СК "Квартиры" 2023
    id: 17,
    img: images.iApartment2023,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diApartment2023,
    text: 'Сборник корректировок "Квартиры" 2023',
    price: "4000 руб.",
    date: "01.01.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Квартиры",
  },
  { // СК "Гаражи" 2020
    id: 18,
    img: images.iGarage2020,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diGarage2020,
    text: 'Сборник корректировок Сегмент "Гаражи. Индивидуальные объекты хранения" на 2020',
    price: "3000 руб.",
    date: "01.01.2020",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Гаражи",
  },
  { // СК "Гаражи" 2023
    id: 19,
    img: images.iGarage2023,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diGarage2023,
    text: 'Сборник корректировок "Гаражи. Индивидуальные объекты хранения" 2023',
    price: "4000 руб.",
    date: "01.01.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Гаражи",
  },
  { // СК "ИЖС" 2020
    id: 20,
    img: images.iIzhs2020,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diIzhs2020,
    text: 'Сборник корректировок "Индивидуальные жилые строения" 2020',
    price: "4000 руб.",
    date: "01.01.2020",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ИЖС",
  },
  { // СК "ПСН" 2020
    id: 21,
    img: images.iPsn2020,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diPsn2020,
    text: 'Сборник корректировок "Производственно-складская недвижимость" 2020',
    price: "4000 руб.",
    date: "01.01.2020",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ПСН",
  },
  { // СК "ПСН" 2023
    id: 22,
    img: images.iPsn2023,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diPsn2023,
    text: 'Сборник корректировок "Производственно-складская недвижимость" 2023',
    price: "4000 руб.",
    date: "01.01.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ПСН",
  },
  { // СК "ТОН" 2023
    id: 23,
    img: images.iTon2023,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diTon2023,
    text: 'Сборник корректировок "Торгово-офисная недвижимость" 2023',
    price: "4000 руб.",
    date: "01.01.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ТОН",
  },
  { // СК "ЗУ" 2020
    id: 24,
    img: images.iZu2020,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diZu2020,
    text: 'Сборник корректировок "Земельные участки" 2020',
    price: "4000 руб.",
    date: "01.07.2020",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Земля",
  },
  { // СК "ЗУ" 2021
    id: 25,
    img: images.iZu2021,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diZu2021,
    text: 'Сборник корректировок "Земельные участки" 2021',
    price: "4000 руб.",
    date: "23.01.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Земля",
  },
  { // СК "ЗУ" 2022
    id: 26,
    img: images.iZu2022,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diZu2022,
    text: 'Сборник корректировок "Земельные участки" 2022',
    price: "4000 руб.",
    date: "27.01.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Земля",
  },
  { // СК "ЗУ" 2023
    id: 27,
    img: images.iZu2023,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    // demo: images.diZu2023,
    text: 'Сборник корректировок "Земельные участки" 2023',
    price: "4000 руб.",
    date: "01.01.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Земля",
  },
];

export default investigationList;
