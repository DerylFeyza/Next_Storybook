import React from "react";
import "../../styles/globals.css"

export interface Toaster {
    type: "info" | "notif";
    variant: "success" | "warning" | "danger" | "default";
    size?: "small" | "medium" | "large";
    title:string;
    message: string;
}

export const Toast:React.FC<Toaster> = ({type = "info", variant = "success", size = "medium", title="halt!!", message = "skibidi"} : Toaster) =>{
    const variantStyles = {
        success: 'bg-green-500 text-green',
        warning: 'bg-yellow-500 text-black',
        danger: 'bg-red-500 text-yellow',
        default: 'bg-white-500 text-black',
      }[variant]
    
      const sizeStyles = {
        small: 'p-2 text-sm',
        medium: 'p-4 text-base',
        large: 'p-6 text-xl',
      }[size]
    
      const typeStyles = {
        info: 'border-blue-500',
        notif: 'border-green-500',
      }[type]
      return (
        <div className={["border-4 rounded flex flex-col",variantStyles, sizeStyles, typeStyles].join(" ")}>
            <h1 className="font-semibold">{title}</h1>
            <p>{message}</p>    
        </div>
      );
}
