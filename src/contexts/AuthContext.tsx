import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type User = {
  id: string;
  name: string;
  email: string;
  lifeStage: string;
};

type StoredUser = User & {
  password: string;
  createdAt: string;
};
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string; user?: User }>;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<{ success: boolean; error?: string; user?: User }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Helper function to get all stored users
  const getStoredUsers = (): StoredUser[] => {
    try {
      const users = localStorage.getItem('realstart-users');
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error('Error reading stored users:', error);
      return [];
    }
  };

  // Helper function to save users
  const saveUsers = (users: StoredUser[]): void => {
    try {
      localStorage.setItem('realstart-users', JSON.stringify(users));
    } catch (error) {
      console.error('Error saving users:', error);
    }
  };

  // Helper function to find user by email
  const findUserByEmail = (email: string): StoredUser | null => {
    const users = getStoredUsers();
    return users.find(user => user.email.toLowerCase() === email.toLowerCase()) || null;
  };
  // Check for existing session on app load
  useEffect(() => {
    const checkExistingSession = () => {
      try {
        const storedUser = localStorage.getItem('realstart-user');
        const sessionExpiry = localStorage.getItem('realstart-session-expiry');
        
        if (storedUser && sessionExpiry) {
          const expiryTime = parseInt(sessionExpiry, 10);
          const currentTime = Date.now();
          
          // Check if session is still valid (24 hours)
          if (currentTime < expiryTime) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
          } else {
            // Session expired, clear storage
            localStorage.removeItem('realstart-user');
            localStorage.removeItem('realstart-session-expiry');
          }
        }
      } catch (error) {
        console.error('Error checking existing session:', error);
        // Clear potentially corrupted data
        localStorage.removeItem('realstart-user');
        localStorage.removeItem('realstart-session-expiry');
      } finally {
        setIsLoading(false);
      }
    };

    checkExistingSession();
  }, []);

  const register = async (userData: Omit<User, 'id'> & { password: string }): Promise<{ success: boolean; error?: string; user?: User }> => {
    try {
      // Check if user already exists
      const existingUser = findUserByEmail(userData.email);
      if (existingUser) {
        return { success: false, error: 'An account with this email already exists' };
      }

      // Create new user
      const newUser: StoredUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        lifeStage: userData.lifeStage,
        password: userData.password, // In a real app, this would be hashed
        createdAt: new Date().toISOString()
      };

      // Save to users list
      const users = getStoredUsers();
      users.push(newUser);
      saveUsers(users);

      // Create user session
      const userForSession: User = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        lifeStage: newUser.lifeStage
      };

      // Set session expiry to 24 hours from now
      const expiryTime = Date.now() + (24 * 60 * 60 * 1000);
      
      setUser(userForSession);
      localStorage.setItem('realstart-user', JSON.stringify(userForSession));
      localStorage.setItem('realstart-session-expiry', expiryTime.toString());

      return { success: true, user: userForSession };
    } catch (error) {
      console.error('Error during registration:', error);
      return { success: false, error: 'Registration failed. Please try again.' };
    }
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string; user?: User }> => {
    try {
      // Find user by email
      const storedUser = findUserByEmail(email);
      
      if (!storedUser) {
        return { success: false, error: 'No account found with this email address' };
      }

      // Check password (in a real app, this would be hashed comparison)
      if (storedUser.password !== password) {
        return { success: false, error: 'Incorrect password' };
      }

      // Create user session
      const userForSession: User = {
        id: storedUser.id,
        name: storedUser.name,
        email: storedUser.email,
        lifeStage: storedUser.lifeStage
      };

      // Set session expiry to 24 hours from now
      const expiryTime = Date.now() + (24 * 60 * 60 * 1000);
      
      setUser(userForSession);
      localStorage.setItem('realstart-user', JSON.stringify(userForSession));
      localStorage.setItem('realstart-session-expiry', expiryTime.toString());

      return { success: true, user: userForSession };
    } catch (error) {
      console.error('Error during login:', error);
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem('realstart-user');
      localStorage.removeItem('realstart-session-expiry');
      
      // Optional: Clear any other app-specific data
      localStorage.removeItem('realstart-preferences');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};