import classes from './ColorBar.module.scss';

interface ColorBarProps {
  value: number;
}

export const ColorBar: React.FC<ColorBarProps> = ({ value }) => {
  return (
    <div className={classes.colorBar}>
      <div className={classes.colorBarFilled} style={{ width: `${value}%` }}>
        <p>{value}%</p>
      </div>
    </div>
  );
};
