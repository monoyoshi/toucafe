"use client";

import { useWakeLock } from "react-screen-wake-lock";

export function WakeLocker() {
    const { isSupported, released, request, release } = useWakeLock({
        reacquireOnPageVisible: true,
    });

    if (isSupported) {
        return (
        <div className="flexcenter" id="wakelocker">
            <label htmlFor="wakelock" style={{marginRight: "1rem"}} >keep the screen on</label>
            <input id="wlcheckbox" type="checkbox" name="wakelock" defaultChecked={false} onChange={() => (released == false ? release() : request())} />
        </div>
    );
    }
    else return;
};

export default function RecipeLayout({ children }) {
    return (
        <>
        {children}
        </>
    )
};