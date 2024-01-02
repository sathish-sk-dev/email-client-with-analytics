import React from "react";
import { Layout } from "./components/layout/Layout";
import { MailList } from "./features/mail-list/MailList";
import { ComposeMail } from "./features/compose-mail/ComposeMail";
import { ProviderWrapper } from "./components/provider-wrapper/ProviderWrapper";
import { MailDetails } from "./features/mail-details/MailDetails";
import { useApp } from "./useApp";

const App = () => {
  const { isLoading, isOpenComposeView } = useApp();

  const renderComposeView = () => {
    if (isOpenComposeView) {
      return <ComposeMail />;
    }
  };

  return (
    <ProviderWrapper>
      <Layout>
        <MailList />
        <MailDetails />
        {renderComposeView()}
      </Layout>
    </ProviderWrapper>
  );
};

export default App;
