"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = () => {
		setIsOpen(false); // Close the mobile menu when a link is clicked
	};

	return (
		<motion.nav
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="bg-white w-full sticky top-0 z-50"
		>
			<div className="container mx-auto flex items-center justify-between py-4 px-6">
				{/* Logo */}
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-2xl font-bold text-gray-800"
				>
					LOGO
				</motion.div>

				{/* Desktop Links */}
				<motion.ul
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.2 },
						},
					}}
					className="hidden md:flex space-x-6"
				>
					{[
						{ name: "Home", href: "/" },
						{ name: "About", href: "/about" },
						{ name: "Packages", href: "/packages" },
						{ name: "Events", href: "/events" },

						{ name: "Contact", href: "/contact" },
					].map((link, index) => (
						<motion.li
							key={index}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<Link
								href={link.href}
								className="text-gray-600 hover:text-green-900 transition"
								onClick={handleLinkClick} // Close the menu when clicked
							>
								{link.name}
							</Link>
						</motion.li>
					))}
				</motion.ul>

				{/* Mobile Menu Button */}
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="md:hidden flex items-center"
				>
					<button
						className="text-gray-600 focus:outline-none"
						aria-label="Toggle Menu"
						onClick={toggleMenu}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</motion.div>
			</div>

			{/* Mobile Menu */}
			<motion.div
				initial={{ height: 0 }}
				animate={{ height: isOpen ? "auto" : 0 }}
				transition={{ duration: 0.5 }}
				className={`md:hidden overflow-hidden bg-white shadow-md`}
			>
				<ul className="flex flex-col space-y-4 p-4">
					{[
						{ name: "Home", href: "/" },
						{ name: "About", href: "/about" },
						{ name: "Packages", href: "/packages" },
						{ name: "Events", href: "/events" },

						{ name: "Contact", href: "/contact" },
					].map((link, index) => (
						<li key={index}>
							<Link
								href={link.href}
								className="text-gray-600 hover:text-green-900 transition block"
								onClick={handleLinkClick} // Close the menu when clicked
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</motion.div>
		</motion.nav>
	);
};

export default Navbar;
