import { createFileRoute, Link } from "@tanstack/react-router";
import jsPDF from "jspdf";
import { useState } from "react";

export const Route = createFileRoute("/jspdf/jspdf")({
  component: JspdfExample,
});

function JspdfExample() {
  const [pdfDataUri, setPdfDataUri] = useState("");

  const createPdf = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add some text
    doc.text("Hello from jsPDF!", 10, 10);

    // Generate the PDF as a data URI
    const dataUri = doc.output("datauristring");
    setPdfDataUri(dataUri);
  };

  return (
    <div className="p-2">
      <Link to="/">{"HOME"}</Link>
      <h3>jsPDF Example</h3>
      <p>Click the button to create a PDF and render it below.</p>
      <button onClick={createPdf}>Create PDF</button>
      {pdfDataUri && (
        <iframe
          style={{ width: "100%", height: "500px", marginTop: "1rem" }}
          src={pdfDataUri}
          title="Generated PDF"
        />
      )}
    </div>
  );
}
