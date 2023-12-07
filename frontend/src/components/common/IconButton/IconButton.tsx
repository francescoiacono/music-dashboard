interface IconButton extends React.HTMLAttributes<HTMLButtonElement> {
  icon: string;
}

export const IconButton: React.FC<IconButton> = (props) => {
  const { icon, className } = props;
  return (
    <button {...props} className={`material-symbols-outlined ${className}`}>
      {icon}
    </button>
  );
};
