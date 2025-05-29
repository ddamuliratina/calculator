// src/components/Results.jsx
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-UG', { 
    style: 'currency', 
    currency: 'UGX',
    maximumFractionDigits: 0,
  }).format(amount);
};

const Results = ({ preCertCost, auditCost, subtotal, vat, totalCost }) => {
  return (
    <div style={{ 
      backgroundColor: '#f5f5f5', 
      padding: '15px', 
      borderRadius: '5px',
      marginTop: '20px'
    }}>
      <h3>Cost Breakdown:</h3>
      <p>Pre-Certification: <strong>{formatCurrency(preCertCost)}</strong></p>
      <p>Audit Fees: <strong>{formatCurrency(auditCost)}</strong></p>
      <p>Subtotal: <strong>{formatCurrency(subtotal)}</strong></p>
      <p>VAT (18%): <strong>{formatCurrency(vat)}</strong></p>
      <p style={{ 
        fontSize: '1.2em', 
        marginTop: '10px',
        borderTop: '1px solid #ddd',
        paddingTop: '10px'
      }}>
        Total: <strong>{formatCurrency(totalCost)}</strong>
      </p>
    </div>
  );
};

export default Results;