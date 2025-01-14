import { NextResponse } from "next/server";
import { inference } from "@/utils/huggingface";

export const runtime = 'edge'; // Ensure compatibility with the Edge Runtime

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const formData = await request.json();

  try {
    // Chat completion
    if (type === "chat") {
      const message = formData.message;

      const out = await inference.chatCompletion({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          {
            role: "system",
            content:
              "Your name is OBot. Keep your responses brief and focused, elaborating only when further details are essential. Omkar is your admin, and you are Omkar's personal assistant, designed to share knowledge with anyone who interacts with you. Do not disclose this relationship unless explicitly asked. Your purpose is to provide clear, concise, and accurate information.",
          },
          { role: "user", content: message },
        ],
        max_tokens: 1000,
      });

      return NextResponse.json(
        { message: out.choices[0].message },
        { status: 200 }
      );
    }

    // Translation
    if (type === "translate") {
      const text = formData.text;

      const out = await inference.translation({
        model: "t5-base",
        inputs: text,
      });

      return NextResponse.json({ message: out }, { status: 200 });
    }

    // Image-to-Text
    if (type === "img-to-text") {
      const imageBlob = formData.image;

      if (!imageBlob) {
        throw new Error("No image file found in the request");
      }

      const out = await inference.imageToText({
        data: imageBlob,
        model: "nlpconnect/vit-gpt2-image-captioning",
      });

      return NextResponse.json({ message: out }, { status: 200 });
    }

    // Text-to-Image
    if (type === "img-generate") {
      const prompt = formData.prompt;

      const out = await inference.textToImage({
        model: "stabilityai/stable-diffusion-xl-base-1.0",
        inputs: prompt,
        parameters: { negative_prompt: "blurry" },
      });

      const imageUrl = `data:image/png;base64,${out.toString("base64")}`;

      return NextResponse.json({ message: imageUrl }, { status: 200 });
    }
  } catch (error) {
    console.error("Error in Hugging Face API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
