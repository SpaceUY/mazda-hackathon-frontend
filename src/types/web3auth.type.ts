export type OpenloginUserInfo = {
  email: string;
  name: string;
  profileImage: string;
  aggregateVerifier: string;
  verifier: string;
  verifierId: string;
  typeOfLogin: LOGIN_PROVIDER_TYPE | CUSTOM_LOGIN_PROVIDER_TYPE;
};

const LOGIN_PROVIDER = {
  GOOGLE: 'google',
  FACEBOOK: 'facebook',
  REDDIT: 'reddit',
  DISCORD: 'discord',
  TWITCH: 'twitch',
  APPLE: 'apple',
  LINE: 'line',
  GITHUB: 'github',
  KAKAO: 'kakao',
  LINKEDIN: 'linkedin',
  TWITTER: 'twitter',
  WEIBO: 'weibo',
  WECHAT: 'wechat',
  EMAIL_PASSWORDLESS: 'email_passwordless',
  WEBAUTHN: 'webauthn'
};

export declare type LOGIN_PROVIDER_TYPE =
  (typeof LOGIN_PROVIDER)[keyof typeof LOGIN_PROVIDER];
export declare type CUSTOM_LOGIN_PROVIDER_TYPE = string & {
  toString?: (radix?: number) => string;
};
