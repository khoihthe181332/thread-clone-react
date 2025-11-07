import Navigation from "@/components/Navigation";
import { Outlet } from "react-router";

function DefaultLayout() {
    return (
        <div className="px-5">
            <Navigation />
            <main className="mx-auto max-w-[638px] text-white">
                <div className="flex flex-col items-center ">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default DefaultLayout;