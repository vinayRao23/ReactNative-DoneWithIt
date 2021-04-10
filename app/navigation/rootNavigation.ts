import React from "react";

export const navigationRef: any = React.createRef();

export const navigate = (name: any, params: any) => {
  navigationRef.current?.navigate(name, params);
};
