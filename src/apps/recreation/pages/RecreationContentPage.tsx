import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecreationAPI, { RecreationResponse } from "../../../api/api.topicpost.net/recreation";
import { RecreationContentTemplate, RecreationContentTemplateProps } from "../templates/RecreationContentTemplate";

export const RecreationContentPage: React.FC = () => {
  const prams = useParams<{ id: string }>();
  console.log(prams.id);
  const id = prams.id;

  const [recreationContentTemplateProps, setRecreationContentTemplateProps] = useState<RecreationContentTemplateProps>();
  useEffect(() => {
    const recreation = new RecreationAPI();
    recreation.getByRecreationID(id).then((response: RecreationResponse) => {
      console.log("response", response);
      setRecreationContentTemplateProps({
        res: response
      });
    }).catch((error: any) => {
      console.error(error);
    });
    console.log("useEffect", id);
  }, []);

  return (
    <RecreationContentTemplate
      res={recreationContentTemplateProps?.res}
    />
  );
}
