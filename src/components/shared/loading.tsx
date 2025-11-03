import { Loader2 } from "lucide-react";
import React from "react";

const LoadingScreen = () => {
  return (
    <section className="max-w-lg w-full min-h-80 flex flex-col items-center justify-center shadow-lg border rounded-xl bg-brand-neutral-00">
      <Loader2
        size={80}
        className="animate-spin duration-150 text-brand-primary"
      />
      <p className="brand-overline mt-4 ">Loading...</p>
    </section>
  );
};

export default LoadingScreen;
