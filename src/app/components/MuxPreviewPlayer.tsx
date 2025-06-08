// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import MuxPlayer from "@mux/mux-player-react";
// import  MuxPlayerElement  from '@mux/mux-player-react';

// type Props = {
//   publicPlaybackId: string;
//   signedPlaybackUrl?: string; // optional signed URL for secure access
//   isSubscribed: boolean;
//   videoTitle?: string;
//   viewerUserId?: string;
// };
// type MuxPlayerElement = HTMLVideoElement & {
//     currentTime: number;
//     pause: () => void;
//     // Add more methods if needed from the spec
//   };
  
// const MuxPreviewPlayer: React.FC<Props> = ({
//   publicPlaybackId,
//   signedPlaybackUrl,
//   isSubscribed,
//   videoTitle = "Untitled Video",
//   viewerUserId = "guest",
// }) => {
//     const playerRef = useRef<MuxPlayerElement | null>(null);
//     const [showOverlay, setShowOverlay] = useState(false);

//   useEffect(() => {
//     const video = playerRef.current;
//     if (!video || isSubscribed) return;

//     const handleTimeUpdate = () => {
//       if (video.currentTime >= 30) {
//         video.pause();
//         setShowOverlay(true);
//       }
//     };

//     video.addEventListener("timeupdate", handleTimeUpdate);
//     return () => {
//       video.removeEventListener("timeupdate", handleTimeUpdate);
//     };
//   }, [isSubscribed]);

//   return (
//     <div className="relative max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden">
//       <MuxPlayer
//         ref={playerRef}
//         className="w-full aspect-video"
//         playbackId={isSubscribed ? undefined : publicPlaybackId}
//         streamType="on-demand"
//         src={isSubscribed ? signedPlaybackUrl : undefined}
//         metadata={{
//           video_title: videoTitle,
//           viewer_user_id: viewerUserId,
//         }}
//       />

//       {showOverlay && (
//         <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex flex-col items-center justify-center p-6 z-10">
//           <h2 className="text-2xl font-bold mb-4">
//             Subscribe to Continue Watching
//           </h2>
//           <p className="mb-6 max-w-md text-center">
//             You`&apos;`ve reached the end of the 30-second preview. Subscribe now to
//             watch the full video.
//           </p>
//           <a href="/subscribe">
//             <button className="bg-rose-500 hover:bg-rose-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition">
//               Subscribe Now
//             </button>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MuxPreviewPlayer;
