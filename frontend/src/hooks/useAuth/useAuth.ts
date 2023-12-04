import apiFetch from "../../api";
import { UserProfile } from "@spotify-dash/types";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const isAuthenticatedCheck = async () => {
    try {
      const res = await apiFetch("/auth/authorized", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        setIsAuthenticated(data.authorized);
        getUserProfile();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getUserProfile = async () => {
    try {
      const res = await apiFetch("/user/me", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const profile: UserProfile = await res.json();
      if (profile) {
        setUserProfile(profile);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    isAuthenticatedCheck();
  }, []);

  return { isAuthenticated, userProfile };
};
