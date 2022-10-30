import { useRouter } from "next/router";

export const useCheckActivePath = () => {
  const router = useRouter();

  const isActivePath = (path) => {
    if (router.pathname.startsWith(path) && path !== "/") {
      return true;
    } else if (router.pathname === "/" && path === "/") {
      return true;
    } else {
      return null;
    }
  };

  return { isActivePath };
};
