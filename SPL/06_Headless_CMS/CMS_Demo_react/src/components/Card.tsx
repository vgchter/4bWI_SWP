import React from "react";

type Props = { name: string; title: string; imageUri: string };

export default function Card({ name, title, imageUri }: Props) {
  return (
    <div className="border-1 h-40">
      <div className="p-3">
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{title}</h4>
      </div>
      <div className="">
        <img src={imageUri} alt="" className="w-50 h-50" />
      </div>
    </div>
  );
}
