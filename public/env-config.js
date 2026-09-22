window.__LM_LOGIN_CONFIG__ = {
  clientId: "lm-uat",
  defaultClientId: "lm-uat",
  redirectUri: "https://h37-weather-app.vercel.app/callback",
  // redirectUri: "http://localhost:3000/silentcallback",
  realm: "lm-uat",
  loginHint: "wst",
  uiLocales: "es",
  kc_idp_hint: "Lifemiles",
  RT_IF1PW3:
    "44qOoVTcE3jtu/JuzdGRMqg5vQRqL8r5YX6gZD4UDq+5PTgmew1AlVuCuAHEx/MGMuDCx0lvjgjS6pjar9pKj8TYHjxEpvJ/xtC41OwjV6aSeBggux8nkhu/+oGuZZIi0saNN2/VIyqlAzUtKudKJxMvVet4DfXOfx7ub29CHWU=",
  scope: "openid",
  codeChallengeMethod: "S256",
  application_ID: "lm-test-ti",
  allowed_debug_envs: ["devlocal", "dev", "qa", "uat"],
  allowedWrappers: ["ALL"],
  popupWidth: 800,
  popupHeight: 800,
  defaultParameters: {
    popupWidth: 800,
    popupHeight: 800,
    silentLoginTimeout: 10_000,
    redirectAfterLogin: "https://h37-weather-app.vercel.app",
    redirectAfterLogout: "https://h37-weather-app.vercel.app",
    maxAllowedTravelerCompanion: 4,
    flowId: "ETBE",
    clubWorldCountries: ["wr", "us"],
  },
  redirectAfterLogin: "https://h37-weather-app.vercel.app",
  redirectAfterLogout: "https://h37-weather-app.vercel.app",
  ALLOWED_DOMAINS_URL:
    "https://www.uat-lifemiles.net/cms/eon-domain/eonDomain.json",
  CONFIG_BASE_URL:
    "https://s3-eu-west-1.amazonaws.com/lifemileswebsite-s3bucket-41/lm_cms/images/EON",
  TOKEN_GRANT_URL:
    "https://sso.lifemiles.net/auth/realms/lm-uat/protocol/openid-connect/token",
  USER_INFO_URL:
    "https://sso.lifemiles.net/auth/realms/lm-uat/protocol/openid-connect/userinfo",
  AUTH_URL_BASE:
    "https://sso.lifemiles.net/auth/realms/${realm}/protocol/openid-connect/auth",
  // AUTH_URL_BASE: "http://localhost:3000/silent",
  LOGOUT_URL_BASE:
    "https://sso.lifemiles.net/auth/realms/${realm}/protocol/openid-connect/logout",
  TOKEN_REFRESH_URL:
    "https://sso.lifemiles.net/auth/realms/lm-uat/protocol/openid-connect/token",
  API_BASE_ELITE:
    "https://api-oauth.uat-lifemiles.net/svc/user-info-member-miles",
  API_BASE_BALANCE:
    "https://api-oauth.uat-lifemiles.net/svc/credits-get-balance",
  API_BASE_PROFILE: "https://api-oauth.uat-lifemiles.net/svc/user-info-profile",
  API_BASE_LAST3_TRANSACTIONS:
    "https://api-oauth.uat-lifemiles.net/svc/single-transaction-overview-transaction",
  API_BASE_LAST_TRANSACTION:
    "https://api-oauth.uat-lifemiles.net/svc/single-transaction-activity-date",
  API_BASE_GET_COMPANIONS:
    "https://api-oauth.uat-lifemiles.net/svc/account-get-companions",
  API_BASE_TRAVEL_PARTNERS:
    "https://api-oauth.uat-lifemiles.net/svc/account-travel-partner/",
  API_BASE_GET_COUNTRIES:
    "https://api-oauth.uat-lifemiles.net/svc/get-countries",
  API_BASE_GET_CLUB_SUBSCRIPTION:
    "https://api-oauth.uat-lifemiles.net/svc/getActiveSusPlanInfo/",
  API_BASE_GET_PAYMENT_METHODS:
    "https://api-oauth.uat-lifemiles.net/svc/ccof-get-credit-card/",
  API_BASE_DELETE_PAYMENT_METHODS:
    "https://api-oauth.uat-lifemiles.net/svc/credit-card-on-file-delete",
  API_BASE_UPDATE_PAYMENT_METHODS:
    "https://api-oauth.uat-lifemiles.net/svc/credit-card-on-file-update",
  API_BASE_PROFILE_UPDATE:
    "https://api-oauth.uat-lifemiles.net/svc/member/profile/",
  API_BASE_MYTRIPS:
    "https://api-oauth.uat-lifemiles.net/svc/lyf-landing-my-trips-amadeus/",
  API_BASE_MYTRIPS_DETAILS:
    "https://api-oauth.uat-lifemiles.net/svc/lyf-trip-details/",
  API_BASE_DOCUMENT_TYPES:
    "https://api-oauth.uat-lifemiles.net/svc/get-document-type",
  API_BASE_QUALIFYING_MILES:
    "https://api-oauth.uat-lifemiles.net/svc/qma/elite-program/activities/qualifying-miles",
  API_BASE_GET_TERMS_CONDITION:
    "https://api-oauth.uat-lifemiles.net/svc/terms-with-laws",
  API_BASE_UPDATE_TERMS_CONDITION:
    "https://api-oauth.uat-lifemiles.net/svc/member/preferences",
  API_BASE_EMERGENCY_CONTACT:
    "https://api-oauth.uat-lifemiles.net/svc/member/profile/emergency-contact",
  API_BASE_GET_USER_INFORMATION:
    "https://api-oauth.uat-lifemiles.net/svc/member/profile",
  API_BASE_GET_STATES: "https://api-oauth.uat-lifemiles.net/svc/get-states",
  API_BASE_GET_CITIES: "https://api-oauth.uat-lifemiles.net/svc/get-cities",
  API_BASE_MEMBER_DOCUMENTS:
    "https://api-oauth.uat-lifemiles.net/svc/member/documents/<lmID>",
  API_BASE_RESET_PASSWORD:
    "https://api-oauth.uat-lifemiles.net/svc/account-security-question-reset",
  API_BASE_MFA_MEMBER_DETAILS:
    "https://api-oauth.uat-lifemiles.net/svc/mfa-member-details/LMWEB",
  API_BASE_MFA_GENERATE_OTP:
    "https://api-oauth.uat-lifemiles.net/svc/mfa/core/code/generate",
  API_BASE_MFA_CHANGE_METHOD:
    "https://api-oauth.uat-lifemiles.net/svc/mfa/core/change",
  API_BASE_MFA_PHONE_CATALOG:
    "https://www.uat-lifemiles.net/cms/<language>/cms/v1/landing-page/PHONECODE2FA/landing.json",
  API_BASE_RESET_PIN: "https://api-oauth.uat-lifemiles.net/svc/account-set-pin",
  API_BASE_MFA_PREACTIVATION:
    "https://api-oauth.uat-lifemiles.net/svc/mfa/core/preactivation",
  API_BASE_MFA_ACTIVATION:
    "https://api-oauth.uat-lifemiles.net/svc/mfa/core/activation",
  API_BASE_MFA_PREACTIVATION:
    "https://api-oauth.uat-lifemiles.net/svc/mfa/core/preactivation",
  API_BASE_MFA_ACTIVATION:
    "https://api-oauth.uat-lifemiles.net/svc/mfa/core/activation",
  API_BASE_GENERAL_PHONE_CATALOG:
    "https://www.uat-lifemiles.net/cms/cms/v1/catalog/phonecodes.json",
  API_BASE_GET_BOOKING_ADDLM:
    "https://api-oauth.uat-lifemiles.net/svc/booking/get-booking-addlm",
  API_BASE_ADD_BOOKING_ADDLM:
    "https://api-oauth.uat-lifemiles.net/svc/booking/add-booking-addlm",
};
