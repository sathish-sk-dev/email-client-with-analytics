import React from "react";
import { Layout } from "./components/layout/Layout";
import { MailList } from "./features/mail-list/MailList";
import { ComposeMail } from "./features/compose-mail/ComposeMail";
import { ProviderWrapper } from "./components/provider-wrapper/ProviderWrapper";
import { MailDetails } from "./features/mail-details/MailDetails";
import { useApp } from "./useApp";
import { ViewType } from "./enums/ViewType";
import { Analytics } from "./features/analytics/Analytics";

const App = () => {
  const {
    isLoading,
    selectedViewType,
    canShowModuleDetailsView,
    isOpenComposeView,
  } = useApp();

  const renderAnalytics = () => {
    return <Analytics />;
  };

  const renderMailList = () => {
    return (
      <>
        <MailList />
        {canShowModuleDetailsView && <MailDetails />}
        {isOpenComposeView && <ComposeMail />}
      </>
    );
  };

  const renderContainer = () => {
    if (selectedViewType === ViewType.ANALYTICS) {
      return renderAnalytics();
    }
    return renderMailList();
  };

  return (
    <ProviderWrapper>
      <Layout>{renderContainer()}</Layout>
    </ProviderWrapper>
  );
};

export default App;
