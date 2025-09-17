import React from "react";

interface TechCardProps {
  techName: string;
  experienceTime: string;
  body: JSX.Element;
}

const TechCard = React.forwardRef(function TechCard(
  props: TechCardProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className="border border-slate-700 bg-slate-800 text-slate-100 rounded-2xl shadow-xl p-6 mt-10 max-w-4xl mx-auto"
    >
      <p className="text-cyan-400 font-bold text-2xl md:text-4xl mb-2 underline decoration-dotted">
        {props.techName}
      </p>
      <p className="text-slate-400 italic text-sm md:text-lg mb-4">
        Experience: {props.experienceTime}
      </p>
      <div className="text-slate-100">{props.body}</div>
    </div>
  );
});

export default TechCard;
