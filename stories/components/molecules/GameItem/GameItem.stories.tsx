import { Meta } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/molecules/GameItem";

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem
} as Meta

const Template = (args: GameItemProps) => {
  return (
    <GameItem {...args}/>
  )
}

export const Default = Template.bind({}) // --> This is how to create component
Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png'
}