import { inject, observer } from "mobx-react";
import React from "react";

const MainContainer = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export default inject("store")(observer(MainContainer));
