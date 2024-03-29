import { UserProfile } from "@spotify-dash/types";
import { createContext, useContext, useEffect, useState } from "react";
import { resourcesService } from "../../services";

interface AuthContextProps {
  user: UserProfile | null;
  isLoading: boolean;
  error: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

/**
 * AuthProvider is a component that provides the user profile to the rest of the
 * application.
 *
 */

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: false,
  error: "",
});

/**
 * AuthProvider is a component that provides the user profile to the rest of the
 * application. It also handles the authentication process.
 *
 */

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (user) return;

    const fetchUserProfile = async () => {
      setIsLoading(true);
      try {
        const authenticated = await resourcesService.fetchResource<boolean>(
          "/auth/authorized"
        );

        if (authenticated) {
          const user = await resourcesService.fetchResource<UserProfile>(
            "/user/me"
          );
          setUserProfile(user);
        }
      } catch (err) {
        setError(err as Error["message"]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * useAuth is a hook that returns the user profile and the authentication state.
 *
 */

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
