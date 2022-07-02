/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignInResponseDto {
  access: string;
  refresh: string;
}

export interface RefreshRequestDto {
  refresh: string;
}

export interface UserResponseDto {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface PatchUserDto {
  name?: string;
  email?: string;
  avatar: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface ColumnTinyResponseDto {
  _id: string;
  name: string;
  color?: string;
}

export interface DeskTinyResponseDto {
  _id: string;
  name: string;
  columns: ColumnTinyResponseDto[];
}

export interface DesksListResponseDto {
  items: DeskTinyResponseDto[];
}

export interface TaskTinyResponseDto {
  _id: string;
  title: string;
  description: string;
  preview: string;
}

export interface ColumnResponseDto {
  _id: string;
  name: string;
  color?: string;
  tasks: TaskTinyResponseDto[];
}

export interface DeskResponseDto {
  _id: string;
  name: string;
  columns: ColumnResponseDto[];
}

export interface ColumnCreateDto {
  name: string;
  color?: string;
}

export interface CreateDeskDto {
  name: string;
  columns: ColumnCreateDto[];
}

export interface CreateTaskDto {
  title: string;
  description: string;
  deskId: string;
  columnId: string;
}

export interface ReplaceTaskRequestPayloadDto {
  fromId: string;
  toId: string;
  taskId: string;
}

export interface TaskResponseDto {
  _id: string;
  title: string;
  description: string;
  preview: string;
}

export interface PatchTaskDto {
  title: string;
  description: string;
  preview: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title TodoList example
 * @version 1.0
 * @contact
 *
 * The TodoList API description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerLogin
     * @request POST:/api/auth/login
     */
    authControllerLogin: (data: SignInDto, params: RequestParams = {}) =>
      this.request<any, SignInResponseDto>({
        path: `/api/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerRefresh
     * @request POST:/api/auth/refresh
     */
    authControllerRefresh: (data: RefreshRequestDto, params: RequestParams = {}) =>
      this.request<any, SignInResponseDto>({
        path: `/api/auth/refresh`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersControllerGetMe
     * @request GET:/api/users/me
     * @secure
     */
    usersControllerGetMe: (params: RequestParams = {}) =>
      this.request<any, UserResponseDto>({
        path: `/api/users/me`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersControllerPatchUser
     * @request PATCH:/api/users
     * @secure
     */
    usersControllerPatchUser: (data: PatchUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersControllerCreateUser
     * @request POST:/api/users
     */
    usersControllerCreateUser: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UsersControllerGetOne
     * @request GET:/api/users/{id}
     * @secure
     */
    usersControllerGetOne: (id: string, params: RequestParams = {}) =>
      this.request<any, UserResponseDto>({
        path: `/api/users/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags desks
     * @name DesksControllerGetAll
     * @request GET:/api/desks
     * @secure
     */
    desksControllerGetAll: (params: RequestParams = {}) =>
      this.request<any, DesksListResponseDto>({
        path: `/api/desks`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags desks
     * @name DesksControllerCreateDesk
     * @request POST:/api/desks
     * @secure
     */
    desksControllerCreateDesk: (data: CreateDeskDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/desks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags desks
     * @name DesksControllerGetOne
     * @request GET:/api/desks/{id}
     * @secure
     */
    desksControllerGetOne: (id: string, params: RequestParams = {}) =>
      this.request<any, DeskResponseDto>({
        path: `/api/desks/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags desks
     * @name DesksControllerDeleteDesk
     * @request DELETE:/api/desks/{id}
     * @secure
     */
    desksControllerDeleteDesk: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/desks/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags tasks
     * @name TasksControllerCreateTask
     * @request POST:/api/tasks
     * @secure
     */
    tasksControllerCreateTask: (data: CreateTaskDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/tasks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags tasks
     * @name TasksControllerReplaceTask
     * @request POST:/api/tasks/replaceColumn
     * @secure
     */
    tasksControllerReplaceTask: (data: ReplaceTaskRequestPayloadDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/tasks/replaceColumn`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags tasks
     * @name TasksControllerGetTask
     * @request GET:/api/tasks/{id}
     * @secure
     */
    tasksControllerGetTask: (id: string, params: RequestParams = {}) =>
      this.request<any, TaskResponseDto>({
        path: `/api/tasks/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags tasks
     * @name TasksControllerDeleteTask
     * @request DELETE:/api/tasks/{id}
     * @secure
     */
    tasksControllerDeleteTask: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/tasks/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags tasks
     * @name TasksControllerPatchTask
     * @request PATCH:/api/tasks/{id}
     * @secure
     */
    tasksControllerPatchTask: (id: string, data: PatchTaskDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/tasks/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags files
     * @name FilesControllerUploadedFile
     * @request POST:/api/files/image
     * @secure
     */
    filesControllerUploadedFile: (data: { image?: File }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/files/image`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags files
     * @name FilesControllerSeeUploadedFile
     * @request GET:/api/files/image/{path}
     */
    filesControllerSeeUploadedFile: (path: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/files/image/${path}`,
        method: "GET",
        ...params,
      }),
  };
}
