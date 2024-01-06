import React from "react";
import { ComposeMail } from "./features/compose-mail/ComposeMail";
import { ProviderWrapper } from "./components/provider-wrapper/ProviderWrapper";
import { useApp } from "./useApp";
import { ViewType } from "./enums/ViewType";
import { Analytics } from "./features/analytics/Analytics";
import MailList from "./features/mail-list/MailList";
import MailDetails from "./features/mail-details/MailDetails";
import Layout from "./features/layout/Layout";

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
      {/*<Layout>{renderContainer()}</Layout>*/}
    </ProviderWrapper>
  );
};

export default App;
