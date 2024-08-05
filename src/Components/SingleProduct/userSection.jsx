import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";

export default function UsesSection({originDescription,benefitsDescription, UsesDescription, IngredientsDescription, safetyDescription}) {
  const data = [
    {
      label: "Origin",
      value: "Origin",
      desc: `${originDescription}`,
    },
    {
      label: "Benefits",
      value: "Benefits",
      desc: `${benefitsDescription}`,
    },
    {
      label: "Uses",
      value: "Uses",
      desc: `${UsesDescription}`,
    },
    {
      label: "Ingredients",
      value: "Ingredients",
      desc: `${IngredientsDescription}`,
    },
    {
      label: "Safety Information",
      value: "Safety",
      desc: `${safetyDescription}`,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(data[0].value);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 920);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  return (
    <div className="mx-auto">
      {isMobile ? (
        <div className="px-8">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-900 border-2 rounded-lg bg-gray-200 border-gray-400 text-black font-semibold"
          >
            {data.map(({ label, value }) => (
              <option key={value} value={value} className="bg-gray-200 ">
                {label}
              </option>
            ))}
          </select>
          {data.map(({ value, desc }) => (
            <div
              key={value}
              className={`${activeTab === value ? 'block' : 'hidden'} mt-4 text-center`}
            >
              {desc}
            </div>
          ))}
        </div>
      ) : (
        <div className="px-8 lg:px-24">
          <div className="flex justify-between mb-4 bg-gray-200">
            {data.map(({ label, value }) => (
              <button
                key={value}
                className={`px-4 py-2 font-bold rounded-sm w-full ${
                  activeTab === value ? 'bg-gray-900 text-white' : ' text-black'
                }`}
                onClick={() => setActiveTab(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            {data.map(({ value, desc }) => (
              <div key={value} className={`${activeTab === value ? 'block' : 'hidden'} mt-4 text-center`}>
                {desc}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
