// @jest-environment node


import { disableFormsDuringPost, sum } from "./mock_tests/disableFormsDuringPost";

test('expect nothing', () => {
    expect(disableFormsDuringPost(true)).toBe(true)
})

test('expect nothing', () => {
    expect(disableFormsDuringPost(false)).toBe(false)
})

test('the sum function', () => {
    expect(sum(4, 2)).toBe(6)
})