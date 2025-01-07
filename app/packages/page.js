"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ContactSection() {
	const cards = [
		{
			id: 1,
			image: "card (1).jpg", // Replace with actual image URL
			price: "11,999",
			name: "Sharjah Freezone",
		},
		{
			id: 2,
			image: "card (2).jpg", // Replace with actual image URL
			// Replace with actual image URL
			price: "11,999",
			name: "Rakez Freezone",
		},
		{
			id: 3,
			image: "card (3).jpg", // Replace with actual image URL
			// Replace with actual image URL
			price: "11,999",
			name: "Family Visa",
		},
	];

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
Find the Perfect Plan for You

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
		}, 10); // Adjust the interval to control the speed
		return () => clearInterval(interval);
	}, []); // Removed `words` from the dependency array

	return (
		<motion.div
			{...anim(opacity)}
			className="page flex justify-center items-center"
		>
			<div>
				<div className="flex flex-col items-center md:items-start justify-center px-8 py-8 sm:px-8 sm:py-16 ">
					<div>
						<h6 className="text-sm font-bold text-gray-800 bg-lime-200 inline-block px-2 rounded-full">
							MEMBERSHIPS
						</h6>
					</div>

					<p
						className="mt-4 text-3xl sm:text-7xl text-center md:text-left max-w-full font- tracking-tight lette"
						style={{ minHeight: "80px", width: "85%" }} // Adjust width to 100% and height as needed
					>
						{visibleWords.map((word, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, filter: "blur(4px)" }}
								animate={{ opacity: 1, filter: "blur(0px)" }}
								transition={{
									duration: 1,
									ease: "easeInOut",
								}}
								className="inline-block mr-1"
							>
								{word}
							</motion.span>
						))}
					</p>
					<p className="w-[45vw] text-left text-black ">
						Discover a range of business setup options tailored to fit your
						unique needs. Whether you're looking for a mainland or freezone, we
						have the perfect plan to support your work style and goals.
					</p>

					{/* Horizontal Rule */}
					<hr className="my-8 border-t-1 border-black w-full" />

					{/* Cards Section */}
					<div>
						<h6 className="text-sm font-bold text-gray-800 bg-lime-200 inline-block px-2 rounded-full">
							OUR OFFERS
						</h6>
					</div>
					<p
						className="mt-3 text-2xl sm:text-4xl text-center md:text-left max-w-full font-semibold  "
						style={{ minHeight: "80px", width: "85%" }} // Adjust width to 100% and height as needed
					>
						Busines setup packages tailored to your needs
					</p>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
						{cards.map((card) => (
							<div key={card.id} className="flex flex-col gap-2">
								<div className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-96">
									{/* Image Section */}
									<img
										src={card.image}
										alt={card.name}
										className="w-full h-full object-cover"
									/>
									<div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-black/80 to-transparent"></div>

									{/* Price Tag */}
									<span className="text-sm text-white ">From</span>
									<div className="absolute top-2 left-0  text-lime-200 font-bold text-5xl px-4 py-1 rounded-md">
										<span className="text-sm text-white ">From</span>
										{card.price}
										<span className="text-sm text-white">/AED</span>
									</div>

									{/* Button Section */}
								</div>
								<div className="w-full bg-gray-200 flex items-center justify-between px-4 py-3 rounded-lg">
									{/* Card Name */}
									<span className="text-black font-medium text-lg">
										{card.name}
									</span>

									{/* Rounded Button */}
									<button className="bg-white p-3 rounded-full ">
										<AiOutlineArrowRight className="text-black" />
									</button>
								</div>
							</div>
						))}
					</div>

					<hr className="my-8 border-gray-300" />

					{/* Contact Form Section */}
				</div>
			</div>
		</motion.div>
	);
}
