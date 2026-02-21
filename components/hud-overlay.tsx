"use client";

import { useEffect, useState } from "react";

export function HudOverlay() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toISOString().replace("T", " ").substring(0, 19) + " SYS_TICK");
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full p-4 pointer-events-none z-50 flex justify-between items-start font-mono text-[10px] sm:text-xs text-hud-cyan/80">
            {/* Top Left - System Time & Identity */}
            <div className="flex flex-col gap-1 tracking-widest uppercase">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hud-cyan animate-pulse rounded-full" />
                    <span>SYS.OP.MODE // NOMINAL</span>
                </div>
                <div>UPLINK: ACTIVE_SECURE</div>
                <div className="text-hud-cyan/50">{time || "INITIALIZING..."}</div>
                <div className="mt-4 flex flex-col gap-1 text-[8px] opacity-40">
                    <div>ENCRYPTION: AES_256_GCM</div>
                    <div>THREAT_SCAN: ZERO_TARGETS</div>
                    <div>PROTOCOL: DEFAULT_DENY</div>
                </div>
            </div>

            {/* Top Right - Status Overlay */}
            <div className="flex flex-col items-end gap-1 tracking-widest text-right">
                <div className="border border-hud-cyan/30 bg-black/40 backdrop-blur-sm p-2 flex flex-col gap-1 reticle-corners-inner">
                    <div className="flex justify-between items-center gap-4">
                        <span className="text-hud-cyan/60">CORE_STATUS</span>
                        <span className="text-hud-cyan animate-pulse-slow">NOMINAL</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <span className="text-hud-cyan/60">NEURAL_MESH</span>
                        <span className="text-hud-cyan">ACTIVE</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <span className="text-hud-cyan/60">DID_VERIFIED</span>
                        <span className="text-hud-cyan">TRUE</span>
                    </div>
                </div>

                {/* Progress bars pseudo-element */}
                <div className="mt-2 w-32 flex flex-col gap-1">
                    <div className="h-[2px] w-full bg-hud-cyan/20">
                        <div className="h-full bg-hud-cyan w-[80%]" />
                    </div>
                    <div className="h-[2px] w-full bg-hud-cyan/20">
                        <div className="h-full bg-hud-cyan w-[95%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
