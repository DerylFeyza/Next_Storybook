import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbDivider,
	BreadcrumbButton,
} from "@fluentui/react-components";
import { HTMLAttributes } from "react";


export interface BreadcrumbItemData {
	title: string;
	path?: string;
	icon?: JSX.Element;
}

export interface StoryBreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
	variant?: "large" | "medium" | "small";
	data: BreadcrumbItemData[];
	separator?: string;
}

export const StoryBreadcrumb = ({
	variant = "medium",
	data,
	separator = ">",
	...props
}: StoryBreadcrumbProps) => {
	const variants = {
		large: "text-lg space-x-4 font-semibold",
		medium: "text-base space-x-4 font-medium",
		small: "text-sm space-x-2 font-normal",
	};

	return (	
		<div className="text-blue-600 hover:text-blue-800 font-sans">
			<Breadcrumb aria-label="Breadcrumb" className={variants[variant]}>
				{data.map((item, index) => (
					<React.Fragment key={index}>
						<BreadcrumbItem>
							<div {...props}>
								<BreadcrumbButton href={item.path} icon={item.icon}>
									{item.title}
								</BreadcrumbButton>
							</div>
						</BreadcrumbItem>
						{index < data.length - 1 && (
							<BreadcrumbDivider>{separator}</BreadcrumbDivider>
						)}
					</React.Fragment>
				))}
			</Breadcrumb>
		</div>
	);
};
