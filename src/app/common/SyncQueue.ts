export interface SyncQueue {
    action: string // 'create|update|delete"
    , model: any // iEntity
    , pk: any
    , entity: string
    , status: string // queue
    , callback: Function // called after sync, can handle success/error scenarios
    , recordName?: Function // calculated when not present
    , matchMethod?: Function // default comparison when not provided
}
