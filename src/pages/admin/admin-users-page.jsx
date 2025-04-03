import Loading from "../../components/loading";
import Modal from "../../components/modal";
import Pagination from "../../components/pagination";
import { usePage } from "../../context/admin-page-context";
import UserList from "../../features/admin/user-list";
import useTitle from "../../hooks/useTitle";
import { useToggleBanUser, useUsers } from "../../hooks/useUser";

const AdminUsersPage = () => {
  useTitle("پنل ادمین - کاربران");
  const { page, selectedItem, isModal, deleteHandler, cancelHandler } = usePage();
  const { data, isLoading, refetch } = useUsers(page);
  const { mutate } = useToggleBanUser();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <UserList data={data} />
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
