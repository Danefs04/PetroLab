// Modules.
import { useParams } from "react-router-dom";

// Functions.
export function ThinSectionViewerPage() {
  const { id } = useParams();
  return (
    <div>
      Viewer <h1>{id}</h1>
    </div>
  );
}
