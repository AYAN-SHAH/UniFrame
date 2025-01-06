"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContactSection() {
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

	const paragraph = `
		Reach out to us, and our friendly team will get back to you as soon as possible.
	`;

	const words = paragraph.split(" ");

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
		}, 50); // Adjust the interval to control the speed
		return () => clearInterval(interval);
	}, []); // Removed `words` from the dependency array

	return (
		<motion.div {...anim(opacity)} className="page">
			<div className="flex flex-col items-center md:items-start justify-center px-8 py-8 sm:px-16 sm:py-16 bg-gray-100">
				<div>
					<h6 className="text-lg font-bold text-gray-800 bg-lime-200 inline-block px-2 rounded-full">
						Contact Us
					</h6>
				</div>

				<p
					className="mt-4 text-3xl sm:text-7xl text-center md:text-left max-w-full font-semibold"
					style={{ minHeight: "200px", width: "85%" }} // Adjust width to 100% and height as needed
				>
					{visibleWords.map((word, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0, filter: "blur(4px)" }}
							animate={{ opacity: 1, filter: "blur(0px)" }}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
							className="inline-block mr-1"
						>
							{word}
						</motion.span>
					))}
				</p>

				{/* Horizontal Rule */}
				<hr className="my-8 border-t-1 border-black" />

				{/* Cards Section */}
				<div>
					<h6 className="text-lg font-bold text-gray-800 bg-lime-200 inline-block px-2 rounded-full">
						Contact Us
					</h6>
				</div>
				<p
					className="mt-3 text-2xl sm:text-4xl text-center md:text-left max-w-full font-bold"
					style={{ minHeight: "80px", width: "85%" }} // Adjust width to 100% and height as needed
				>
					Discover Our Locations
				</p>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
					{["Card 1", "Card 2", "Card 3"].map((card, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: index * 0.5, // Stagger effect
								ease: "easeInOut",
							}}
							className="p-4 bg-white shadow-lg rounded-lg"
						>
							{/* Image Section */}
							<img
								src={`/card.png`}
								alt={`${card} image`}
								className="w-full object-cover rounded-md mb-4"
							/>

							{/* Title */}
							<h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
								{card}
							</h3>

							{/* Subheading */}
							<h4 className="text-md sm:text-lg text-gray-600 mt-2">
								Subheading for {card}
							</h4>

							{/* Description */}
							<p className="mt-2 text-gray-600">
								This is some description text for {card.toLowerCase()}.
							</p>

							{/* Dummy Address */}
							<p className="mt-4 text-sm text-gray-500">
								123 {card} Lane, Dummy City, XY 12345
							</p>
						</motion.div>
					))}
				</div>
				<hr className="my-8 border-gray-300" />

				{/* Contact Form Section */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-12 items-center overflow-hidden justify-around mx-auto">
					{/* Image Section */}
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="w-full flex  items-center justify-center"
					>
						<img
							src="https://via.placeholder.com/500x500?text=Contact+Image"
							alt="Contact us"
							className="w-full max-w-[90%] h-auto rounded-lg shadow-lg sm:max-w-[400px]"
						/>
					</motion.div>

					{/* Form Section */}
					<motion.form
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="bg-white p-6 rounded-lg shadow-lg w-full md:min-[100%] max-w-[200%] sm:max-w-[400px]"
					>
						<h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
							Get in Touch
						</h3>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-gray-700 font-semibold mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Your name"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-gray-700 font-semibold mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Your email"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="message"
								className="block text-gray-700 font-semibold mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								rows="4"
								placeholder="Your message"
							></textarea>
						</div>
						<button
							type="submit"
							className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Send Message
						</button>
					</motion.form>
				</div>
			</div>
		</motion.div>
	);
}
