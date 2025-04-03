import { useState } from "react";
import { useSearchParams } from "react-router";
import Dropdown from "../../components/dropdown";
import Loading from "../../components/loading";
import NotFoundBox from "../../components/not-found-box";
import Pagination from "../../components/pagination";
import { usePage } from "../../context/admin-page-context";
import Comment from "../../features/admin/components/comment";
import { useComments } from "../../hooks/useComment";
import useTitle from "../../hooks/useTitle";

const commentStatus = [
  { id: 1, title: "همه نظرات", value: "ALL" },
  { id: 2, title: "فعال", value: 1 },
  { id: 3, title: "غیرفعال", value: 0 },
];

const AdminCommentsPage = () => {
  useTitle("پنل ادمین - نظرات");
  const [searchParams] = useSearchParams();
  const { page } = usePage();
  const [status, setStatus] = useState("ALL");
  const [sort] = useState(searchParams.get("sort"));
  const { data, isLoading, refetch } = useComments(page, status, sort);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex justify-between">
        <Dropdown data={commentStatus} status={status} setStatus={setStatus} isShowAll={false} />
      </div>
      <div className="h-[73dvh]">
        <table className="table-container mt-8 table-auto">
          <thead>
            <tr>
              <th className="table-header">متن</th>
              <th className="table-header">کاربر</th>
              <th className="table-header">امتیاز</th>
              <th className="table-header">وضعیت</th>
              <th className="table-header">عملیات</th>
            </tr>
          </thead>
          <tbody className="fade-in">
            {data?.data?.length !== 0 &&
              data?.data?.map((comment) => <Comment key={comment._id} refetch={refetch} {...comment} />)}
          </tbody>
        </table>
        <NotFoundBox data={data.data} value="کامنت" />
      </div>
      <Pagination data={data} />
    </div>
  );
};

export default AdminCommentsPage;
