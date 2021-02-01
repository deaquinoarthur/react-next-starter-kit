import Intro from '.'

export default {
  title: 'Components/Intro',
  component: Intro
}

export const Basic = function (args) {
  return <Intro {...args} />
}

Basic.args = {
  title: 'React and NextJS Starter Kit',
  description: 'Here is where you can start to build something amazing!'
}
