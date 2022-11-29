/// <reference types="react" />
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
    /**
     * Define the bg color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: Props) => JSX.Element;
export default MyLabel;
