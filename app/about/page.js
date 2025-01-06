"use client";

import React from "react";
import { motion } from "framer-motion";
const AboutSection = () => {
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

	return (
		<motion.div {...anim(opacity)} className="relative w-full h-screen">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: "url('/bg.jpg')",
					backgroundAttachment: "", // Parallax effect
				}}
			></div>

			{/* Content */}
			<div className="absolute inset-x-0 bottom-0 flex flex-col items-start px-4 md:px- pb-12 space-y-6 max-w-7xl mx-auto">
				{/* Full overlay div for all text with black background and opacity */}
				<div className="relative p-8 w-full">
					{/* Glass effect div */}
					<div className="relative z-10 backdrop-blur-sm bg-black/30 p-6 rounded-xl">
						{/* Small Heading */}
						<h6 className="text-left font-bold text-gray-800 bg-lime-200 inline-block px-4 py-1 rounded-full my-3">
							About Us
						</h6>

						{/* Large Heading */}
						<h1 className="text-3xl md:text-5xl font-semibold text-white text-left my-3">
							Unispire is your one-stop solution for{" "}
							<span className="text-lime-200">business</span>{" "}
							<span className="text-lime-200">setup</span>,{" "}
							<span className="text-lime-200">IT services</span>, and{" "}
							<span className="text-lime-200">CRM</span> solutions in Dubai.
						</h1>

						{/* Small Paragraph */}
						<div className="flex justify-start md:justify-end">
							<p className="text-sm md:text-lg w-full md:w-1/2 text-justify pr-4 md:pr-12 text-white">
								Startups, entrepreneurs, and growing businesses will find the
								perfect partner here. Join hands with Unispire, and let’s
								transform your corporate journey into a seamless and successful
								adventure!
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default AboutSection;
