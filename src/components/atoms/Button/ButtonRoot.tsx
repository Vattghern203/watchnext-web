import React from 'react';

interface ButtonRootProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "ghost" | "cta" | "secondary" | "primary" | "default";
  children?: React.ReactNode;
}

const buttonVariants: Record<ButtonRootProps["variant"], string> = {
  ghost: 'bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white',
  cta: 'bg-indigo-500 text-white hover:bg-indigo-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  primary: 'bg-emerald-500 text-white hover:bg-emerald-600',
  default: 'bg-slate-200 text-black hover:bg-slate-300',
};

function ButtonRoot({ children, variant = "default", ...rest }: ButtonRootProps) {
  return (
    <button
      className={`rounded-md py-1 px-10 transition-colors duration-300 ${
        buttonVariants[variant]
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonRoot;
