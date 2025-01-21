import { render } from '@testing-library/react'

import { Text } from './Text'

describe('Text Component Tests', () => {
  it('Text는 텍스트를 렌더링한다.', () => {
    // Given
    const { getByText } = render(<Text>Hello</Text>)
    const text = getByText('Hello')

    // Then
    expect(text).toBeInTheDocument()
  })
})
