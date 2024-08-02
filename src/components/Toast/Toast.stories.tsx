import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Toast } from "./Toast";

const meta = {
    title: "Those who know/Toast",
	component: Toast,
	parameters: {
		layout: "centered",
	},
    tags: ["autodocs"],
	argTypes: {
		type: { control: "radio" },
		variant: {control:"radio"},
		size:{control:"radio"}
	},
	args : {onClose:(fn)},
}satisfies Meta<typeof Toast>

export default meta;
type Skibidi = StoryObj<typeof meta>;

export const Default : Skibidi = {
	args:{
		type : "info",
		size: "medium",
		variant: "default",
		title:"Information!",
		message: "your gyatt have been transported to another region"
	},
}

export const Success : Skibidi = {
	args:{
		type : "info",
		size: "medium",
		variant: "success",
		title:"Success!",
		message: "Skibidi toilet"
	},
}

export const Danger : Skibidi = {
	args:{
		type : "info",
		size: "medium",
		variant: "danger",
		title:"Danger!",
		message: "Skibidi's breaching the contract!"
	},
}

export const Warn : Skibidi = {
	args:{
		type : "info",
		size: "medium",
		variant: "warning",
		title:"Warning!",
		message: "penetration will occur soon!"
	},
}