import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
  BreadcrumbButton,
} from "@fluentui/react-components";
import {
  CalendarMonthFilled,
  CalendarMonthRegular,
  bundleIcon,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const path = "https://www.bing.com/";
import { HTMLAttributes } from "react";
    

export interface BreadcrumbbProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "large" | "medium" | "small";
  data: { title: string; path: string }[];
  separator?: string;
}

export const Breadcrumbb = ({
    variant = "medium",
    data,
    separator = ">",
  }: BreadcrumbbProps) => {
  const variants = {
    large: "w-64 h-20 justify-content:start",
    medium: "w-48 h-40",
    small: "w-32 h-28",
  };


    return (
      <Breadcrumb aria-label="Breadcrumb default example">
        <BreadcrumbItem>
          <BreadcrumbButton href={path}>Item 1</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton href={path} icon={<CalendarMonth />}>
            Item 2
          </BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton href={path}>Item 3</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton href={path} current>
            Item 4
          </BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  };