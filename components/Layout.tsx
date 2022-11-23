import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children?: ReactNode;
};

export const siteTitle = "stefano || Front-End Developer";

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  console.log(isSidebarOpen, "sidebar open");

  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
