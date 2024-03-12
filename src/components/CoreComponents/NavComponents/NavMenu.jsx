"use client";

import * as React from "react";

import { cn } from "../../../lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../ui/navigation-menu";

const NavMenu = () => {
  return (
    <NavigationMenu className="bg-transparent hover:bg-transparent  text-white">
      <NavigationMenuList>
        <NavigationMenuItem className="bg-transparent hover:bg-transparent  text-white">
          <NavigationMenuTrigger className="bg-transparent  hover:bg-transparent  text-white hover:text-white focus:bg-transparent">
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="  p-4 min-w-[200px] ">
              <ListItem href="/how-it-works" title="How it Works" />
              <ListItem href="/about-us" title="About us" />
              <ListItem href="/testimonials" title="Testimonials" />
              <ListItem href="/FAQ" title="FAQs" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
export default NavMenu;
