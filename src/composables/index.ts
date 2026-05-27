import { useBookingStore } from '@/stores/booking.ts'
import { storeToRefs } from 'pinia'
import { computed, type CSSProperties, onMounted, onUnmounted, ref, type Ref } from 'vue'
import { type PositionedEvent, type Table, type TableEvent, TIMESTEP } from '@/types'

/**
 * Конвертирует строку вида "чч:мм" в объект Date.
 *
 * @param str - Строка времени (например, "11:00").
 * @returns Объект даты с указанным временем.
 */
export const parseStringToDate = (str: string): Date => {
  const [hours, minutes] = str.split(':').map(Number)
  const date = new Date()
  date.setHours(hours!, minutes, 0, 0)
  return date
}

/**
 * Конвертирует полную строку даты и времени ("дд.мм.гггг, чч:мм:сс") в объект Date.
 *
 * @param str - Строка формата "ДД.ММ.ГГГГ, ЧЧ:ММ:СС"(toLocaleString).
 * @returns Созданный объект Date.
 */
export const parseFullDateTimeString = (str: string): Date => {
  const [datePart, timePart] = str.split(', ')

  const [day, month, year] = datePart!.split('.').map(Number)

  const [hours, minutes, seconds] = timePart!.split(':').map(Number)

  return new Date(year!, month! - 1, day, hours, minutes, seconds)
}

/**
 * Форматирует объект Date в строку времени формата "чч:мм".
 *
 * @param date - Объект даты для форматирования.
 * @returns Строка времени (например, "15:30").
 */
export const formatDateToString = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

/**
 * Конвертирует строку даты в формат "дд.мм.гггг, чч:мм:сс" с учетом указанного часового пояса.
 *
 * @param dateString - Исходная строка даты.
 * @param timeZone - Целевой часовой пояс (например, "Europe/Moscow").
 * @returns Строка времени "чч:мм" или пустая строка, если дата не передана.
 */
export const formatByTimezone = (dateString: string, timeZone: string): string => {
  if (!dateString) return ''

  const localDateTime = new Date(dateString).toLocaleString('ru-RU', {
    timeZone,
  })

  return formatDateToString(parseFullDateTimeString(localDateTime))
}

/**
 * Мутирует переданную дату, добавляя к ней указанное количество минут.
 *
 * @param date - Исходный объект Date (будет изменен).
 * @param minutes - Количество добавляемых минут.
 * @returns Измененный объект Date.
 */
export const addMinutesToDate = (date: Date, minutes: number): Date => {
  date.setMinutes(date.getMinutes() + minutes)

  return date
}

/**
 * Округляет минуты переданной даты вверх до ближайшего шага (интервала).
 *
 * @param date - Исходный объект Date (будет изменен).
 * @param step - Шаг округления в минутах (например, 15, 30).
 * @returns Округленный объект Date.
 */
export const roundUpToStep = (date: Date, step: number): Date => {
  const remainder = date.getMinutes() % step

  if (remainder !== 0) {
    date.setMinutes(date.getMinutes() + (step - remainder))
  }
  return date
}

/**
 * Находит минимальное время из массива строк формата "чч:мм".
 *
 * @param timeStrings - Массив временных строк.
 * @returns Минимальное время "чч:мм" или пустая строка, если массив пуст.
 */
export const getMinTimeStr = (timeStrings: string[]): string => {
  if (!timeStrings.length) return ''

  const minDate = timeStrings
    .map(parseStringToDate)
    .reduce((min, current) => (current < min ? current : min))

  return formatDateToString(minDate)
}

/**
 * Находит максимальное время из массива строк формата "чч:мм".
 *
 * @param timeStrings - Массив временных строк.
 * @returns Максимальное время "чч:мм" или пустая строка, если массив пуст.
 */
export const getMaxTimeStr = (timeStrings: string[]): string => {
  if (!timeStrings.length) return ''

  const maxDate = timeStrings
    .map(parseStringToDate)
    .reduce((max, current) => (current > max ? current : max))

  return formatDateToString(maxDate)
}

/**
 * Вычисляет количество минут, прошедших с начала дня для времени "чч:мм".
 *
 * @param timeStr - Строка времени "чч:мм".
 * @returns Общее количество минут.
 */
export const getMinutesFromStartOfDay = (timeStr: string): number => {
  const [hours, minutes] = timeStr.split(':').map(Number)
  return hours! * 60 + minutes!
}

/**
 * Вычисляет абсолютную разницу в минутах между двумя временными точками.
 *
 * @param timeStrA - Первая строка времени "чч:мм".
 * @param timeStrB - Вторая строка времени "чч:мм".
 * @returns Разница в минутах или 0, если одна из строк отсутствует.
 */
const getTimeDuration = (timeStrA: string, timeStrB: string) => {
  if (!timeStrA || !timeStrB) return 0

  const minA = getMinutesFromStartOfDay(timeStrA)
  const minB = getMinutesFromStartOfDay(timeStrB)

  return Math.abs(minB - minA)
}

/**
 * Вычисляет разницу между двумя временными точками и форматирует её в понятную строку.
 *
 * Возвращает строку в формате "Хч Хм", "Хч" или "Хм" в зависимости от длительности.
 *
 * @param timeStrA - Первая строка времени "чч:мм".
 * @param timeStrB - Вторая строка времени "чч:мм".
 * @returns Строка с длительностью (например, "2ч 30м", "45м") или пустая строка при отсутствии данных.
 */
export const getFormatedTimeDuration = (timeStrA: string, timeStrB: string): string => {
  if (!timeStrA || !timeStrB) return ''

  const duration = getTimeDuration(timeStrA, timeStrB)

  const hours = Math.floor(duration / 60)
  const minutes = duration % 60

  if (hours > 0) {
    return minutes > 0 ? `${hours}ч ${minutes}м` : `${hours}ч`
  }

  return `${minutes}м`
}

/**
 * Форматирует строку даты в текстовый формат на русском языке.
 *
 * @param dateString - строка с датой
 * @returns Строка с днем и полным названием месяца (например, "27 мая").
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
  }).format(date)
}

/**
 * Возвращает относительное описание дня или день недели для указанной даты.
 *
 * Сравнивает целевую дату с текущей без учета времени.
 *
 * @param dateString - целевая дата
 * @param currentDateString - текущая дата
 * @returns "сегодня", "вчера", "завтра" или день недели
 */
export const formatDaySubtitle = (dateString: string, currentDateString: string) => {
  const date = new Date(dateString)

  const currentDate = new Date(currentDateString)

  currentDate.setHours(0, 0, 0, 0)
  date.setHours(0, 0, 0, 0)

  const diff = (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)

  if (diff === 0) return 'сегодня'
  if (diff === -1) return 'вчера'
  if (diff === 1) return 'завтра'

  return new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
  }).format(date)
}

export const setISOString = (dateStr: string, timeStr: string, timeZone: string) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timeZone,
    timeZoneName: 'shortOffset',
  })

  const parts = formatter.formatToParts(new Date())
  const gmtOffset = parts.find((p) => p.type === 'timeZoneName')!.value

  let offset = gmtOffset.replace('GMT', '')
  if (offset === '') offset = '+00:00'
  if (!offset.includes(':')) offset += ':00'

  return `${dateStr}T${timeStr}:00.000000${offset}`
}

export const useTableCoords = (tableWrapperRef: Ref<HTMLDivElement | null>) => {
  const bookingStore = useBookingStore()

  const { currentTime, current_day, selectedDate } = storeToRefs(bookingStore)

  const tableWidth = ref(0)
  let resizeObserver: ResizeObserver | null = null

  onMounted(() => {
    if (!tableWrapperRef.value) return

    const tableEl = tableWrapperRef.value.querySelector('.table')

    if (tableEl) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          tableWidth.value = entry.target.scrollWidth
        }
      })
      resizeObserver.observe(tableEl)
    }
  })

  onUnmounted(() => {
    if (resizeObserver) resizeObserver.disconnect()
  })

  // Находим вертикальнуюю координату точки во времени
  const findVerticalCoords = (time: string, step: number = TIMESTEP.HALF) => {
    if (!tableWrapperRef.value) return null

    const tableRect = tableWrapperRef.value.getBoundingClientRect()

    if (getMinutesFromStartOfDay(time) % step === 0) {
      const targetCellEl = tableWrapperRef.value.querySelector(
        `[data-time-start="${time}"]`,
      ) as HTMLElement

      if (!targetCellEl) return null

      const cellRect = targetCellEl.getBoundingClientRect()
      return cellRect.top - tableRect.top + tableWrapperRef.value.scrollTop
    }

    const targetTimeEndStr = formatDateToString(roundUpToStep(parseStringToDate(time), step))

    const targetCellEl = tableWrapperRef.value.querySelector(
      `[data-time-end="${targetTimeEndStr}"]`,
    ) as HTMLElement

    if (!targetCellEl) return null

    const cellRect = targetCellEl.getBoundingClientRect()

    const minutesToSlotEnd = getTimeDuration(time, targetTimeEndStr)

    const pixelOffsetFromCellBottom = (minutesToSlotEnd / step) * cellRect.height

    return (
      cellRect.bottom - pixelOffsetFromCellBottom - tableRect.top + tableWrapperRef.value.scrollTop
    )
  }

  const currentTimeY = computed(() => {
    if (selectedDate.value !== current_day.value || !currentTime.value || !tableWidth.value) {
      return null
    }

    const y = findVerticalCoords(currentTime.value)

    if (y === null) return null

    return {
      y,
      width: tableWidth.value,
    }
  })

  const getPositionStyle = (
    startTime: string,
    endTime: string,
    tableStart: Table['id'],
    tableEnd: Table['id'],
  ): CSSProperties => {
    if (!tableWrapperRef.value) {
      return { display: 'none' }
    }

    const wrapperRect = tableWrapperRef.value.getBoundingClientRect()

    const startEl = tableWrapperRef.value.querySelector(`[data-table-id="${tableStart}"]`)
    const endEl = tableWrapperRef.value.querySelector(`[data-table-id="${tableEnd}"]`)

    if (!startEl || !endEl) return { display: 'none' }

    const rectStart = startEl.getBoundingClientRect()
    const rectEnd = endEl.getBoundingClientRect()

    const top = findVerticalCoords(startTime) ?? 0
    const left = rectStart.left - wrapperRect.left + tableWrapperRef.value.scrollLeft
    const bottom = findVerticalCoords(endTime) ?? 0
    const right = rectEnd.right - wrapperRect.left + tableWrapperRef.value.scrollLeft

    return {
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
      width: `${right - left}px`,
      height: `${bottom - top}px`,
    }
  }

  return { currentTimeY, getPositionStyle }
}

const calculateGroupEventsPositions = (events: TableEvent[]): PositionedEvent[] => {
  // Сортируем по дате начала
  const sortedEvents = events.sort((a, b) => {
    const startA = getMinutesFromStartOfDay(a.start_time)
    const startB = getMinutesFromStartOfDay(b.start_time)

    if (startA !== startB) {
      return startA - startB
    }

    // Если даты начала одинаковые - сравниваем по длине события
    const durationA = getMinutesFromStartOfDay(a.end_time) - startA
    const durationB = getMinutesFromStartOfDay(b.end_time) - startB

    return durationB - durationA
  })

  // Пересечения, где время начал событий находятся в промежутке +-30 минут
  const eventColumnGroups: TableEvent[][] = []

  for (const event of sortedEvents) {
    const currentStart = getMinutesFromStartOfDay(event.start_time)

    const lastGroup = eventColumnGroups.at(-1)

    if (!lastGroup) {
      eventColumnGroups.push([event])
      continue
    }

    // Проверяем есть ли пересечение с последним элементом последней группы
    const lastGroupStart = getMinutesFromStartOfDay(lastGroup.at(-1)!.start_time)

    const diff = Math.abs(currentStart - lastGroupStart)

    if (diff < TIMESTEP.FULL) {
      lastGroup.push(event)
    } else {
      eventColumnGroups.push([event])
    }
  }

  // Колонки с пересечениями
  const eventColumnGroupsOverlap: PositionedEvent[][] = []

  for (const column of eventColumnGroups) {
    const firstEvent = column[0]!

    const firstStart = getMinutesFromStartOfDay(firstEvent.start_time)

    let level = 0

    // Проходимся по уже отсортированным группам колонок, проверяем есть ли пресечения с ними
    for (const prevGroup of eventColumnGroupsOverlap) {
      const prevEvent = prevGroup[0]!

      const prevEnd = getMinutesFromStartOfDay(prevEvent.end_time)

      const isOverlap = firstStart < prevEnd

      // Если нашли пересечение проставляем уровень(смещение)
      if (isOverlap) {
        level = Math.max(level, prevEvent.level + 1)
      }
    }

    const columnsCount = column.length

    // Проставляем для каждой группы колонок общее кол-во колонок, индекс текущей колонки и смещение
    const positionedColumnGroup = column.map((event, column) => ({
      ...event,
      column,
      columnsCount,
      level,
    }))

    eventColumnGroupsOverlap.push(positionedColumnGroup)
  }

  return eventColumnGroupsOverlap.flat()
}

export const calculateEventPositions = (events: TableEvent[]): PositionedEvent[] => {
  const tableMap = new Map<string, TableEvent[]>()

  // Группируем события по столам
  for (const event of events) {
    const tableEvents = tableMap.get(event.tableId) ?? []

    tableEvents.push(event)

    tableMap.set(event.tableId, tableEvents)
  }

  const result: PositionedEvent[] = []

  for (const tableEvents of tableMap.values()) {
    result.push(...calculateGroupEventsPositions(tableEvents))
  }

  return result
}
