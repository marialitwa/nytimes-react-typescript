import React from "react";
import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
      {/* Footer etc. can be included here*/}
    </>
  );
}

export default Layout;
