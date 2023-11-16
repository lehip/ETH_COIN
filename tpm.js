const tpmOpenSSL = require('openssl');

// Hàm mã hóa số bằng TPM
async function encryptWithTPM(number) {
  try {
    // Khởi tạo TPM
    const tpm = new tpmOpenSSL.TPM();

    // Load khóa công khai TPM
    const publicKey = tpm.getPubKey();

    // Mã hóa số bằng TPM
    const encryptedData = tpm.encrypt(publicKey, number);

    // Trả về dữ liệu đã mã hóa
    return encryptedData;
  } catch (error) {
    console.error('Lỗi khi mã hóa số bằng TPM:', error);
    throw error;
  }
}

// Sử dụng hàm mã hóa số bằng TPM
const numberToEncrypt = 12345;
encryptWithTPM(numberToEncrypt)
  .then(encryptedData => {
    console.log('Dữ liệu đã mã hóa TPM:', encryptedData);
  })
  .catch(error => {
    console.error('Đã xảy ra lỗi:', error);
  });