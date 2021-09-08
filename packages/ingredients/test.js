const subject = require('./')

it('exports ingredients', () => {
  expect(subject.ingredients.blueberry.label).toBe('Blueberry')
  expect(subject.ingredients['chicken-cutlets'].episode).toBe(28)
})
