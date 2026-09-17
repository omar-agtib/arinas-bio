import { Suspense } from "react";
import RechercheContent from "./RechercheContent";

export default function RecherchePage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <p className="text-ink/50">Chargement...</p>
        </div>
      }
    >
      <RechercheContent />
    </Suspense>
  );
}
