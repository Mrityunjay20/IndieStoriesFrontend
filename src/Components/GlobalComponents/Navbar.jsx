import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon

} from "@heroicons/react/24/solid";

import IndieLogo from "../../assets/HorizontalLogo.png";

const navListMenuItems = [
  {
    title: "Products 1",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Products 2",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Products 3",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Products 4",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Products 5",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Products 6",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "Products 7",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products 8",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Products 9",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="medium" className="font-semibold">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-semibold text-customBrown"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <a href="/shop">Shop</a>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden  rounded-xl w-2/3 mx-4 lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 lg:w-8/10 items-center">
      <Typography
        as="a"
        href="/"
        variant="medium"
        color="blue-gray"
        className="font-semibold text-customBrown"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="/ourstori"
        variant="medium"
        color="blue-gray"
        className="font-semibold text-customBrown"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Our Stori
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/ourimpact"
        variant="medium"
        color="blue-gray"
        className="font-semibold text-customBrown"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Our Impact
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="/connect"
        variant="medium"
        color="blue-gray"
        className="font-semibold text-customBrown"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Connect
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="blue-gray"
        className="font-semibold text-customBrown"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Blog</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="blue-gray"
        className="font-semibold text-customBrown mx-4"
      >
        {React.createElement(MagnifyingGlassIcon, {
              strokeWidth: 2,
              className: "h-6 w-6",
        })}
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="blue-gray"
        className="font-semibold text-customBrown mx-4"
      >
        {React.createElement(ShoppingCartIcon, {
              strokeWidth: 2,
              className: "h-6 w-6",
        })}
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="medium"
        color="blue-gray"
        className="font-semibold text-customBrown ml-4"
      >
        {/* <ListItem className="flex items-center gap-2 py-2 pr-4">
          Account
        </ListItem> */}
		{React.createElement(UserIcon, {
              strokeWidth: 2,
              className: "h-6 w-6",
        })}
      </Typography>
    </List>
  );
}

export function MegaMenuWithHover() {


	const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className={`mx-auto w-full py-1 my-4 z-50 sticky top-0 transition-transform duration-300 ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}>
      <div className="flex  w-full items-center justify-between text-customBrown">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <img src={IndieLogo} className="h-20 w-36" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
