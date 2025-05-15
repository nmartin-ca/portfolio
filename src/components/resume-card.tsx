"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
	logoUrl: string;
	altText: string;
	title: string;
	subtitle?: string;
	href?: string;
	badges?: readonly string[];
	period: string;
	description?: React.ReactNode | string;
}
export const ResumeCard = ({
	logoUrl,
	altText,
	title,
	subtitle,
	href,
	badges,
	period,
	description,
}: ResumeCardProps) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (description) {
			e.preventDefault();
			setIsExpanded(!isExpanded);
		}
	};

	return (
		<Link
			href={href || "#"}
			className="block cursor-pointer"
			onClick={handleClick}
		>
			<Card
				className={cn(
					"flex p-2",
					// isExpanded ? "!rounded-tl-3xl !rounded-tr-3xl rounded-md" : "",
				)}
			>
				<div className="flex-none">
					<Avatar className="border size-12 m-auto bg-muted-background dark:bg-background">
						<AvatarImage
							src={logoUrl}
							alt={altText}
							className="object-contain"
						/>
						<AvatarFallback>{altText[0]}</AvatarFallback>
					</Avatar>
				</div>
				<div className="grow ml-4 items-center flex-col group">
					<CardHeader>
						<div className="flex items-end justify-between gap-x-2 text-base">
							{/* Left */}
							<div className="flex flex-col">
								<div className="inline-flex items-center gap-x-1 font-semibold leading-none text-xs sm:text-sm">
									<h3>{title}</h3>

									{description && (
										<p className="inline-flex font-normal transition-all duration-300 ease-out transform items-center text-muted-foreground group-hover:font-bold">
											<span className="text-xs">details</span>
											<ChevronRightIcon
												className={cn(
													"size-4 transition-all duration-300 ease-out",
													isExpanded ? "rotate-90" : "rotate-0",
												)}
											/>
										</p>
									)}
								</div>
								{subtitle && (
									<p className="font-sans text-xs text-muted-foreground mt-0.5">
										{subtitle}
									</p>
								)}
							</div>
							{/* Right */}
							<div className="flex flex-none items-center justify-end">
								<p className="text-xs sm:text-sm tabular-nums text-muted-foreground">
									{period}
								</p>
							</div>
						</div>
					</CardHeader>
					{description && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: isExpanded ? 1 : 0,

								height: isExpanded ? "auto" : 0,
							}}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mt-2 -ml-4 leading-normal text-pretty text-xs sm:text-sm"
						>
							{description}
						</motion.div>
					)}
				</div>
			</Card>
		</Link>
	);
};
