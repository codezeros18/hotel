import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: any;
  role: "guest" | "admin" | null;
  token: string | null;
  loading: boolean;
  login: (data: { token: string; role: "guest" | "admin"; user: any }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  token: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState<"guest" | "admin" | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session from AsyncStorage
  useEffect(() => {
    const load = async () => {
      try {
        const savedToken = await AsyncStorage.getItem("token");
        const savedRole = await AsyncStorage.getItem("role");
        const savedUser = await AsyncStorage.getItem("user");

        if (savedToken && savedRole) {
          setToken(savedToken);
          setRole(savedRole as any);
          setUser(savedUser ? JSON.parse(savedUser) : null);
        }
      } catch (err) {
        console.log("Restore session error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // LOGIN ACTION
  const login = async (data: { token: string; role: "guest" | "admin"; user: any }) => {
    setToken(data.token);
    setRole(data.role);
    setUser(data.user);

    await AsyncStorage.setItem("token", data.token);
    await AsyncStorage.setItem("role", data.role);
    await AsyncStorage.setItem("user", JSON.stringify(data.user));
  };

  // LOGOUT ACTION
  const logout = async () => {
    setToken(null);
    setRole(null);
    setUser(null);

    await AsyncStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, role, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
