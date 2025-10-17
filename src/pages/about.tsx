

import React from "react";


export default function About() {
	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-gradient-to-br from-accent to-white">
			<section id="about" className="w-full max-w-3xl mx-auto px-6 lg:px-12 py-20">
				<div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl p-10 md:p-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center font-inter">Who We Are</h2>
					<p className="text-lg text-secondary mb-8 text-center font-satoshi">
						At Solarbridge Solution Limited, we’re not just a solar company, we’re energy pioneers on a mission to bring power to the edge of possibility. From the dusty roads of rural villages to the buzzing heart of industrial cities, we light up lives with the strength of the sun and the courage to push boundaries.
					</p>
					<p className="text-lg text-secondary mb-8 text-center font-satoshi">
						Founded with bold ambition and built on innovation, Solarbridge is a trailblazer in solar energy solutions, solar street lighting, and industrial lighting systems. We are bridging the gap between today’s power crisis and tomorrow’s energy independence.
					</p>
					<div className="grid md:grid-cols-2 gap-8 mb-10">
						<div className="bg-white/40 rounded-xl p-6 shadow-md text-center">
							<h3 className="text-2xl font-bold text-primary mb-2 font-inter">Our Vision</h3>
							<p className="text-base text-secondary font-satoshi">
								To lead Nigeria into a future where energy is clean, constant, and within reach of every community, business, and household.
							</p>
						</div>
						<div className="bg-white/40 rounded-xl p-6 shadow-md text-center">
							<h3 className="text-2xl font-bold text-primary mb-2 font-inter">Our Mission</h3>
							<p className="text-base text-secondary font-satoshi">
								To deliver cutting-edge solar technology and lighting solutions that empower people, protect the environment, and energize development — one project at a time.
							</p>
						</div>
					</div>
					<div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
						<div className="flex flex-col items-center text-center">
							<span className="text-secondary mb-3">
								<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
							<h3 className="font-semibold text-primary mb-1 font-inter">Solar Energy Solutions</h3>
							<p className="text-secondary/80 text-sm font-satoshi">Premium solar panels and equipment from trusted manufacturers</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<span className="text-secondary mb-3">