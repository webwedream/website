'use client';
import {
  Button, MobileNav, Navbar, Typography
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
 
export default function MainNav() {
  const [openNav, setOpenNav] = useState(true);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth <= 960 && setMobile(true)
    );
  }, []);
 
  const navList = (
    <ul className={(!mobile && !openNav) || (mobile && !openNav)? "hidden" : "mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"} >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <MobileNav open={openNav} >
        {navList}
        <Button variant="filled" size="sm" fullWidth className="mb-2" color="blue-gray" >
          try us for free
        </Button>
      </MobileNav>
    </Navbar>
  );
}