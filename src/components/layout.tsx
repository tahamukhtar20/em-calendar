import React from "react";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}
function Layout(props: Props) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
