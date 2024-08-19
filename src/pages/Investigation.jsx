import images from "../constants/data";
import React, { useState } from "react";
import investigationList from "../js/investigationList";
import Document from "./Document";
import { motion, AnimatePresence } from "framer-motion";
import CadastralMap from "./widgets/CadastralMap";
import UrbanDevelopmentPlan from "./widgets/UrbanDevelopmentPlan";
import Npese from "./widgets/Npese";
import AdjustmentByLocation from "./widgets/AdjustmentByLocation";
import PriceZoning from "./widgets/PriceZoning";

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
            <Npese />
            <AdjustmentByLocation />
            <PriceZoning />
            <UrbanDevelopmentPlan />
            <CadastralMap />
          </div>
        </div>
      </section>
    </>
  );
};

export default Investigation;
