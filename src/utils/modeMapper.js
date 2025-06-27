export default function togglePauseModes(modeNumber) {
  const modesMapper = [
    { code: 0, mode: "Start a Focus Session" },
    { code: 1, mode: "Focus session in Progress" },
    { code: 2, mode: "Session is currently paused" },
    { code: 3, mode: "Session is on a short break" },
    { code: 4, mode: "Session is on a long break" },
  ];
  let mappedMode = "";
  for (const {code, mode} of modesMapper)
    if (code === modeNumber) mappedMode = mode;
  return mappedMode;
}
