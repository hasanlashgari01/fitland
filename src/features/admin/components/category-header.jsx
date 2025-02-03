import Dropdown from "../../../components/dropdown";
import Button from "./button";

const data = [
  { id: 1, title: "همه دسته بندی ها", value: "ALL" },
  { id: 2, title: "فعال", value: 1 },
  { id: 3, title: "غیرفعال", value: 0 },
];

const CategoryHeader = ({ status, setStatus, setIsShowForm }) => {
  return (
    <div className="flex items-center justify-between">
      <Dropdown data={data} status={status} setStatus={setStatus} />
      <Button status="add" title="دسته بندی" action={() => setIsShowForm(true)} />
    </div>
  );
};

export default CategoryHeader;
