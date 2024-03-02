import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  MenuHandler,
  ListItem,
  Menu,
  MenuList,
} from "@material-tailwind/react";

const menulist = [
  { link: "/profile", name: "Profile" },
  { link: "/logout", name: "logout" },
];

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("role")) setIsLogin(true);
    else setIsLogin(false);

    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    window.addEventListener("scroll", handleScroll);
  }, []);

  const navList1 = (
    <ul className="w-fit mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 mx-auto">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex justify-center items-center px-3 py-1 bg-[#a855f7] text-white rounded-md hover:shadow-xl"
        >
          Venue
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="login"
          className="flex justify-center items-center px-3 py-1 bg-[#a855f7] text-white rounded-md hover:shadow-xl"
        >
          Login
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="register"
          className="flex justify-center items-center px-3 py-1 bg-[#a855f7] text-white rounded-md hover:shadow-xl"
        >
          Sign Up
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography> */}
    </ul>
  );

  const navList2 = (
    <ul className="w-fit mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 mx-auto">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="addplace"
          className="flex justify-center items-center px-3 py-1 bg-[#a855f7] text-white rounded-md hover:shadow-xl"
        >
          Add Place
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px] max-w-full">
      <Navbar
        className={`fixed top-0 z-10 h-max max-w-full px-4 py-0 rounded-none transition duration-300 ease-in border-none bg-opacity-100 bg-hd-bg bg-white ${
          scroll ? "scroll" : ""
        }`}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer font-medium"
          >
            <img src="/logo.svg" width={80} height={80} />
          </Typography>
          <div className="flex items-center gap-4">
            {!isLogin && <div className="mr-4 hidden lg:block">{navList1}</div>}
            {isLogin && <div className="mr-4 hidden lg:block">{navList2}</div>}
            {isLogin && (
              <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={false}
              >
                <MenuHandler>
                  <Typography as="div" variant="small" className="font-medium">
                    <ListItem
                      className="flex items-center gap-2 py-2 pr-4 font-medium bg-transparent hover:bg-tarnsparent"
                      selected={isMenuOpen || isMobileMenuOpen}
                      onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                    >
                      <img
                        src="/Profile.jpg"
                        className=" w-7 h-7 rounded-full"
                      />
                      {isMobileMenuOpen ? <div>↓</div> : <div>↑</div>}
                    </ListItem>
                  </Typography>
                </MenuHandler>
                <MenuList
                  className="hidden
         max-w-screen-xl rounded-xl lg:block"
                >
                  <ul className="flex flex-col items-center lg:hover:border-none md:hover:border-none sm:hover:border-none">
                    {menulist.map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <li>
                        <a
                          href={item.link}
                          className="flex items-center gap-2 py-2 font-medium"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </MenuList>
              </Menu>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        {!isLogin && <MobileNav open={openNav}>{navList1}</MobileNav>}
        {isLogin && <MobileNav open={openNav}>{navList2}</MobileNav>}
      </Navbar>
    </div>
  );
}
