//This is to show that you can create stories for pages that you haven't overloaded.

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { createPageStory } from '../createPageStory'

const { PageStory } = createPageStory({
  pageId: 'login-verify-email.ftl',
})

export default {
  title: 'login/LoginVerifyEmail',
  component: PageStory,
} as ComponentMeta<typeof PageStory>

export const Default: ComponentStory<typeof PageStory> = () => <PageStory />