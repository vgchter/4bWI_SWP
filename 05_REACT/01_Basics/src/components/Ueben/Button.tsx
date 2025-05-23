import { useState } from "react";
import React from "react";

type Props = { text: string };

export default function Button({ text }: Props) {
  return (
    <div className="flex border-2 rounded-lg items-center justify-center font-semibold hover:shadow-xl hover:scale-108 hover:cursor-pointer">
      {text}
    </div>
  );
}
