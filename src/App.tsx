import React, { useCallback } from "react";
import { ComposeMail } from "./features/compose-mail/ComposeMail";
import { ProviderWrapper } from "./components/provider-wrapper/ProviderWrapper";
import { useApp } from "./useApp";
import { ViewType } from "./enums/ViewType";
import { Analytics } from "./features/analytics/Analytics";
import MailList from "./features/mail-list/MailList";
import MailDetails from "./features/mail-details/MailDetails";
import Layout from "./features/layout/Layout";

const App = () => {
  const { canShowModuleDetailsView, canShowAnalytics, isOpenComposeView } =
    useApp();

  const renderContainer = useCallback(() => {
    switch (true) {
      case canShowModuleDetailsView:
        return <MailDetails />;
      case canShowAnalytics:
        return <Analytics />;
      default:
        return <MailList />;
    }
  }, [canShowAnalytics, canShowModuleDetailsView]);

  return (
    <ProviderWrapper>
      <Layout>
        {renderContainer()}
        {isOpenComposeView && <ComposeMail />}
      </Layout>
    </ProviderWrapper>
  );
};

export default App;
