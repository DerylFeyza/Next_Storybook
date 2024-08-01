import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { StoryBreadcrumb } from "./Breadcrumb";
import {
	CalendarMonthFilled,
	CalendarMonthRegular,
	bundleIcon,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

const meta: Meta<typeof StoryBreadcrumb> = {
	title: "Components/Breadcrumbs",
	component: StoryBreadcrumb,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "medium",
		data: [
			{
				title: "Home",
				path: "/home",
			},
			{
				title: "Overview",
				path: "/overview",
			},
			{
				title: "Details",
				path: "/details",
			},
		],
	},
};

export const Custom: Story = {
	args: {
		variant: "medium",
		data: [
			{
				title: "Home",
				path: "/home",
				icon: <CalendarMonth />,
			},
			{
				title: "Overview",
				path: "/overview",
				icon: <CalendarMonth />,
			},
			{
				title: "Details",
				path: "/details",
				icon: <CalendarMonth />,
			},
		],
		separator: ">",
	},
};
