import { useContext } from "react";
import ActionContext from "../Contexts/ActionsContext";

export default function useActions() {
  const actionsCtx = useContext(ActionContext);
  if (!actionsCtx)
    throw new Error("useActions must be used within the ActionContext");
  return actionsCtx;
}
