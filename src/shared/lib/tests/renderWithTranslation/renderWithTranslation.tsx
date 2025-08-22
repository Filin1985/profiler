import {ReactNode} from "react"
import {render} from "@testing-library/react"
import {I18nextProvider} from "react-i18next"
import i18nForTests from "shared/config/i18n/i18nForTests"

export function renderWithTranslation(component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
  )
}

function minStartValue(nums: number[]): number {
  let m: number = 0,
    s: number = 0
  for (let num of nums) {
    s += num
    m = Math.min(m, s)
  }
  return 1 - m
}
