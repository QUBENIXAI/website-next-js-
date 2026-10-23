// import { connection } from "next/server";

// const model = "gemini-2.5-flash";

// function readApiKey() {
//   return (process.env.GEMINI_API_KEY ?? "").trim().replace(/;+$/, "");
// }

// export async function POST(request: Request) {
//   await connection();

//   let body: { question?: string; prompt?: string };
//   try {
//     body = await request.json();
//   } catch {
//     return Response.json({ error: "Invalid request body." }, { status: 400 });
//   }

//   const question = body.question?.trim();
//   const prompt = body.prompt?.trim();

//   if (!question || !prompt) {
//     return Response.json(
//       { error: "A question and prompt are required." },
//       { status: 400 },
//     );
//   }

//   const apiKey = readApiKey();
//   if (!apiKey) {
//     return Response.json(
//       { error: "Gemini API key is not configured." },
//       { status: 500 },
//     );
//   }

//   const geminiResponse = await fetch(
//     `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-goog-api-key": apiKey,
//       },
//       body: JSON.stringify({
//         systemInstruction: {
//           parts: [{ text: prompt }],
//         },
//         contents: [
//           {
//             role: "user",
//             parts: [{ text: question }],
//           },
//         ],
//         generationConfig: {
//           temperature: 0.4,
//           maxOutputTokens: 200,
//         },
//       }),
//     },
//   );

//   const payload = (await geminiResponse.json()) as {
//     error?: { message?: string };
//     candidates?: Array<{
//       content?: { parts?: Array<{ text?: string }> };
//     }>;
//   };

//   if (!geminiResponse.ok) {
//     return Response.json(
//       {
//         error: payload.error?.message ?? "Gemini could not generate an answer.",
//       },
//       { status: geminiResponse.status },
//     );
//   }

//   const answer = payload.candidates?.[0]?.content?.parts
//     ?.map((part) => part.text ?? "")
//     .join("")
//     .trim();

//   if (!answer) {
//     return Response.json(
//       { error: "Gemini returned an empty answer." },
//       { status: 502 },
//     );
//   }

//   return Response.json({ answer });
// }
