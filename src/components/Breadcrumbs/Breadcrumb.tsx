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
import { HTMLAttributes } from "react";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

export interface BreadcrumbItemData {
  title: string;
  path: string;
  icon?: JSX.Element;
}

export interface BreadcrumbbProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "large" | "medium" | "small";
  data: BreadcrumbItemData[];
  separator?: string;
}

export const Breadcrumbb = ({
  variant = "medium",
  data,
  separator = ">",
}: BreadcrumbbProps) => {
  const variants = {
    large: "text-lg space-x-4 font-semibold",
    medium: "text-base space-x-4 font-medium",
    small: "text-sm space-x-2 font-normal",
  };

  return (
    <Breadcrumb aria-label="Breadcrumb" className={variants[variant]}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <BreadcrumbItem>
            <BreadcrumbButton href={item.path} icon={item.icon}>
              {item.title}
            </BreadcrumbButton>
          </BreadcrumbItem>
          {index < data.length - 1 && (
            <BreadcrumbDivider>{separator}</BreadcrumbDivider>
          )}
        </React.Fragment>
      ))}
    </Breadcrumb>
  );
};
