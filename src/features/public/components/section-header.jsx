import { HiMiniArrowUpLeft } from "react-icons/hi2";
import { Link } from "react-router";

const SectionHeader = ({ text, linkText }) => {
  return (
    <div className="container mb-10 flex gap-5 max-sm:flex-col sm:items-center sm:justify-between">
      <div className="text-secondary-900 text-3xl font-bold">{text}</div>
      <div className="max-sm:justify-items-end">
        <Link to="/" className="flex items-center gap-2 transition-colors hover:text-blue-500">
          {linkText ?? "همه محصولات"}
          <HiMiniArrowUpLeft />
        </Link>
      </div>
    </div>
  );
};

export default SectionHeader;
