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
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-3/4 mx-auto">
      {isMobile ? (
        <div>
          <Select
            value={activeTab}
            onChange={(e) => setActiveTab(e)}
            className="w-full mb-4"
          >
            {data.map(({ label, value }) => (
              <Option key={value} value={value}>
                {label}
              </Option>
            ))}
          </Select>
          {data.map(({ value, desc }) => (
            <div
              key={value}
              className={`${
                activeTab === value ? "block" : "hidden"
              } mt-4 text-center `}
            >
              {desc}
            </div>
          ))}
        </div>
      ) : (
        <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      )}
    </div>
  );
}
