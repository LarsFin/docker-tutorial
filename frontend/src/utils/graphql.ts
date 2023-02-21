// would be nice if this could reflectively form graphql query based on desired response structure
export const graphql = async <T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T | null> => {
  const response = await fetch(`${import.meta.env.BACKEND_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const jsonResponse = await response.json();

  if (!response.ok) {
    console.error(jsonResponse);
    return null;
  }

  if (jsonResponse.errors != undefined) {
    console.error(jsonResponse.errors);
    return null;
  }

  return jsonResponse.data as T;
};
