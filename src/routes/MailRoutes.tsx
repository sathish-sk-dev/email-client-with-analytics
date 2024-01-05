import React, { lazy } from "react";

// project import
// import MainLayout from 'layout/MainLayout';
import LazyLoading from "../lazy-loading/LazyLoading";
import { ComposeMail } from "../features/compose-mail/ComposeMail";
import Layout from "../components/layout/Layout";
import MailList from "../features/mail-list/MailList";
import MailDetails from "../features/mail-details/MailDetails";

// render - dashboard
// @ts-ignore
// const MailList = LazyLoading(
//   // @ts-ignore
//   lazy(() => import("../features/mail-list/MailList")),
// );
//
// // render - sample page
//
// const MailDetails = LazyLoading(
//   // @ts-ignore
//   lazy(() => import("../features/mail-details/MailDetails")),
// );

// render - utilities
// const Typography = LazyLoading(lazy(() => import('pages/components-overview/Typography')));
// const Color = LazyLoading(lazy(() => import('pages/components-overview/Color')));
// const Shadow = LazyLoading(lazy(() => import('pages/components-overview/Shadow')));
// const AntIcons = LazyLoading(lazy(() => import('pages/components-overview/AntIcons')));

export const MailRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <MailList />,
    },
    {
      path: "mail-details",
      element: <MailDetails />,
    },
    // {
    //     path: 'shadow',
    //     element: <Shadow />
    // },
    // {
    //     path: 'typography',
    //     element: <Typography />
    // },
    // {
    //     path: 'icons/ant',
    //     element: <AntIcons />
    // }
  ],
};
