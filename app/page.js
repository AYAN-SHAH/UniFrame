"use client";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
	const anim = (variants) => {
		return {
			initial: "initial",
			animate: "enter",
			exit: "exit",
			variants,
		};
	};

	const opacity = {
		initial: {
			opacity: 0,
			y: 50, // Start slightly above
		},
		enter: {
			opacity: 1,
			y: 0, // Move to its final position
			transition: {
				duration: 0.3, // Adjust duration as needed
			},
		},
		exit: {
			opacity: 0, // Fade out
			y: 50, // Move downward
			transition: {
				duration: 0.5, // Adjust exit transition duration
			},
		},
	};

	const words = ["Mainland", "Tax & Vat services", "Freezone"];
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const wordAnimation = {
		initial: { opacity: 0, y: 30, filter: "blur(4px)" },
		animate: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: { type: "spring", stiffness: 100, damping: 25 },
		},
		exit: {
			opacity: 0,
			y: 30,
			filter: "blur(4px)",
			transition: { duration: 0.5 },
		},
	};

	return (
		<motion.div {...anim(opacity)} className="page">
			<div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-5 md:px-10 py-5 bg-gray-100">
				{/* Left Section */}
				<div className="w-full md:w-1/2 text-center md:text-left">
					<div>
						<h6 className="text-sm font-semibold text-gray-800 bg-lime-200 inline-block px-3 rounded-full mb-3 mt-3">
							#1 Business Setup Expert IN UAE, 2024
						</h6>
					</div>
					<h3 className="text-4xl md:text-6xl font-bold mb-3 text-gray-900 tracking-tighter">
						Custom business <br /> setups solution
					</h3>
					<h2 className="text-3xl md:text-6xl font-semibold mb-7 text-green-900">
						<motion.span
							key={words[currentIndex]}
							initial="initial"
							animate="animate"
							exit="exit"
							variants={wordAnimation}
						>
							{words[currentIndex]}
						</motion.span>
					</h2>
					<p className="text-lg md:text-xl font-semibold text-gray-800 mb-3 tracking-wider">
						Partner with the best to make your business journey seamless and
						rewarding
					</p>
					<ul className="flex items-center flex-col md:items-start text-base md:text-lg font-medium text-gray-600 mb-6 list-none pl-0">
						<li className="flex items-center mb-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
								width="20"
								height="20"
								className="mr-2"
								fill="rgb(50, 60, 40)"
							>
								<g weight="duotone">
									<path
										d="M216,48V208a8,8,0,0,1-8,8H64L40,192V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z"
										opacity="0.2"
									/>
									<path d="M224,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h72V48H48v96a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM125.66,154.34a8,8,0,0,0-11.32,0L64,204.69,45.66,186.34a8,8,0,0,0-11.32,11.32l24,24a8,8,0,0,0,11.32,0l56-56A8,8,0,0,0,125.66,154.34Z" />
								</g>
							</svg>
							Free Consultation
						</li>
						<li className="flex items-center mb-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
								width="20"
								height="20"
								className="mr-2"
								fill="rgb(50, 60, 40)"
							>
								<g weight="duotone">
									<path
										d="M216,48V208a8,8,0,0,1-8,8H64L40,192V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z"
										opacity="0.2"
									/>
									<path d="M224,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h72V48H48v96a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM125.66,154.34a8,8,0,0,0-11.32,0L64,204.69,45.66,186.34a8,8,0,0,0-11.32,11.32l24,24a8,8,0,0,0,11.32,0l56-56A8,8,0,0,0,125.66,154.34Z" />
								</g>
							</svg>
							100% Ownership
						</li>
						<li className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
								width="20"
								height="20"
								className="mr-2"
								fill="rgb(50, 60, 40)"
							>
								<g weight="duotone">
									<path
										d="M216,48V208a8,8,0,0,1-8,8H64L40,192V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z"
										opacity="0.2"
									/>
									<path d="M224,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h72V48H48v96a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM125.66,154.34a8,8,0,0,0-11.32,0L64,204.69,45.66,186.34a8,8,0,0,0-11.32,11.32l24,24a8,8,0,0,0,11.32,0l56-56A8,8,0,0,0,125.66,154.34Z" />
								</g>
							</svg>
							Business License in 24 hours
						</li>
					</ul>

					<a
						href="/login"
						className="text-sm inline-flex items-center justify-center bg-green-900 text-white px-6 py-3 rounded-md font-semibold group relative overflow-hidden mb-4"
					>
						<i className="fas fa-sign-in-alt mr-2 transition-all duration-300 group-hover:text-indigo-600 z-20"></i>
						<span className="relative z-10 group-hover:text-green-900">
							Get In Touch
						</span>
						<span className="absolute top-0 left-0 w-full h-full bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></span>
					</a>
				</div>

				{/* Right Section */}
				<div className="w-full md:w-1/2 h-[40vh] md:h-[85vh]">
					<motion.video
						autoPlay
						loop
						muted
						playsInline
						src="/hero.mp4"
						alt="Hero Video"
						className="rounded-lg shadow-lg object-cover w-full h-full"
					></motion.video>
				</div>
			</div>
		</motion.div>
	);
}
