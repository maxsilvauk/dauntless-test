export type AlertType = 'success' | 'error' | 'warning' | 'info'

export interface IAlert {
  type: AlertType
  body: string | JSX.Element
  open: boolean
}
