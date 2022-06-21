import { Meta } from "@storybook/react";
import Input, { InputProps } from "../../../../components/atoms/Input";

export default {
  title: 'Components/Atoms/Input',
  component: Input
} as Meta

const Template = (args: InputProps) => {
  return (
    <Input {...args}/>
  )
}

export const Default = Template.bind({}) // --> This is how to create component
Default.args = {
  label: 'Email',
  htmlFor: 'Email',
  type: 'email'
}