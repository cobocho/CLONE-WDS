import { recipe } from '@vanilla-extract/recipes'
import type { RecipeVariants } from '@vanilla-extract/recipes'

import { semanticVars } from '@/index.css'
import { colorVariants } from '@/sprinkles/color.css'

export const textRecipe = recipe({
  base: {
    color: semanticVars.LabelNormal,
  },
  variants: {
    color: colorVariants,
    type: {
      'Display 1': {
        fontSize: '56px',
        lineHeight: '72px',
        letterSpacing: '-0.0319em',
      },
      'Display 2': {
        fontSize: '40px',
        lineHeight: '52px',
        letterSpacing: '-0.0282em',
      },
      'Title 1': {
        fontSize: '36px',
        lineHeight: '48px',
        letterSpacing: '-0.027em',
      },
      'Title 2': {
        fontSize: '28px',
        lineHeight: '38px',
        letterSpacing: '-0.0236em',
      },
      'Title 3': {
        fontSize: '24px',
        lineHeight: '32px',
        letterSpacing: '-0.023em',
      },
      'Heading 1': {
        fontSize: '22px',
        lineHeight: '30px',
        letterSpacing: '-0.0194em',
      },
      'Heading 2': {
        fontSize: '20px',
        lineHeight: '28px',
        letterSpacing: '-0.012em',
      },
      'Headline 1': {
        fontSize: '18px',
        lineHeight: '26px',
        letterSpacing: '-0.002em',
      },
      'Headline 2': {
        fontSize: '17px',
        lineHeight: '24px',
        letterSpacing: '0em',
      },
      'Body 1/Normal': {
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.0057em',
      },
      'Body 1/Reading': {
        fontSize: '16px',
        lineHeight: '26px',
        letterSpacing: '0.0057em',
      },
      'Body 2/Normal': {
        fontSize: '15px',
        lineHeight: '22px',
        letterSpacing: '0.0096em',
      },
      'Body 2/Reading': {
        fontSize: '15px',
        lineHeight: '24px',
        letterSpacing: '0.0096em',
      },
      'Label 1/Normal': {
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.0145em',
      },
      'Label 1/Reading': {
        fontSize: '14px',
        lineHeight: '22px',
        letterSpacing: '0.0145em',
      },
      'Label 2': {
        fontSize: '13px',
        lineHeight: '18px',
        letterSpacing: '0.0194em',
      },
      'Caption 1': {
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.0252em',
      },
      'Caption 2': {
        fontSize: '11px',
        lineHeight: '14px',
        letterSpacing: '0.0311em',
      },
    },
    weight: {
      extrathin: {
        fontWeight: '100',
      },
      thin: {
        fontWeight: '200',
      },
      light: {
        fontWeight: '300',
      },
      regular: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      semibold: {
        fontWeight: '600',
      },
      bold: {
        fontWeight: '700',
      },
      extrabold: {
        fontWeight: '800',
      },
      black: {
        fontWeight: '900',
      },
    },
    whiteSpace: {
      nowrap: {
        whiteSpace: 'nowrap',
      },
      pre: {
        whiteSpace: 'pre',
      },
      preLine: {
        whiteSpace: 'pre-line',
      },
      preWrap: {
        whiteSpace: 'pre-wrap',
      },
      normal: {
        whiteSpace: 'normal',
      },
      breakSpaces: {
        whiteSpace: 'break-spaces',
      },
      breakAll: {
        whiteSpace: 'break-all',
      },
      breakWord: {
        whiteSpace: 'break-word',
      },
      initial: {
        whiteSpace: 'initial',
      },
      unset: {
        whiteSpace: 'unset',
      },
    },
  },
  defaultVariants: {
    color: 'LabelNormal',
    type: 'Body 1/Normal',
    whiteSpace: 'normal',
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export type TextVariants = RecipeVariants<typeof textRecipe>

export type TextType = Exclude<TextVariants, undefined>['type']

export const textTypes: TextType[] = [
  'Display 1',
  'Display 2',
  'Title 1',
  'Title 2',
  'Title 3',
  'Heading 1',
  'Heading 2',
  'Headline 1',
  'Headline 2',
  'Body 1/Normal',
  'Body 1/Reading',
  'Body 2/Normal',
  'Body 2/Reading',
  'Label 1/Normal',
  'Label 1/Reading',
  'Label 2',
  'Caption 1',
  'Caption 2',
]
