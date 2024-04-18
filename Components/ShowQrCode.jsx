import { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeModal() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="">

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <button
              className="absolute -0 right-0 m-3 text-gray-700 hover:text-gray-900"
              onClick={() => setShowModal(false)}
            >
              Fechar
            </button>
            <div className="flex justify-center items-center">
              <QRCode value="https://www.example.com" size={200} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QRCodeModal;
