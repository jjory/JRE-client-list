"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AREAS, LISTINGS_URL } from "@/lib/site";

// 1차: 검색 시 외부 매물 앱으로 이동. TODO: list.japan-real.com 실제 쿼리 파라미터 스키마 확정 후 매핑 검증.
export function SearchBar() {
  const t = useTranslations("Hero");
  const tArea = useTranslations("Areas.names");
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (area) params.set("area", area);
    if (type) params.set("type", type);
    if (budget) params.set("budget", budget);
    const query = params.toString();
    window.open(query ? `${LISTINGS_URL}/?${query}` : LISTINGS_URL, "_blank");
  }

  const selectClass =
    "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 rounded-xl border border-border bg-background/95 p-4 shadow-lg sm:grid-cols-2 lg:grid-cols-4"
    >
      <label className="flex flex-col gap-1">
        <span className="text-xs font-medium text-muted-foreground">
          {t("areaLabel")}
        </span>
        <select
          className={selectClass}
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          <option value="">{t("anyArea")}</option>
          {AREAS.map((a) => (
            <option key={a.key} value={a.slug}>
              {tArea(a.key)}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs font-medium text-muted-foreground">
          {t("typeLabel")}
        </span>
        <select
          className={selectClass}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">{t("anyType")}</option>
          <option value="apartment">{t("typeApartment")}</option>
          <option value="house">{t("typeHouse")}</option>
          <option value="short-term">{t("typeShort")}</option>
        </select>
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-xs font-medium text-muted-foreground">
          {t("budgetLabel")}
        </span>
        <select
          className={selectClass}
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="">{t("anyBudget")}</option>
          <option value="0-150000">{t("budgetLow")}</option>
          <option value="150000-300000">{t("budgetMid")}</option>
          <option value="300000-">{t("budgetHigh")}</option>
        </select>
      </label>

      <button
        type="submit"
        className="mt-auto rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
      >
        {t("searchCta")}
      </button>
    </form>
  );
}
