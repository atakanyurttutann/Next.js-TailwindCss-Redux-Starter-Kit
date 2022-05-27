import { PROD_DEV } from "@/prodDev/ProdDev";

export const APP_VERSION = "1.0";
export const IMAGES_FIELD_NAME = "images";
export const ROOT_URL = PROD_DEV.backendDomain;
export const WEB_SITE_ROOT_URL = PROD_DEV.frontendDomain;
export const CDN_BASE_URL = PROD_DEV.cdnBaseUrl;
export const S3_AWS_BASE_URL = PROD_DEV.s3AwsBaseUrl;

export const API_HEADERS_UNAUTHORIZED = {
  Accept: "application/json",
};
export const API_HEADERS_UNAUTHORIZED_WITH_SSR = (formData) => {
  return {
    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
  };
};
export const LOGIN_API_HEADERS_UNAUTHORIZED = {};

export const API_HEADERS_BEARER_TOKEN = (authToken) => {
  return {
    Accept: "application/json",
    Authorization: `Bearer ${authToken}`,
  };
};
export const API_HEADERS_BEARER_TOKEN_WITH_SSR = (authToken, formData) => {
  return {
    Accept: "application/json",
    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
    Authorization: `Bearer ${authToken}`,
  };
};

export const API_HEADERS_BEARER_TOKEN_MULTIPART = (authToken) => {
  return {
    Accept: "multipart/form-data",
    Authorization: `Bearer ${authToken}`,
  };
};

export const API_HEADERS_COOKIE = (authCookie) => {
  return {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Cookie: `${authCookie}`,
  };
};

export const API_HEADERS_BEARER_TOKEN_AND_COOKIE = (authToken, authCookie) => {
  return {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization: `Bearer ${authToken}`,
    Cookie: `${authCookie}`,
  };
};
