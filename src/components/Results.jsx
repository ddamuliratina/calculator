const formatCurrency = (amount) => {
  const value = Number(amount) || 0;
  return new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    maximumFractionDigits: 0,
  }).format(amount);
};

const Results = ({ preCertCost, auditCost, subtotal, vat, totalCost }) => (
  <div className="results-panel">
    <h3 className="results-title">Cost Breakdown</h3>
    <div className="result-row">
      <span>Pre-Certification:</span>
      <span>{formatCurrency(preCertCost)}</span>
    </div>
    <div className="result-row">
      <span>Audit Fees:</span>
      <span>{formatCurrency(auditCost)}</span>
    </div>
    <div className="result-row subtotal-row">
      <span>Subtotal:</span>
      <span>{formatCurrency(subtotal)}</span>
    </div>
    <div className="result-row vat-row">
      <span>VAT (18%):</span>
      <span>{formatCurrency(vat)}</span>
    </div>
    <div className="result-row total-row">
      <span>Total Cost:</span>
      <span>{formatCurrency(totalCost)}</span>
    </div>
  </div>
);

export default Results;
