// Config
import { root } from "./config";

export const api = Object.freeze({
  weather: {
    fetch: async () => {
      const response = await fetch(`${root}`, {
        method: "GET",
			});
			
      if (response.status >= 400 && response.status < 500) {
        throw new Error("Client Error");
      } else if (response.status >= 500) {
        throw new Error("Server Error");
      }
      return response;
    },
  },
});
