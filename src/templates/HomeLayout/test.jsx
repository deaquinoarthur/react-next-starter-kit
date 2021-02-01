import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import HomeLayout from '.'

jest.mock('components/Intro', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Intro" />
  }
}))

describe('<HomeLayout />', () => {
  it('should render <HomeLayout />', () => {
    renderWithTheme(<HomeLayout />)

    expect(screen.getByTestId(/mock intro/i)).toBeInTheDocument()
  })
})
