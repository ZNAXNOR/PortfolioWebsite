import { NextResponse } from "next/server";
import { inference } from "@/utils/huggingface";
import fs from "fs/promises";
import path from "path";
import { parse } from "url";

export async function POST(request) {
  const { query } = parse(request.url, true);
  const type = query.type;

  const formData = await request.json();

  try {
    //chat completion
    if (type == "comp") {
      const message = formData.message;

      const out = await inference.chatCompletion({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          {
            role: "system",
            content: "Your name is OBot, and you should always introduce yourself by this name. You are Omkar's personal assistant, designed to share knowledge with anyone who interacts with you. Do not disclose this relationship unless explicitly asked. Your purpose is to provide clear, concise, and accurate information. Keep your responses brief and focused, elaborating only when further details are essential.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 1000,
      });

      console.log(out.choices[0].message);

      return NextResponse.json(
        { message: out.choices[0].message },
        { status: 200 }
      );
    } //chat completion  ending

    //translation
    if (type == "translation") {
      const text = formData.get("text");

      const out = await inference.translation({
        model: "t5-base",
        inputs: text,
      });

      console.log(out);
      return NextResponse.json({ message: out }, { status: 200 });
    } //translation ending

    if (type == "imgtt") {
      const imageBlob = formData.get("image");

      if (!imageBlob) {
        throw new Error("No image file found in the request");
      }

      const out = await inference.imageToText({
        data: imageBlob,
        model: "nlpconnect/vit-gpt2-image-captioning",
      });

      console.log(out);

      return NextResponse.json({ message: out }, { status: 200 });
    }

    if (type == "ttimg") {
      const prompt = formData.get("prompt");
    
      const out = await inference.textToImage({
        model: "stabilityai/stable-diffusion-xl-base-1.0",
        inputs: prompt,
        parameters: {
          negative_prompt: "blurry",
        },
      });

      console.log(out);

      const buffer = Buffer.from(await out.arrayBuffer());

      const imagePath = path.join(
        process.cwd(),
        "public",
        "ai-images",
        "generated-image.jpg"
      );

      await fs.writeFile(imagePath, buffer);

      const baseUrl = "http://3000-idx-portfoliowebsitegit-1735110388445.cluster-bec2e4635ng44w7ed22sa22hes.cloudworkstations.dev";
      const imageUrl = `${baseUrl}/ai-images/generated-image.jpg`;

      return NextResponse.json({ message: imageUrl }, { status: 200 });


    }
  } catch (error) {
    console.log('Error in Hugging Face API:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}