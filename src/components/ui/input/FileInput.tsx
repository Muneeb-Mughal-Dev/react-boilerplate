import { MonitorUp } from "lucide-react";
import {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  DragEvent,
} from "react";

// import { createRecordApi } from "@src/api/endpoints";
import { Image } from "@src/components/ui";

export type FileInputProps = {
  name: string;
  label?: string;
  onChange?: any;
  defaultvalue?: string | null;
};

export const FileInput: React.FC<FileInputProps> = ({
  name,
  label,
  onChange,
  defaultvalue,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>("");

  const handleChange = useCallback(async (e: InputChangeEvent) => {
    const { files } = e.currentTarget;
    if (files?.[0]) {
      // const url: any = await createRecordApi(
      //   "/upload",
      //   { file: files[0] },
      //   {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   }
      // );
      // setImageUrl(url.result);
    }
  }, []);

  useEffect(() => {
    if (imageUrl !== null) {
      onChange({ target: { name: name, value: imageUrl } });
    } else {
      onChange({ target: { name: name, value: defaultvalue } });
    }

    const handleDragOver = (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);
    };

    const handleDrop = (e: DragEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const fileInput = document.getElementById(name) as HTMLInputElement;
        if (fileInput) {
          const dataTransfer = new DataTransfer();
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            dataTransfer.items.add(e.dataTransfer.files[i]);
          }
          fileInput.files = dataTransfer.files;
          handleChange({
            target: fileInput,
            currentTarget: fileInput,
          } as ChangeEvent<HTMLInputElement>);
        }
      }
    };

    const dropArea = document.getElementById(name)?.parentElement;

    if (dropArea) {
      dropArea.addEventListener(
        "dragover",
        handleDragOver as unknown as EventListener
      );
      dropArea.addEventListener(
        "dragleave",
        handleDragLeave as unknown as EventListener
      );
      dropArea.addEventListener("drop", handleDrop as unknown as EventListener);

      return () => {
        dropArea.removeEventListener(
          "dragover",
          handleDragOver as unknown as EventListener
        );
        dropArea.removeEventListener(
          "dragleave",
          handleDragLeave as unknown as EventListener
        );
        dropArea.removeEventListener(
          "drop",
          handleDrop as unknown as EventListener
        );
      };
    }
  }, [name, imageUrl]);
  return (
    <div className="grid sm:grid-cols-4 gap-4 grid-cols-1 items-center">
      {defaultvalue && !imageUrl && (
        <Image
          src={defaultvalue}
          className="object-cover shadow-lg p-2 mt-4 rounded-lg"
        />
      )}
      {imageUrl && (
        <Image
          src={imageUrl}
          className="object-cover shadow-lg p-2 mt-4 rounded-lg"
        />
      )}
      <div
        className={`flex flex-col gap-1.5 w-full h-full ${!defaultvalue && !imageUrl ? "sm:col-span-4" : "sm:col-span-3"}`}
      >
        <p className="flex ml-1 text-foreground font-sans items-center justify-between text-sm tracking-wide">
          {label}
        </p>
        <label
          htmlFor={name}
          className={`flex items-center justify-center w-full h-full cursor-pointer transition-all ease-out duration-150 overflow-hidden bg-background rounded-lg ${
            isDragOver ? "p-4" : "p-2"
          }`}
        >
          <div
            className={`relative flex  flex-col items-center justify-center w-full border-2 h-full border-primary/70 hover:bg-primary/10 border-dashed rounded-lg transition-colors ease-out duration-150 ${isDragOver ? "bg-primary/20" : "bg-background"}`}
          >
            <div className="flex flex-col w-full items-center justify-center pt-5 pb-6 text-gray-500 text-sm gap-2 pointer-events-none">
              <MonitorUp size={32} />

              <p style={{ textAlign: "center" }}>
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
            </div>
            <input
              id={name}
              type="file"
              name={name}
              className="hidden"
              onChange={handleChange}
              accept="image/*,video/mp4"
            />
          </div>
        </label>
      </div>
    </div>
  );
};
