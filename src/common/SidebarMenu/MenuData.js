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
  AppMobile,
  CodeApiState,
  CodeProductState,
  Data2,
  Driver,
  Gateway,
  InfoCurly,
  MouseSquare,
  Profile2User,
  Setting2,
  Setting3,
  Shapes,
  SheildDeny,
  SheildSearch,
  SheildUser
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
    getItem("Advance Policies", "advancepolicies", <SheildSearch />),
    getItem("Application Policies", "applicationpolicies", <AppMobile />),
    getItem("Subscription Policies", "subscriptionpolicies", <SubscriptionIcon />),
    getItem("Custom Policies", "custompolicies", <DocumentIcon />),
    getItem("Deny Policies", "denypolicies", <SheildDeny />),
  ]),
  getItem("Gateways", "gateways", <Gateway />),
  getItem("API Categories", "/dashboard/apicategories", <Shapes />),
  getItem("Key Managers", "keymanagers", <SheildUser />),
  getItem("Tasks", "sub2", null, [
    getItem("User Creation", "9", <Profile2User />),
    getItem("Application Creation", "10", <Driver />),
    getItem("Subscription Creation", "11", <MouseSquare />),
    getItem("Subscription Update", "12", <InfoCurly />),
    getItem("Application Registration", "13", <ApiKeyIcon />),
    getItem("API State Change", "14", <CodeApiState />),
    getItem("Api Product State Change", "15", <CodeProductState />),
  ]),
  getItem("Settings", "sub3", null, [
    getItem("Application", "17", <Setting2 />),
    getItem("Scope Arrangements", "18", <Data2 />),
    getItem("Advanced", "19", <Setting3 />),
  ]),
];
