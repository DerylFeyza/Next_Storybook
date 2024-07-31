import React from "react";
import { useState } from "react";
import { Button } from "@/stories/Button";
import "../../app/globals.css";
export interface ModalProps {
	/**
	 * Modal Header to display what purpose is the modal for
	 */
	header?: string;
	variant: "light" | "dark";
	size: "small" | "medium" | "large";
	/**
	 * Primary button text
	 */
	positiveLabel: string;
	/**
	 * Cancel button text
	 */
	negativeLabel: string;
	/**
	 * Modal corner type, rounded or squared
	 */
	type: "rounded" | "simple";
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
	header,
	variant = "light",
	size = "medium",
	type = "rounded",
	positiveLabel = "Success",
	negativeLabel = "Cancel",
	...props
}: ModalProps) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="flex items-center justify-center min-h-60">
			<div>
				<Button
					label="Toggle Modal"
					onClick={() => setShowModal(true)}
					primary={true}
				/>
			</div>
			{showModal && (
				<div
					id="authentication-modal"
					aria-hidden="true"
					className="absolute inset-0 z-50 flex items-center justify-center w-full bg-opacity-50"
				>
					<div
						className={`relative w-full px-4 md:h-auto ${
							size === "small"
								? "max-w-sm"
								: size === "medium"
									? "max-w-md"
									: size === "large"
										? "max-w-xl"
										: "max-w-md"
						}`}
					>
						<div
							className={`${type === "rounded" ? "rounded-lg" : ""} shadow relative ${variant === "dark" ? "bg-gray-700" : "bg-white"}`}
						>
							<div className="flex justify-end p-2">
								<button
									type="button"
									className={`text-gray-400 bg-transparent  ${variant === "dark" ? "dark:hover:bg-gray-900" : " hover:bg-gray-400"} rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-white`}
									onClick={() => setShowModal(false)}
								>
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</button>
							</div>
							<div className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
								<h3
									className={`text-xl font-medium  ${variant === "dark" ? "text-white" : "text-black"}`}
								>
									{header}
								</h3>

								<div className="flex items-center justify-around">
									<button
										type="button"
										className={`${
											size === "small"
												? "w-32"
												: size === "medium"
													? "w-32"
													: size === "large"
														? "w-48"
														: "w-32"
										} px-5 py-2.5 text-gray-500 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm  text-center dark:hover:bg-gray-300 dark:focus:ring-gray-300`}
										onClick={() => setShowModal(false)}
									>
										{negativeLabel}
									</button>
									<button
										type="submit"
										className={`${
											size === "small"
												? "w-32"
												: size === "medium"
													? "w-32"
													: size === "large"
														? "w-48"
														: "w-32"
										} px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:focus:ring-blue-800`}
										onClick={() => setShowModal(false)}
									>
										{positiveLabel}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
