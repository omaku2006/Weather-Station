import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';

type NavOpenType = {
  open: boolean;
  setOpen: () => void;
};

const NavOpen = createContext<NavOpenType | undefined>(undefined);

type NavContextType = { children: ReactNode };

const NavbarProvider = ({ children }: NavContextType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = useCallback(() => setIsOpen((v) => !v), []);
  const value = useMemo(() => ({ open: isOpen, setOpen: handleClick }), [isOpen, handleClick]);

  return <NavOpen.Provider value={value}>{children}</NavOpen.Provider>;
};

export default NavbarProvider;

export const useNavbarContext = () => {
  const ctx = useContext(NavOpen);
  if (!ctx) throw new Error('useNavbarContext must be used within NavbarProvider');
  return ctx;
};
