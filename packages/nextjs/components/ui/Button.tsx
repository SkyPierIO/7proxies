import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
      <div className="flex rounded-full border-2 border-primary p-1">
        <button
          className={clsx(
            "btn btn-primary rounded-full capitalize font-normal font-white flex items-center gap-1 hover:gap-2 transition-all tracking-widest",
            className,
          )}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
};
