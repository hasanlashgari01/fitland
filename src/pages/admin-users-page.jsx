import Loading from "../components/loading";
import Modal from "../components/modal";
import NotFoundBox from "../components/not-found-box";
import Pagination from "../components/pagination";
import { usePage } from "../context/admin-page-context";
import UserList from "../features/admin/user-list";
import { useToggleBanUser, useUsers } from "../hooks/useUser";

const AdminUsersPage = () => {
  const { page, selectedItem, isModal, deleteHandler, cancelHandler } = usePage();
  const { data, isLoading, refetch } = useUsers(page);
  const { mutate } = useToggleBanUser();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <UserList data={data} />
      <NotFoundBox data={data.data} value="کاربر" />
      <Pagination data={data} />
      <Modal title="بن" body="آیا از بن کاربر اطمینان دارید؟" isOpen={isModal} cancelHandler={cancelHandler}>
        <button className="btn" onClick={cancelHandler}>
          انصراف
        </button>
        <button className="delete-btn" onClick={() => deleteHandler({ mutate: () => mutate(selectedItem), refetch })}>
          بن
        </button>
      </Modal>
    </>
  );
};

export default AdminUsersPage;
