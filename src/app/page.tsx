"use client";
import Image from "next/image";

import { Modal } from "@/components/Modal/Modal";
import { Toast } from "@/components/Toast/Toast";
import { StoryBreadcrumb } from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";

export default function Home() {
	const [alertVisible, setAlertVisible] = useState(false);
	const [ModalVisible, setModalVisible] = useState(true);

	const handleSubmit = () => {
		setAlertVisible(true);
	};

	const handleCloseToast = () => {
		setAlertVisible(false); // Close the toast
	};

	return (
		<>
			{alertVisible && (
				<Toast
					message="your gyatt have been transported to another region"
					size="medium"
					title="Information!"
					type="info"
					variant="default"
					onClose={handleCloseToast} // Pass handleCloseToast to Toast
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
			{ModalVisible && (
				<Modal
					header="skebede"
					negativeLabel="Cancel"
					position="left"
					positiveLabel="Success"
					size="medium"
					type="rounded"
					variant="dark"
					onClick={() => handleSubmit()}
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

			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
					<Image
						className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
						src="/next.svg"
						alt="Next.js Logo"
						width={180}
						height={37}
						priority
					/>
				</div>
				<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
					<a
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className="mb-3 text-2xl font-semibold">
							Docs{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className="m-0 max-w-[30ch] text-sm opacity-50">
							Find in-depth information about Next.js features and API.
						</p>
					</a>
					<a
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className="mb-3 text-2xl font-semibold">
							Learn{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className="m-0 max-w-[30ch] text-sm opacity-50">
							Learn about Next.js in an interactive course with&nbsp;quizzes!
						</p>
					</a>
					<a
						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className="mb-3 text-2xl font-semibold">
							Templates{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className="m-0 max-w-[30ch] text-sm opacity-50">
							Explore starter templates for Next.js.
						</p>
					</a>
					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className="mb-3 text-2xl font-semibold">
							Deploy{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
							Instantly deploy your Next.js site to a shareable URL with Vercel.
						</p>
					</a>
				</div>
			</main>
		</>
	);
}
