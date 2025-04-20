import { useState } from "react";
import { HiChatBubbleLeftRight, HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import Button from "../../../components/button";
import NewComment from "./new-comment";
import TopSection from "./top-section";

const TopComment = ({ slug }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <TopSection text="نظرات" icon={<HiChatBubbleLeftRight className="size-9.5 text-red-500" />}>
        <Button
          text="ایجاد نظر"
          onClick={() => setIsShow(true)}
          icon={<HiOutlineChatBubbleBottomCenterText className="size-5" />}
        />
      </TopSection>
      <NewComment slug={slug} isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default TopComment;
