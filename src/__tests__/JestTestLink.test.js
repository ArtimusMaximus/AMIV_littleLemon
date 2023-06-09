
import renderer from 'react-test-renderer';
import Links from './mock_tests/JestTestLink';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Links page="http://www.facebook.com">Facebook</Links>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});