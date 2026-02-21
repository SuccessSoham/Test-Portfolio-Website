"use client"

import { useEffect, useState, useRef } from "react"
import { Terminal } from "lucide-react"

export function JarvisConsole() {
    const [logs, setLogs] = useState<string[]>([
        "[SYS] INITIALIZING J.A.R.V.I.S COMMAND CONSOLE...",
        "[SYS] ESTABLISHING SECURE CONNECTION...",
        "[SYS] CONNECTION SECURED. WAITING FOR USER INPUT OR SCROLL EVENTS."
    ]);
    const logContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Auto scroll output
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [logs]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate arbitrary milestone triggers
            if (scrollPosition > 100 && scrollPosition < 150) {
                addLogIfNew("[NAV] ACCESSING_DOSSIER... ENCRYPTED.");
            } else if (scrollPosition > windowHeight * 0.8 && scrollPosition < windowHeight * 0.8 + 50) {
                addLogIfNew("[NAV] RETRIEVING_NEURAL_CORES... OK.");
            } else if (scrollPosition > windowHeight * 1.5 && scrollPosition < windowHeight * 1.5 + 50) {
                addLogIfNew("[NAV] DECRYPTING_PROJECT_MANIFEST... STAND_BY.");
            } else if (scrollPosition > windowHeight * 2.5 && scrollPosition < windowHeight * 2.5 + 50) {
                addLogIfNew("[NAV] LOAD: QUANTUM_MASTERY_LABS... SECURE.");
            } else if (scrollPosition > windowHeight * 3.5 && scrollPosition < windowHeight * 3.5 + 50) {
                addLogIfNew("[NAV] INITIATING_CONTACT_PROTOCOLS... HANDSHAKE_INIT.");
            }
        };

        const addLogIfNew = (msg: string) => {
            setLogs(prev => {
                if (prev[prev.length - 1] === msg) return prev;
                return [...prev, msg].slice(-10); // Keep last 10
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-4 left-4 z-50 w-80 font-mono text-xs hidden md:block">
            <div className="hud-glass-card rounded-none overflow-hidden reticle-corners-inner">
                {/* Header bar */}
                <div className="bg-hud-cyan/20 border-b border-hud-cyan/50 px-2 py-1 flex justify-between items-center text-hud-cyan font-bold tracking-widest">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-3 h-3" />
                        <span>J.A.R.V.I.S._CONSOLE</span>
                    </div>
                    <span className="animate-pulse">_</span>
                </div>

                {/* Terminal output */}
                <div
                    ref={logContainerRef}
                    className="p-3 h-32 overflow-y-auto overflow-x-hidden flex flex-col gap-1 text-slate-300"
                >
                    {logs.map((log, i) => (
                        <div key={i} className="flex gap-2">
                            <span className="text-hud-cyan/50 opacity-50 shrink-0">
                                {">"}
                            </span>
                            <span className="break-words">
                                {log}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
