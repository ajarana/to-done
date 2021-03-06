# td-task-details



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type    | Default |
| -------- | --------- | ----------- | ------- | ------- |
| `labels` | --        |             | `any[]` | `[]`    |
| `task`   | `task`    |             | `any`   | `{}`    |


## Events

| Event                | Description | Type               |
| -------------------- | ----------- | ------------------ |
| `taskEdit`           |             | `CustomEvent<any>` |
| `taskMarkedComplete` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [tdn-ui-icon](../design-system/icon)
- [td-header](../td-header)
- [td-text](../td-text)
- [td-button](../td-button)
- [td-heading](../td-heading)
- [td-labels](../td-labels)
- [td-date](../td-date)
- [td-footer](../td-footer)

### Graph
```mermaid
graph TD;
  td-task-details --> tdn-ui-icon
  td-task-details --> td-header
  td-task-details --> td-text
  td-task-details --> td-button
  td-task-details --> td-heading
  td-task-details --> td-labels
  td-task-details --> td-date
  td-task-details --> td-footer
  td-header --> tdn-ui-icon
  td-labels --> td-label
  td-date --> tdn-ui-icon
  style td-task-details fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
