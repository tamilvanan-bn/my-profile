import DocViewer from "@cyntler/react-doc-viewer";
import { PDFRenderer } from "@cyntler/react-doc-viewer";

const Resume = () => (
  <div className="pdf-container p-8">
    <DocViewer
      documents={[
        {
          uri: "https://raw.githubusercontent.com/tamilvanan-bn/my-files/main/Tamilvanan%20B%20Resume.pdf",
          fileType: "pdf",
        },
      ]}
      pluginRenderers={[PDFRenderer]}
      config={{
        header: {
          disableHeader: true,
        },
        pdfVerticalScrollByDefault: true,
      }}
      style={{
        height: "700px",
        width: "100%",
      }}
    />
    <br />
    <br />
  </div>
);

export default Resume;
