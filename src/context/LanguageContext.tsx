import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (idText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "luckyu_language_pref";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to Indonesian ("id") as requested by the user
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "id" || saved === "en") {
        return saved;
      }
    }
    return "id";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
  }

  function toggleLanguage() {
    setLanguageState((prev) => (prev === "id" ? "en" : "id"));
  }

  function t(idText: string, enText: string): string {
    return language === "id" ? idText : enText;
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
