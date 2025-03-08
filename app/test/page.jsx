
import DocumentComponent from "../components/Document";
import { PDFViewer } from '@react-pdf/renderer';

 const TestPage = () => {
return (

<PDFViewer>
<DocumentComponent />
</PDFViewer>
    
) 
}

export default TestPage