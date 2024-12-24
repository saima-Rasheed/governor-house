import Advance from "./Component/Advance";
import Compulsory from "./Component/Compulsory";
import Text from "./Component/Text";
import Hero from  "./Component/Hero";

export const metadata = {
  title: "Home",
};
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero /> 
      <Text/>
      <Compulsory/>
      <Advance />
    </div>
    
    
           
    
  );
}
