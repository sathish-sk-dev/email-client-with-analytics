import React from "react";
import { Layout } from "./components/layout/Layout";
import { MailList } from "./features/mail-list/MailList";
import { MailDetails } from "./features/mail-details/MailDetails";

const App = () => (
  <Layout>
    <MailList />
    <MailDetails />
  </Layout>
);

export default App;
