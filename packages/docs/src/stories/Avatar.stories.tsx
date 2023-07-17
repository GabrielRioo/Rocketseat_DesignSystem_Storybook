import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/GabrielRioo.png',
    alt: 'Gabriel Rioo',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallBback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
