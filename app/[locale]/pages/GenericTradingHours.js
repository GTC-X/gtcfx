'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
// import * as XLSX from "xlsx";
import { fetchAPI } from '../components/utilities/fetch-api';


const sampleData = {
  FX: [
    {
      category: 'Majors',
      Mon: { pricing: '00:00 - 23:59', trading: '00:01 - 23:59' },
      Tue: { pricing: '00:00 - 23:59', trading: '00:01 - 23:59' },
      Wed: { pricing: '00:00 - 23:59', trading: '00:01 - 23:59' },
      Thu: { pricing: '00:00 - 23:59', trading: '00:01 - 23:59' },
      Fri: { pricing: '00:00 - 23:59', trading: '00:01 - 23:59' },
    },
    {
      category: 'Cross & Exotics',
      Mon: { pricing: '00:00 - 23:59', trading: '00:01 - 23:59' },
      Tue: { pricing: '00:00 - 23:59', trading: '00:01 - 23:59' },
      Wed: { pricing: '00:00 - 23:59', trading: '00:01 - 23:59' },
      Thu: { pricing: '00:00 - 23:59', trading: '00:01 - 23:59' },
      Fri: { pricing: '00:00 - 23:59', trading: '00:01 - 23:55' },
    },
    {
      category: 'JPY Symbols',
      Mon: { pricing: '00:03 - 23:59', trading: '00:08 - 23:55' },
      Tue: { pricing: '00:03 - 23:59', trading: '00:05 - 23:55' },
      Wed: { pricing: '00:03 - 23:59', trading: '00:05 - 23:55' },
      Thu: { pricing: '00:03 - 23:59', trading: '00:05 - 23:55' },
      Fri: { pricing: '00:03 - 23:59', trading: '00:05 - 23:55' },
    },
  ],
  'Gold & Silver': [
    {
      category: 'GOLD',
      Mon: { pricing: '01:00 - 24:00', trading: '01:05 - 23:59' },
      Tue: { pricing: '01:00 - 24:00', trading: '01:01 - 23:59' },
      Wed: { pricing: '01:00 - 24:00', trading: '01:01 - 23:59' },
      Thu: { pricing: '01:00 - 24:00', trading: '01:01 - 23:59' },
      Fri: { pricing: '01:00 - 24:00', trading: '01:01 - 23:55' },
    },
    {
      category: 'SILVER',
      Mon: { pricing: '01:00 - 23:59', trading: '01:01 - 23:59' },
      Tue: { pricing: '01:00 - 23:59', trading: '01:01 - 23:59' },
      Wed: { pricing: '01:00 - 23:59', trading: '01:01 - 23:59' },
      Thu: { pricing: '01:00 - 23:59', trading: '01:01 - 23:59' },
      Fri: { pricing: '01:00 - 23:59', trading: '01:01 - 23:59' },
    },
  ],
  'Crude Oil': [
    {
      category: 'BRNUSD',
      Mon: { pricing: '01:00 - 23:59', trading: '01:05 - 23:59' },
      Tue: { pricing: '03:00 - 23:59', trading: '03:01 - 23:59' },
      Wed: { pricing: '03:00 - 23:59', trading: '03:01 - 23:59' },
      Thu: { pricing: '03:00 - 23:59', trading: '03:01 - 23:59' },
      Fri: { pricing: '03:00 - 23:59', trading: '03:01 - 23:59' },
    },
    {
      category: 'WTIUSD',
      Mon: { pricing: '01:00 - 24:00', trading: '01:05 - 23:59' },
      Tue: { pricing: '01:00 - 24:00', trading: '01:01 - 23:55' },
      Wed: { pricing: '01:00 - 24:00', trading: '01:01 - 23:55' },
      Thu: { pricing: '01:00 - 24:00', trading: '01:01 - 23:55' },
      Fri: { pricing: '01:00 - 23:59', trading: '01:01 - 23:59' },
    },
  ],
  Crypto: [
    {
      category: 'Crypto',
      Mon: { pricing: '00:00 - 24:00', trading: '00:01 - 24:00' },
      Tue: { pricing: '00:00 - 24:00', trading: '00:01 - 24:00' },
      Wed: { pricing: '00:00 - 24:00', trading: '00:01 - 24:00' },
      Thu: { pricing: '00:00 - 24:00', trading: '00:01 - 24:00' },
      Fri: { pricing: '00:00 - 24:00', trading: '00:01 - 24:00' },
    },
  ],
  'Cash Indices': [
    {
      category: 'AUS200c',
      Mon: { pricing: '02:50-09:30,10:10-23:59', trading: '02:51-09:30,10:11-23:57' },
      Tue: { pricing: '02:50-09:30,10:10-23:59', trading: '02:51-09:30,10:11-23:57' },
      Wed: { pricing: '02:50-09:30,10:10-23:59', trading: '02:51-09:30,10:11-23:57' },
      Thu: { pricing: '02:50-09:30,10:10-23:59', trading: '02:51-09:30,10:11-23:57' },
      Fri: { pricing: '00:50-08:30,09:10-22:57', trading: '00:51-08:30,09:11-22:57' },
    },
    {
      category: 'CN50c',
      Mon: { pricing: '04:00-13:10,22:00-23:45', trading: '04:02-13:10,22:00-23:43' },
      Tue: { pricing: '04:00-13:10,22:00-23:45', trading: '04:00-13:10,22:00-23:45' },
      Wed: { pricing: '04:00-13:10,22:00-23:45', trading: '04:02-13:10,22:00-23:43' },
      Thu: { pricing: '04:00-13:10,22:00-23:45', trading: '04:02-13:10,22:00-23:43' },
      Fri: { pricing: '04:00-13:10,22:00-23:45', trading: '04:02-13:10,22:00-23:43' },
    },
    {
      category: 'EU50c',
      Mon: { pricing: '03:15-22:59', trading: '03:16-22:56' },
      Tue: { pricing: '03:15-22:59', trading: '03:16-22:56' },
      Wed: { pricing: '03:15-22:59', trading: '03:16-22:56' },
      Thu: { pricing: '03:15-22:59', trading: '03:16-22:56' },
      Fri: { pricing: '03:15-22:59', trading: '03:16-22:56' },
    },
    {
      category: 'GER40c',
      Mon: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Tue: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Wed: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Thu: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Fri: { pricing: '01:00-23:59', trading: '01:01-23:58' },
    },
    {
      category: 'HK50c',
      Mon: { pricing: '04:15-07:00,08:00-13:10,15:22-00:00', trading: '04:18-07:00,08:00-11:30,12:15-21:59' },
      Tue: { pricing: '04:15-07:00,08:00-13:10,15:22-00:00', trading: '04:18-07:00,08:00-11:30,12:15-21:59' },
      Wed: { pricing: '04:15-07:00,08:00-13:10,15:22-00:00', trading: '04:18-07:00,08:00-11:30,12:15-21:59' },
      Thu: { pricing: '04:15-07:00,08:00-13:10,15:22-00:00', trading: '04:18-07:00,08:00-11:30,12:15-21:59' },
      Fri: { pricing: '04:15-07:00,08:00-13:10,15:22-00:00', trading: '04:18-07:00,08:00-11:30,12:15-21:56' },
    },
    {
      category: 'JPN225c',
      Mon: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Tue: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Wed: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Thu: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Fri: { pricing: '01:00-23:56', trading: '01:01-23:56' },
    },
    {
      category: 'UK100c',
      Mon: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Tue: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Wed: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Thu: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Fri: { pricing: '01:00-23:57', trading: '01:01-23:57' },
    },
    {
      category: 'US30c',
      Mon: { pricing: '01:00-24:00', trading: '01:01-23:59' },
      Tue: { pricing: '01:00-24:00', trading: '01:01-23:59' },
      Wed: { pricing: '01:00-24:00', trading: '01:01-23:59' },
      Thu: { pricing: '01:00-24:00', trading: '01:01-23:59' },
      Fri: { pricing: '01:00-23:57', trading: '01:01-23:56' },
    },
    {
      category: 'US500c',
      Mon: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Tue: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Wed: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Thu: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Fri: { pricing: '01:00-23:57', trading: '01:01-23:56' },
    },
    {
      category: 'USTECHc',
      Mon: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Tue: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Wed: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Thu: { pricing: '01:00-23:59', trading: '01:01-23:58' },
      Fri: { pricing: '01:00-23:56', trading: '01:01-23:56' },
    },
  ],
  Stocks: [
    {
      category: 'US Stocks',
      Mon: { pricing: '16:30 - 23:00', trading: '16:31 - 23:00' },
      Tue: { pricing: '16:30 - 23:00', trading: '16:31 - 23:00' },
      Wed: { pricing: '16:30 - 23:00', trading: '16:31 - 23:00' },
      Thu: { pricing: '16:30 - 23:00', trading: '16:31 - 23:00' },
      Fri: { pricing: '16:30 - 22:59', trading: '16:31 - 22:59' }
    },
    {
      category: 'EU Stocks',
      Mon: { pricing: '10:00 - 19:29', trading: '10:01 - 19:29' },
      Tue: { pricing: '10:00 - 19:29', trading: '10:01 - 19:29' },
      Wed: { pricing: '10:00 - 19:29', trading: '10:01 - 19:29' },
      Thu: { pricing: '10:00 - 19:29', trading: '10:01 - 19:29' },
      Fri: { pricing: '10:00 - 19:29', trading: '10:01 - 19:29' }
    },
    {
      category: 'Asia Stocks',
      Mon: { pricing: '03:30 - 07:00, 08:00 - 11:00', trading: '03:30 - 07:00, 08:00 - 11:00' },
      Tue: { pricing: '03:30 - 07:00, 08:00 - 11:00', trading: '03:30 - 07:00, 08:00 - 11:00' },
      Wed: { pricing: '03:30 - 07:00, 08:00 - 11:00', trading: '03:30 - 07:00, 08:00 - 11:00' },
      Thu: { pricing: '03:30 - 07:00, 08:00 - 11:00', trading: '03:30 - 07:00, 08:00 - 11:00' },
      Fri: { pricing: '03:30 - 07:00, 08:00 - 11:00', trading: '03:30 - 07:00, 08:00 - 11:00' }
    }
  ],
};

function TradingHoursTabs() {
  const [activeTab, setActiveTab] = useState('FX');
  const t = useTranslations("tradingTools.marketOverView.holiday");
  const renderTable = () => {
    const data = sampleData[activeTab];
    if (!data || data.length === 0) return <p className="mt-4 text-gray-600">No data available.</p>;

    return (
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full text-sm border-collapse rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-primary text-white">
            <tr>
              <th rowSpan="2" className="p-3 border border-white text-left">Symbols</th>
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                <th key={day} colSpan="2" className="p-3 border border-white text-center">
                  {day}
                </th>
              ))}
            </tr>
            <tr className="bg-primary text-white">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                <>
                  <th key={`${day}-pricing`} className="p-2 border border-white">Pricing Hour</th>
                  <th key={`${day}-trading`} className="p-2 border border-white">Trading Hour</th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white hover:bg-gray-100'}
              >
                <td className="p-3 border border-gray-300 font-medium">{row.category}</td>
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                  <>
                    <td key={`${day}-pricing-${idx}`} className="p-3 border border-gray-300">
                      {row[day]?.pricing || '--'}
                    </td>
                    <td key={`${day}-trading-${idx}`} className="p-3 border border-gray-300">
                      {row[day]?.trading || '--'}
                    </td>
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // const [excelSheets, setExcelSheets] = useState([]); // all sheets
  // const [activeTabs, setActiveTabs] = useState(0); // default to first tab

  // const fetchExcelFromURL = async (url) => {
  //   try {
  //     const response = await fetch(url);
  //     const arrayBuffer = await response.arrayBuffer();
  //     const workbook = XLSX.read(arrayBuffer, { type: "buffer" });

  //     const allData = workbook.SheetNames.map((sheetName) => ({
  //       name: sheetName,
  //       data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]),
  //     }));
  //     console.log(allData);
  //     return allData; // array of { name, data }
  //   } catch (error) {
  //     console.error("Error fetching or parsing Excel:", error);
  //     return [];
  //   }
  // };


  // const fetchData = useCallback(async () => {
  //   const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  //   const path = `/trading-hours`;
  //   const urlParamsObject = {
  //     sort: { createdAt: "desc" },
  //     populate: "*",
  //     locale: "en",
  //   };
  //   const options = { headers: { Authorization: `Bearer ${token}` } };

  //   try {
  //     const res = await fetchAPI(path, urlParamsObject, options);
  //     const url = res?.data?.[0]?.attributes?.tradingHours?.data?.attributes?.url;
  //     const fullURL = "https://api.gtcfx.com" + url;
  //     const parsedSheets = await fetchExcelFromURL(fullURL);
  //     setExcelSheets(parsedSheets);
  //     setActiveTabs(0);
  //   } catch (err) {
  //     console.error("❌ Error fetching Excel data", err);
  //   }
  // }, []);


  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log({ excelSheets })
  const tabKeys = Object.keys(sampleData);

  return (
    <section className="pt-10 md:pt-10">
      <div className="container mx-auto max-w-7xl">
        <div className='text-center'>
          <h2 className="HeadingH2 mb-5 text-center">{t("trading")}</h2>
          <p className='mb-5'>{t("hours")}</p>

        </div>
{/* <div className="my-6">
   <div className="flex flex-wrap gap-3 mb-4">
    {excelSheets.map((sheet, idx) => (
      <button
        key={sheet.name}
        onClick={() => setActiveTabs(idx)}
        className={`px-4 py-2 rounded ${
          activeTabs === idx ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {sheet.name}
      </button>
    ))}
  </div>

   {excelSheets[activeTabs] && (
    <div className="overflow-x-auto border border-gray-300 rounded-md">
      <table className="min-w-full table-auto text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            {Object.keys(excelSheets[activeTabs].data?.[0] || {}).map((header) => (
              <th key={header} className="p-2 font-semibold border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {excelSheets[activeTabs].data.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-t">
              {Object.values(row).map((value, cellIdx) => (
                <td key={cellIdx} className="p-2">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div> */}



        <div className="flex flex-wrap justify-center gap-2 mb-5" role="tablist">
          {tabKeys.map((key) => (
            <button
              key={key}
              className={`px-4 py-2 rounded-xs text-white font-medium transition-all duration-200 ${activeTab === key
                  ? 'bg-secondary shadow-md'
                  : 'bg-primary hover:bg-black hover:shadow-md'
                } focus:outline-none`}
              onClick={() => setActiveTab(key)}
              role="tab"
              aria-selected={activeTab === key}
            >
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>

        {renderTable()}


      </div>
    </section>
  );
}

export default TradingHoursTabs;