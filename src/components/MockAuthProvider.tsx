"use client";

import { createContext, useContext, useMemo, useState } from "react";

import { usersByRole } from "@/lib/mock-data";
import type { Role, User } from "@/lib/types";

const ROLE_STORAGE_KEY = "taxofix-mock-role";

type MockAuthContextValue = {
  currentUser: User;
  currentRole: Role;
  switchRole: (role: Role) => void;
  logout: () => void;
  getIdTokenPlaceholder: () => string;
};

const MockAuthContext = createContext<MockAuthContextValue | null>(null);

const getSavedRole = (): Role => {
  if (typeof window === "undefined") {
    return "FIRM_ADMIN";
  }

  const saved = window.localStorage.getItem(ROLE_STORAGE_KEY) as Role | null;
  return saved && saved in usersByRole ? saved : "FIRM_ADMIN";
};

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [currentRole, setCurrentRole] = useState<Role>(getSavedRole);

  const value = useMemo<MockAuthContextValue>(() => {
    const switchRole = (role: Role) => {
      setCurrentRole(role);
      window.localStorage.setItem(ROLE_STORAGE_KEY, role);
    };

    return {
      currentUser: usersByRole[currentRole],
      currentRole,
      switchRole,
      logout: () => switchRole("FIRM_ADMIN"),
      // TODO: Firebase Auth will later provide an ID token sent as Authorization: Bearer <token>.
      getIdTokenPlaceholder: () => "mock-firebase-id-token-placeholder",
    };
  }, [currentRole]);

  return <MockAuthContext.Provider value={value}>{children}</MockAuthContext.Provider>;
}

export function useMockAuth() {
  const context = useContext(MockAuthContext);

  if (!context) {
    throw new Error("useMockAuth must be used inside MockAuthProvider");
  }

  return context;
}
