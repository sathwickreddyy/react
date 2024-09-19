import OpenAI from "openai";
import { OPEN_AI_API_KEY } from "./constants";

export const openAIClient = await new OpenAI({
    apiKey: OPEN_AI_API_KEY, //process.env["OPENAI_API_KEY"], // This is the default and can be omitted
    dangerouslyAllowBrowser: true,
});
