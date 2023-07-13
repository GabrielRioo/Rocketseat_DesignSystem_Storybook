import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, exercitationem porro eos rem nostrum doloremque minima possimus praesentium nihil repellat amet optio obcaecati adipisci. Voluptatem alias neque hic quae quis.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
