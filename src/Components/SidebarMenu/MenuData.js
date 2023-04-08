import OverViewIcon from "../../assets/icons/overview-icon.svg";
import subscriptionIcon from "../../assets/icons/subscription-icon.svg";
import apiKeyIcon from "../../assets/icons/apikey-icon.svg";
import OuathTokenIcon from "../../assets/icons/OuathToken-icon.svg";
import SandboxKeyIcon from "../../assets/icons/sandboxkey-icon.svg";
import ProductionKeysIcon from "../../assets/icons/productionKeys-icon.svg";
import commentsIcon from "../../assets/icons/comments.svg";
import SdkIcon from "../../assets/icons/sdk.svg";
import documentIcon from "../../assets/icons/document.svg";

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

export const ApiMenu = [
    getItem(
      "Overview",
      "/api/overview",
      <img src={OverViewIcon} alt="Overview" />
    ),
    getItem(
      "Subscriptions",
      "/api/subscription",
      <img src={subscriptionIcon} alt="subscriptionIcon" />
    ),
    getItem(
      "Try Out",
      "/api/tryout",
      <img src={SandboxKeyIcon} alt="SandboxKeyIcon" />
    ),
    getItem(
      "Comments",
      "/api/comments",
      <img src={commentsIcon} alt="commentsicon" />
    ),
    getItem(
      "Documentation",
      "/api/documentation",
      <img src={documentIcon} alt="documentIcon" />
    ),
    getItem("SDKs", "/api/sdks", <img src={SdkIcon} alt="sdk" />),
  ];

export const ApplicationMenu = [
    getItem(
      "Overview",
      "/application/overview",
      <img src={OverViewIcon} alt="Overview" />
    ),
    getItem(
      "Production Keys",
      "/application/productionkeys",
      <img src={ProductionKeysIcon} alt="ProductionKeysIcon" />
    ),
    getItem(
      "OAuth2 Tokens",
      "/application/productionOauth2tokens",
      <img src={OuathTokenIcon} alt="OuathTokenIcon" />
    ),
    getItem(
      "API Keys",
      "/application/productionapikeys",
      <img src={apiKeyIcon} alt="apiKeyIcon" />
    ),
    getItem(
      "Sandbox Keys",
      "/application/sandboxkeys",
      <img src={SandboxKeyIcon} alt="SandboxKeyIcon" />
    ),
    getItem(
      "Oauth2 Tokens",
      "/application/sandboxOauth2tokens",
      <img src={OuathTokenIcon} alt="OuathTokenIcon" />
    ),
    getItem(
      "API Keys",
      "/application/sandboxapikeys",
      <img src={apiKeyIcon} alt="apiKeyIcon" />
    ),
    getItem(
      "Subscription",
      "/application/subscription",
      <img src={subscriptionIcon} alt="subscriptionIcon" />
    ),
  ];