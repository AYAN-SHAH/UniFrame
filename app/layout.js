import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import ProgressProvider from "./components/ProgressProvider";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "UNI-FRAME",
	description: "developed ayan shah",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<AnimatePresence mode="wait">
					<ProgressProvider>{children}</ProgressProvider>
				</AnimatePresence>
				<Footer />
			</body>
		</html>
	);
}
