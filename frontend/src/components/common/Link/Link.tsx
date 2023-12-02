import classes from "./Link.module.scss";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = (props) => {
  return (
    <a href={props.to} className={classes.Link}>
      {props.children}
    </a>
  );
};
