import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router";

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
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  const { page, isForm, setIsForm, isModal, setIsModal, selectedItem, setSelectedItem } = useContext(AdminPageContext);

  useEffect(() => {
    if (location.pathname !== prevPathname) {
      cancelHandler();
      setPrevPathname(location.pathname);
    }
  }, [location.pathname]);

  const showCreateFormHander = () => setIsForm(true);

  const showUpdateFormHandler = (id) => {
    setSelectedItem(id);
    setIsForm(true);
  };

  const showModalHandler = (id) => {
    setSelectedItem(id);
    setIsModal(true);
  };

  const deleteHandler = ({ mutate, refetch, redirect }) => {
    console.log(selectedItem)
    mutate(selectedItem);
    if (refetch) {
      setTimeout(() => {
        refetch();
      }, 100);
    }
    if (redirect) {
      setTimeout(() => {
        redirect();
      }, 200);
    }
    setIsModal(false);
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
