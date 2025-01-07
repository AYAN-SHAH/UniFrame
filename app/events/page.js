"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Page = () => {
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

	const paragraph = `Be part of a vibrant community that values collaboration and growth.`;
	const words = paragraph.split(" "); // Split by space to get each word
	const [visibleWords, setVisibleWords] = useState([]);

	useEffect(() => {
		let currentIndex = 0;
		const interval = setInterval(() => {
			if (currentIndex < words.length) {
				setVisibleWords((prev) => [...prev, words[currentIndex]]);
				currentIndex++;
			} else {
				clearInterval(interval);
			}
		}, 10); // Adjust the interval to control the speed of appearing words
		return () => clearInterval(interval);
	}, []);

	return (
		<motion.div
			{...anim(opacity)}
			className="page flex justify-center items-center"
		>
			<div className="w-screen">
				<div className="flex flex-col items-center md:items-start justify-center px-8 py-8 sm:px-8 sm:py-16">
					<div>
						<h6 className="text-sm font-bold text-gray-800 bg-lime-200 inline-block px-2 rounded-full">
							Our Events
						</h6>
					</div>

					<p
						className="mt-4 text-3xl sm:text-7xl text-center md:text-left max-w-full tracking-tighter"
						style={{ minHeight: "80px", width: "90%" }} // Adjust width to 100% and height as needed
					>
						{visibleWords.map((word, index) => (
							<React.Fragment key={index}>
								<motion.span
									initial={{ opacity: 0, filter: "blur(4px)" }}
									animate={{
										opacity: 1,
										filter: "blur(0px)",
									}}
									transition={{
										duration: 1,
										ease: "easeInOut",
										delay: index * 0.1, // Delay each word for the animation effect
									}}
									className="inline-block mr-1"
								>
									{word}{" "}
								</motion.span>
								{/* Add a space between words */}
								{index < visibleWords.length - 1 && (
									<span className="inline-block"> </span>
								)}
							</React.Fragment>
						))}
					</p>

					{/* Horizontal Rule */}
					<hr className="my-4 border-t-1 border-black w-full" />
				</div>
			</div>
		</motion.div>
	);
};

export default Page;
