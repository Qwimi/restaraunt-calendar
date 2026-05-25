export const parseStringToDate = (str: string) => {
  const [hours, minutes] = str.split(':').map(Number)
  const date = new Date()
  date.setHours(hours!, minutes, 0, 0)
  return date
}

export const formatDateToString = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

export const addMinutesToDate = (date: Date, minutes: number): Date => {
  date.setMinutes(date.getMinutes() + minutes)

  return date
}

export const roundUpToStep = (date: Date, step: number): Date => {
  const remainder = date.getMinutes() % step

  if (remainder !== 0) {
    date.setMinutes(date.getMinutes() + (step - remainder))
  }
  return date
}

export const getMinTimeStr = (timeStrings: string[]): string => {
  if (!timeStrings.length) return ''

  const minDate = timeStrings
    .map(parseStringToDate)
    .reduce((min, current) => (current < min ? current : min))

  return formatDateToString(minDate)
}

export const getMaxTimeStr = (timeStrings: string[]): string => {
  if (!timeStrings.length) return ''

  const maxDate = timeStrings
    .map(parseStringToDate)
    .reduce((max, current) => (current > max ? current : max))

  return formatDateToString(maxDate)
}

export const getTimeDuration = (timeStrA: string, timeStrB: string): string => {
  if (!timeStrA || !timeStrB) return ''

  const dateA = parseStringToDate(timeStrA)
  const dateB = parseStringToDate(timeStrB)

  const diffMs = Math.abs(dateB.getTime() - dateA.getTime())
  const totalMinutes = Math.floor(diffMs / (1000 * 60))

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours > 0) {
    return minutes > 0 ? `${hours}ч ${minutes}м` : `${hours}ч`
  }

  return `${minutes}м`
}
