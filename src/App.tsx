import React from "react";
import { Layout } from "./components/layout/Layout";
import { MailList } from "./features/mail-list/MailList";
import { MailDetails } from "./features/mail-details/MailDetails";
import { ComposeMail } from "./features/compose-mail/ComposeMail";

const App = () => (
  <Layout>
    <MailList />
    {/*<MailDetails />*/}
    <ComposeMail />
  </Layout>
);

export default App;
