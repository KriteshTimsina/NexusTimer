"use client";
import { useTimerStore } from "@/store/timerStore";
import { useEffect } from "react";
import loadCubes from "@/lib/loadCubes";
import loadSettings from "@/lib/loadSettings";
import { useSettingsModalStore } from "@/store/SettingsModalStore";

export default function PreloadSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setCubes } = useTimerStore();
  const { setSettings } = useSettingsModalStore();

  useEffect(() => {
    const getCubes = loadCubes();
    const getSettings = loadSettings();
    setSettings(getSettings);
    console.log(getSettings);
    if (setCubes) setCubes(getCubes);
  }, [setCubes, setSettings]);

  return <>{children}</>;
}
