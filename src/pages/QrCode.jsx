import images from "../constants/data";

const Qrcode = () => {
  return (
    <main>
      <div class="qr-code">
        <img src={images.qrCode} alt="QR-код для оплаты" />
      </div>
    </main>
  );
};

export default Qrcode;
