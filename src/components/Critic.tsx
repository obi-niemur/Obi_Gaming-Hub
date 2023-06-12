import { Badge } from "@chakra-ui/react"

interface Props{
    critic: number
}

const Critic = ({critic}: Props) => {

    let color = critic > 90 ? "green" : critic > 60 ? "yellow" : "";
    
  return <Badge colorScheme={color} fontSize='14px' borderRadius='4px' paddingX={2} >{critic}</Badge>;
}

export default Critic