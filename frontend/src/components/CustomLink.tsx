import Link from "next/link";

interface ICustomLink extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
}

const CustomLink: React.FC<ICustomLink> = ({ children, href, ...props }) => (
  <Link
    {...{ href }}
    {...props}
    {...(isExternal(href.toString())
      ? { target: "_blank", rel: "noopener noreferrer" }
      : undefined)}
  >
    {children}
  </Link>
);

const isExternal = (url: string) => /^https?:\/\//.test(url);

export default CustomLink;
