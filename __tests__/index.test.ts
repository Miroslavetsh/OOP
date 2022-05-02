import * as main from '../src/main';
import Container from '../src/Container/Container';

it('Entry Point contains a Container LoL', () => {
  expect(main.default.container).toBeInstanceOf(Container);
});
