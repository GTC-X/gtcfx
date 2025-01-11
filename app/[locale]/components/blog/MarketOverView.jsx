import React from 'react';

const MarketOverViewNew = () => {
  const headers = [
    "Instrument",
    "Mon, Dec 23, 2024",
    "Tues, Dec 24, 2024",
    "Wed, Dec 25, 2024",
    "Thurs, Dec 26, 2024",
    "Fri, Dec 27, 2024",
    "Mon, Dec 30, 2024",
    "Tues, Dec 31, 2024",
    "Wed, Jan 1, 2025",
    "Thurs, Jan 2, 2025",
    "Thurs, Jan 9, 2025",
  ];

  const rows = [
    {
      instrument: "FX",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Metals",
      data: [
        "Normal Trading Hours",
        "Early Close at 20:45",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "OIL/Energies (BRNUSD)",
      data: [
        "Normal Trading Hours",
        "Early Closed at 21:00",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Close at 22:00",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "OIL/Energies (WTIUSD)",
      data: [
        "Normal Trading Hours",
        "Early Closed at 20:45",
        "Closed",
        "Reopen at 01:00",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Reopen at 01:00",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "OIL/Energies (NGCUSD)",
      data: [
        "Normal Trading Hours",
        "Early Closed at 20:45",
        "Closed",
        "Reopen at 01:00",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Reopen at 01:00",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - AUS200c",
      data: [
        "Normal Trading Hours",
        "Early Closed at 05:30",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Closed at 05:30",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - CN50c",
      data: [
        "Normal Trading Hours",
        "Early Closed at 20:15",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Closed at 24:00",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - EU50c",
      data: [
        "Early Closed at 23:00",
        "Closed",
        "Closed",
        "Closed",
        "Reopen at 02:15",
        "Early Closed at 23:00",
        "Closed",
        "Closed",
        "Reopen at 02:15",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - FRA40c",
      data: [
        "Normal Trading Hours",
        "Early Closed at 14:55",
        "Closed",
        "Closed",
        "Reopen at 09:00",
        "Normal Trading Hours",
        "Early Closed at 14:55",
        "Closed",
        "Reopen at 09:00",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - GER40c",
      data: [
        "Early Closed at 23:00",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Closed at 23:00",
        "Closed",
        "Reopen at 02:15",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - HK50c",
      data: [
        "Normal Trading Hours",
        "Early Closed at 06:00",
        "Closed",
        "Closed",
        "Reopen at 03:15",
        "Normal Trading Hours",
        "Early Closed at 06:00",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - JPN225c",
      data: [
        "Normal Trading Hours",
        "Early Closed at 20:15",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - SPA35c",
      data: [
        "Normal Trading Hours",
        "Early Closed at 15:00",
        "Closed",
        "Closed",
        "Early Closed at 15:00",
        "Closed",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - UK100c",
      data: [
        "Normal Trading Hours",
        "Early Closed at 14:50",
        "Closed",
        "Closed",
        "Reopen at 03:00",
        "Normal Trading Hours",
        "Early Closed at 14:50",
        "Closed",
        "Reopen at 03:00",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Indices - US30c",
      data: [
        "Normal Trading Hours",
        "Early Closed at 20:15",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Closed at 20:15",
        "Closed",
        "Normal Trading Hours",
        "Early Closed at 16:30",
      ],
    },
    {
      instrument: "Indices - US500c",
      data: [
        "Normal Trading Hours",
        "Early Closed at 20:15",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Closed at 20:15",
        "Closed",
        "Normal Trading Hours",
        "Early Closed at 16:30",
      ],
    },
    {
      instrument: "Indices - USTECHC",
      data: [
        "Normal Trading Hours",
        "Early Closed at 20:15",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Early Closed at 16:30",
      ],
    },
    {
      instrument: "Stocks (SIX)",
      data: [
        "Normal Trading Hours",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Stocks BM",
      data: [
        "Normal Trading Hours",
        "Early Closed at 15:00",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Closed at 15:00",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Stocks (EURONEXT)",
      data: [
        "Normal Trading Hours",
        "Early Closed at 15:00",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Closed at 15:00",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    
    {
      instrument: "Stocks (LSE)",
      data: [
        "Normal Trading Hours",
        "Early Closed at 14:30",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Early Closed at 14:30",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Stocks (XETRA)",
      data: [
        "Normal Trading Hours",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Early Close at 15:00",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "SIX",
      data: [
        "Normal Trading Hours",
        "Closed",
        "Closed",
        "Closed",
        "Early Closed at 15:00",
        "Closed",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "EU Shares:Exchanges - BM",
      data: [
        "Normal Trading Hours",
        "Closed",
        "Closed",
        "Closed",
        "Early Closed at 15:00",
        "Closed",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "EU Shares:Exchanges - LSE",
      data: [
        "Normal Trading Hours",
        "Closed",
        "Closed",
        "Closed",
        "Early Closed at 14:30",
        "Closed",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "EU Shares:Exchanges - XETRA",
      data: [
        "Normal Trading Hours",
        "Closed",
        "Closed",
        "Closed",
        "Early Closed at 15:00",
        "Closed",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours",
      ],
    },
 
    {
      instrument: "NYSE (US Shares:Exchanges)",
      data: [
        "Normal Trading Hours",
        "Early Closed at 20:00",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Closed"
      ],
    },
    {
      instrument: "NDAQ (US Shares:Exchanges)",
      data: [
        "Normal Trading Hours",
        "Early Closed at 20:00",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Closed"
      ],
    },
    {
      instrument: "HKEX (Asia Shares:Exchanges)",
      data: [
        "Normal Trading Hours",
        "Early Closed at 20:00",
        "Closed",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours"
      ],
    },
    {
      instrument: "TSE (Asia Shares:Exchanges)",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Closed",
        "Closed",
        "Normal Trading Hours"
      ],
    },
    {
      instrument: "Crypto",
      data: [
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Futures GOLDG25",
      data: [
        "Normal Trading Hours",
        "Early Closed at 18:45",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
    {
      instrument: "Futures SILVERH25",
      data: [
        "Normal Trading Hours",
        "Early Closed at 18:45",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Normal Trading Hours",
        "Closed",
        "Normal Trading Hours",
        "Normal Trading Hours",
      ],
    },
  ];

  const renderCellContent = (item) => {
    if (!item) return "";

    return item.split('\n').map((line, i) => (
      <span key={i} style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{line}</span>
    ));
  };

  const getCellClass = (item) => {
    if (!item) return "";
    const normalizedItem = item.trim().toLowerCase();
  
    if (normalizedItem.includes("early closed")) return "bg-secondary text-white";
    if (normalizedItem.includes("closed")) return "bg-primary text-white";
    if (normalizedItem.includes("early close")) return "bg-secondary text-white";
  
    return "";
  };

  return (
    <table className="trading_hours_table container">
      <thead className="header-section">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="shadow-2xl text-sm" scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td scope="row">{row.instrument}</td>
            {row.data.map((item, idx) => (
              <td key={idx} className={getCellClass(item)}>
                <span className='text-sm'>{renderCellContent(item)}</span>
              </td>
            ))}
          </tr>
        ))} 
      </tbody>
    </table>
  );
};

export default MarketOverViewNew;
