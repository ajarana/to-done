# task-list



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type    | Default |
| -------- | --------- | ----------- | ------- | ------- |
| `labels` | --        |             | `any[]` | `[]`    |
| `tasks`  | --        |             | `any[]` | `[]`    |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `taskSelected` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [td-task](../td-task)
- [td-labels](../td-labels)
- [td-heading](../td-heading)
- [td-text](../td-text)
- [td-date](../td-date)

### Graph
```mermaid
graph TD;
  task-list --> td-task
  task-list --> td-labels
  task-list --> td-heading
  task-list --> td-text
  task-list --> td-date
  td-task --> tdn-ui-icon
  td-labels --> td-label
  td-date --> tdn-ui-icon
  style task-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
