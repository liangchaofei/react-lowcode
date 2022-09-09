import preview from './preview/index'

export interface FieldNode {
    type: keyof typeof preview
    h?: number
    displayName?: string
    module?: string
    props: Record<string, any>
  }
  