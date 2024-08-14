import images from "../constants/data";
import React, { useState } from "react";
import investigationList from "../js/investigationList";
import Document from "./Document";
import { motion, AnimatePresence } from "framer-motion";

const Investigation = () => {
  const [isActive, setIsActive] = useState("Все");
  const [filterItems, setFilterItems] = useState(investigationList);

  const handleFilter = (category) => {
    setIsActive(category);
    if (category === "Все") setFilterItems(investigationList);
    else {
      const filterItem = investigationList.filter(
        (item) => item.category === category
      );
      setFilterItems(filterItem);
    }
  };
  return (
    <>
      <section className="investigation none1" id="investigation">
        {/* СЕКЦИЯ Исследования рынка недвижимости */}
        <div className="container">
          <motion.div className="shop block block--w780">
            <div className="investigation__title">
              <h2 className="title-24">Исследования рынка недвижимости</h2>
              <p className="subtitle">
                Справочники оценщика, сборники корректировок, мониторинги рынка,
                аналитические отчеты
              </p>
              <div className="title-line"></div>
            </div>

            {/* Кнопки фильтрации */}
            <div className="investigation-list">
              {["Все", "Земля", "ИЖС", "ПСН", "ТОН", "Квартиры", "Гаражи"].map(
                (category) => (
                  <button
                    className={`investigation-item ${
                      isActive === category ? "active" : ""
                    }`}
                    key={category}
                    onClick={() => handleFilter(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            <motion.div className="investigation__documents">
              {/* Все документы */}
              <AnimatePresence>
                {filterItems.map((item) => {
                  return <Document key={item.id} item={item} />;
                })}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Виджеты */}
          <div className="widgets">
            {/* НП ЕСЭ */}
            <div className="npese block block--w380 block--fix1">
              <div className="npese__title">
                <h2 className="title-16">НП “Евразийский союз экспертов”</h2>
                <p className="subtitle">Некоммерческое партнерство</p>
                <div className="title-line"></div>
              </div>

              <div className="npese__content">
                <div className="npese__content-img">
                  <img
                    src={images.wNpese}
                    alt="НП “Евразийский союз экспертов”"
                  />
                  <p>
                    Организация, объединяющая специалистов, работающих в сфере
                    экспертных исследований и судебной экспертизы.
                  </p>
                </div>
                <div className="npese__content-text">
                  <p>
                    Основная цель НП ЕСЭ – содействие членам партнерства в
                    осуществлении профессиональной деятельности с целью развития
                    и совершенствования направления независимых экспертных
                    исследований и негосударственной судебной экспертизы в
                    Российской Федерации.
                  </p>
                  <p>
                    На 20 мая 2014 года количество членов НП ЕСЭ составляет
                    более 30 человек. Все эксперты имеют высшее образование по
                    специальностям, позволяющее им выступать в качестве судебных
                    экспертов в соответствии с действующим законодательством.
                  </p>
                </div>
              </div>
            </div>

            {/* Корректировка по местоположению */}
            <div className="correct block block--w380">
              <div className="correct__title">
                <h2 className="title-16">Корректировка по местоположению</h2>
                <p className="subtitle">Для определения стоимости квартиры</p>
                <div className="title-line"></div>
              </div>

              <div className="correct__content">
                <div className="correct__content-img">
                  <img
                    src={images.wCorrect}
                    alt="Корректировка по местоположению - график"
                  />
                </div>
              </div>
            </div>

            {/* Ценовое зонирование */}
            <div className="price-zone block block--w380 block--fix1">
              <div className="price-zone__title">
                <h2 className="title-16">Ценовое зонирование</h2>
                <p className="subtitle">
                  Территориально-экономическое зонирование города Омск
                </p>
                <div className="title-line"></div>
              </div>
              <div className="price-zone__content">
                <div className="price-zone__content-img">
                  <img
                    src={images.wPriceZone}
                    alt="Ценовое зонирование - карта"
                  />
                </div>
              </div>
            </div>

            {/* Градостроительный план */}
            <div className="grad-plan block block--w380 block--fix1">
              <div className="grad-plan__title">
                <h2 className="title-16">Градостроительный план</h2>
                <p className="subtitle">Градостроительный план города Омск</p>
                <div className="title-line"></div>
              </div>
              <div className="grad-plan__content">
                <div className="grad-plan__content-img">
                  <img
                    src={images.wGradPlan}
                    alt="Градостроительный план - карта"
                  />
                </div>
              </div>
            </div>

            {/* Публичная кадастровая карта */}
            <div
              className="cad-map block block--w380 block--fix1"
              id="cadastre"
            >
              <div className="cad-map__title">
                <h2 className="title-16">Публичная кадастровая карта</h2>
                <p className="subtitle">
                  ГИС аналитика рынка недвижимости <br />
                  Ценовое зонирование
                  <br />
                  Мониторинг кадастровой оценки
                </p>
                <div className="title-line"></div>
              </div>
              <div className="cad-map__content">
                <p className="subtitle">
                  Публичная кадастровая карта: Новосибирская область
                </p>
                <div className="cad-map__content-img">
                  <img
                    src={images.wCadMap}
                    alt="Публичная кадастровая карта - карта"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investigation;
