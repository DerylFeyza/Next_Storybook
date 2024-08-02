"use client";
import Image from "next/image";

import { Modal } from "@/components/Modal/Modal";
import { Toast } from "@/components/Toast/Toast";
import { StoryBreadcrumb } from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";

export default function Home() {
	const [alertVisible, setAlertVisible] = useState(false);
	const [modalVisible, setModalVisible] = useState(true);

	const handleSubmit = () => {
		setAlertVisible(true);
		setModalVisible(false); 
	};

	const handleCloseToast = () => {
		setAlertVisible(false); 
	};

	return (
		<>
			{alertVisible && (
				<Toast
					message="Your gyatt have been transported to another region"
					size="medium"
					title="Information!"
					type="info"
					variant="default"
					onClose={handleCloseToast}
				/>
			)}
			<StoryBreadcrumb
				variant="medium"
				data={[
					{ title: "Baskara" },
					{ title: "Deryl" },
					{ title: "Favian" },
					{ title: "Bagas" },
				]}
			/>
			{modalVisible && (
				<Modal
					header="skebede"
					negativeLabel="Cancel"
					position="left"
					positiveLabel="Success"
					size="medium"
					type="rounded"
					variant="dark"
					onClick={handleSubmit}
				>
					<div className="space-y-6">
						<div>
							<label
								className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
								htmlFor="email"
							>
								Your email
							</label>
							<input
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								id="email"
								name="email"
								placeholder="username@gmail.com"
								type="email"
							/>
						</div>
						<div>
							<label
								className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
								htmlFor="password"
							>
								Your password
							</label>
							<input
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								id="password"
								name="password"
								placeholder="••••••••"
								type="password"
							/>
						</div>
					</div>
				</Modal>
			)}
		</>
	);
}
