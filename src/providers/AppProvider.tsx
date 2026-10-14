import type { ReactNode } from "react";
type AppProviderProps = {
  children: ReactNode;
};
export default function AppProvider({ children }: AppProviderProps) {
  return <>{children}</>;
}
