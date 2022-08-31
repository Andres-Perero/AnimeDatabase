import React, { useEffect, useState } from "react";

export const Translate = (props) => {
  const [input, setInput] = useState("");
  const PostTraslate = async () => {
    const temp = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: props.info,
        source: "en",
        target: "es",
        format: "text",
        api_key: "",
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    setInput(temp);
  };

  useEffect(() => {
    PostTraslate();
  }, []);

  return <>{input.translatedText}</>;
};
