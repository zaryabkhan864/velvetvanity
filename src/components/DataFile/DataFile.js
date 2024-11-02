import newarrival from "../../constants/newarrival.png";
import skincare from "../../constants/skincare.png";
import makeup from "../../constants/makeup.png";
import facewash from "../../constants/facewash.png";
import hyaluronicacid from "../../constants/hyaluronicacid.png";
import newline from "../../constants/newline.png";
import lipgloss from "../../constants/lipgloss.png";
import serum from "../../constants/serum.png";
const CategoryData = [
  {
    id: 1,
    img_path: newarrival,
    name: "NEW ARRIVALS",
  },
  {
    id: 2,
    img_path: skincare,
    name: "SKINCRE",
  },
  {
    id: 3,
    img_path: makeup,
    name: "MAKEUP",
  },
];
const ProductData = [
  {
    id: 1,
    name: "FACE WASH",
    price: "$14.00",
    img_path: facewash,
  },
  {
    id: 2,
    name: "HAYLURONIC ACID",
    price: "$15.50",
    img_path: hyaluronicacid,
  },
  {
    id: 3,
    name: "NEW LINE",
    price: "$20.00",
    img_path: newline,
  },
  {
    id: 4,
    name: "LIP GLOSS",
    price: "$10.00",
    img_path: lipgloss,
  },
  {
    id: 5,
    name: "SERUM",
    price: "$13.00",
    img_path: serum,
  },
];
export { CategoryData, ProductData };
