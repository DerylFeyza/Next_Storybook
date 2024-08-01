import React from "react";
import "../../styles/globals.css"

export interface Toaster {
    type: "info" | "notif";
    variant: "success" | "warning" | "danger" | "default";
    size?: "small" | "medium" | "large";
    title:string;
    message: string;
}

export const Toast:React.FC<Toaster> = ({type = "info", variant = "default", size = "medium", title, message} : Toaster) =>{
    const variantStyles = {
        success: 'bg-green-200 text-green-700 border-green-500',
        warning: 'bg-yellow-200 text-yellow-700 border-yellow-500',
        danger: 'bg-red-200 text-red-700 border-red-500',
        default: 'bg-white-500 text-black border-black',
      }[variant]
    
      const sizeStyles = {
        small: 'p-5 text-sm',
        medium: 'p-4 text-base',
        large: 'p-6 text-xl', 
      }[size]
    
      // const typeStyles = {
      //   info: 'border-blue-500',
      //   notif: 'border-green-500', 
      // }[type]
      return (
        <div className={["flex-col px-4 py-3 border-2 rounded-lg shadow-xl",variantStyles, sizeStyles].join(" ")}>
          <div>
            <p className="absolute top-0 right-0 mr-8 mt-5 font-semibold">X</p>
          </div>
            <h1 className="font-bold capitalize">{title}</h1>
            <p className="font-semibold capitalize">{message}</p>    
        </div>
      );
}
