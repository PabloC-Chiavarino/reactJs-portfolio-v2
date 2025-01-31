import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const useLangContext = () => useContext(LangContext);

export default useLangContext