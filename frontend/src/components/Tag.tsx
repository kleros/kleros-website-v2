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
        "rounded-full px-8 py-4 text-center",
        selected
          ? "bg-primary-purple text-lg text-white"
          : "border-gradient-purple-blue text-lg text-secondary-text",
        className,
      )}
    >
      {text}
    </div>
  );
};

export default Tag;
