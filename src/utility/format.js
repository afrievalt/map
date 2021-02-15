import format from 'date-fns/format'
import formatISO from 'date-fns/formatISO'
export const formatDateTime = dt => format(dt, 'MM/dd/yy h aaa')
export const formatIso = (dt) => formatISO(dt, { format: 'basic' })
