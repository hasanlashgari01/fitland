import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router";

const AdminPageContext = createContext();

const AdminPageProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const [isForm, setIsForm] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const page = searchParams.get("page");

  return (
    <AdminPageContext.Provider value={{ page, isForm, setIsForm, isModal, setIsModal, selectedItem, setSelectedItem }}>
      {children}
    </AdminPageContext.Provider>
  );
};

export const usePage = () => {
  const { page, isForm, setIsForm, isModal, setIsModal, selectedItem, setSelectedItem } = useContext(AdminPageContext);

  const showCreateFormHander = () => setIsForm(true);

  const showUpdateFormHandler = (id) => {
    setSelectedItem(id);
    setIsForm(true);
  };

  const showModalHandler = (id) => {
    setSelectedItem(id);
    setIsModal(true);
  };

  const deleteHandler = ({ mutate, refetch }) => {
    mutate(selectedItem);
    setIsModal(false);
    setTimeout(() => {
      refetch();
    }, 100);
  };

  const cancelHandler = () => {
    setSelectedItem(null);
    setIsModal(false);
    setIsForm(false);
  };

  return {
    page,
    isForm,
    isModal,
    selectedItem,
    showCreateFormHander,
    showUpdateFormHandler,
    showModalHandler,
    deleteHandler,
    cancelHandler,
  };
};

export default AdminPageProvider;
