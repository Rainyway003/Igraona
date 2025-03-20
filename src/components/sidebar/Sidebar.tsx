import React from "react";
import { RouteSelect } from "./RouteSelect";
import { AccountToggle } from "./AccountToggle";
import { Account } from "./Account";

export const Sidebar = () => {


    return (
        <div className="bg-[#1f1f1f] p-4 sticky h-full">
            <div className=" sticky top-4 h-[calc(100vh-32px-48px)]">
                <AccountToggle></AccountToggle>
                <RouteSelect></RouteSelect>
                <Account></Account>
            </div>

        </div>
    )
}