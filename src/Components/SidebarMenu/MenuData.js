import {
  OverViewIcon,
  OverViewActiveIcon,
  SubscriptionIcon,
  SubActiveIcon,
  ApiKeyIcon,
  ApiKeyActiveIcon,
  OuathTokenIcon,
  OuathTokenActiveIcon,
  SandboxKeyIcon,
  SandboxKeyActiveIcon,
  ProductionKeysIcon,
  ProductionKeysActiveIcon,
  CommentIcon,
  CommentActiveIcon,
  SdkIcon,
  SdkActiveIcon,
  DocumentIcon,
  DocumentActiveIcon,
} from "../../assets/index";

export const ApiMenu = [
  {
    key: "/api/overview",
    label: "Overview",
    icon: <OverViewIcon />,
    activeIcon: <OverViewActiveIcon />,
    children: null,
  },
  {
    key: "/api/subscription",
    label: "Subscriptions",
    icon: <SubscriptionIcon />,
    activeIcon: <SubActiveIcon />,
    children: null,
  },
  {
    key: "/api/tryout",
    label: "Try Out",
    icon: <SandboxKeyIcon />,
    activeIcon: <SandboxKeyActiveIcon />,
    children: null,
  },
  {
    key: "/api/comments",
    label: "Comments",
    icon: <CommentIcon />,
    activeIcon: <CommentActiveIcon />,
    children: null,
  },
  {
    key: "/api/documentation",
    label: "Documentation",
    icon: <DocumentIcon />,
    activeIcon: <DocumentActiveIcon />,
    children: null,
  },
  {
    key: "/api/sdks",
    label: "SDKs",
    icon: <SdkIcon />,
    activeIcon: <SdkActiveIcon />,
    children: null,
  },
];

export const ApplicationMenu = [
  {
    key: "/application/overview",
    label: "Overview",
    icon: <OverViewIcon />,
    activeIcon: <OverViewActiveIcon />,
    children: null,
  },
  {
    key: "/application/productionkeys",
    label: "Production Keys",
    icon: <ProductionKeysIcon />,
    activeIcon: <ProductionKeysActiveIcon />,
    children: null,
  },
  {
    key: "/application/productionOauth2tokens",
    label: "OAuth2 Tokens",
    icon: <OuathTokenIcon />,
    activeIcon: <OuathTokenActiveIcon />,
    children: null,
  },
  {
    key: "/application/productionapikeys",
    label: "API Keys",
    icon: <ApiKeyIcon />,
    activeIcon: <ApiKeyActiveIcon />,
    children: null,
  },
  {
    key: "/application/sandboxkeys",
    label: "Sandbox Keys",
    icon: <SandboxKeyIcon />,
    activeIcon: <SandboxKeyActiveIcon />,
    children: null,
  },
  {
    key: "/application/sandboxOauth2tokens",
    label: "Oauth2 Tokens",
    icon: <OuathTokenIcon />,
    activeIcon: <OuathTokenActiveIcon />,
    children: null,
  },
  {
    key: "/application/sandboxapikeys",
    label: "API Keys",
    icon: <ApiKeyIcon />,
    activeIcon: <ApiKeyActiveIcon />,
    children: null,
  },
  {
    key: "/application/subscription",
    label: "Subscription",
    icon: <SubscriptionIcon />,
    activeIcon: <SubActiveIcon />,
    children: null,
  },
];



