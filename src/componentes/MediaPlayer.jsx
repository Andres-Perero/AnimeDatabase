import ReactPlayer from "react-player"; //https://www.npmjs.com/package/react-player
export function MediaPlayer() {
  return (
    <div>
      <ReactPlayer
        url="https://youtu.be/5Qkuh2mDShw"
        controls
        volume="0.2"
        playing
        width="640px"
        height="360px"
        onReady
      />
    </div>
  );
}
