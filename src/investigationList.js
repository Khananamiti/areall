import images from "./constants/data";

const investigationList = [
  { // AO "Рынок земли" 2024
    id: 1,
    img: images.aoEarth20234,
    alt: "Аналитический отчет", // Подпись к рисунку
    type: "Анализ рынка", // Тип документа
    demo: images.aoEarth20234, // Демо
    text: 'Аналитический отчет "Рынок земли" города Омска. 2024', // Описание
    price: "10000 руб.", // Цена
    date: "01.10.2023", // Опубликован
    company: 'НП "Евразийский Союз Экспертов"', // Подготовлен
    category: "Земля", // Категория для фильтрации
  },
  {
    id: 2,
    img: images.aoOffice20234,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    demo: images.daoOffice20234,
    text: 'Аналитический отчет "Офисная недвижимость" города Омска. 2024',
    price: "10000 руб.",
    date: "01.10.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Офисы",
  },
  {
    id: 3,
    img: images.aoIzhs20234,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    demo: "src/demo/analytics/Анализ_рынка_ИЖС_4Q_2023_БФ_ДЕМО.pdf",
    text: images.daoIzhs20234,
    price: "10000 руб.",
    date: "01.10.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ИЖС",
  },
  {
    id: 4,
    img: images.aoPsn20234,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    demo: "src/demo/analytics/Анализ_рынка_ПСН_4кв._2023_БФ_ДЕМО.pdf",
    text: images.daoPsn20234,
    price: "10000 руб.",
    date: "01.10.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "ПСН",
  },
  {
    id: 5,
    img: images.aoTon20234,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    demo: images.daoTon20234,
    text: 'Аналитический отчет "Торговые помещения" города Омска. 2024',
    price: "10000 руб.",
    date: "01.10.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Торговые помещения",
  },
  {
    id: 6,
    img: images.iApartment2024,
    alt: "Сборник корректировок",
    type: "Исследования рынка",
    demo: images.diApartment2024,
    text: 'Сборник корректировок "Квартиры" 2024',
    price: "10000 руб.",
    date: "01.10.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Исследования рынка",
  },
  { // AO "Рынок земли" 2023 4Q
    id: 7,
    img: images.aoIzhs20234,
    alt: "Аналитический отчет",
    type: "Анализ рынка",
    demo: images.daoIzhs20234,
    text: 'Аналитический отчет "Рынок земли" города Омска. 4Q 2023',
    price: "5000 руб.",
    date: "01.10.2023",
    company: 'НП "Евразийский Союз Экспертов"',
    category: "Анализ рынка",
  },
];

export default investigationList;
