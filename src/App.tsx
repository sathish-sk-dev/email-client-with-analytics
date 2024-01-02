import React from "react";
import { Layout } from "./components/layout/Layout";
import { MailList } from "./features/mail-list/MailList";
import { ComposeMail } from "./features/compose-mail/ComposeMail";
import { ProviderWrapper } from "./components/provider-wrapper/ProviderWrapper";
import { MailDetails } from "./features/mail-details/MailDetails";

const App = () => (
  <ProviderWrapper>
    <Layout>
      <MailList />
      <MailDetails />
      {/*<ComposeMail />*/}
    </Layout>
  </ProviderWrapper>
);

export default App;
