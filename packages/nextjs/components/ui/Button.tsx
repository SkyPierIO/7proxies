export const Button = ({ children, onClick }) => {
  return (
    <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
      <div className="flex rounded-full border-2 border-primary p-1">
        <button
          className="btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
};
