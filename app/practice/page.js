"use client"; // Required for Next.js app directory with client-side rendering
import React, { useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
	// State variables for the card properties
	const [fontSize, setFontSize] = useState(16); // Default font size
	const [opacity, setOpacity] = useState(1); // Default opacity
	const [color, setColor] = useState("#000000"); // Default color (black)
	const [letterSpacing, setLetterSpacing] = useState(0); // Default letter spacing
	const [rotation, setRotation] = useState(0); // Default rotation
	const [padding, setPadding] = useState(10); // Default padding
	const [boxX, setBoxX] = useState(0); // Default X-axis position
	const [boxY, setBoxY] = useState(0); // Default Y-axis position
	const [boxRotation, setBoxRotation] = useState(0); // Default rotation
	const floatingLetters = "Hover Me".split(""); //
	const evolvingLetters = "Hover Me".split("");
	const text = "Hover Me".split("");
	const letterVariants = {
		initial: { opacity: 1, x: 0, y: 0 },
		hover: {
			opacity: 1,
			x: [0, 10, -10, 5, -5], // Random X position
			y: [0, 5, -5, -10, 10], // Random Y position
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 20,
				duration: 1.5,
				delay: 0.1, // Adding a delay for staggered effect
			},
		},
	};

	return (
		<div className="p-5 min-h-screen bg-gray-100 flex flex-col items-center">
			{/* Dynamic Text Section */}
			<h1 className="text-2xl font-bold mb-6">Dynamic Text Controls</h1>
			<div className="flex gap-10 items-center mb-12">
				{/* Card */}
				<motion.div
					className="bg-white shadow-lg rounded-lg flex justify-center items-center"
					style={{ width: "300px", height: "300px", padding: `${padding}px` }}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
				>
					{/* Dynamic Text */}
					<motion.div
						style={{
							fontSize: `${fontSize}px`,
							opacity: `${opacity}`,
							color: `${color}`,
							letterSpacing: `${letterSpacing}px`,
							transform: `rotate(${rotation}deg)`,
						}}
						animate={{
							fontSize: `${fontSize}px`,
							opacity: `${opacity}`,
							letterSpacing: `${letterSpacing}px`,
							transform: `rotate(${rotation}deg)`,
						}}
						transition={{ duration: 0.3 }}
						className="text-center"
					>
						Dynamic Text
					</motion.div>
				</motion.div>

				{/* Sliders */}
				<div className="bg-white p-5 rounded-lg shadow-md w-72 space-y-6">
					<div>
						<label className="block text-gray-600 font-medium mb-1">
							Font Size: {fontSize}
						</label>
						<input
							type="range"
							min="10"
							max="40"
							value={fontSize}
							onChange={(e) => setFontSize(e.target.value)}
							className="w-full"
						/>
					</div>
					<div>
						<label className="block text-gray-600 font-medium mb-1">
							Opacity: {opacity}
						</label>
						<input
							type="range"
							min="0.1"
							max="1"
							step="0.1"
							value={opacity}
							onChange={(e) => setOpacity(e.target.value)}
							className="w-full"
						/>
					</div>
					<div>
						<label className="block text-gray-600 font-medium mb-1">
							Text Color: {color}
						</label>
						<input
							type="color"
							value={color}
							onChange={(e) => setColor(e.target.value)}
							className="w-full h-4"
						/>
					</div>
					<div>
						<label className="block text-gray-600 font-medium mb-1">
							Letter Spacing: {letterSpacing}
						</label>
						<input
							type="range"
							min="0"
							max="10"
							step="1"
							value={letterSpacing}
							onChange={(e) => setLetterSpacing(e.target.value)}
							className="w-full"
						/>
					</div>
					<div>
						<label className="block text-gray-600 font-medium mb-1">
							Rotation (Degrees): {rotation}
						</label>
						<input
							type="range"
							min="0"
							max="360"
							step="1"
							value={rotation}
							onChange={(e) => setRotation(e.target.value)}
							className="w-full"
						/>
					</div>
				</div>
			</div>

			{/* Box Section */}
			<h1 className="text-2xl font-bold mb-6">Box Animation Controls</h1>
			<div className="flex gap-10 items-center">
				{/* Box */}
				<motion.div
					className="border border-gray-600 rounded-lg"
					style={{
						width: "150px",
						height: "150px",
						backgroundColor: "#3498db",
					}}
					animate={{
						x: boxX,
						y: boxY,
						rotate: boxRotation,
					}}
					transition={{
						type: "spring", // Use spring animation for bounce effect
						stiffness: 150, // Controls the intensity of the spring
						damping: 30, // Reduces the oscillation of the spring
						bounce: 0.3, // Adds bounce to the motion (value between 0 and 1)
					}}
				/>

				{/* Sliders */}
				<div className="bg-white p-5 rounded-lg shadow-md w-72 space-y-6">
					<div>
						<label className="block text-gray-600 font-medium mb-1">
							X Position: {boxX}px
						</label>
						<input
							type="range"
							min="-200"
							max="200"
							value={boxX}
							onChange={(e) => setBoxX(Number(e.target.value))}
							className="w-full"
						/>
					</div>
					<div>
						<label className="block text-gray-600 font-medium mb-1">
							Y Position: {boxY}px
						</label>
						<input
							type="range"
							min="-200"
							max="200"
							value={boxY}
							onChange={(e) => setBoxY(Number(e.target.value))}
							className="w-full "
						/>
					</div>
					<div>
						<label className="block text-gray-600 font-medium mb-1">
							Rotation: {boxRotation}°
						</label>
						<input
							type="range"
							min="0"
							max="360"
							value={boxRotation}
							onChange={(e) => setBoxRotation(Number(e.target.value))}
							className="w-full"
						/>
					</div>
				</div>
			</div>
			<section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 gap-10">
				{/* Floating Letters Section */}
				<div className="text-4xl font-bold flex gap-2">
					{floatingLetters.map((letter, index) => (
						<motion.span
							key={`floating-${index}`}
							className="inline-block text-gray-800"
							whileHover={{
								y: -10, // Move upward on hover
								scale: 1.2, // Slightly enlarge
								color: "#1D4ED8", // Change text color to blue
							}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 10,
							}}
						>
							{letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
						</motion.span>
					))}
				</div>

				{/* Evolving Text Section */}
				<div className="text-4xl font-bold flex gap-2">
					{evolvingLetters.map((letter, index) => (
						<motion.span
							key={`evolving-${index}`}
							className="inline-block text-gray-800"
							initial={{ y: 0, color: "#4B5563" }} // Initial state
							animate={{
								y: [0, -10, 0], // Moves up and down
								color: ["#4B5563", "#1D4ED8", "#4B5563"], // Evolve through colors
							}}
							transition={{
								repeat: Infinity, // Loop animation
								duration: 1.5 + index * 0.1, // Add stagger effect
								ease: "easeInOut",
							}}
						>
							{letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
						</motion.span>
					))}
				</div>
				<motion.div className="text-4xl font-bold flex gap-2">
					{text.map((letter, index) => (
						<motion.span
							key={`breaking-${index}`}
							className="inline-block text-gray-800"
							variants={letterVariants} // Apply the letter animation variants
							initial="initial" // Initial state of letters
							whileHover="hover" // Hover effect
							transition={{
								delay: index * 0.05, // Stagger the animation by index
							}}
						>
							{letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
						</motion.span>
					))}
				</motion.div>
			</section>
		</div>
	);
};

export default Page;
