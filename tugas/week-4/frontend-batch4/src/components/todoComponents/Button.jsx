export default function Button({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "",
  ...props 
}) {
  const baseClasses = "px-4 py-2 font-medium rounded transition-colors duration-200";
  
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    danger: "bg-red-500 text-white hover:bg-red-700"
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;
  
  return (
    <button 
      onClick={onClick} 
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}