import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta = {
    title: "Example/Toast",
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
		message: "your gyatt have been transported to another region"
	},
}

export const Danger : Skibidi = {
	args:{
		type : "info",
		size: "medium",
		variant: "danger",
		title:"Information !",
		message: "your sibidikasdnansd"
	},
}

export const Warn : Skibidi = {
	args:{
		type : "info",
		size: "medium",
		variant: "warning",
		title:"Information !",
		message: "your sibidikasdnansd"
	},
}