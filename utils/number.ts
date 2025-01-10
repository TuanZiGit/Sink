export function formatNumber(number: number) {
  if (!number || typeof Intl === 'undefined')
    return number

  return new Intl.NumberFormat('zh').format(number)
}
