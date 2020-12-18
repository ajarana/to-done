# task-form



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type    | Default     |
| -------- | --------- | ----------- | ------- | ----------- |
| `labels` | --        |             | `any[]` | `undefined` |
| `task`   | `task`    |             | `any`   | `undefined` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `taskCancelled` |             | `CustomEvent<any>` |
| `taskChanged`   |             | `CustomEvent<any>` |
| `taskDeleted`   |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [td-button](../td-button)
- [tdn-ui-icon](../design-system/icon)
- [td-header](../td-header)
- [task-labels](../task-labels)
- [date-selector](../date-selector)
- [td-footer](../td-footer)

### Graph
```mermaid
graph TD;
  task-form --> td-button
  task-form --> tdn-ui-icon
  task-form --> td-header
  task-form --> task-labels
  task-form --> date-selector
  task-form --> td-footer
  td-header --> tdn-ui-icon
  task-labels --> tdn-ui-icon
  date-selector --> tdn-ui-icon
  date-selector --> task-date-modal
  task-date-modal --> td-heading
  task-date-modal --> td-button
  style task-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
