import { API_BASE_URL, apiUrl } from "./api";

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type PreRegistrationPayload = {
  name: string;
  phone_number: string;
  birth_date: string;
  what_do_you_want: string;
  privacy_policy_agreed: boolean;
};

export type BattlePayload = {
  name: string;
  phone_number: string;
  birth_date: string;
  battle_genre: string;
  instagram_id: string;
  what_do_you_want: string;
  privacy_policy_agreed: boolean;
};

export type WorkshopPayload = {
  name: string;
  phone_number: string;
  birth_date: string;
  battle_genre: string;
  instagram_video_url: string;
  what_do_you_want: string;
  privacy_policy_agreed: boolean;
};

export type Workshop = WorkshopPayload & {
  id: number;
  like_count: number;
  created_at?: string;
  updated_at?: string;
};

type ApiFetchOptions = RequestInit & {
  json?: unknown;
};

const parseErrorMessage = async (response: Response) => {
  const text = await response.text();
  if (!text) {
    return response.statusText || "요청에 실패했습니다.";
  }
  try {
    const data = JSON.parse(text) as Record<string, unknown>;
    const detail = data.detail ?? data.message;
    if (typeof detail === "string") {
      return detail;
    }
    const prioritizedFields = [
      "privacy_policy_agreed",
      "birth_date",
      "instagram_id",
      "phone_number",
      "non_field_errors",
    ];
    for (const field of prioritizedFields) {
      const value = data[field];
      if (typeof value === "string") {
        return value;
      }
      if (Array.isArray(value) && typeof value[0] === "string") {
        return value[0];
      }
    }
    for (const value of Object.values(data)) {
      if (typeof value === "string") {
        return value;
      }
      if (Array.isArray(value) && typeof value[0] === "string") {
        return value[0];
      }
    }
    return text;
  } catch {
    return text;
  }
};

const apiFetch = async <T>(path: string, options: ApiFetchOptions = {}) => {
  const { json, headers, ...rest } = options;
  const response = await fetch(apiUrl(path), {
    ...rest,
    headers: {
      ...(json ? { "Content-Type": "application/json" } : null),
      ...headers,
    },
    body: json ? JSON.stringify(json) : rest.body,
  });

  if (!response.ok) {
    throw new Error(await parseErrorMessage(response));
  }

  if (response.status === 204) {
    return null as T;
  }

  return (await response.json()) as T;
};

export const listPreRegistrations = () =>
  apiFetch<PaginatedResponse<PreRegistrationPayload>>("pre-registrations/");

export const createPreRegistration = (payload: PreRegistrationPayload) =>
  apiFetch<PreRegistrationPayload>("pre-registrations/", {
    method: "POST",
    json: payload,
  });

export const updatePreRegistration = (
  id: number,
  payload: Partial<PreRegistrationPayload>
) =>
  apiFetch<PreRegistrationPayload>(`pre-registrations/${id}/`, {
    method: "PATCH",
    json: payload,
  });

export const listBattles = () =>
  apiFetch<PaginatedResponse<BattlePayload>>("battles/");

export const createBattle = (payload: BattlePayload) =>
  apiFetch<BattlePayload>("battles/", {
    method: "POST",
    json: payload,
  });

export const updateBattle = (id: number, payload: Partial<BattlePayload>) =>
  apiFetch<BattlePayload>(`battles/${id}/`, {
    method: "PATCH",
    json: payload,
  });

type ListWorkshopOptions = {
  ordering?: "likes";
  url?: string;
};

export const listWorkshops = (options: ListWorkshopOptions = {}) => {
  if (options.url) {
    const normalized = new URL(options.url, API_BASE_URL).toString();
    return apiFetch<PaginatedResponse<Workshop>>(normalized);
  }
  const query = options.ordering ? `?ordering=${options.ordering}` : "";
  return apiFetch<PaginatedResponse<Workshop>>(`workshops/${query}`);
};

export const createWorkshop = (payload: WorkshopPayload) =>
  apiFetch<WorkshopPayload>("workshops/", {
    method: "POST",
    json: payload,
  });

export const updateWorkshop = (id: number, payload: Partial<WorkshopPayload>) =>
  apiFetch<WorkshopPayload>(`workshops/${id}/`, {
    method: "PATCH",
    json: payload,
  });

export const likeWorkshop = (id: number) =>
  apiFetch<Workshop>(`workshops/${id}/like/`, {
    method: "POST",
  });

export const unlikeWorkshop = (id: number) =>
  apiFetch<Workshop>(`workshops/${id}/like/`, {
    method: "DELETE",
  });

export const deleteWorkshop = (id: number) =>
  apiFetch<void>(`workshops/${id}/`, {
    method: "DELETE",
  });
