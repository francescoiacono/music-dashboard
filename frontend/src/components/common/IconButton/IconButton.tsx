interface IconButton extends React.HTMLAttributes<HTMLElement> {
  iconName: string;
}

export const IconButton: React.FC<IconButton> = (props) => {
  const { iconName, className } = props;
  return (
    <button {...props} className={`material-symbols-outlined ${className}`}>
      {iconName}
    </button>
  );
};
