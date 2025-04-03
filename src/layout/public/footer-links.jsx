import { Link } from "react-router";

const FooterLinks = ({ data }) => {
  const { links } = data;

  return (
    <div>
      <h1 className="font-bold">{data.title}</h1>
      <ul className="mt-6 space-y-4">
        {links.length &&
          links.map((link) => (
            <li key={link.path}>
              <Link to="/">{link.text}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
