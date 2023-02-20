import type { Result } from "./result";

// would be nice if this could reflectively form graphql query based on desired response structure
export const graphql = async <T>(query: string): Promise<Result<T>> => {
  const response = await fetch(`${import.meta.env.BACKEND_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const jsonResponse = await response.json();

  if (!response.ok) {
    return [null, jsonResponse];
  }

  if (jsonResponse.errors != undefined) {
    return [null, jsonResponse.errors];
  }

  return [jsonResponse.data as T, null];
};
