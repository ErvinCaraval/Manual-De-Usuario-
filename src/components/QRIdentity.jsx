import { useState, useEffect } from 'react';
import './QRIdentity.css';

const generateMatrix = (size) => {
  const matrix = Array.from({ length: size }, () => Array.from({ length: size }, () => false));

  // Positional markers
  const markers = [
    { r: 0, c: 0, s: 7 },
    { r: 0, c: size - 7, s: 7 },
    { r: size - 7, c: 0, s: 7 },
  ];

  markers.forEach(({ r, c, s }) => {
    for (let i = 0; i < s; i++) {
      for (let j = 0; j < s; j++) {
        const isOuterBorder = i === 0 || i === s - 1 || j === 0 || j === s - 1;
        const isInnerSquare = i >= 2 && i <= 4 && j >= 2 && j <= 4;
        if (isOuterBorder || isInnerSquare) {
          matrix[r + i][c + j] = true;
        }
      }
    }
  });

  // Random dots
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      let isMarker = false;
      markers.forEach(m => {
        if (r >= m.r && r < m.r + m.s && c >= m.c && c < m.c + m.s) {
          isMarker = true;
        }
      });

      if (!isMarker && Math.random() > 0.5) {
        matrix[r][c] = true;
      }
    }
  }

  return matrix;
};

const QrCode = ({ matrix, size }) => {
  const cellSize = 200 / size;
  return (
    <svg width="200" height="200" viewBox={`0 0 200 200`} fill="none" shapeRendering="crispEdges">
      <rect width="200" height="200" fill="white" />
      {matrix.map((row, r) =>
        row.map((cell, c) =>
          cell ? (
            <rect
              key={`${r}-${c}`}
              x={c * cellSize}
              y={r * cellSize}
              width={cellSize}
              height={cellSize}
              fill="black"
            />
          ) : null
        )
      )}
    </svg>
  );
};

const QRIdentity = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [qrMatrix, setQrMatrix] = useState([]);
  const qrSize = 25; // Size of the QR code matrix

  useEffect(() => {
    setQrMatrix(generateMatrix(qrSize));
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="qr-overlay" onClick={handleClose}>
      <div
        className={`qr-container ${isVisible ? 'visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="qr-header">
          <h2 className="qr-title">Scan this code to confirm my identity in BitChat</h2>
        </div>

        <div className="qr-content">
          <div className="qr-code">
            <QrCode matrix={qrMatrix} size={qrSize} />
          </div>

          <div className="qr-description">
            <p className="qr-text">
              Share this code to let others add you and verify it's you.
            </p>
            <p className="qr-note">
              This QR only shares your public key, never your private data.
            </p>
          </div>
        </div>

        <div className="qr-actions">
          <button className="qr-button primary">
            Scan someone else's QR
          </button>
          <button className="qr-button secondary" onClick={handleClose}>
            Share QR
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRIdentity;
