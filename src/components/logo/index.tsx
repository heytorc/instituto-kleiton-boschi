import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/react";

import kbFullLogoDark from "@/../public/logo/dark/Kleiton Boschi-02.png";
import kbFullLogoLight from "@/../public/logo/light/Kleiton Boschi-02.png";

import kbCompactLogoDark from "@/../public/logo/dark/Kleiton Boschi-03.png";
import kbCompactLogoLight from "@/../public/logo/light/Kleiton Boschi-03.png";
import { useEffect, useState } from "react";

interface ILogoProps {
  variant?: "full" | "compact";
  width?: number;
  height?: number;
}

const Logo: React.FC<ILogoProps> = ({
  variant = "full",
  width = 150,
  ...rest
}) => {
  const [variantState, setVariantState] = useState([
    kbCompactLogoDark,
    kbCompactLogoLight,
  ]);

  useEffect(() => {
    setVariantState(handleVariant());
  }, [variant]);

  const handleVariant = () =>
    variant === "compact"
      ? [kbCompactLogoDark, kbCompactLogoLight]
      : [kbFullLogoDark, kbFullLogoLight];

  return (
    <Image
      width={width}
      src={useColorModeValue(variantState[0], variantState[1])}
      alt="Instituto Kleiton Boschi Logotipo"
      {...rest}
    />
  );
};

export default Logo;
