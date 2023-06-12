import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {FaWindows, FaPlaystation, FaXbox, FaLinux, FaAndroid, FaApple} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs'
import { IconType } from "react-icons";

interface Props{
    platforms: Platform[]
}
const PlatformIcons = ({ platforms }: Props) => {
    const iconMap: {[Key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid

    }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIcons