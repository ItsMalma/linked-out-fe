import { createContext } from "react";

export const OnboardingContext = createContext<{
  index: number;
  next: () => void;
  back: () => void;
}>({
  index: 0,
  next: () => {},
  back: () => {},
});
