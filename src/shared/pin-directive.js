export default function (element, binding) {
  /* eslint no-param-reassign: 1 */
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}
