import {HfInference} from "@huggingface/inference"

const HF_TOKEN = process.env.HUGGINGFACE_API_KEY;
export const inference = new HfInference(HF_TOKEN);