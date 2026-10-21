import bill from "../../public/eyes/bill.svg?raw";
import ghost from "../../public/eyes/ghost.svg?raw";
import sleepy from "../../public/eyes/sleepy.svg?raw";
import wide from "../../public/eyes/wide.svg?raw";
import angry from "../../public/eyes/angry.svg?raw";
import surprised from "../../public/eyes/surprised.svg?raw";
import arched from "../../public/eyes/arched.svg?raw";

const drawings = {
  bill,
  ghost,
  sleepy,
  wide,
  angry,
  surprised,
  arched,
};

const trackingEyes = ["wide", "sleepy", "ghost", "surprised"];

export default function CharacterEyes({ model = "wide" }) {
  const isTracking = trackingEyes.includes(model);

  return (
    <span
      className={`character-eyes eyes-${model} flex h-full w-full items-center justify-center p-[clamp(.25rem,1.3vw,1.25rem)] [&_svg]:pointer-events-none [&_svg]:h-full [&_svg]:max-h-[90%] [&_svg]:w-full [&_svg]:select-none`}
      data-tracking={isTracking ? "" : undefined}
      aria-hidden="true"
      dangerouslySetInnerHTML={{
        __html: drawings[model] || drawings.wide,
      }}
    />
  );
}
