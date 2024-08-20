import React, { useMemo } from "react";

function Exponsivevalue({ num }) {
    const calculateValue = useMemo(() => {
        console.log("Calculating...");

        return num * 2;
    },[num])
  return (
    <div>
      <h2>Calculated value: {calculateValue}</h2>
    </div>
  );
}

export default Exponsivevalue;
