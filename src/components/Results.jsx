// src/components/Results.jsx
import React from 'react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    maximumFractionDigits: 0,
  }).format(amount);
};

const Results = ({ preCertCost, auditCost, totalCost }) => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
      <h3>Cost Breakdown:</h3>
      <p>Pre-Certification: <strong>{formatCurrency(preCertCost)}</strong></p>
      <p>Audit Fees: <strong>{formatCurrency(auditCost)}</strong></p>
      <p style={{ fontSize: '1.2em', marginTop: '10px' }}>
        Total: <strong>{formatCurrency(totalCost)}</strong>
      </p>
    </div>
  );
};

export default Results;