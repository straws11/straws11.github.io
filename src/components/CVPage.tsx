import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faCode, faProjectDiagram, faBriefcase, faGraduationCap, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechSkills from "./TechSkills";
import GitHubContent from "./GitHubContent";
import Experience from "./Experience";
import Education from "./Education";
import About from "./About";

const tabs = [
    { id: "About", icon: faInfo },
    { id: "Skills", icon: faCode },
    { id: "Projects", icon: faProjectDiagram },
    { id: "Experience", icon: faBriefcase },
    { id: "Education", icon: faGraduationCap },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function CVPage() {
    const [activeTab, setActiveTab] = useState<TabId>("Skills");

    const handleKey = (e: KeyboardEvent) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
        if (e.key === "ArrowRight") {
            const next = tabs[(currentIndex + 1) % tabs.length];
            setActiveTab(next.id);
        } else if (e.key === "ArrowLeft") {
            const prev = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
            setActiveTab(prev.id);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    });

    const renderTabContent = () => {
        switch (activeTab) {
            case "About": return <About />;
            case "Skills": return <TechSkills />;
            case "Projects": return <GitHubContent />;
            case "Experience": return <Experience />;
            case "Education": return <Education />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-16">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 mt-8 relative">
                {tabs.map((tab) => {
                    const isActive = tab.id === activeTab;
                    return (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-6 py-3 flex items-center gap-2 text-sm sm:text-base font-semibold backdrop-blur-md rounded-full border transition-all
              ${isActive
                                    ? "text-white bg-cyan-600 shadow-xl scale-105"
                                    : "bg-white text-cyan-400 border-cyan-600 hover:bg-slate-700 hover:shadow-md"
                                }`}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FontAwesomeIcon icon={tab.icon} />
                            {tab.id}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-full bg-cyan-600 z-[-1]"
                                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-slate-800 shadow-2xl border bordes-slate-700 rounded-3xl p-8"
                    >
                        {renderTabContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
