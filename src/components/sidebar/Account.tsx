import React, { useEffect, useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router";

export const Account = () => {

  const navigate = useNavigate()

  const LogOut = async () => {
    await auth.signOut()
    localStorage.removeItem("token")
    navigate('/admin/login')
  }


  return (
    <div className="sticky top-[calc(100vh_-_48px_-_16px)] w-[15.6rem] flex-col h-[20px] border-t mt-[-12px] px-2 p-2 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between pt-2.5">
        <button className="flex items-center justify-center bg-[#6b151c] hover:bg-[#5f161c] gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color]" onClick={LogOut}>
          <IoLogOutOutline className="text-2xl" />

          Odjavi se
        </button>
      </div>
    </div>
  );
};