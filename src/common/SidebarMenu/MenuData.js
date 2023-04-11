import {
  OverViewIcon,
  SubscriptionIcon,
  ApiKeyIcon,
  OuathTokenIcon,
  SandboxKeyIcon,
  ProductionKeysIcon,
  CommentIcon,
  SdkIcon,
  DocumentIcon,
} from "../../assets/index";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const ApiMenu = [
  getItem("Overview", "/api/overview", <OverViewIcon />),
  getItem("Subscriptions", "/api/subscription", <SubscriptionIcon />),
  getItem("Try Out", "/api/tryout", <SandboxKeyIcon />),
  getItem("Comments", "/api/comments", <CommentIcon />),
  getItem("Documentation", "/api/documentation", <DocumentIcon />),
  getItem("SDKs", "/api/sdks", <SdkIcon />),

];
export const ApplicationMenu = [
  getItem("Overview", "/application/overview", <OverViewIcon />),
  getItem("Production Keys", "/application/productionkeys", <ProductionKeysIcon />),
  getItem("OAuth2 Tokens", "/application/productionOauth2tokens", <OuathTokenIcon />),
  getItem("API Keys", "/application/productionapikeys", <ApiKeyIcon />),
  getItem("Sandbox Keys", "/application/sandboxkeys", <SandboxKeyIcon />),
  getItem("Oauth2 Tokens", "/application/sandboxOauth2tokens", <OuathTokenIcon />),
  getItem("API Keys", "/application/sandboxapikeys", <ApiKeyIcon />),
  getItem("Subscription", "/application/subscription", <SubscriptionIcon />),

];
export const DashboardMenu = [
  getItem("Dashboard", "dashboard", <OverViewIcon />),
  getItem("Rate Limiting Policies", "sub1", null, [
    getItem("Advance Policies", "advancepolicies", <OverViewIcon />),
    getItem("Application Policies", "applicationpolicies", <OverViewIcon />),
    getItem("Subscription Policies", "subscriptionpolicies", <OverViewIcon />),
    getItem("Custom Policies", "custompolicies", <OverViewIcon />),
    getItem("Deny Policies", "denypolicies", <OverViewIcon />),
  ]),
  getItem("Gateways", "gateways", <OverViewIcon />),
  getItem("API Categories", "apicategories", <OverViewIcon />),
  getItem("Key Managers", "keymanagers", <OverViewIcon />),
  getItem("Tasks", "sub2", null, [
    getItem("User Creation", "9", <OverViewIcon />),
    getItem("Application Creation", "10", <OverViewIcon />),
    getItem("Subscription Creation", "11", <OverViewIcon />),
    getItem("Subscription Update", "12", <OverViewIcon />),
    getItem("Application Registration", "13", <OverViewIcon />),
    getItem("API State Change", "14", <OverViewIcon />),
    getItem("Api Product State Change", "15", <OverViewIcon />),
  ]),
  getItem("Settings", "sub3", null, [
    getItem("Application", "17", <OverViewIcon />),
    getItem("Scope Arrangements", "18", <OverViewIcon />),
    getItem("Advanced", "19", <OverViewIcon />),
  ]),
];
