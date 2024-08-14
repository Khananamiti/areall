import images from "../constants/data";

const QrCode = () => {
  return (
    <div className="qr">
      <div className="block block--w480">
        <div className="qr__content">

          <div className="qr__title">
            <h2 className="title-24">Оплата по QR-коду</h2>
            <div className="title-line"></div>
          </div>

          <div className="qr__info">
            <p>
              Некоммерческое Партнерство “Евразийский Союз Экспертов”
            </p>
            <p>Areall</p>
            <div className="qr__price">
              <p>Сумма к оплате:</p>
              <p>{item.price}</p>
            </div>
          </div>

          <div className="qr__code">
            <p>
              Что бы оплатить заказ, откройте приложение мобильного банка и отсканируйте QR-код
            </p>
            <img
              src={item.qr}
              alt="QR-код для оплаты"
            />
          </div>

          <div className="qr__spb">
            <p>Платеж проводится с помощью</p>
            <img
              src={images.sbpLogo}
              alt="QR-код для оплаты"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
