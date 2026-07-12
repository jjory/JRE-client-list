import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// 로케일 인식 네비게이션 API (Link, useRouter, usePathname, redirect, getPathname)
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
