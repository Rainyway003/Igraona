import React from "react"

interface AdminButtonProps {
    text?: string
    children?: React.ReactNode
    onClick?: () => void
    className?: string
    type?: "submit" | "reset" | "button" | undefined
}

const AdminButton: React.FC<AdminButtonProps> = ({
    text,
    children,
    onClick,
    className,
    type,
}) => {


    return (
        <button
            className={`${className} w-10/12 h-12 rounded text-xl bg-[#691019] hover:bg-[#501317] transition-all`}
            onClick={onClick}
            type={type}
        >
            {children}
            {text}
        </button>
    )
}

export default AdminButton