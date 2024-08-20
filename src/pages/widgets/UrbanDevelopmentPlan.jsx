import images from "../../constants/data";

const UrbanDevelopmentPlan = () => {
  return (
    <>
      {/* Градостроительный план */}
      <div className="grad-plan__title">
        <h2 className="title-16">Градостроительный план</h2>
        <p className="subtitle">Градостроительный план города Омск</p>
        <div className="title-line"></div>
      </div>
      <div className="grad-plan__content">
        <div className="grad-plan__content-img">
          <img src={images.wGradPlan} alt="Градостроительный план - карта" />
        </div>
      </div>
    </>
  );
};

export default UrbanDevelopmentPlan;
