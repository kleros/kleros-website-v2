import clsx from "clsx";

interface ITag {
  text: string;
  selected?: boolean;
  className?: string;
}
const Tag: React.FC<ITag> = ({ text, selected, className }) => {
  return (
    <div
      className={clsx(
        "rounded-full px-6 py-2 text-center text-sm",
        "lg:px-8 lg:py-4 lg:text-base",
        selected
          ? "bg-primary-purple text-lg text-white"
          : "border-gradient-purple-blue text-secondary-text text-lg",
        className,
      )}
    >
      {text}
    </div>
  );
};

export default Tag;
