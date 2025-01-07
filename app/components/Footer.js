// components/Footer.js

import React from "react";
import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaClock,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-green-900 text-white">
			<div className="footer-container flex flex-wrap justify-between p-8">
				<div className="footer-section w-full sm:w-1/2 md:w-1/4 p-4">
					<h3 className="text-xl font-bold mb-4">
						<FaMapMarkerAlt className="inline mr-2" />
						ADDRESS
					</h3>
					<p>pk,</p>
					<p>pakistan,</p>
					<p>pakistan.</p>
				</div>
				<div className="footer-section w-full sm:w-1/2 md:w-1/4 p-4">
					<h3 className="text-xl font-bold mb-4">
						<FaPhoneAlt className="inline mr-2" />
						PHONE
					</h3>
					<p>Business Enquiries: +222222</p>
					<p>Reception: +222222</p>
					<p>Customer Service/Complaints: +2222</p>
				</div>
				<div className="footer-section w-full sm:w-1/2 md:w-1/4 p-4">
					<h3 className="text-xl font-bold mb-4">
						<FaEnvelope className="inline mr-2" />
						CONTACTS
					</h3>
					<p>
						<a href="#" className="text-blue-300 hover:underline">
							WWW.uniframe.com
						</a>
					</p>
					<p>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-300 hover:underline"
						>
							WWW.uniframe.com
						</a>
					</p>
				</div>
				<div className="footer-section w-full sm:w-1/2 md:w-1/4 p-4">
					<h3 className="text-xl font-bold mb-4">
						<FaClock className="inline mr-2" />
						WORKING HOURS
					</h3>
					<p>Monday-Friday: 8:30 – 17:30</p>
					<p>Saturday: 8:30 – 12:30</p>
					<p>Sunday: Closed</p>
				</div>
			</div>
			<div className="footer-bottom bg-green-950 text-center py-4">
				<p>
					© 2025 All Rights Reserved. Design and Developed by{" "}
					<strong>DEV</strong>.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
