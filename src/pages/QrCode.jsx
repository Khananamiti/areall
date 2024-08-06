import images from "../constants/data";

const QrCode = () => {
  return (
    <main>
      <div class="qr-code">
        <img src={images.qrCode} alt="QR-код для оплаты" />
      </div>
    </main>
  );
};

export default QrCode;
