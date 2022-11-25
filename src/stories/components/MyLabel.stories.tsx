import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from '../../components/MyLabel';


export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes:{
    color:{ control: 'select', options: ['primary', 'secondary', 'tertiary']},
    fontColor: { control: 'color' }
  }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args }/>

export const Basic = Template.bind({})
Basic.args={
  size:'h1',
  allCaps: false
}
export const AllCaps = Template.bind({})
AllCaps.args={
  size: 'normal',
  allCaps: true
}
export const Secondary  = Template.bind({})
Secondary.args={
  size:'h1',
  color: 'secondary'
}
export const Tertiary = Template.bind({})
Tertiary.args={
  size:'h1',
  color: 'tertiary'
}

export const CustomColor = Template.bind({})
CustomColor.args={
  size:'h1',
  fontColor:'#D58D8D'
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args={
  size:'h1',
  fontColor:'#ff0000',
  backgroundColor:'aquamarine'
}

