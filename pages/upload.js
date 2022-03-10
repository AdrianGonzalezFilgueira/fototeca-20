import UploadButton from "../components/UploadButton";
import InputText from "../components/InputText";



export default function UploadPage() {

    const handleSubmit = () => {

    }

    return (
      <div className="mainDiv">
        <form onSubmit={handleSubmit}>
            <UploadButton />
            <InputText />
        </form>
      </div>
    );
  }