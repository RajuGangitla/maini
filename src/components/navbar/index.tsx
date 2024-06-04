"use client";
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

    const toggleServices = () => setIsServicesOpen(!isServicesOpen);
    const toggleIndustries = () => setIsIndustriesOpen(!isIndustriesOpen);
    const services = [
        "Cloud Implementaion",
        "Oracle Cloud Erp",
        "Oracle Cloud SCM",
        "Oracle Cloud HCM",
        "Oracle Cloud Erp",
        "Oracle Cloud Erp"
    ];

    const industries = [
        "Construction",
        "Health Care",
        "High Tech",
        "Life sciences",
        "Manufacturing",
        "Retail"
    ];

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className="sticky z-10 h-[100px] flex items-center justify-between px-8  lg:px-16 lg:py-8 shadow-md">
                {/* Logo */}
                <img src="https://mainillc.com/images/maini-new-logo.png" className="h-8" alt="Logo" />

                {/* Options */}
                <div className="hidden lg:flex items-center justify-between gap-8 ">
                    <div className="group">
                        <p className="group-hover:text-mainColor text-lg cursor-pointer">Home</p>
                        <div className="mx-2 duration-500 border-b-2 opacity-0 border-mainColor group-hover:opacity-100 "></div>
                    </div>
                    <div className="relative group">
                        <p className="group-hover:text-mainColor text-lg cursor-pointer">Services</p>
                        <div className="mx-2 duration-500 border-b-2 opacity-0 border-mainColor group-hover:opacity-100"></div>
                        {/* Card with options */}
                        <div className="invisible absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <ul className="py-2">
                                {services.map((option, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="group">
                        <p className="group-hover:text-mainColor text-lg cursor-pointer">About us</p>
                        <div className="mx-2 duration-500 border-b-2 opacity-0 border-mainColor group-hover:opacity-100 "></div>
                    </div>
                    <div className="group">
                        <p className="group-hover:text-mainColor text-lg cursor-pointer">Career</p>
                        <div className="mx-2 duration-500 border-b-2 opacity-0 border-mainColor group-hover:opacity-100 "></div>
                    </div>
                    <div className="relative group">
                        <p className="group-hover:text-mainColor text-lg cursor-pointer">Industries</p>
                        <div className="mx-2 duration-500 border-b-2 opacity-0 border-mainColor group-hover:opacity-100 "></div>
                        <div className="invisible absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <ul className="py-2">
                                {industries.map((option, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="group">
                        <p className="group-hover:text-mainColor text-lg cursor-pointer">Contact us </p>
                        <div className="mx-2 duration-500 border-b-2 opacity-0 border-mainColor group-hover:opacity-100 "></div>
                    </div>
                </div>

                <div className="block lg:hidden">
                    <IoReorderThree size={32} className="cursor-pointer" onClick={toggleSidebar} />
                </div>
            </div>

            {/* Sidebar for mobile */}
            <div className={`fixed top-0 left-0 h-full max-h-screen overflow-y-auto w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
                <div className="p-4">
                    <div className="my-4">
                        <p className="text-lg font-semibold">Home</p>
                    </div>
                    <div className="my-4">
                        <div className="flex items-center justify-between cursor-pointer" onClick={toggleServices}>
                            <p className="text-lg font-semibold">Services</p>
                            <span>{isServicesOpen ? '-' : '+'}</span>
                        </div>
                        {isServicesOpen && (
                            <ul className="mt-2">
                                {services.map((service, idx) => (
                                    <li key={idx} className="py-2 cursor-pointer hover:bg-gray-100">
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="my-4">
                        <p className="text-lg font-semibold">About us</p>
                    </div>
                    <div className="my-4">
                        <p className="text-lg font-semibold">Careers</p>
                    </div>
                    <div className="my-4">
                        <div className="flex items-center justify-between cursor-pointer" onClick={toggleIndustries}>
                            <p className="text-lg font-semibold">Industries</p>
                            <span>{isIndustriesOpen ? '-' : '+'}</span>
                        </div>
                        {isIndustriesOpen && (
                            <ul className="mt-2">
                                {industries.map((industry, idx) => (
                                    <li key={idx} className="py-2 cursor-pointer hover:bg-gray-100">
                                        {industry}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}