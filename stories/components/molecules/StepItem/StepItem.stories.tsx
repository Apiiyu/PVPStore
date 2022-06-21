import { Meta } from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/molecules/StepItem";

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem
} as Meta

const Template = (args: StepItemProps) => {
  return (
    <StepItem {...args}/>
  )
}

export const Default = Template.bind({}) // --> This is how to create component
Default.args = {
  title: '1. Start',
  icon: 'step1',
  firstDescription: 'Pilih salah satu game',
  secondDescription: 'yang ingin kamu top up'
}