// app/api/mux/videos/route.ts
import { mux } from "@/lib/mux";
import { NextResponse } from "next/server";

export async function GET() {
  const { data } = await mux.video.assets.list({ limit: 20 });
  console.log("dabbbbbbbta", data);
  const videos = data

    .map((asset) => ({
      id: asset.id,
      playbackId: asset.playback_ids?.[0]?.id ?? null,
      createdAt: asset.created_at,
    }))
    .filter((video) => video.playbackId !== null);
  return NextResponse.json(videos);
}
