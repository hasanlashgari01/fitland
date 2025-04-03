import { useEffect, useState } from "react";
import Input from "../../../components/input";
import { getMe } from "../../../services/user";
import Button from "../../../components/button";

const NewComment = () => {
  const [isShow, setIsShow] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getMe();

      setUser(data.fullName);
    };

    fetchUser();
  }, [isShow]);

  return (
    <div>
      <Button text="ثبت نظر" onClick={() => setIsShow(true)} />
      {isShow && (
        <>
          {user}
          <Input />
        </>
      )}
    </div>
  );
};

export default NewComment;
