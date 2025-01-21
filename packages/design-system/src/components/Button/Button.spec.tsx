import { renderer } from '@/utils/test'
import { Button } from './Button'

describe('Button', () => {
  it('onClick should be called', async () => {
    // Given
    const onClick = vi.fn()
    const { getByRole, user } = renderer(
      <Button onClick={onClick}>Click me</Button>,
    )
    const button = getByRole('button')

    // When
    await user.click(button)

    // Then
    expect(onClick).toHaveBeenCalled()
  })
})
