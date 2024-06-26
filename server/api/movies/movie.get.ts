import { BASE_NOW_PLAYING } from "@/server/constants/url";
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const response = await $fetch(BASE_NOW_PLAYING, {
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
  });

  return response;
});
