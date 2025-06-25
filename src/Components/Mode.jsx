import useActions from "../Hooks/ActionHook";

export default function Mode() {
  const { mode } = useActions();
  return (
    <div className="modes">
      <p className="mode">{mode}</p>
    </div>
  );
}
