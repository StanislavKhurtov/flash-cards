import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography/typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'body1',
        'body2',
        'caption',
        'h1',
        'h2',
        'h3',
        'large',
        'link1',
        'link2',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/UI/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    as: 'div',
    children: `Large  Carosserie Test Zürich
    Stauffacherstrasse 31
    8004 Zürich, ZH, CH`,
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    as: 'h1',
    children: `H1  Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`,
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    children: `H2  Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`,
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    as: 'h3',
    children: `H3  Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`,
    variant: 'h3',
  },
}

export const Body1: Story = {
  args: {
    as: 'div',
    children: `Body1  Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`,
    variant: 'body1',
  },
}

export const Subtitle1: Story = {
  args: {
    as: 'h3',
    children: `Subtitle 1  Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`,
    variant: 'subtitle1',
  },
}

export const Body2: Story = {
  args: {
    as: 'div',
    children: `Body 2  Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`,
    variant: 'body2',
  },
}

export const Subtitle2: Story = {
  args: {
    as: 'div',
    children: `Subtitle 2  Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`,
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    as: 'caption',
    children: `Caption  Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`,
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    as: 'span',
    children: `Overline  Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`,
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    as: 'a',
    children: `Link 1 Carosserie Test Zürich
                auffacherstrasse 31
               8004 Zürich, ZH, CH`,
    href: 'http://google.com',
    target: '_blank',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    as: 'a',
    children: `Link 2 Carosserie Test Zürich
                auffacherstrasse 31
               8004 Zürich, ZH, CH`,
    href: 'http://google.com',
    target: '_blank',
    variant: 'link2',
  },
}
