import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
export default function UsesSection(){
    const data = [
        {
          label: "Origin",
          value: "Origin",
          desc: `fnajflanflkanflkaflaklfafklflkndnklfadfknlnkla
          afafasejkfnweibgwgbiwbgweigbwg
          weggwgwgwgww`,
        },
        {
          label: "Benefits",
          value: "Benefits",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          label: "Uses",
          value: "Uses",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
          label: "Ingredients",
          value: "Ingredients",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          label: "Safety Information",
          value: "Safety",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
      ];
    return (
        <div className="w-3/4 mx-auto">
        
        <Tabs value="html">
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
        </div>
      );
}