import { useState } from 'react';
import Dropdown from './components/Dropdown';
import Results from './components/Results';
import { preCertFees, auditFees } from './components/FeeTables';

function App() {
  // State for selections
  const [farmers, setFarmers] = useState(1000);
  const [certType, setCertType] = useState("FT Only");

  // Safe fee calculations with error handling
  const preCertCost = preCertFees[farmers]?.[certType] || 0;

  const getAuditFees = () => {
    if (!auditFees[farmers]) return 0;
    let total = 0;
    if (certType.includes("FT")) total += auditFees[farmers]?.FT || 0;
    if (certType.includes("RA")) total += auditFees[farmers]?.RA || 0;
    if (certType.includes("Organic")) total += auditFees[farmers]?.Organic || 0;
    return total;
  };

  const auditCost = getAuditFees();
  const totalCost = preCertCost + auditCost;

  // Dropdown options
  const farmerOptions = [
    { value: 1000, label: '1000' },
    { value: 2000, label: '2000' },
    { value: 4000, label: '4000' },
  ];

  const certOptions = [
    { value: "FT Only", label: "FT Only" },
    { value: "FT + RA", label: "FT + RA" },
    { value: "FT + Organic", label: "FT + Organic" },
    { value: "RA + Organic", label: "RA + Organic" },
    { value: "FT + RA + Organic", label: "FT + RA + Organic" },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Jber Coffee Cost Estimator</h1>
      
      <Dropdown
        label="Number of Farmers:"
        value={farmers}
        options={farmerOptions}
        onChange={(e) => setFarmers(Number(e.target.value))}
      />

      <Dropdown
        label="Certification Type:"
        value={certType}
        options={certOptions}
        onChange={(e) => setCertType(e.target.value)}
      />

      <Results 
        preCertCost={preCertCost} 
        auditCost={auditCost} 
        totalCost={totalCost} 
      />
    </div>
  );
}

export default App;