import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { defer, Observable } from "rxjs";
import { map } from "rxjs/operators";

interface ICardProduct {}

const { NEXT_PUBLIC_BASE_URL } = process.env;
export const baseURL = NEXT_PUBLIC_BASE_URL;

class APIRequests {
  axiosConfig: AxiosRequestConfig = {
    baseURL: `${baseURL}/api`,
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  };

  axiosConfigWithAuthorization: AxiosRequestConfig = Object.assign(
    {},
    this.axiosConfig,
    {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("tokenX")}` || "",
      },
    }
  );

  setAxiosConfigWithAuthorization = (token: string) => {
    if (this.axiosConfigWithAuthorization.headers) {
      this.axiosConfigWithAuthorization.headers.Authorization = `Bearer ${token}`;
      this.axiosInstanceWithAuthorization = this.axiosInit(
        this.axiosConfigWithAuthorization
      );
    }
  };

  axiosInit = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config);
    return axiosInstance;
  };

  axiosInstance = this.axiosInit(this.axiosConfig);
  axiosInstanceWithAuthorization = this.axiosInit(
    this.axiosConfigWithAuthorization
  );

  funcGet = (inst: AxiosInstance, url: string, queryParams?: object) => {
    return defer(() => inst.get(url, { params: queryParams })).pipe(
      map((result) => result.data)
    );
  };

  get = <T>(url: string, queryParams?: object): Observable<T> => {
    return this.funcGet(this.axiosInstanceWithAuthorization, url, queryParams);
  };

  post = <T>(url: string, queryParams: object): Observable<T> => {
    return defer(() =>
      this.axiosInstanceWithAuthorization.post(url, queryParams)
    ).pipe(map((result) => result.data));
  };

  delete = <T>(url: string): Observable<T> => {
    return defer(() => this.axiosInstanceWithAuthorization.delete(url)).pipe(
      map((result) => result.data)
    );
  };

  put = <T>(url: string, queryParams: object): Observable<T> => {
    return defer(() =>
      this.axiosInstanceWithAuthorization.put(url, queryParams)
    ).pipe(map((result) => result.data));
  };

  //-----------------------------------------------------------------------------

  getProducts = ({ category }: { category: string }) =>
    this.post<ICardProduct[]>(`/products/search`, { limit: 50, category });

  getProduct = (id: string) => this.get<ICardProduct>(`/products/${id}`);

  //-----------------------------------------------------------------------------
}

export const API = new APIRequests();

class APIRequests2 {
  axiosConfig: AxiosRequestConfig = {
    baseURL: `${baseURL}/api`,
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  };

  http = axios.create(this.axiosConfig);

  getProducts = ({ category }: { category: string }) =>
    this.http.post(`/products/search`, { limit: 50, category });
}

export const API2 = new APIRequests2();
