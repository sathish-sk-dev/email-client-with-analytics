import React, { useCallback } from "react";
import { ComposeMail } from "./features/compose-mail/ComposeMail";
import { ProviderWrapper } from "./components/provider-wrapper/ProviderWrapper";
import { useApp } from "./useApp";
import { Analytics } from "./features/analytics/Analytics";
import MailList from "./features/mail-list/MailList";
import MailDetails from "./features/mail-details/MailDetails";
import Layout from "./features/layout/Layout";

const App = () => {
  const { canShowMailDetailsView, canShowAnalytics, isOpenComposeView } =
    useApp();

  const renderContainer = useCallback(() => {
    switch (true) {
      case canShowMailDetailsView:
        return <MailDetails />;
      case canShowAnalytics:
        return <Analytics />;
      default:
        return <MailList />;
    }
  }, [canShowAnalytics, canShowMailDetailsView]);

  return (
    <ProviderWrapper>
      <Layout canShowMailDetailsView={canShowMailDetailsView}>
        {renderContainer()}
        {isOpenComposeView && <ComposeMail />}
      </Layout>
    </ProviderWrapper>
  );
};

export default App;
