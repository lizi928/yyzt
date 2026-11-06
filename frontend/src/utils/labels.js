export { routeModeLabel as modeLabel } from './routeModes'

const TRANSPORT_LABELS = {
  high_speed_rail: '高铁',
  high_speed_train: '高铁',
  plane: '飞机',
  flight: '飞机',
  train: '火车',
  self_drive: '自驾',
  bus: '长途汽车',
  coach: '长途汽车',
}

export function transportLabel(mode) {
  const key = String(mode || '').trim()
  return TRANSPORT_LABELS[key] || key || '交通'
}
