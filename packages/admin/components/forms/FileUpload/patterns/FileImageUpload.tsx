import FileUpload from "../FileUpload";
type UploadProps = React.ComponentProps<typeof FileUpload>;

// Label is optional, default is "Image"
type Props = Omit<UploadProps, "accept" | "label"> & {
  label?: string;
};

export default function FileImageUpload({
  label = "forms.fields.image",
  ...props
}: Props) {
  return <FileUpload label={label} accept="image/*" {...props} />;
}
