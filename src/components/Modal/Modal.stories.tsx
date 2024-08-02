import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Modal } from "./Modal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Organism/Modal",
	component: Modal,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	argTypes: {
		type: {
			control: { type: "radio", options: ["rounded", "simple"] },
		},
		variant: {
			control: {
				type: "radio",
				options: ["dark", "light"],
			},
		},
		size: {
			control: {
				type: "select",
				options: ["small", "medium", "large"],
			},
		},
	},
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { variant: "light", onClick: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Light: Story = {
	args: {
		header: "skebede",
		variant: "light",
		size: "medium",
		type: "rounded",
		position: "left",
		positiveLabel: "Success",
		negativeLabel: "Cancel",
		children: (
			<div className="space-y-6">
				<p className="text-gray-700">Ini modal nganu, light</p>
			</div>
		),
	},
};

export const Dark: Story = {
	args: {
		header: "skebede",
		variant: "dark",
		size: "medium",
		type: "rounded",
		position: "left",
		positiveLabel: "Success",
		negativeLabel: "Cancel",
		children: (
			<div className="space-y-6">
				<p className="text-gray-400">Ini modal nganu, dark</p>
			</div>
		),
	},
};

export const DarkForm: Story = {
	args: {
		header: "skebede",
		variant: "dark",
		size: "medium",
		type: "rounded",
		position: "left",
		positiveLabel: "Success",
		negativeLabel: "Cancel",
		children: (
			<div className="space-y-6">
				<div>
					<label
						htmlFor="email"
						className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
					>
						Your email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="username@gmail.com"
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
					>
						Your password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
					/>
				</div>
			</div>
		),
	},
};

export const LightForm: Story = {
	args: {
		header: "skebede",
		variant: "light",
		size: "medium",
		type: "rounded",
		position: "left",
		positiveLabel: "Success",
		negativeLabel: "Cancel",
		children: (
			<div className="space-y-6">
				<div>
					<label
						htmlFor="email"
						className="text-sm font-medium text-gray-900 block mb-2"
					>
						Your email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="username@gmail.com"
					/>
				</div>
				<div>
					<label
						htmlFor="password"
						className="text-sm font-medium text-gray-900 block mb-2"
					>
						Your password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					/>
				</div>
			</div>
		),
	},
};
