import images from "./constants/data";

const QRCode = () => {
  return (
    <main>
      <div class="qr-code">
        <img src={images.qrCode} alt="QR-код для оплаты" />
      </div>
    </main>
  );
};

export default QRCode;
