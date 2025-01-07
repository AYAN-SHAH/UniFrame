"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Optional: Customize NProgress
NProgress.configure({ showSpinner: false }); // Disable spinner

const ProgressProvider = ({ children }) => {
	const pathname = usePathname(); // Get current pathname
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!pathname) return; // Ensure pathname is defined

		// Start progress when pathname changes
		NProgress.start();
		setLoading(true);

		// Simulate delay to show progress (you can skip this if backend handles loading state)
		const timeout = setTimeout(() => {
			NProgress.done();
			setLoading(false);
		}, 500);

		return () => clearTimeout(timeout);
	}, [pathname]); // Dependency on pathname changes

	return <>{children}</>;
};

export default ProgressProvider;
