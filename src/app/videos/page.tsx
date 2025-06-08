'use client';

import { useEffect, useState, useRef } from 'react';
import MuxPlayer from '@mux/mux-player-react';

type Video = {
  id: string;
  playbackId: string;
  createdAt: string;
};

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false); // Replace with real auth

  useEffect(() => {
    fetch('/api/mux/videos')
      .then(res => res.json())
      .then(setVideos);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">All Uploaded Videos</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {videos.map(video => (
          <VideoPreview
            key={video.id}
            playbackId={video.playbackId}
            createdAt={video.createdAt}
            isSubscribed={isSubscribed}
          />
        ))}
      </div>
    </div>
  );
}

function VideoPreview({
  playbackId,
  createdAt,
  isSubscribed,
}: {
  playbackId: string;
  createdAt: string;
  isSubscribed: boolean;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
const playerRef = useRef<any>(null);
  
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (!playerRef.current || isSubscribed) return;

    const stopAt30 = () => {
      if (playerRef.current.currentTime >= 30) {
        playerRef.current.pause();
        setShowOverlay(true);
      }
    };

    const player = playerRef.current;
    player.addEventListener('timeupdate', stopAt30);
    return () => player.removeEventListener('timeupdate', stopAt30);
  }, [isSubscribed]);

  return (
    <div className="relative rounded-xl shadow bg-white p-4">
      <MuxPlayer
        ref={playerRef}
        playbackId={playbackId}
        streamType="on-demand"
        className="w-full aspect-video"
        metadata={{
          video_title: `Uploaded on ${new Date(createdAt).toLocaleDateString()}`,
        }}
      />
      {showOverlay && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white z-10">
          <p className="text-xl mb-4 font-semibold">Subscribe to watch the full video</p>
          <a href="/subscribe">
            <button className="bg-rose-500 hover:bg-rose-600 px-5 py-2 rounded-md font-medium">
              Subscribe Now
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
