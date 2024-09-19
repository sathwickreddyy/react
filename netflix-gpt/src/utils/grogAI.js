import Groq from "groq-sdk";
import { GROG_AI_API_KEY } from "./constants";

const grogClient = await new Groq({ apiKey: GROG_AI_API_KEY, dangerouslyAllowBrowser: true });

export default grogClient;
