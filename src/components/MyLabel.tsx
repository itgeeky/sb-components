import "./MyLabel.css";

export interface Props {
  /**
   * Label text to show
   */
  label?: string;
  /**
   * Size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize of the laber
   */
  allCaps?: boolean;
  /**
   * Color of the label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Font Color
   */
  fontColor?: string;
}
const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor = "#00000",
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color} ${allCaps ? "allCaps" : ""}`}
      style={{ color: fontColor }}
    >
      {label}
    </span>
  );
};

export default MyLabel;
