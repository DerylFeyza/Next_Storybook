import React, { HTMLAttributes, HTMLInputAutoCompleteAttribute } from 'react';
import { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbb } from './Breadcrumb';

const meta = {
      title: "Components/Breadcrumbs",
      component: Breadcrumbb,
      parameters: {
          layout: "centered",
      },
      tags: ["autodocs"],
    } satisfies Meta<typeof Breadcrumbb>;
    
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
      args: {
            variant: 'medium',
            data: [
                        {
                              title: 'Home',
                              path: '/home'
                        },
                        {
                              title: 'Overview',
                              path: '/overview'
                        },
                        {
                              title: 'details',
                              path: '/details'
                        }
            ]
      }
}

export const Custom: Story = {
      args: {
            variant: 'medium',
            data: [
                        {
                              title: 'Home',
                              path: '/home'
                        },
                        {
                              title: 'Overview',
                              path: '/overview'
                        },
                        {
                              title: 'details',
                              path: '/details'
                        }
            ],
            separator:'>'
}
}