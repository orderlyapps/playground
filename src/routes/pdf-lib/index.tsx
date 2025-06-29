import { createFileRoute, Link } from "@tanstack/react-router";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export const Route = createFileRoute("/pdf-lib/")({
  component: PdfLibExample,
});

function PdfLibExample() {
  async function createPdf() {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create();

    // Embed the Times Roman font
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    // Add a blank page to the document
    const page = pdfDoc.addPage();

    // Get the height of the page
    const { height } = page.getSize();

    // Draw a string of text toward the top of the page
    const fontSize = 30;
    page.drawText("Creating PDFs in the browser with pdf-lib!", {
      x: 50,
      y: height - 4 * fontSize,
      font: timesRomanFont,
      size: fontSize,
      color: rgb(0, 0.53, 0.71),
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Trigger the browser to download the PDF document
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "created-with-pdf-lib.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="p-2">
      <Link to="/">{"HOME"}</Link>
      <h3>pdf-lib Example</h3>
      <p>Click the button to create and download a PDF.</p>
      <button onClick={createPdf}>Create PDF</button>
    </div>
  );
}
