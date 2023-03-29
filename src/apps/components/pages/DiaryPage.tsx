import React from "react";
import SidebarPage from "./SidebarPage";
import DiaryContent from "../../../core/components/organisms/DiaryContent";

const Diary: React.FC = () => {
  return (
    <div>
      <SidebarPage />
      <DiaryContent />
    </div>
  );
}

export default Diary;
