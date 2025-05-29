import { useState, useEffect } from "react"; // <-- Added useEffect import
import Dropdown from "./components/Dropdown";
import Results from "./components/Results";
import { preCertFees, auditFees } from "./components/FeeTables";
import logo from "./assets/logo.jpeg"; // Import the logo

function App() {
  // State hooks
  const [farmers, setFarmers] = useState(1000);
  const [certType, setCertType] = useState("FT Only");
  const [calculations, setCalculations] = useState({
    preCertCost: 0,
    auditCost: 0,
    subtotal: 0,
    vat: 0,
    totalCost: 0,
  });

  useEffect(() => {
    const preCertCost = Number(preCertFees[farmers]?.[certType]) || 0;

    const getAuditFees = () => {
      if (!auditFees[farmers]) return 0;
      let total = 0;
      if (certType.includes("FT")) total += Number(auditFees[farmers]?.FT) || 0;
      if (certType.includes("RA")) total += Number(auditFees[farmers]?.RA) || 0;
      if (certType.includes("Organic"))
        total += Number(auditFees[farmers]?.Organic) || 0;
      return total;
    };

    const auditCost = getAuditFees();
    const subtotal = Number(preCertCost) + Number(auditCost);
    const vat = subtotal * 0.18;
    const totalCost = subtotal + vat;

    setCalculations({
      preCertCost,
      auditCost,
      subtotal,
      vat,
      totalCost,
    });
  }, [farmers, certType]);

  // Dropdown options
  const farmerOptions = [
    { value: 1000, label: "1000" },
    { value: 2000, label: "2000" },
    { value: 4000, label: "4000" },
  ];

  const certOptions = [
    { value: "FT Only", label: "FT Only" },
    { value: "FT + RA", label: "FT + RA" },
    { value: "FT + Organic", label: "FT + Organic" },
    { value: "RA + Organic", label: "RA + Organic" },
    { value: "FT + RA + Organic", label: "FT + RA + Organic" },
  ];

  return (
    <div className="calculator-container">
      <div className="logo-container">
        <img
          src={logo}
          alt="Plutus Coffee Logo"
          className="company-logo"
          style={{ width: "150px", height: "auto" }}
        />
      </div>
      <h1>PLUTUS COFFEE CERTIFICATION COST CALCULATOR</h1>

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
        preCertCost={calculations.preCertCost}
        auditCost={calculations.auditCost}
        subtotal={calculations.subtotal}
        vat={calculations.vat}
        totalCost={calculations.totalCost}
      />
    </div>
  );
}

export default App;
