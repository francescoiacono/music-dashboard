import axios from "axios";

export const fetchUserProfile = async (accessToken: string) => {
  return axios({
    method: "get",
    url: "https://api.spotify.com/v1/me",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
};
